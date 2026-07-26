const fs = require('fs');
const os = require('os');
const path = require('path');
const vm = require('vm');
const { execFile } = require('child_process');
const { promisify } = require('util');
const sharp = require('sharp');

const root = path.resolve(__dirname, '..');
const targetBytes = 180 * 1024;
const concurrency = 2;
const execFileAsync = promisify(execFile);

function loadMedia() {
  const mediaSource = fs.readFileSync(path.join(root, 'js', 'video-food-trails-media.js'), 'utf8');
  const trailSource = fs.readFileSync(path.join(root, 'js', 'video-food-trails-data.js'), 'utf8');
  const context = {};
  vm.createContext(context);
  vm.runInContext(
    `${trailSource}\n${mediaSource}\n`
      + 'globalThis.__trails = videoFoodTrailsData; globalThis.__media = videoFoodTrailsMediaData;',
    context
  );
  return {
    trails: context.__trails,
    media: context.__media
  };
}

async function download(url, attempt = 1) {
  const temporaryPath = path.join(
    os.tmpdir(),
    `taste-china-video-food-final-${process.pid}-${Date.now()}-${Math.random().toString(16).slice(2)}.img`
  );
  const safeUrl = url.replaceAll("'", "''");
  const safePath = temporaryPath.replaceAll("'", "''");
  const command = [
    "$ProgressPreference = 'SilentlyContinue';",
    `Invoke-WebRequest -Uri '${safeUrl}' -OutFile '${safePath}' -UseBasicParsing`,
    "-Headers @{'User-Agent'='TasteChinaImagePipeline/1.0 (https://mitaste.com)'}",
    '-TimeoutSec 60'
  ].join(' ');

  try {
    await execFileAsync('powershell.exe', [
      '-NoProfile',
      '-NonInteractive',
      '-Command',
      command
    ], { timeout: 75000, windowsHide: true });
    return fs.readFileSync(temporaryPath);
  } catch (error) {
    if (attempt < 4) {
      await new Promise(resolve => setTimeout(resolve, attempt * 2200));
      return download(url, attempt + 1);
    }
    throw error;
  } finally {
    if (fs.existsSync(temporaryPath)) fs.unlinkSync(temporaryPath);
  }
}

async function encodeImage(input) {
  for (const quality of [82, 78, 74, 70, 66, 62, 58, 54, 50, 46, 42, 38, 34, 30]) {
    const output = await sharp(input)
      .rotate()
      .resize(1200, 900, { fit: 'cover', position: 'attention' })
      .webp({ quality, effort: 6 })
      .toBuffer();
    if (output.length <= targetBytes) return output;
  }
  throw new Error('图片在最低质量下仍超过 180 KB');
}

async function prepare(item) {
  const outputPath = path.join(root, item.image);
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });

  if (fs.existsSync(outputPath)) {
    const existing = fs.readFileSync(outputPath);
    const metadata = await sharp(existing).metadata();
    if (
      metadata.width === 1200
      && metadata.height === 900
      && existing.length <= targetBytes
      && existing.length > 10000
    ) {
      return `${item.image} (${Math.round(existing.length / 1024)} KB，已存在)`;
    }
  }

  const input = await download(item.originalUrl);
  const output = await encodeImage(input);
  fs.writeFileSync(outputPath, output);
  return `${item.image} (${Math.round(output.length / 1024)} KB)`;
}

function generateSources(items) {
  const rows = items.map(item => (
    `| ${item.cityName} | ${item.food} | ${item.matchedName.zh} | ${item.credit.author} `
      + `| [${item.credit.license}](${item.credit.licenseUrl}) `
      + `| [查看来源](${item.credit.sourceUrl}) |`
  ));
  const output = [
    '# 视频美食图片来源',
    '',
    '本目录只收录已人工核对菜品内容的开放许可实拍。所有图片裁切为 1200×900 WebP；改编图片沿用原作品许可。',
    '',
    '| 城市 | 视频菜名 | 图片实际菜名 | 作者 | 许可 | 原作品 |',
    '| --- | --- | --- | --- | --- | --- |',
    ...rows,
    ''
  ].join('\n');
  const outputPath = path.join(root, 'assets', 'video-foods', 'SOURCES.md');
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, output);
}

async function main() {
  const { trails, media } = loadMedia();
  const queue = Object.entries(media).flatMap(([slug, foods]) => {
    const trail = trails.find(item => item.slug === slug);
    if (!trail) throw new Error(`图片清单引用了未知城市：${slug}`);
    return Object.entries(foods).map(([food, item]) => ({
      ...item,
      food,
      citySlug: slug,
      cityName: trail.city.zh
    }));
  });
  let cursor = 0;

  async function worker() {
    while (cursor < queue.length) {
      const item = queue[cursor];
      cursor += 1;
      const result = await prepare(item);
      console.log(`已处理 ${result}`);
    }
  }

  await Promise.all(Array.from({ length: concurrency }, () => worker()));
  generateSources(queue);
  console.log(`视频美食图片处理完成：${queue.length} 张。`);
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
