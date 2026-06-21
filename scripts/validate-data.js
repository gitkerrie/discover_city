const fs = require('fs');
const path = require('path');
const vm = require('vm');
const sharp = require('sharp');

const root = path.resolve(__dirname, '..');
const dataPath = path.join(root, 'js', 'data.js');
const source = fs.readFileSync(dataPath, 'utf8');
const context = {};

vm.createContext(context);
vm.runInContext(
  `${source}\nglobalThis.__foodCitiesData = foodCitiesData; globalThis.__foodCitiesEnglish = foodCitiesEnglish; globalThis.__foodDishMedia = foodDishMedia;`,
  context
);

const cities = context.__foodCitiesData;
const englishCities = context.__foodCitiesEnglish;
const dishMedia = context.__foodDishMedia;
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
const allowedLicenses = new Set([
  'CC0 1.0',
  'CC BY 2.0',
  'CC BY 3.0',
  'CC BY-SA 2.0',
  'CC BY-SA 3.0',
  'CC BY-SA 4.0'
]);

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

async function main() {
  assert(Array.isArray(cities), 'foodCitiesData 必须是数组');
  assert(cities.length === 12, `应有 12 座城市，实际为 ${cities.length}`);

  const ids = new Set();
  const slugs = new Set();

  for (const city of cities) {
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
    assert(Array.isArray(city.dishes) && city.dishes.length === 4, `${city.name} 应恰好有 4 道招牌美食`);
    assert(Array.isArray(dishMedia[city.slug]) && dishMedia[city.slug].length === 4, `${city.name} 图片元数据不完整`);

    const english = englishCities[city.slug];
    assert(english, `${city.slug} 缺少英文内容`);
    assert(english.name && english.province, `${city.slug} 缺少英文城市或省份名称`);
    assert(english.tagline && english.description && english.tip, `${city.slug} 英文介绍内容不完整`);
    assert(Array.isArray(english.flavorTags) && english.flavorTags.length === 3, `${city.slug} 应有 3 个英文风味标签`);
    assert(Array.isArray(english.dishes) && english.dishes.length === 4, `${city.slug} 应有 4 道英文菜品`);

    const dishSlugs = new Set();
    let cityImageBytes = 0;
    for (let index = 0; index < city.dishes.length; index += 1) {
      const dish = city.dishes[index];
      const englishDish = english.dishes[index];
      const rawMedia = dishMedia[city.slug][index];
      const expectedImage = `assets/dishes/${city.slug}/${dish.slug}.webp`;

      assert(dish.name && dish.description && dish.imageAlt, `${city.name} 第 ${index + 1} 道菜内容不完整`);
      assert(/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(dish.slug), `${city.name} 菜品 slug 不正确：${dish.slug}`);
      assert(!dishSlugs.has(dish.slug), `${city.name} 菜品 slug 重复：${dish.slug}`);
      dishSlugs.add(dish.slug);
      assert(dish.image === expectedImage, `${city.name} 菜品图片路径不正确：${dish.image}`);
      assert(englishDish.name && englishDish.description && englishDish.imageAlt, `${city.slug} 第 ${index + 1} 道英文菜品不完整`);
      assert(englishDish.slug === dish.slug && englishDish.image === dish.image, `${city.slug} 第 ${index + 1} 道菜中英文未按 slug 对齐`);

      assert(dish.credit && dish.credit.author, `${city.name} ${dish.name} 缺少作者`);
      assert(allowedLicenses.has(dish.credit.license), `${city.name} ${dish.name} 使用了不允许的许可`);
      assert(/^https:\/\//.test(dish.credit.sourceUrl), `${city.name} ${dish.name} 缺少来源链接`);
      assert(/^https:\/\//.test(dish.credit.licenseUrl), `${city.name} ${dish.name} 缺少许可链接`);
      assert(rawMedia.originalUrl && /^https:\/\//.test(rawMedia.originalUrl), `${city.name} ${dish.name} 缺少原图地址`);

      const imagePath = path.join(root, dish.image);
      assert(fs.existsSync(imagePath), `${city.name} 菜品图片不存在：${dish.image}`);
      const image = fs.readFileSync(imagePath);
      assert(image.length > 10000, `${city.name} ${dish.name} 图片文件异常小`);
      assert(image.length <= 180 * 1024, `${city.name} ${dish.name} 图片超过 180 KB`);
      assert(image.toString('ascii', 0, 4) === 'RIFF' && image.toString('ascii', 8, 12) === 'WEBP', `${city.name} ${dish.name} 不是有效 WebP`);
      const metadata = await sharp(image).metadata();
      assert(metadata.width === 1200 && metadata.height === 900, `${city.name} ${dish.name} 图片应为 1200×900`);
      cityImageBytes += image.length;
    }

    assert(cityImageBytes <= 700 * 1024, `${city.name} 四张图片合计超过 700 KB`);
    assert(city.dishes.some(dish => dish.image === city.heroImage), `${city.name} 主图未引用本城菜品图片`);
    assert(city.imageAlt && english.imageAlt, `${city.slug} 缺少双语主图替代文本`);
  }

  assert(expectedSlugs.every(slug => slugs.has(slug)), '首发城市名单与计划不一致');
  assert(Object.keys(englishCities).length === cities.length, '英文城市数据存在遗漏或多余条目');
  assert(Object.keys(dishMedia).length === cities.length, '菜品图片元数据存在遗漏或多余城市');

  console.log(`数据校验通过：${cities.length} 座城市，${cities.reduce((total, city) => total + city.dishes.length, 0)} 道菜品，48 张本地图片。`);
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
