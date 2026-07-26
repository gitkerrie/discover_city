const fs = require('fs');
const path = require('path');
const vm = require('vm');
const sharp = require('sharp');

const root = path.resolve(__dirname, '..');
const mediaSource = fs.readFileSync(path.join(root, 'js', 'video-food-trails-media.js'), 'utf8');
const trailSource = fs.readFileSync(path.join(root, 'js', 'video-food-trails-data.js'), 'utf8');
const context = {};
vm.createContext(context);
vm.runInContext(
  `${trailSource}\n${mediaSource}\n`
    + 'globalThis.__trails = videoFoodTrailsData; globalThis.__media = videoFoodTrailsMediaData;',
  context
);

const trails = context.__trails;
const media = context.__media;
const allowedLicensePattern = /^(CC0 1\.0|CC BY(?:-SA)? (?:2\.0|2\.5|3\.0|4\.0))$/;

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

async function main() {
  const imagePaths = new Set();
  const originalUrls = new Set();
  let count = 0;

  for (const [citySlug, foods] of Object.entries(media)) {
    const trail = trails.find(item => item.slug === citySlug);
    assert(trail, `图片清单引用了未知城市：${citySlug}`);

    for (const [food, item] of Object.entries(foods)) {
      count += 1;
      assert(trail.foods.includes(food), `${citySlug} 图片菜名不在视频清单中：${food}`);
      assert(/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(item.slug), `${citySlug} ${food} slug 不正确`);
      assert(item.matchedName?.zh && item.matchedName?.en, `${citySlug} ${food} 缺少图片实际菜名`);
      assert(item.imageAlt?.zh && item.imageAlt?.en, `${citySlug} ${food} 缺少双语图片说明`);
      assert(item.image === `assets/video-foods/${citySlug}/${path.basename(item.image)}`, `${citySlug} ${food} 图片路径不正确`);
      assert(!imagePaths.has(item.image), `视频美食图片路径重复：${item.image}`);
      imagePaths.add(item.image);

      assert(item.credit?.author, `${citySlug} ${food} 缺少作者`);
      assert(allowedLicensePattern.test(item.credit.license), `${citySlug} ${food} 使用了不允许的许可`);
      assert(/^https:\/\//.test(item.credit.licenseUrl), `${citySlug} ${food} 缺少许可链接`);
      assert(/^https:\/\/commons\.wikimedia\.org\//.test(item.credit.sourceUrl), `${citySlug} ${food} 来源必须是 Commons 文件页`);
      assert(/^https:\/\/upload\.wikimedia\.org\//.test(item.originalUrl), `${citySlug} ${food} 原图必须来自 Commons CDN`);
      assert(!originalUrls.has(item.originalUrl), `${citySlug} ${food} 重复使用同一原图`);
      originalUrls.add(item.originalUrl);

      const imagePath = path.join(root, item.image);
      assert(fs.existsSync(imagePath), `${citySlug} ${food} 图片不存在：${item.image}`);
      const image = fs.readFileSync(imagePath);
      assert(image.length > 10000, `${citySlug} ${food} 图片文件异常小`);
      assert(image.length <= 180 * 1024, `${citySlug} ${food} 图片超过 180 KB`);
      assert(image.toString('ascii', 0, 4) === 'RIFF' && image.toString('ascii', 8, 12) === 'WEBP', `${citySlug} ${food} 不是有效 WebP`);
      const metadata = await sharp(image).metadata();
      assert(metadata.width === 1200 && metadata.height === 900, `${citySlug} ${food} 图片应为 1200×900`);
    }
  }

  const sourcesPath = path.join(root, 'assets', 'video-foods', 'SOURCES.md');
  assert(fs.existsSync(sourcesPath), '视频美食图片来源文档不存在');
  const sources = fs.readFileSync(sourcesPath, 'utf8');
  const sourceRows = (sources.match(/^\| .* \| .* \| .* \| .* \| \[.*\]\(.*\) \| \[查看来源\]\(.*\) \|$/gm) || []).length;
  assert(sourceRows === count, `视频美食来源文档应有 ${count} 条，实际为 ${sourceRows} 条`);

  console.log(`视频美食图片校验通过：${count} 张开放许可实拍。`);
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
