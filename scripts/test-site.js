const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { siteUrl } = require('./site-config');

const root = path.resolve(__dirname, '..');
const source = fs.readFileSync(path.join(root, 'js', 'data.js'), 'utf8');
const context = {};
vm.createContext(context);
vm.runInContext(
  `${source}\nglobalThis.__cities = foodCitiesData; globalThis.__english = foodCitiesEnglish;`,
  context
);

const cities = context.__cities;
const english = context.__english;

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function read(...segments) {
  return fs.readFileSync(path.join(root, ...segments), 'utf8');
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
  assert(chinesePage.includes(`<html lang="zh-CN">`), `${city.slug} 中文页语言不正确`);
  assert(chinesePage.includes(`<link rel="canonical" href="${chineseUrl}">`), `${city.slug} 中文 canonical 缺失`);
  assert(chinesePage.includes(city.name), `${city.slug} 中文内容缺失`);
});

const sitemap = read('sitemap.xml');
const sitemapUrls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]);
assert(sitemapUrls.length === 29, `站点地图应有 29 个 URL，实际为 ${sitemapUrls.length}`);
assert(new Set(sitemapUrls).size === sitemapUrls.length, '站点地图存在重复 URL');
assert(cities.every(city => sitemap.includes(`${siteUrl}/city/${city.slug}/`)), '站点地图缺少英文城市页');
assert(cities.every(city => sitemap.includes(`${siteUrl}/zh/city/${city.slug}/`)), '站点地图缺少中文城市页');

const robots = read('robots.txt');
assert(robots.includes(`Sitemap: ${siteUrl}/sitemap.xml`), 'robots.txt 缺少站点地图地址');
assert(robots.includes('Disallow: /marketing/'), 'robots.txt 未排除营销素材目录');

const index = read('index.html');
assert(index.includes(`<link rel="canonical" href="${siteUrl}/">`), 'Homepage canonical does not match siteUrl');
assert(index.includes('rel="canonical"'), '地图首页缺少 canonical');
assert(index.includes('application/ld+json'), '地图首页缺少结构化数据');
assert(index.includes('/_vercel/insights/script.js'), '地图首页缺少 Vercel Analytics');

const cards = read('marketing', 'cards', 'index.html');
assert(cards.includes(`${new URL(siteUrl).host}/city/chengdu/`), 'Social cards do not use the canonical host');
assert((cards.match(/class="social-card"/g) || []).length === 12, '城市社交卡片数量不是 12');
assert((cards.match(/class="comparison-card/g) || []).length === 3, '比较轮播封面数量不是 3');

const utmRows = read('marketing', 'utm-links.csv').trim().split('\n');
assert(utmRows.length === 49, `UTM 链接应有 48 条，实际为 ${utmRows.length - 1}`);
assert(utmRows.slice(1).every(row => row.includes('utm_campaign=overseas_launch_2026')), 'UTM campaign 不一致');

const app = read('js', 'app.js');
assert(app.includes('tile.openstreetmap.org'), '地图未切换到海外可访问的瓦片服务');
assert(!app.includes('autonavi.com'), '地图仍引用高德瓦片');
assert(app.includes('/zh/city/${city.slug}/'), '中文分享链接未指向静态城市页');

console.log('站点校验通过：双语城市页、指南、SEO、分析和营销素材完整。');
