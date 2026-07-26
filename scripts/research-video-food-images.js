const fs = require('fs');
const os = require('os');
const path = require('path');
const vm = require('vm');
const { execFile } = require('child_process');
const { promisify } = require('util');
const sharp = require('sharp');

const root = path.resolve(__dirname, '..');
const execFileAsync = promisify(execFile);
const args = new Map(
  process.argv.slice(2).map(argument => {
    const [key, value = 'true'] = argument.replace(/^--/, '').split('=');
    return [key, value];
  })
);
const citySlug = args.get('city') || 'wuhu';
const candidateLimit = Math.min(6, Math.max(1, Number(args.get('limit') || 4)));
const concurrency = Math.min(4, Math.max(1, Number(args.get('concurrency') || 3)));
const reviewRoot = path.join(root, 'assets', 'video-foods', 'review', citySlug);
const reviewPagePath = path.join(root, 'marketing', `video-food-image-review-${citySlug}.html`);
const allowedLicensePattern = /^(CC0 1\.0|CC BY(?:-SA)? (?:2\.0|2\.5|3\.0|4\.0))$/i;
const obviousNonFoodPattern = /\b(logo|sign|storefront|restaurant exterior|building|menu|receipt|advertisement|truck|bus|station)\b|标志|店面|门店|菜单|收据|广告|建筑/i;

function loadData() {
  const citySource = fs.readFileSync(path.join(root, 'js', 'data.js'), 'utf8');
  const trailSource = fs.readFileSync(path.join(root, 'js', 'video-food-trails-data.js'), 'utf8');
  const context = {};
  vm.createContext(context);
  vm.runInContext(
    `${citySource}\n${trailSource}\n`
      + 'globalThis.__cities = foodCitiesData; globalThis.__trails = videoFoodTrailsData;',
    context
  );
  return {
    cities: context.__cities,
    trails: context.__trails
  };
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, character => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;'
  }[character]));
}

function stripHtml(value) {
  return String(value || '')
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

function normalize(value) {
  return stripHtml(value)
    .toLocaleLowerCase()
    .replace(/^file:/, '')
    .replace(/[·•\s（）()、，,._:/\\\-–—'"]/g, '');
}

function getSearchTerms(trail, food) {
  const terms = [food];
  if (food.startsWith(trail.city.zh) && food.length > trail.city.zh.length + 1) {
    terms.push(food.slice(trail.city.zh.length));
  }
  const withoutSafePrefix = food.replace(/^(特色|本土|本地|当地|老式|老味|老牌|手工|传统|正宗|招牌|社区)/, '');
  if (withoutSafePrefix !== food && withoutSafePrefix.length >= 2) {
    terms.push(withoutSafePrefix);
  }
  return [...new Set(terms)];
}

function metadataValue(metadata, key) {
  return stripHtml(metadata?.[key]?.value || '');
}

function buildApiUrl(term) {
  const parameters = new URLSearchParams({
    action: 'query',
    generator: 'search',
    gsrnamespace: '6',
    gsrsearch: term,
    gsrlimit: '8',
    prop: 'imageinfo',
    iiprop: 'url|extmetadata|mime|size',
    iiurlwidth: '960',
    iiextmetadatafilter: 'Artist|LicenseShortName|LicenseUrl|ImageDescription|Categories|Credit',
    format: 'json',
    formatversion: '2',
    origin: '*'
  });
  return `https://commons.wikimedia.org/w/api.php?${parameters}`;
}

async function invokeWebRequest(url, outputPath, attempt = 1) {
  const safeUrl = url.replaceAll("'", "''");
  const safePath = outputPath.replaceAll("'", "''");
  const command = [
    "$ProgressPreference = 'SilentlyContinue';",
    `Invoke-WebRequest -Uri '${safeUrl}' -OutFile '${safePath}' -UseBasicParsing`,
    "-Headers @{'User-Agent'='TasteChinaImageResearch/1.0 (https://mitaste.com)'}",
    '-TimeoutSec 45'
  ].join(' ');

  try {
    await execFileAsync('powershell.exe', [
      '-NoProfile',
      '-NonInteractive',
      '-Command',
      command
    ], { timeout: 60000, windowsHide: true });
  } catch (error) {
    if (attempt < 3) {
      await new Promise(resolve => setTimeout(resolve, attempt * 1800));
      return invokeWebRequest(url, outputPath, attempt + 1);
    }
    throw error;
  }
}

async function fetchBuffer(url) {
  const temporaryPath = path.join(
    os.tmpdir(),
    `taste-china-video-food-${process.pid}-${Date.now()}-${Math.random().toString(16).slice(2)}.tmp`
  );
  try {
    await invokeWebRequest(url, temporaryPath);
    return fs.readFileSync(temporaryPath);
  } finally {
    if (fs.existsSync(temporaryPath)) fs.unlinkSync(temporaryPath);
  }
}

async function fetchJson(url) {
  return JSON.parse((await fetchBuffer(url)).toString('utf8'));
}

function candidateFromPage(page, term, termIndex) {
  const info = page.imageinfo?.[0];
  if (!info || !info.thumburl || !info.url || !info.descriptionurl) return null;
  const metadata = info.extmetadata || {};
  const license = metadataValue(metadata, 'LicenseShortName');
  if (!allowedLicensePattern.test(license)) return null;
  if (!String(info.mime || '').startsWith('image/')) return null;
  if ((info.width || 0) < 500 || (info.height || 0) < 400) return null;

  return {
    pageId: page.pageid,
    title: page.title.replace(/^File:/, ''),
    term,
    termIndex,
    width: info.width,
    height: info.height,
    mime: info.mime,
    thumbUrl: info.thumburl,
    originalUrl: info.url,
    sourceUrl: info.descriptionurl,
    author: metadataValue(metadata, 'Artist') || metadataValue(metadata, 'Credit') || 'Wikimedia Commons contributor',
    license,
    licenseUrl: metadataValue(metadata, 'LicenseUrl'),
    description: metadataValue(metadata, 'ImageDescription'),
    categories: metadataValue(metadata, 'Categories')
  };
}

function scoreCandidate(candidate, food, terms) {
  const haystack = normalize([
    candidate.title,
    candidate.description,
    candidate.categories
  ].join(' '));
  const fullName = normalize(food);
  let score = Math.max(0, 18 - (candidate.termIndex * 4));

  if (haystack.includes(fullName)) score += 110;
  terms.forEach((term, index) => {
    const normalizedTerm = normalize(term);
    if (normalizedTerm.length >= 2 && haystack.includes(normalizedTerm)) {
      score += Math.max(20, 72 - (index * 12));
    }
  });
  if (obviousNonFoodPattern.test(`${candidate.title} ${candidate.description}`)) score -= 90;
  if (candidate.width >= candidate.height) score += 4;
  return score;
}

async function searchFood(trail, food, foodIndex) {
  const terms = getSearchTerms(trail, food);
  const byPageId = new Map();

  for (let termIndex = 0; termIndex < terms.length; termIndex += 1) {
    const response = await fetchJson(buildApiUrl(terms[termIndex]));
    const pages = response.query?.pages || [];
    pages.forEach(page => {
      const candidate = candidateFromPage(page, terms[termIndex], termIndex);
      if (!candidate || byPageId.has(candidate.pageId)) return;
      candidate.score = scoreCandidate(candidate, food, terms);
      byPageId.set(candidate.pageId, candidate);
    });
  }

  const candidates = [...byPageId.values()]
    .sort((left, right) => right.score - left.score)
    .slice(0, candidateLimit);

  for (let index = 0; index < candidates.length; index += 1) {
    const candidate = candidates[index];
    const reviewName = `${String(foodIndex + 1).padStart(2, '0')}-${index + 1}.webp`;
    const reviewPath = path.join(reviewRoot, reviewName);
    try {
      const input = await fetchBuffer(candidate.thumbUrl);
      const output = await sharp(input)
        .rotate()
        .resize(480, 360, { fit: 'cover', position: 'attention' })
        .webp({ quality: 78, effort: 5 })
        .toBuffer();
      fs.writeFileSync(reviewPath, output);
      candidate.reviewImage = path.relative(root, reviewPath).replaceAll('\\', '/');
    } catch (error) {
      candidate.downloadError = error.message;
    }
  }

  return {
    food,
    index: foodIndex,
    terms,
    candidates
  };
}

function renderReviewPage(trail, results) {
  const groups = results.map(result => {
    const candidates = result.candidates.length > 0
      ? result.candidates.map((candidate, index) => `
          <article class="candidate" data-score="${candidate.score}">
            ${candidate.reviewImage
              ? `<img src="/${escapeHtml(candidate.reviewImage)}" alt="${escapeHtml(result.food)} 候选图 ${index + 1}" loading="lazy">`
              : '<div class="image-missing">下载失败</div>'}
            <div class="candidate-copy">
              <strong>${index + 1}. ${escapeHtml(candidate.title)}</strong>
              <span>${escapeHtml(candidate.license)} · 匹配分 ${candidate.score}</span>
              <p>${escapeHtml(candidate.description || '无图片描述')}</p>
              <a href="${escapeHtml(candidate.sourceUrl)}" target="_blank" rel="noopener">核对 Commons 来源</a>
            </div>
          </article>`).join('')
      : '<p class="empty">未找到许可与尺寸均合格的候选图。</p>';

    return `
      <section class="food-group">
        <header>
          <span>${String(result.index + 1).padStart(2, '0')}</span>
          <div>
            <h2>${escapeHtml(result.food)}</h2>
            <p>检索词：${result.terms.map(escapeHtml).join(' / ')}</p>
          </div>
        </header>
        <div class="candidate-grid">${candidates}</div>
      </section>`;
  }).join('');

  return `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="noindex, nofollow">
  <title>${escapeHtml(trail.city.zh)}视频美食图片审查</title>
  <style>
    * { box-sizing: border-box; }
    body { margin: 0; background: #f2efe8; color: #25231f; font-family: Arial, "Microsoft YaHei", sans-serif; }
    .page-head { padding: 28px clamp(18px, 4vw, 54px); border-top: 6px solid #b53b32; background: #fffdf8; }
    .page-head h1 { margin: 0 0 8px; font-size: 30px; letter-spacing: 0; }
    .page-head p { max-width: 760px; margin: 0; color: #686158; line-height: 1.6; }
    main { width: min(1500px, calc(100% - 32px)); margin: 24px auto 60px; }
    .food-group { padding: 20px 0 26px; border-bottom: 1px solid #cfc8bb; }
    .food-group > header { display: flex; align-items: center; gap: 14px; margin-bottom: 14px; }
    .food-group > header > span { width: 42px; height: 42px; display: grid; place-items: center; border: 1px solid #b53b32; border-radius: 50%; color: #b53b32; font-family: Georgia, serif; font-weight: 700; }
    h2 { margin: 0; font-size: 21px; letter-spacing: 0; }
    header p { margin: 3px 0 0; color: #777067; font-size: 12px; }
    .candidate-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 12px; }
    .candidate { min-width: 0; overflow: hidden; border: 1px solid #d2cbbc; border-radius: 6px; background: #fff; }
    .candidate img, .image-missing { width: 100%; aspect-ratio: 4 / 3; display: block; object-fit: cover; background: #ded8cd; }
    .image-missing { display: grid; place-items: center; color: #716b62; }
    .candidate-copy { padding: 11px; }
    .candidate-copy strong, .candidate-copy span { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .candidate-copy strong { font-size: 13px; }
    .candidate-copy span { margin-top: 5px; color: #9a342c; font-size: 11px; font-weight: 700; }
    .candidate-copy p { min-height: 34px; margin: 7px 0; color: #676159; font-size: 11px; line-height: 1.45; }
    .candidate-copy a { color: #1e5f6b; font-size: 11px; font-weight: 700; }
    .empty { margin: 0; padding: 18px; border: 1px dashed #aaa296; color: #6f685f; }
    @media (max-width: 980px) { .candidate-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
    @media (max-width: 520px) { main { width: min(100% - 20px, 1500px); } .candidate-grid { grid-template-columns: 1fr; } }
  </style>
</head>
<body>
  <header class="page-head">
    <h1>${escapeHtml(trail.city.zh)} · 视频美食图片候选</h1>
    <p>仅展示通过 CC0、CC BY 或 CC BY-SA 许可过滤的候选。搜索分数只用于排序，不代表图片已经核实；正式采用前必须逐张确认菜品内容与来源页。</p>
  </header>
  <main>${groups}</main>
</body>
</html>`;
}

async function runPool(items, worker) {
  const results = new Array(items.length);
  let cursor = 0;

  async function runWorker() {
    while (cursor < items.length) {
      const index = cursor;
      cursor += 1;
      results[index] = await worker(items[index], index);
      console.log(`[${index + 1}/${items.length}] ${items[index]}`);
    }
  }

  await Promise.all(Array.from({ length: concurrency }, () => runWorker()));
  return results;
}

async function main() {
  const { trails } = loadData();
  const trail = trails.find(item => item.slug === citySlug);
  if (!trail) throw new Error(`未知视频城市 slug：${citySlug}`);

  fs.mkdirSync(reviewRoot, { recursive: true });
  const results = await runPool(
    trail.foods,
    (food, index) => searchFood(trail, food, index)
  );
  const manifest = {
    generatedAt: new Date().toISOString(),
    city: trail.city,
    slug: trail.slug,
    videoId: trail.videoId,
    allowedLicenses: 'CC0, CC BY, CC BY-SA',
    results
  };
  fs.writeFileSync(
    path.join(reviewRoot, 'candidates.json'),
    `${JSON.stringify(manifest, null, 2)}\n`
  );
  fs.writeFileSync(reviewPagePath, renderReviewPage(trail, results));

  const candidateCount = results.reduce((total, result) => total + result.candidates.length, 0);
  const foodsWithCandidates = results.filter(result => result.candidates.length > 0).length;
  console.log(`候选检索完成：${trail.city.zh} ${foodsWithCandidates}/${trail.foods.length} 项，共 ${candidateCount} 张。`);
  console.log(`审查页：${path.relative(root, reviewPagePath)}`);
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
