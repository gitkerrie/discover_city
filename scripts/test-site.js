const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { contactEmail, siteUrl } = require('./site-config');

const root = path.resolve(__dirname, '..');
const source = fs.readFileSync(path.join(root, 'js', 'data.js'), 'utf8');
const foodGuideSource = fs.readFileSync(path.join(root, 'js', 'food-guide-data.js'), 'utf8');
const videoTrailSource = fs.readFileSync(path.join(root, 'js', 'video-food-trails-data.js'), 'utf8');
const context = {};
vm.createContext(context);
vm.runInContext(
  `${source}\n${foodGuideSource}\n${videoTrailSource}\nglobalThis.__cities = foodCitiesData; globalThis.__english = foodCitiesEnglish; globalThis.__foods = featuredFoodsData; globalThis.__videoTrails = videoFoodTrailsData;`,
  context
);

const cities = context.__cities;
const english = context.__english;
const foods = context.__foods;
const videoTrails = context.__videoTrails;
const dishCount = cities.reduce((total, city) => total + city.dishes.length, 0);

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function read(...segments) {
  return fs.readFileSync(path.join(root, ...segments), 'utf8');
}

function jpegDimensions(...segments) {
  const buffer = fs.readFileSync(path.join(root, ...segments));
  assert(buffer.readUInt16BE(0) === 0xffd8, `${segments.at(-1)} is not a JPEG file`);
  let offset = 2;

  while (offset < buffer.length) {
    if (buffer[offset] !== 0xff) {
      offset += 1;
      continue;
    }

    const marker = buffer[offset + 1];
    const length = buffer.readUInt16BE(offset + 2);
    if ([0xc0, 0xc1, 0xc2, 0xc3, 0xc5, 0xc6, 0xc7, 0xc9, 0xca, 0xcb, 0xcd, 0xce, 0xcf].includes(marker)) {
      return {
        height: buffer.readUInt16BE(offset + 5),
        width: buffer.readUInt16BE(offset + 7)
      };
    }
    offset += length + 2;
  }

  throw new Error(`${segments.at(-1)} has no JPEG dimensions`);
}

cities.forEach(city => {
  const englishPage = read('city', city.slug, 'index.html');
  const chinesePage = read('zh', 'city', city.slug, 'index.html');
  const englishUrl = `${siteUrl}/city/${city.slug}/`;
  const chineseUrl = `${siteUrl}/zh/city/${city.slug}/`;

  assert(englishPage.includes(`<html lang="en">`), `${city.slug} 英文页语言不正确`);
  assert(englishPage.includes(`<link rel="canonical" href="${englishUrl}">`), `${city.slug} 英文 canonical 缺失`);
  assert(englishPage.includes(`hreflang="zh-CN" href="${chineseUrl}"`), `${city.slug} 中文 hreflang 缺失`);
  assert(englishPage.includes('property="og:image"'), `${city.slug} Open Graph 图片缺失`);
  assert(englishPage.includes('name="twitter:card"'), `${city.slug} Twitter Card 缺失`);
  assert(englishPage.includes(english[city.slug].name), `${city.slug} 英文内容缺失`);
  assert(englishPage.includes('application/ld+json'), `${city.slug} 结构化数据缺失`);
  assert((englishPage.match(/class="hero-media hero-media-/g) || []).length === 4, `${city.slug} 英文页主视觉不是四图拼贴`);
  assert((englishPage.match(/class="dish-photo"/g) || []).length === 4, `${city.slug} 英文页菜品图片数量不是 4`);
  assert(city.dishes.every(dish => englishPage.includes(`/${dish.image}`)), `${city.slug} 英文页缺少菜品图片`);
  assert(chinesePage.includes(`<html lang="zh-CN">`), `${city.slug} 中文页语言不正确`);
  assert(chinesePage.includes(`<link rel="canonical" href="${chineseUrl}">`), `${city.slug} 中文 canonical 缺失`);
  assert(chinesePage.includes(city.name), `${city.slug} 中文内容缺失`);
  assert((chinesePage.match(/class="hero-media hero-media-/g) || []).length === 4, `${city.slug} 中文页主视觉不是四图拼贴`);
  assert(englishPage.includes(`mailto:${contactEmail}`), `${city.slug} English page is missing the contact email`);
  assert(chinesePage.includes(`mailto:${contactEmail}`), `${city.slug} Chinese page is missing the contact email`);
});

assert(foods.length === 19, `美食图鉴应有 19 项，实际为 ${foods.length}`);
assert(new Set(foods.map(food => food.slug)).size === foods.length, '美食图鉴 slug 重复');
assert(foods.every(food => food.zhName && food.enName && food.zhDescription && food.enDescription), '美食图鉴双语内容不完整');

const englishFoodGuide = read('guides', 'chinese-foods', 'index.html');
const chineseFoodGuide = read('zh', 'guides', 'chinese-foods', 'index.html');
assert(englishFoodGuide.includes(`<link rel="canonical" href="${siteUrl}/guides/chinese-foods/">`), '英文美食图鉴 canonical 缺失');
assert(chineseFoodGuide.includes(`<link rel="canonical" href="${siteUrl}/zh/guides/chinese-foods/">`), '中文美食图鉴 canonical 缺失');
assert((englishFoodGuide.match(/class="food-card"/g) || []).length === 19, '英文美食图鉴卡片数量不是 19');
assert((chineseFoodGuide.match(/class="food-card"/g) || []).length === 19, '中文美食图鉴卡片数量不是 19');
assert(foods.every(food => englishFoodGuide.includes(`id="food-${food.slug}"`)), '英文美食图鉴缺少深链锚点');
assert(foods.every(food => chineseFoodGuide.includes(food.zhName)), '中文美食图鉴缺少菜名');

assert(videoTrails.length === 18, `Video food trails must contain 18 cities, found ${videoTrails.length}`);
assert(new Set(videoTrails.map(trail => trail.slug)).size === videoTrails.length, 'Video food trail slugs must be unique');
assert(new Set(videoTrails.map(trail => trail.videoId)).size === videoTrails.length, 'Video food trail IDs must be unique');
assert(videoTrails.every(trail => /^\d{19}$/.test(trail.videoId)), 'Every video food trail must have a valid Douyin video ID');
assert(videoTrails.every(trail => trail.city.zh && trail.city.en && trail.foods.length > 0), 'Every video food trail must have bilingual city data and foods');
assert(videoTrails.reduce((total, trail) => total + trail.foods.length, 0) === 495, 'Video food trails must contain 495 food finds');

const englishVideoTrails = read('guides', 'video-food-trails', 'index.html');
const chineseVideoTrails = read('zh', 'guides', 'video-food-trails', 'index.html');
const videoTrailApp = read('js', 'video-food-trails.js');
const videoTrailStyles = read('css', 'video-food-trails.css');
assert(englishVideoTrails.includes(`<link rel="canonical" href="${siteUrl}/guides/video-food-trails/">`), 'English video food trails canonical is missing');
assert(chineseVideoTrails.includes(`<link rel="canonical" href="${siteUrl}/zh/guides/video-food-trails/">`), 'Chinese video food trails canonical is missing');
assert(englishVideoTrails.includes(`hreflang="zh-Hans" href="${siteUrl}/zh/guides/video-food-trails/"`), 'English video food trails hreflang is missing');
assert(chineseVideoTrails.includes(`hreflang="en" href="${siteUrl}/guides/video-food-trails/"`), 'Chinese video food trails hreflang is missing');
assert(englishVideoTrails.includes('/js/data.js'), 'Video food trails must load the local dish photo catalog');
assert(englishVideoTrails.includes('/js/video-food-trails-data.js'), 'English video food trails data script is missing');
assert(englishVideoTrails.includes('/js/video-food-trails-media.js'), 'Video food trails licensed media script is missing');
assert(chineseVideoTrails.includes('/js/video-food-trails.js'), 'Chinese video food trails app script is missing');
assert(!videoTrailApp.includes('getCategoryVisuals'), 'Video food trails must not use category photos as dish substitutes');
assert(!videoTrailApp.includes('curatedVisualNames'), 'Video food trails must not assign unrelated curated photos');
assert(videoTrailApp.includes('{ image: null, name: null, exact: false }'), 'Unmatched foods must render without a substitute photo');
assert(videoTrailApp.includes('function getPicturedFoods(trail)'), 'City food trails must define a pictured-food collection');
assert(videoTrailApp.includes('getPicturedFoods(trail).filter(food =>'), 'Search and filters must start from pictured foods');
assert(videoTrailApp.includes('elements.drawerFoods.innerHTML = picturedFoods.map(food =>'), 'City drawers must render pictured foods only');
assert(videoTrailApp.includes('function pickHeroMosaic()'), 'City food trails must build a randomized hero mosaic');
assert(videoTrailApp.includes('item.visual.trailSpecific'), 'Hero mosaic must use verified trail-specific images');
assert(englishVideoTrails.includes('id="heroMosaicShuffleBtn"'), 'English city food trails must expose the mosaic shuffle control');
assert(chineseVideoTrails.includes('id="heroMosaicShuffleBtn"'), 'Chinese city food trails must expose the mosaic shuffle control');
assert(videoTrailApp.includes('has-${previewFoods.length}-foods'), 'City cards must expose their preview image count');
assert(videoTrailStyles.includes('.trail-card-foods.has-1-foods'), 'Single-image city cards must fill the preview');
assert(videoTrailStyles.includes('.trail-card-foods.has-2-foods'), 'Two-image city cards must fill the preview');
assert(!videoTrailApp.includes('food-photo-missing'), 'City food trails must not render cards without photos');
assert(!videoTrailApp.includes('douyin.com/video'), 'City food trails app must not link to source videos');
assert(englishVideoTrails.includes('City Food Trails'), 'English city food trails title is missing');
assert(chineseVideoTrails.includes('城市美食漫游'), 'Chinese city food trails title is missing');
assert(chineseVideoTrails.includes('这里只展示有核实图片的菜品'), 'Chinese city food trails must explain the pictured-food policy');
assert(!englishVideoTrails.includes('id="drawerVideoLink"'), 'English city food trails must not expose a video entry');
assert(!chineseVideoTrails.includes('id="drawerVideoLink"'), 'Chinese city food trails must not expose a video entry');
assert(!englishVideoTrails.includes('Watch source video'), 'English city food trails must not mention a source video CTA');
assert(!chineseVideoTrails.includes('去看原视频'), 'Chinese city food trails must not mention a source video CTA');

const dishSources = read('assets', 'dishes', 'SOURCES.md');
assert((dishSources.match(/^\| .* \| .* \| .* \| .* \| \[.*\]\(.*\) \| \[查看来源\]/gm) || []).length === dishCount, `菜品来源文档不是 ${dishCount} 条`);
const imageReview = read('marketing', 'image-review.html');
assert((imageReview.match(/<figure><img/g) || []).length === dishCount, `图片审核表不是 ${dishCount} 张`);
assert(imageReview.includes('noindex, nofollow'), '图片审核表必须禁止收录');

const sitemap = read('sitemap.xml');
const sitemapUrls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]);
assert(sitemapUrls.length === 9 + (cities.length * 2), `站点地图 URL 数量不正确，实际为 ${sitemapUrls.length}`);
assert(new Set(sitemapUrls).size === sitemapUrls.length, '站点地图存在重复 URL');
assert(cities.every(city => sitemap.includes(`${siteUrl}/city/${city.slug}/`)), '站点地图缺少英文城市页');
assert(cities.every(city => sitemap.includes(`${siteUrl}/zh/city/${city.slug}/`)), '站点地图缺少中文城市页');
assert(sitemap.includes(`${siteUrl}/guides/chinese-foods/`), '站点地图缺少英文美食图鉴');
assert(sitemap.includes(`${siteUrl}/zh/guides/chinese-foods/`), '站点地图缺少中文美食图鉴');

assert(sitemap.includes(`${siteUrl}/guides/video-food-trails/`), 'Sitemap is missing the English video food trails page');
assert(sitemap.includes(`${siteUrl}/zh/guides/video-food-trails/`), 'Sitemap is missing the Chinese video food trails page');

const robots = read('robots.txt');
assert(robots.includes(`Sitemap: ${siteUrl}/sitemap.xml`), 'robots.txt 缺少站点地图地址');
assert(robots.includes('Disallow: /marketing/'), 'robots.txt 未排除营销素材目录');

const index = read('index.html');
assert(index.includes(`<link rel="canonical" href="${siteUrl}/">`), 'Homepage canonical does not match siteUrl');
assert(index.includes('rel="canonical"'), '地图首页缺少 canonical');
assert(index.includes('application/ld+json'), '地图首页缺少结构化数据');
assert(index.includes('/_vercel/insights/script.js'), '地图首页缺少 Vercel Analytics');
assert(index.includes('assets/dishes/chengdu/zhong-shui-jiao.webp'), '地图首页社交图片未切换到菜品图');
assert(index.includes('js/food-guide-data.js'), '地图首页未加载美食图鉴数据');
assert(index.includes('/guides/chinese-foods/'), '地图首页缺少美食图鉴入口');
assert(index.includes('/guides/video-food-trails/'), 'Homepage is missing the city food trails entry');
assert(index.includes('Food trails'), 'Homepage city food trails label is missing');
assert(index.includes(`mailto:${contactEmail}`), 'Homepage is missing the contact email');
assert(englishFoodGuide.includes(`mailto:${contactEmail}`), 'English food guide is missing the contact email');
assert(chineseFoodGuide.includes(`mailto:${contactEmail}`), 'Chinese food guide is missing the contact email');

const cards = read('marketing', 'cards', 'index.html');
assert(cards.includes(`${new URL(siteUrl).host}/city/chengdu/`), 'Social cards do not use the canonical host');
assert((cards.match(/class="social-card"/g) || []).length === cities.length, `城市社交卡片数量不是 ${cities.length}`);
assert((cards.match(/class="comparison-card/g) || []).length === 3, '比较轮播封面数量不是 3');
assert(cards.includes('/guides/china-food-travel-map/'), '比较轮播封面缺少指南链接');

const exportedCards = [
  ...cities.map(city => `city-${city.slug}.jpg`),
  'comparison-classics.jpg',
  'comparison-hidden-gems.jpg',
  'comparison-flavors.jpg'
];
assert(exportedCards.length === cities.length + 3, `Expected ${cities.length + 3} exported social cards`);
exportedCards.forEach(filename => {
  const dimensions = jpegDimensions('marketing', 'exports', filename);
  assert(dimensions.width === 1080 && dimensions.height === 1350, `${filename} must be 1080x1350`);
});

const utmRows = read('marketing', 'utm-links.csv').trim().split('\n');
assert(utmRows.length === ((cities.length + 4) * 4) + 1, `UTM 链接数量不正确，实际为 ${utmRows.length - 1}`);
assert(utmRows.slice(1).every(row => row.includes('utm_campaign=overseas_launch_2026')), 'UTM campaign 不一致');
assert(
  ['best-food-cities-in-china', 'hidden-gem-food-cities-in-china', 'china-food-travel-map', 'chinese-foods']
    .every(slug => utmRows.some(row => row.startsWith(`${slug},guide,`))),
  'UTM 链接缺少比较指南'
);

const app = read('js', 'app.js');
assert(app.includes('/assets/maps/land-110m.geojson'), '地图未使用本地陆地底图');
assert(!app.includes('tile.openstreetmap.org'), '地图仍依赖外部 OSM 瓦片');
assert(fs.existsSync(path.join(root, 'assets', 'maps', 'land-110m.geojson')), '缺少本地陆地底图');

const indexPage = read('index.html');
assert(indexPage.includes('/assets/vendor/leaflet/leaflet.js'), 'Leaflet JavaScript 未本地化');
assert(indexPage.includes('/assets/vendor/leaflet/leaflet.css'), 'Leaflet CSS 未本地化');
assert(!indexPage.includes('unpkg.com/leaflet'), '首页仍依赖外部 Leaflet CDN');
assert(indexPage.includes('/assets/vendor/maplibre/maplibre-gl.js'), 'MapLibre JavaScript 未本地化');
assert(indexPage.includes('/assets/vendor/maplibre/maplibre-gl.css'), 'MapLibre CSS 未本地化');
assert(indexPage.includes('/assets/vendor/maplibre-leaflet/leaflet-maplibre-gl.js'), 'MapLibre Leaflet 绑定未本地化');
assert(indexPage.includes('https://tiles.openfreemap.org'), '首页未预连接 OpenFreeMap');
assert(!indexPage.includes('https://unpkg.com'), '首页仍保留 unpkg 预连接');
assert(!indexPage.includes('https://tile.openstreetmap.org'), '首页仍保留旧 OSM 瓦片预连接');
assert(indexPage.includes('/assets/vendor/fontawesome/css/fontawesome.min.css'), 'Font Awesome 未本地化');
assert(!indexPage.includes('cdnjs.cloudflare.com'), '首页仍依赖外部 Font Awesome CDN');

assert(app.includes('https://tiles.openfreemap.org/styles/liberty'), '详细地图未使用 OpenFreeMap Liberty');
assert(app.includes('L.maplibreGL'), '详细地图未绑定到 Leaflet');
assert(app.includes('}, 8000);'), '详细地图降级超时不是 8 秒');
assert(app.includes("style.zIndex = 190"), '本地陆地层未放在详细地图下方');
[
  ['assets', 'vendor', 'maplibre', 'maplibre-gl.js'],
  ['assets', 'vendor', 'maplibre', 'maplibre-gl.css'],
  ['assets', 'vendor', 'maplibre', 'LICENSE.txt'],
  ['assets', 'vendor', 'maplibre-leaflet', 'leaflet-maplibre-gl.js'],
  ['assets', 'vendor', 'maplibre-leaflet', 'LICENSE']
].forEach(segments => {
  assert(fs.existsSync(path.join(root, ...segments)), `缺少本地地图资源 ${segments.at(-1)}`);
});
assert(!app.includes('autonavi.com'), '地图仍引用高德瓦片');
assert(app.includes('/zh/city/${city.slug}/'), '中文分享链接未指向静态城市页');

console.log('站点校验通过：双语城市页、指南、SEO、分析和营销素材完整。');
