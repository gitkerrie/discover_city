const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { siteUrl } = require('./site-config');

const root = path.resolve(__dirname, '..');
const source = fs.readFileSync(path.join(root, 'js', 'data.js'), 'utf8');
const foodGuideSource = fs.readFileSync(path.join(root, 'js', 'food-guide-data.js'), 'utf8');
const context = {};
vm.createContext(context);
vm.runInContext(
  `${source}\n${foodGuideSource}\nglobalThis.__cities = foodCitiesData; globalThis.__english = foodCitiesEnglish; globalThis.__foods = featuredFoodsData;`,
  context
);

const cities = context.__cities;
const english = context.__english;
const foods = context.__foods;

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

const dishSources = read('assets', 'dishes', 'SOURCES.md');
assert((dishSources.match(/^\| .* \| .* \| .* \| .* \| \[.*\]\(.*\) \| \[查看来源\]/gm) || []).length === 48, '菜品来源文档不是 48 条');
const imageReview = read('marketing', 'image-review.html');
assert((imageReview.match(/<figure><img/g) || []).length === 48, '图片审核表不是 48 张');
assert(imageReview.includes('noindex, nofollow'), '图片审核表必须禁止收录');

const sitemap = read('sitemap.xml');
const sitemapUrls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]);
assert(sitemapUrls.length === 31, `站点地图应有 31 个 URL，实际为 ${sitemapUrls.length}`);
assert(new Set(sitemapUrls).size === sitemapUrls.length, '站点地图存在重复 URL');
assert(cities.every(city => sitemap.includes(`${siteUrl}/city/${city.slug}/`)), '站点地图缺少英文城市页');
assert(cities.every(city => sitemap.includes(`${siteUrl}/zh/city/${city.slug}/`)), '站点地图缺少中文城市页');
assert(sitemap.includes(`${siteUrl}/guides/chinese-foods/`), '站点地图缺少英文美食图鉴');
assert(sitemap.includes(`${siteUrl}/zh/guides/chinese-foods/`), '站点地图缺少中文美食图鉴');

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

const cards = read('marketing', 'cards', 'index.html');
assert(cards.includes(`${new URL(siteUrl).host}/city/chengdu/`), 'Social cards do not use the canonical host');
assert((cards.match(/class="social-card"/g) || []).length === 12, '城市社交卡片数量不是 12');
assert((cards.match(/class="comparison-card/g) || []).length === 3, '比较轮播封面数量不是 3');
assert(cards.includes('/guides/china-food-travel-map/'), '比较轮播封面缺少指南链接');

const exportedCards = [
  ...cities.map(city => `city-${city.slug}.jpg`),
  'comparison-classics.jpg',
  'comparison-hidden-gems.jpg',
  'comparison-flavors.jpg'
];
assert(exportedCards.length === 15, 'Expected 15 exported social cards');
exportedCards.forEach(filename => {
  const dimensions = jpegDimensions('marketing', 'exports', filename);
  assert(dimensions.width === 1080 && dimensions.height === 1350, `${filename} must be 1080x1350`);
});

const utmRows = read('marketing', 'utm-links.csv').trim().split('\n');
assert(utmRows.length === 65, `UTM 链接应有 64 条，实际为 ${utmRows.length - 1}`);
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
