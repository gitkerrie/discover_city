const fs = require('fs');
const os = require('os');
const path = require('path');
const vm = require('vm');
const { execFile } = require('child_process');
const { promisify } = require('util');
const sharp = require('sharp');

const root = path.resolve(__dirname, '..');
const targetBytes = 180 * 1024;
const concurrency = 3;
const execFileAsync = promisify(execFile);

function loadMedia() {
  const source = fs.readFileSync(path.join(root, 'js', 'data.js'), 'utf8');
  const context = {};
  vm.createContext(context);
  vm.runInContext(`${source}\nglobalThis.__media = foodDishMedia;`, context);
  return context.__media;
}

async function downloadWithFetch(url, attempt = 1) {
  let response;
  try {
    response = await fetch(url, {
      headers: {
        'User-Agent': 'TasteChinaImagePipeline/1.0 (https://mitaste.com)',
        Accept: 'image/avif,image/webp,image/*,*/*;q=0.8'
      }
    });
  } catch (error) {
    if (attempt < 4) {
      await new Promise(resolve => setTimeout(resolve, attempt * 1500));
      return downloadWithFetch(url, attempt + 1);
    }
    throw error;
  }

  if (!response.ok) {
    if (attempt < 4 && (response.status === 429 || response.status >= 500)) {
      await new Promise(resolve => setTimeout(resolve, attempt * 1500));
      return downloadWithFetch(url, attempt + 1);
    }
    throw new Error(`下载失败 ${response.status}: ${url}`);
  }

  return Buffer.from(await response.arrayBuffer());
}

async function downloadWithPowerShell(url) {
  const temporaryPath = path.join(
    os.tmpdir(),
    `taste-china-${process.pid}-${Date.now()}-${Math.random().toString(16).slice(2)}.img`
  );
  const safeUrl = url.replaceAll("'", "''");
  const safePath = temporaryPath.replaceAll("'", "''");
  const command = [
    "$ProgressPreference = 'SilentlyContinue'",
    `Invoke-WebRequest -Uri '${safeUrl}' -OutFile '${safePath}' -Headers @{'User-Agent'='TasteChinaImagePipeline/1.0 (https://mitaste.com)'}`
  ].join('; ');

  try {
    await execFileAsync('powershell.exe', ['-NoProfile', '-NonInteractive', '-Command', command]);
    return fs.readFileSync(temporaryPath);
  } finally {
    if (fs.existsSync(temporaryPath)) fs.unlinkSync(temporaryPath);
  }
}

function download(url) {
  return process.platform === 'win32' ? downloadWithPowerShell(url) : downloadWithFetch(url);
}

async function encodeImage(input) {
  for (const quality of [80, 76, 72, 68, 64, 60, 56, 52, 48, 44, 40, 36, 32, 28]) {
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
  const outputPath = path.join(root, item.outputPath);
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  if (fs.existsSync(outputPath)) {
    const existing = fs.readFileSync(outputPath);
    const metadata = await sharp(existing).metadata();
    if (metadata.width === 1200 && metadata.height === 900 && existing.length <= targetBytes) {
      return `${item.outputPath} (${Math.round(existing.length / 1024)} KB，已存在)`;
    }
  }
  const downloaded = await download(item.originalUrl);
  const encoded = await encodeImage(downloaded);
  fs.writeFileSync(outputPath, encoded);
  return `${item.outputPath} (${Math.round(encoded.length / 1024)} KB)`;
}

async function main() {
  const media = loadMedia();
  const queue = Object.entries(media).flatMap(([citySlug, dishes]) =>
    dishes.map(dish => ({
      ...dish,
      outputPath: `assets/dishes/${citySlug}/${dish.slug}.webp`
    }))
  );
  let cursor = 0;

  async function worker() {
    while (cursor < queue.length) {
      const item = queue[cursor++];
      const result = await prepare(item);
      console.log(`已处理 ${result}`);
    }
  }

  await Promise.all(Array.from({ length: concurrency }, () => worker()));
  console.log(`菜品图片处理完成：${queue.length} 张。`);
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
