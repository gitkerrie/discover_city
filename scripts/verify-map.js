const fs = require('fs');
const http = require('http');
const os = require('os');
const path = require('path');
const { spawn } = require('child_process');
const { chromium } = require('playwright');

const root = path.resolve(__dirname, '..');
const port = Number(process.env.MAP_VERIFY_PORT) || 8124;
const baseUrl = process.env.MAP_VERIFY_URL || `http://127.0.0.1:${port}`;
const browserChannel = process.env.PLAYWRIGHT_CHANNEL || (process.platform === 'win32' ? 'msedge' : 'chrome');
const screenshotDirectory = path.join(os.tmpdir(), 'taste-china-map-verification');

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function waitForServer(url, attempts = 50) {
  return new Promise((resolve, reject) => {
    const tryRequest = remaining => {
      const request = http.get(url, response => {
        response.resume();
        if (response.statusCode === 200) resolve();
        else if (remaining <= 1) reject(new Error(`Static server returned ${response.statusCode}`));
        else setTimeout(() => tryRequest(remaining - 1), 100);
      });
      request.on('error', () => {
        if (remaining <= 1) reject(new Error(`Static server did not start at ${url}`));
        else setTimeout(() => tryRequest(remaining - 1), 100);
      });
    };
    tryRequest(attempts);
  });
}

async function stubAnalytics(page) {
  await page.route('**/_vercel/insights/script.js', route => route.fulfill({
    body: 'window.va = window.va || function () {};',
    contentType: 'application/javascript',
    status: 200
  }));
}

async function colorStats(page, locator) {
  const screenshot = await locator.screenshot({ type: 'png' });
  return page.evaluate(async encoded => {
    const response = await fetch(`data:image/png;base64,${encoded}`);
    const bitmap = await createImageBitmap(await response.blob());
    const canvas = document.createElement('canvas');
    canvas.width = bitmap.width;
    canvas.height = bitmap.height;
    const context = canvas.getContext('2d');
    context.drawImage(bitmap, 0, 0);
    const pixels = context.getImageData(0, 0, canvas.width, canvas.height).data;
    const buckets = new Set();
    let colorful = 0;
    let blue = 0;
    let samples = 0;

    for (let index = 0; index < pixels.length; index += 64) {
      const red = pixels[index];
      const green = pixels[index + 1];
      const blueChannel = pixels[index + 2];
      buckets.add(`${red >> 4}-${green >> 4}-${blueChannel >> 4}`);
      if (Math.max(red, green, blueChannel) - Math.min(red, green, blueChannel) > 24) colorful += 1;
      if (blueChannel > red + 24 && blueChannel > green + 10) blue += 1;
      samples += 1;
    }

    return {
      blue,
      colorfulFraction: colorful / samples,
      height: bitmap.height,
      uniqueBuckets: buckets.size,
      width: bitmap.width
    };
  }, screenshot.toString('base64'));
}

async function initialMarkerOffsets(page) {
  return page.evaluate(() => {
    const detailedLayer = window.app.detailedMapLayer;
    const detailedMap = detailedLayer.getMaplibreMap();
    const layerRect = detailedLayer.getContainer().getBoundingClientRect();

    return window.app.cities.map(city => {
      const markerRect = window.app.markers.get(city.slug).getElement().getBoundingClientRect();
      const projected = detailedMap.project(city.coordinates);
      return {
        dx: markerRect.left + markerRect.width / 2 - (layerRect.left + projected.x),
        dy: markerRect.top + markerRect.height / 2 - (layerRect.top + projected.y),
        slug: city.slug
      };
    });
  });
}

async function verifyInitialAlignment(browser, viewport) {
  const context = await browser.newContext({ viewport });
  const page = await context.newPage();
  await stubAnalytics(page);
  await page.route('https://tiles.openfreemap.org/styles/liberty', route => route.fulfill({
    body: JSON.stringify({
      version: 8,
      sources: {},
      layers: [{
        id: 'background',
        type: 'background',
        paint: { 'background-color': '#dce8ea' }
      }]
    }),
    contentType: 'application/json',
    status: 200
  }));

  await page.goto(baseUrl, { waitUntil: 'domcontentloaded' });
  await page.waitForSelector('#map.map-detailed-ready', { timeout: 10000 });
  await page.waitForFunction(() => document.querySelectorAll('.leaflet-marker-icon').length === 12);

  const offsets = await initialMarkerOffsets(page);
  const misaligned = offsets.filter(({ dx, dy }) => Math.abs(dx) > 4 || Math.abs(dy) > 4);
  assert(
    misaligned.length === 0,
    `Initial markers are misaligned with the detailed map: ${JSON.stringify(misaligned)}`
  );
  await context.close();
}

async function verifyDetailedMap(browser) {
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();
  const pageErrors = [];
  const consoleErrors = [];
  const requestFailures = [];
  page.on('pageerror', error => pageErrors.push(error.message));
  page.on('console', message => {
    if (message.type() === 'error') consoleErrors.push(message.text());
  });
  page.on('requestfailed', request => {
    const reason = request.failure()?.errorText || '';
    if (!/ERR_ABORTED|NS_BINDING_ABORTED/i.test(reason)) {
      requestFailures.push(`${request.url()} (${reason})`);
    }
  });
  await stubAnalytics(page);

  await page.goto(baseUrl, { waitUntil: 'domcontentloaded' });
  await page.waitForSelector('#map.map-detailed-ready', { timeout: 20000 });
  await page.waitForSelector('.leaflet-gl-layer canvas', { state: 'visible' });
  await page.waitForFunction(() => document.querySelectorAll('.leaflet-marker-icon').length === 12);

  const detailed = await page.evaluate(() => ({
    landPaths: document.querySelectorAll('.leaflet-land-pane path').length,
    markers: document.querySelectorAll('.leaflet-marker-icon').length
  }));
  assert(detailed.landPaths === 1, 'Detailed mode lost the local fallback layer');
  assert(detailed.markers === 12, `Detailed mode rendered ${detailed.markers} markers`);

  const offsets = await initialMarkerOffsets(page);
  const misaligned = offsets.filter(({ dx, dy }) => Math.abs(dx) > 4 || Math.abs(dy) > 4);
  assert(
    misaligned.length === 0,
    `Initial markers are misaligned with the detailed map: ${JSON.stringify(misaligned)}`
  );

  const colors = await colorStats(page, page.locator('.leaflet-gl-layer canvas'));
  assert(colors.width > 0 && colors.height > 0, 'Detailed map canvas is blank');
  assert(colors.uniqueBuckets > 80, `Detailed map has too little visual detail (${colors.uniqueBuckets} colors)`);
  assert(colors.colorfulFraction > 0.02, 'Detailed map is still effectively grayscale');
  assert(colors.blue > 20, 'Detailed map does not contain expected blue water detail');
  await page.screenshot({ path: path.join(screenshotDirectory, 'detailed-desktop.png') });

  const firstMarker = page.locator('.leaflet-marker-icon').first();
  const beforeZoom = await firstMarker.boundingBox();
  await page.locator('.leaflet-control-zoom-in').click();
  await page.waitForTimeout(500);
  const afterZoom = await firstMarker.boundingBox();
  assert(beforeZoom && afterZoom && (beforeZoom.x !== afterZoom.x || beforeZoom.y !== afterZoom.y), 'Zoom control did not move markers');

  await page.locator('#searchInput').fill('hot dry noodles');
  await page.locator('.search-result').first().click();
  assert(await page.locator('#cityName').textContent() === 'Wuhan', 'Dish search did not open Wuhan');
  assert(await page.locator('#cityDrawer').getAttribute('aria-hidden') === 'false', 'Search did not open the city drawer');
  assert(await page.locator('#galleryTrack .gallery-slide').count() === 4, 'Drawer gallery did not render four dish images');
  assert(await page.locator('#dishList .dish-row').count() === 4, 'Drawer did not render four dish thumbnails');
  assert(await page.locator('#galleryDishName').textContent() === 'Hot Dry Noodles', 'Drawer gallery did not reset to the first dish');
  await page.locator('#galleryNext').click();
  assert(await page.locator('#galleryDishName').textContent() === 'Three-Delicacy Doupi', 'Gallery next control did not change the dish');
  await page.locator('#drawerGallery').focus();
  await page.keyboard.press('ArrowRight');
  assert(await page.locator('#galleryDishName').textContent() === 'Fish Broth Rice Noodles', 'Gallery keyboard navigation failed');
  await page.locator('#galleryTrack .gallery-slide').nth(2).locator('img').evaluate(image => {
    image.src = 'data:image/webp;base64,AAAA';
  });
  await page.waitForSelector('#galleryTrack .gallery-slide.image-fallback');
  assert(await page.locator('#galleryTrack .gallery-slide.image-fallback').count() === 1, 'A failed image affected more than its own gallery slide');
  await page.keyboard.press('Escape');
  assert(await page.locator('#cityDrawer').getAttribute('aria-hidden') === 'true', 'Escape did not close the city drawer');

  await page.locator('.language-option[data-language="zh"]').click();
  assert(await page.locator('html').getAttribute('lang') === 'zh-CN', 'Chinese language switch failed');

  assert(pageErrors.length === 0, `Detailed mode page errors: ${pageErrors.join('; ')}`);
  assert(consoleErrors.length === 0, `Detailed mode console errors: ${consoleErrors.join('; ')}`);
  assert(requestFailures.length === 0, `Detailed mode request failures: ${requestFailures.join('; ')}`);
  await context.close();
  return colors;
}

async function verifyMobileMap(browser) {
  const context = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const page = await context.newPage();
  await stubAnalytics(page);
  await page.goto(baseUrl, { waitUntil: 'domcontentloaded' });
  await page.waitForSelector('#map.map-detailed-ready', { timeout: 20000 });
  await page.locator('.city-index-btn[data-slug="chengdu"]').click();
  await page.waitForSelector('#cityDrawer.is-open');
  assert(await page.locator('#galleryTrack .gallery-slide').count() === 4, 'Mobile drawer gallery did not render four images');
  await page.locator('#galleryNext').click();
  assert(await page.locator('#galleryCounter').textContent() === '2 of 4', 'Mobile gallery control did not advance');

  const layout = await page.evaluate(() => {
    const drawer = document.querySelector('#cityDrawer').getBoundingClientRect();
    return {
      clientWidth: document.documentElement.clientWidth,
      drawerBottom: Math.round(drawer.bottom),
      drawerWidth: Math.round(drawer.width),
      scrollWidth: document.documentElement.scrollWidth,
      viewportHeight: window.innerHeight,
      viewportWidth: window.innerWidth
    };
  });
  assert(layout.scrollWidth === layout.clientWidth, 'Mobile page has horizontal overflow');
  assert(layout.drawerWidth === layout.viewportWidth, 'Mobile drawer does not fill the viewport width');
  assert(layout.drawerBottom === layout.viewportHeight, 'Mobile drawer is not anchored to the viewport bottom');
  await page.screenshot({ path: path.join(screenshotDirectory, 'detailed-mobile.png') });
  await context.close();
}

async function verifyCityLanding(browser, viewport, screenshotName) {
  const context = await browser.newContext({ viewport });
  const page = await context.newPage();
  await stubAnalytics(page);
  await page.goto(`${baseUrl}/city/chengdu/`, { waitUntil: 'domcontentloaded' });
  await page.waitForFunction(() => [...document.querySelectorAll('.content-hero-media img')].every(image => image.complete));

  const layout = await page.evaluate(() => ({
    clientWidth: document.documentElement.clientWidth,
    dishImages: document.querySelectorAll('.dish-photo img').length,
    heroImages: document.querySelectorAll('.hero-media img').length,
    loadedHeroImages: [...document.querySelectorAll('.hero-media img')].filter(image => image.naturalWidth > 0).length,
    scrollWidth: document.documentElement.scrollWidth
  }));
  assert(layout.heroImages === 4 && layout.loadedHeroImages === 4, 'City landing hero did not load four images');
  assert(layout.dishImages === 4, 'City landing page did not render four dish rows');
  assert(layout.scrollWidth === layout.clientWidth, 'City landing page has horizontal overflow');
  await page.screenshot({ path: path.join(screenshotDirectory, screenshotName), fullPage: true });
  await context.close();
}

async function verifyFallbackMap(browser) {
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();
  const pageErrors = [];
  page.on('pageerror', error => pageErrors.push(error.message));
  await stubAnalytics(page);
  await page.route('https://tiles.openfreemap.org/**', route => route.abort('failed'));

  await page.goto(baseUrl, { waitUntil: 'domcontentloaded' });
  await page.waitForFunction(() => (
    !document.querySelector('.leaflet-gl-layer')
    && document.querySelector('#toast')?.classList.contains('is-visible')
  ), { timeout: 12000 });

  const fallback = await page.evaluate(() => ({
    detailedReady: document.querySelector('#map').classList.contains('map-detailed-ready'),
    landPaths: document.querySelectorAll('.leaflet-land-pane path').length,
    markers: document.querySelectorAll('.leaflet-marker-icon').length,
    toast: document.querySelector('#toast').textContent.trim()
  }));
  assert(!fallback.detailedReady, 'Fallback mode still reports the detailed map as ready');
  assert(fallback.landPaths === 1, 'Fallback mode did not render local land data');
  assert(fallback.markers === 12, `Fallback mode rendered ${fallback.markers} markers`);
  assert(fallback.toast.includes('simplified offline map'), 'Fallback mode did not explain the degraded map');
  await page.screenshot({ path: path.join(screenshotDirectory, 'fallback-desktop.png') });
  assert(pageErrors.length === 0, `Fallback mode page errors: ${pageErrors.join('; ')}`);
  await context.close();
}

async function main() {
  let server;
  let browser;

  try {
    fs.rmSync(screenshotDirectory, { recursive: true, force: true });
    fs.mkdirSync(screenshotDirectory, { recursive: true });
    if (!process.env.MAP_VERIFY_URL) {
      server = spawn(process.execPath, [path.join(root, 'scripts', 'server.js')], {
        cwd: root,
        env: { ...process.env, PORT: String(port) },
        stdio: 'ignore',
        windowsHide: true
      });
      await waitForServer(baseUrl);
    }

    browser = await chromium.launch({ channel: browserChannel, headless: true });
    await verifyInitialAlignment(browser, { width: 1440, height: 900 });
    await verifyInitialAlignment(browser, { width: 1457, height: 477 });
    await verifyInitialAlignment(browser, { width: 390, height: 844 });
    if (process.env.MAP_VERIFY_ALIGNMENT_ONLY === '1') {
      console.log('Initial map alignment verification passed for all 12 city markers.');
      return;
    }

    const colors = await verifyDetailedMap(browser);
    await verifyMobileMap(browser);
    await verifyFallbackMap(browser);
    await verifyCityLanding(browser, { width: 1440, height: 900 }, 'city-desktop.png');
    await verifyCityLanding(browser, { width: 390, height: 844 }, 'city-mobile.png');
    console.log(`Map verification passed. Detailed canvas: ${colors.uniqueBuckets} color buckets; screenshots: ${screenshotDirectory}`);
  } finally {
    if (browser) await browser.close();
    if (server && !server.killed) server.kill();
  }
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
