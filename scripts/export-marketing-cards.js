const fs = require('fs');
const http = require('http');
const path = require('path');
const { spawn } = require('child_process');
const { chromium } = require('playwright');

const root = path.resolve(__dirname, '..');
const outputDir = path.join(root, 'marketing', 'exports');
const port = Number(process.env.CARD_EXPORT_PORT) || 8123;
const externalUrl = process.env.CARD_EXPORT_URL;
const cardUrl = externalUrl || `http://127.0.0.1:${port}/marketing/cards/`;
const browserChannel = process.env.PLAYWRIGHT_CHANNEL || (process.platform === 'win32' ? 'msedge' : 'chrome');

const targets = [
  ['#card-chengdu', 'city-chengdu.jpg'],
  ['#card-xian', 'city-xian.jpg'],
  ['#card-guangzhou', 'city-guangzhou.jpg'],
  ['#card-changsha', 'city-changsha.jpg'],
  ['#card-wuhan', 'city-wuhan.jpg'],
  ['#card-chongqing', 'city-chongqing.jpg'],
  ['#card-chaozhou', 'city-chaozhou.jpg'],
  ['#card-liuzhou', 'city-liuzhou.jpg'],
  ['#card-yanji', 'city-yanji.jpg'],
  ['#card-taizhou', 'city-taizhou.jpg'],
  ['#card-kashgar', 'city-kashgar.jpg'],
  ['#card-yangzhou', 'city-yangzhou.jpg'],
  ['.comparison-1', 'comparison-classics.jpg'],
  ['.comparison-2', 'comparison-hidden-gems.jpg'],
  ['.comparison-3', 'comparison-flavors.jpg']
];

function waitForServer(url, attempts = 50) {
  return new Promise((resolve, reject) => {
    const tryRequest = remaining => {
      const request = http.get(url, response => {
        response.resume();
        if (response.statusCode === 200) {
          resolve();
          return;
        }
        setTimeout(() => tryRequest(remaining - 1), 100);
      });

      request.on('error', () => {
        if (remaining <= 1) reject(new Error(`Static server did not start at ${url}`));
        else setTimeout(() => tryRequest(remaining - 1), 100);
      });
    };

    tryRequest(attempts);
  });
}

async function main() {
  let server;
  let browser;

  try {
    if (!externalUrl) {
      server = spawn(process.execPath, [path.join(root, 'scripts', 'server.js')], {
        cwd: root,
        env: { ...process.env, PORT: String(port) },
        stdio: 'ignore',
        windowsHide: true
      });
      await waitForServer(cardUrl);
    }

    fs.mkdirSync(outputDir, { recursive: true });
    browser = await chromium.launch({ channel: browserChannel, headless: true });
    const page = await browser.newPage({
      deviceScaleFactor: 1,
      viewport: { width: 1080, height: 1350 }
    });
    const pageErrors = [];
    page.on('pageerror', error => pageErrors.push(error.message));

    await page.goto(cardUrl, { waitUntil: 'networkidle' });
    await page.addStyleTag({
      content: `
        body { width: 1080px !important; min-width: 1080px !important; padding: 0 !important; background: transparent !important; }
        .kit-header, main section > h2 { display: none !important; }
        main, main section, .card-grid { width: 1080px !important; margin: 0 !important; display: block !important; }
        .social-card, .comparison-card { display: none !important; }
        .export-target { display: flex !important; width: 1080px !important; height: 1350px !important; aspect-ratio: auto !important; }
      `
    });

    for (const [selector, filename] of targets) {
      await page.evaluate(targetSelector => {
        document.querySelectorAll('.export-target').forEach(element => element.classList.remove('export-target'));
        document.querySelector(targetSelector)?.classList.add('export-target');
      }, selector);

      const card = page.locator(selector);
      await card.waitFor({ state: 'visible' });
      await card.evaluate(async element => {
        await document.fonts.ready;
        const match = getComputedStyle(element).backgroundImage.match(/url\(["']?(.*?)["']?\)/);
        if (!match) return;
        const image = new Image();
        image.src = match[1];
        await image.decode();
      });

      const box = await card.boundingBox();
      if (!box || Math.round(box.width) !== 1080 || Math.round(box.height) !== 1350) {
        throw new Error(`${filename} rendered at ${box?.width}x${box?.height}, expected 1080x1350`);
      }

      const overflowing = await card.evaluate(element => {
        const cardRect = element.getBoundingClientRect();
        return Array.from(element.querySelectorAll('*'))
          .filter(child => {
            const rect = child.getBoundingClientRect();
            const outsideCard = rect.left < cardRect.left - 1
              || rect.right > cardRect.right + 1
              || rect.top < cardRect.top - 1
              || rect.bottom > cardRect.bottom + 1;
            return child.scrollWidth > child.clientWidth + 1 || outsideCard;
          })
          .map(child => child.tagName.toLowerCase());
      });
      if (overflowing.length) {
        throw new Error(`${filename} contains overflowing elements: ${overflowing.join(', ')}`);
      }

      await card.screenshot({
        path: path.join(outputDir, filename),
        type: 'jpeg',
        quality: 92,
        animations: 'disabled'
      });
    }

    if (pageErrors.length) throw new Error(`Browser errors: ${pageErrors.join('; ')}`);
    console.log(`Exported ${targets.length} social cards to ${path.relative(root, outputDir)}.`);
  } finally {
    if (browser) await browser.close();
    if (server && !server.killed) server.kill();
  }
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
