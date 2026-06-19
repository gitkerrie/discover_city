const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
const dataPath = path.join(root, 'js', 'data.js');
const source = fs.readFileSync(dataPath, 'utf8');
const context = {};

vm.createContext(context);
vm.runInContext(
  `${source}\nglobalThis.__foodCitiesData = foodCitiesData; globalThis.__foodCitiesEnglish = foodCitiesEnglish;`,
  context
);

const cities = context.__foodCitiesData;
const englishCities = context.__foodCitiesEnglish;
const expectedSlugs = [
  'chengdu',
  'xian',
  'guangzhou',
  'changsha',
  'wuhan',
  'chongqing',
  'chaozhou',
  'liuzhou',
  'yanji',
  'taizhou',
  'kashgar',
  'yangzhou'
];

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

assert(Array.isArray(cities), 'foodCitiesData 必须是数组');
assert(cities.length === 12, `应有 12 座城市，实际为 ${cities.length}`);

const ids = new Set();
const slugs = new Set();

cities.forEach(city => {
  assert(Number.isInteger(city.id), `${city.name || '未知城市'} 缺少整数 id`);
  assert(!ids.has(city.id), `城市 id 重复：${city.id}`);
  ids.add(city.id);

  assert(/^[a-z]+$/.test(city.slug), `${city.name} 的 slug 格式不正确`);
  assert(!slugs.has(city.slug), `城市 slug 重复：${city.slug}`);
  slugs.add(city.slug);

  assert(city.name && city.province, `${city.slug} 缺少城市或省份名称`);
  assert(['经典', '宝藏'].includes(city.group), `${city.name} 的分组不正确`);
  assert(Array.isArray(city.coordinates) && city.coordinates.length === 2, `${city.name} 缺少经纬度`);
  assert(city.coordinates[0] >= 73.4 && city.coordinates[0] <= 135.1, `${city.name} 经度超出中国范围`);
  assert(city.coordinates[1] >= 18.1 && city.coordinates[1] <= 53.6, `${city.name} 纬度超出中国范围`);
  assert(city.tagline && city.description && city.tip, `${city.name} 的介绍内容不完整`);
  assert(Array.isArray(city.flavorTags) && city.flavorTags.length === 3, `${city.name} 应有 3 个风味标签`);
  assert(Array.isArray(city.dishes) && city.dishes.length >= 3 && city.dishes.length <= 5, `${city.name} 应有 3-5 道招牌美食`);
  assert(city.dishes.every(dish => dish.name && dish.description), `${city.name} 存在不完整的美食条目`);
  assert(city.heroImage.startsWith('assets/cities/') && city.heroImage.endsWith('.webp'), `${city.name} 主图路径不正确`);
  assert(city.imageAlt, `${city.name} 缺少图片替代文本`);

  const imagePath = path.join(root, city.heroImage);
  assert(fs.existsSync(imagePath), `${city.name} 主图不存在：${city.heroImage}`);
  const image = fs.readFileSync(imagePath);
  assert(image.length > 10000, `${city.name} 主图文件异常小`);
  assert(image.toString('ascii', 0, 4) === 'RIFF' && image.toString('ascii', 8, 12) === 'WEBP', `${city.name} 主图不是有效 WebP`);

  const english = englishCities[city.slug];
  assert(english, `${city.slug} 缺少英文内容`);
  assert(english.name && english.province, `${city.slug} 缺少英文城市或省份名称`);
  assert(english.tagline && english.description && english.tip, `${city.slug} 英文介绍内容不完整`);
  assert(Array.isArray(english.flavorTags) && english.flavorTags.length === 3, `${city.slug} 应有 3 个英文风味标签`);
  assert(Array.isArray(english.dishes) && english.dishes.length === city.dishes.length, `${city.slug} 中英文菜品数量不一致`);
  assert(english.dishes.every(dish => dish.name && dish.description), `${city.slug} 存在不完整的英文菜品条目`);
  assert(english.imageAlt, `${city.slug} 缺少英文图片替代文本`);
});

assert(expectedSlugs.every(slug => slugs.has(slug)), '首发城市名单与计划不一致');
assert(Object.keys(englishCities).length === cities.length, '英文城市数据存在遗漏或多余条目');

console.log(`数据校验通过：${cities.length} 座城市，${cities.reduce((total, city) => total + city.dishes.length, 0)} 道招牌美食。`);
