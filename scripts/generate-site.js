const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { campaign, positioning, siteName, siteUrl } = require('./site-config');

const root = path.resolve(__dirname, '..');
const checkOnly = process.argv.includes('--check');
const analyticsSnippet = `
  <script>
    window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
  </script>
  <script defer src="/_vercel/insights/script.js"></script>`;

function loadCities() {
  const source = fs.readFileSync(path.join(root, 'js', 'data.js'), 'utf8');
  const context = {};
  vm.createContext(context);
  vm.runInContext(
    `${source}\nglobalThis.__cities = foodCitiesData; globalThis.__english = foodCitiesEnglish;`,
    context
  );
  return { cities: context.__cities, english: context.__english };
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function imageCredit(dish) {
  return `<figcaption><a href="${escapeHtml(dish.credit.sourceUrl)}" target="_blank" rel="noopener">${escapeHtml(dish.credit.author)}</a> · <a href="${escapeHtml(dish.credit.licenseUrl)}" target="_blank" rel="noopener">${escapeHtml(dish.credit.license)}</a></figcaption>`;
}

function absolute(relativePath) {
  return `${siteUrl}/${relativePath.replace(/^\/+/, '')}`;
}

function jsonLd(value) {
  return JSON.stringify(value).replaceAll('<', '\\u003c');
}

function analyticsEventAttributes(name, data = {}) {
  return `data-analytics-event="${escapeHtml(name)}" data-analytics='${escapeHtml(JSON.stringify(data))}'`;
}

function cityPath(slug, language) {
  return language === 'zh' ? `/zh/city/${slug}/` : `/city/${slug}/`;
}

function getContent(city, english, language) {
  return language === 'zh' ? city : { ...city, ...english[city.slug] };
}

function cityStructuredData(city, content, language) {
  const pageUrl = `${siteUrl}${cityPath(city.slug, language)}`;
  const imageUrl = absolute(city.heroImage);
  const dishList = {
    '@type': 'ItemList',
    name: language === 'zh' ? `${content.name}招牌美食` : `Signature dishes in ${content.name}`,
    itemListElement: content.dishes.map((dish, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: dish.name,
      description: dish.description,
      image: absolute(dish.image)
    }))
  };

  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    url: pageUrl,
    name: language === 'zh' ? `${content.name}美食指南` : `What to eat in ${content.name}`,
    description: content.description,
    inLanguage: language === 'zh' ? 'zh-CN' : 'en',
    primaryImageOfPage: imageUrl,
    mainEntity: {
      '@type': 'Place',
      name: content.name,
      alternateName: language === 'zh' ? englishName(city.slug) : city.name,
      description: content.description,
      image: imageUrl,
      geo: {
        '@type': 'GeoCoordinates',
        latitude: city.coordinates[1],
        longitude: city.coordinates[0]
      },
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: content.province
      },
      subjectOf: dishList
    },
    hasPart: dishList
  };
}

let englishLookup;
function englishName(slug) {
  return englishLookup[slug].name;
}

function cityPage(city, english, allCities, language) {
  const content = getContent(city, english, language);
  const isZh = language === 'zh';
  const pageUrl = `${siteUrl}${cityPath(city.slug, language)}`;
  const alternateUrl = `${siteUrl}${cityPath(city.slug, isZh ? 'en' : 'zh')}`;
  const title = isZh
    ? `${content.name}美食指南：${content.dishes.map(dish => dish.name).join('、')} | ${siteName}`
    : `What to Eat in ${content.name}: ${content.dishes.map(dish => dish.name).slice(0, 3).join(', ')} | ${siteName}`;
  const description = isZh
    ? `${content.name}美食地图：认识当地风味、${content.dishes.map(dish => dish.name).join('、')}及觅食提示。`
    : `Explore ${content.name}'s food culture, signature dishes including ${content.dishes.map(dish => dish.name).join(', ')}, and a practical local eating tip.`;
  const groupLabel = isZh
    ? (city.group === '经典' ? '经典美食城市' : '宝藏美食城市')
    : (city.group === '经典' ? 'Classic food city' : 'Hidden-gem food city');
  const otherCities = allCities.filter(item => item.slug !== city.slug).slice(0, 4);
  const mapUrl = isZh ? `/?lang=zh#city=${city.slug}` : `/#city=${city.slug}`;
  const languageLink = isZh ? cityPath(city.slug, 'en') : cityPath(city.slug, 'zh');
  const imageUrl = absolute(city.heroImage);

  return `<!DOCTYPE html>
<html lang="${isZh ? 'zh-CN' : 'en'}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="${escapeHtml(description)}">
  <meta name="theme-color" content="#171713">
  <meta name="robots" content="index, follow, max-image-preview:large">
  <title>${escapeHtml(title)}</title>
  <link rel="canonical" href="${pageUrl}">
  <link rel="alternate" hreflang="en" href="${siteUrl}${cityPath(city.slug, 'en')}">
  <link rel="alternate" hreflang="zh-CN" href="${siteUrl}${cityPath(city.slug, 'zh')}">
  <link rel="alternate" hreflang="x-default" href="${siteUrl}${cityPath(city.slug, 'en')}">
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="${siteName}">
  <meta property="og:locale" content="${isZh ? 'zh_CN' : 'en_US'}">
  <meta property="og:title" content="${escapeHtml(title)}">
  <meta property="og:description" content="${escapeHtml(description)}">
  <meta property="og:url" content="${pageUrl}">
  <meta property="og:image" content="${imageUrl}">
  <meta property="og:image:alt" content="${escapeHtml(content.imageAlt)}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHtml(title)}">
  <meta name="twitter:description" content="${escapeHtml(description)}">
  <meta name="twitter:image" content="${imageUrl}">
  <link rel="stylesheet" href="/css/content.css">
  <script type="application/ld+json">${jsonLd(cityStructuredData(city, content, language))}</script>
</head>
<body class="content-page city-page" data-city="${city.slug}">
  <header class="content-nav">
    <a class="content-brand" href="${isZh ? '/zh/' : '/'}"><span aria-hidden="true">味</span>${isZh ? '寻味中国' : siteName}</a>
    <nav aria-label="${isZh ? '页面导航' : 'Page navigation'}">
      <a href="${isZh ? '/zh/' : '/guides/best-food-cities-in-china/'}">${isZh ? '城市目录' : 'Food guides'}</a>
      <a href="${languageLink}" lang="${isZh ? 'en' : 'zh-CN'}">${isZh ? 'EN' : '中文'}</a>
    </nav>
  </header>

  <main>
    <section class="content-hero">
      <div class="content-hero-media">
        ${content.dishes.map((dish, index) => `<figure class="hero-media hero-media-${index + 1}"><img src="/${dish.image}" alt="${escapeHtml(dish.imageAlt)}" loading="${index === 0 ? 'eager' : 'lazy'}" decoding="async"${index === 0 ? ' fetchpriority="high"' : ''}>${imageCredit(dish)}</figure>`).join('\n        ')}
      </div>
      <div class="content-hero-copy">
        <p>${escapeHtml(groupLabel)} · ${escapeHtml(content.province)}</p>
        <h1>${escapeHtml(content.name)}</h1>
        <strong>${escapeHtml(content.tagline)}</strong>
      </div>
    </section>

    <div class="content-layout">
      <article class="content-article">
        <p class="content-lead">${escapeHtml(content.description)}</p>
        <div class="flavor-strip" aria-label="${isZh ? '风味标签' : 'Flavor profile'}">
          ${content.flavorTags.map(tag => `<span>${escapeHtml(tag)}</span>`).join('\n          ')}
        </div>

        <section aria-labelledby="dishes-title">
          <div class="numbered-heading"><span>01</span><h2 id="dishes-title">${isZh ? '从这些味道开始' : `What to eat in ${escapeHtml(content.name)}`}</h2></div>
          <ol class="landing-dishes">
            ${content.dishes.map((dish, index) => `<li><figure class="dish-photo"><img src="/${dish.image}" alt="${escapeHtml(dish.imageAlt)}" loading="lazy" decoding="async">${imageCredit(dish)}</figure><div class="dish-copy"><span>${String(index + 1).padStart(2, '0')}</span><h3>${escapeHtml(dish.name)}</h3><p>${escapeHtml(dish.description)}</p></div></li>`).join('\n            ')}
          </ol>
        </section>

        <section class="landing-tip" aria-labelledby="tip-title">
          <div class="numbered-heading"><span>02</span><h2 id="tip-title">${isZh ? '觅食提示' : 'Eat like a local'}</h2></div>
          <p>${escapeHtml(content.tip)}</p>
        </section>

        <div class="content-actions">
          <a class="primary-action map-link" href="${mapUrl}" data-map-slug="${city.slug}" ${analyticsEventAttributes('City Map Opened', { city: city.slug, language })}>${isZh ? '在互动地图中打开' : 'Open on the interactive map'}</a>
          <button class="secondary-action share-page" type="button" ${analyticsEventAttributes('Landing Page Shared', { city: city.slug, language })}>${isZh ? '分享城市' : 'Share this city'}</button>
        </div>
      </article>

      <aside class="related-cities" aria-labelledby="related-title">
        <p class="section-kicker">${isZh ? '继续探索' : 'KEEP EXPLORING'}</p>
        <h2 id="related-title">${isZh ? '下一座城市' : 'Your next food city'}</h2>
        ${otherCities.map(item => {
          const itemContent = getContent(item, english, language);
          return `<a href="${cityPath(item.slug, language)}"><span>${escapeHtml(itemContent.province)}</span><strong>${escapeHtml(itemContent.name)}</strong><small>${escapeHtml(itemContent.dishes[0].name)}</small></a>`;
        }).join('\n        ')}
      </aside>
    </div>
  </main>

  <footer class="content-footer">
    <p>${isZh ? '沿着味道认识中国城市。' : positioning}</p>
    <a href="${isZh ? '/zh/' : '/'}">${isZh ? '返回城市目录' : `Back to ${siteName}`}</a>
  </footer>
  <script src="/js/content-page.js"></script>${analyticsSnippet}
</body>
</html>
`;
}

const guideDefinitions = [
  {
    slug: 'best-food-cities-in-china',
    title: '12 Best Food Cities in China for Your Next Trip',
    description: 'A practical introduction to 12 Chinese food cities, from Chengdu and Guangzhou to Chaozhou, Yanji, and Kashgar.',
    eyebrow: 'THE ESSENTIAL LIST',
    heading: '12 Chinese cities worth traveling for food',
    intro: 'China does not have one food culture. It has hundreds of regional traditions shaped by climate, migration, trade, and local ingredients. These 12 cities are a focused place to begin.',
    filter: () => true
  },
  {
    slug: 'hidden-gem-food-cities-in-china',
    title: '6 Underrated Food Cities in China',
    description: 'Go beyond the usual stops with six hidden-gem food cities: Chaozhou, Liuzhou, Yanji, Taizhou, Kashgar, and Yangzhou.',
    eyebrow: 'BEYOND THE CLASSICS',
    heading: 'Six hidden-gem food cities',
    intro: 'The most memorable food trip is often one stop beyond the obvious itinerary. These cities reward travelers with distinctive local ingredients, techniques, and everyday eating rituals.',
    filter: city => city.group === '宝藏'
  },
  {
    slug: 'china-food-travel-map',
    title: 'How to Plan a China Food Trip by Flavor',
    description: 'Choose Chinese food cities by flavor, from numbing spice and breakfast culture to dim sum, noodles, seafood, and Silk Road cooking.',
    eyebrow: 'CHOOSE YOUR FLAVOR',
    heading: 'Build a China food trip around what you love',
    intro: 'Start with the flavor you crave, then connect two or three cities instead of trying to taste the whole country at once. This map gives you a simple first route.',
    filter: () => true
  }
];

function guidePage(guide, cities, english) {
  const selected = cities.filter(guide.filter);
  const pageUrl = `${siteUrl}/guides/${guide.slug}/`;
  const cover = selected[0];
  const listData = selected.map((city, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    url: `${siteUrl}${cityPath(city.slug, 'en')}`,
    name: english[city.slug].name
  }));

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="${escapeHtml(guide.description)}">
  <meta name="theme-color" content="#171713">
  <meta name="robots" content="index, follow, max-image-preview:large">
  <title>${escapeHtml(guide.title)} | ${siteName}</title>
  <link rel="canonical" href="${pageUrl}">
  <link rel="alternate" hreflang="en" href="${pageUrl}">
  <link rel="alternate" hreflang="x-default" href="${pageUrl}">
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="${siteName}">
  <meta property="og:title" content="${escapeHtml(guide.title)}">
  <meta property="og:description" content="${escapeHtml(guide.description)}">
  <meta property="og:url" content="${pageUrl}">
  <meta property="og:image" content="${absolute(cover.heroImage)}">
  <meta property="og:image:alt" content="${escapeHtml(english[cover.slug].imageAlt)}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHtml(guide.title)}">
  <meta name="twitter:description" content="${escapeHtml(guide.description)}">
  <meta name="twitter:image" content="${absolute(cover.heroImage)}">
  <link rel="stylesheet" href="/css/content.css">
  <script type="application/ld+json">${jsonLd({
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: guide.title,
    description: guide.description,
    url: pageUrl,
    inLanguage: 'en',
    mainEntity: { '@type': 'ItemList', itemListElement: listData }
  })}</script>
</head>
<body class="content-page guide-page">
  <header class="content-nav">
    <a class="content-brand" href="/"><span aria-hidden="true">味</span>${siteName}</a>
    <nav aria-label="Page navigation"><a href="/">Interactive map</a><a href="/zh/" lang="zh-CN">中文</a></nav>
  </header>
  <main>
    <section class="guide-hero" style="--guide-image: url('/${cover.heroImage}')">
      <p>${guide.eyebrow}</p>
      <h1>${guide.heading}</h1>
      <strong>${guide.intro}</strong>
    </section>
    <section class="guide-grid" aria-label="Featured food cities">
      ${selected.map((city, index) => {
        const content = english[city.slug];
        return `<article class="guide-city">
          <a href="${cityPath(city.slug, 'en')}" ${analyticsEventAttributes('Guide City Opened', { guide: guide.slug, city: city.slug })}>
            <img src="/${city.heroImage}" alt="${escapeHtml(content.imageAlt)}" loading="${index < 2 ? 'eager' : 'lazy'}">
            <div><span>${String(index + 1).padStart(2, '0')} · ${escapeHtml(content.province)}</span><h2>${escapeHtml(content.name)}</h2><p>${escapeHtml(content.tagline)}</p><small>${content.dishes.map(dish => escapeHtml(dish.name)).join(' · ')}</small></div>
          </a>
        </article>`;
      }).join('\n      ')}
    </section>
  </main>
  <footer class="content-footer"><p>${positioning}</p><a href="/">Explore the map</a></footer>
  <script src="/js/content-page.js"></script>${analyticsSnippet}
</body>
</html>
`;
}

function chineseHub(cities) {
  const pageUrl = `${siteUrl}/zh/`;
  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="探索 12 座中国美食城市，从成都、广州到潮州、延吉和喀什。">
  <meta name="theme-color" content="#171713">
  <meta name="robots" content="index, follow, max-image-preview:large">
  <title>寻味中国：12 座美食城市地图</title>
  <link rel="canonical" href="${pageUrl}">
  <link rel="alternate" hreflang="en" href="${siteUrl}/">
  <link rel="alternate" hreflang="zh-CN" href="${pageUrl}">
  <link rel="alternate" hreflang="x-default" href="${siteUrl}/">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="${siteName}">
  <meta property="og:locale" content="zh_CN">
  <meta property="og:title" content="寻味中国：12 座美食城市地图">
  <meta property="og:description" content="沿着味道认识中国城市，从一碗面、一笼点心或一锅热汤开始。">
  <meta property="og:url" content="${pageUrl}">
  <meta property="og:image" content="${absolute(cities[0].heroImage)}">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="stylesheet" href="/css/content.css">
  <script type="application/ld+json">${jsonLd({
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: '寻味中国',
    url: pageUrl,
    inLanguage: 'zh-CN',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: cities.map((city, index) => ({
        '@type': 'ListItem', position: index + 1, name: city.name, url: `${siteUrl}${cityPath(city.slug, 'zh')}`
      }))
    }
  })}</script>
</head>
<body class="content-page hub-page">
  <header class="content-nav"><a class="content-brand" href="/zh/"><span aria-hidden="true">味</span>寻味中国</a><nav aria-label="页面导航"><a href="/?lang=zh">互动地图</a><a href="/" lang="en">EN</a></nav></header>
  <main>
    <section class="guide-hero" style="--guide-image: url('/${cities[0].heroImage}')"><p>中国美食探索地图</p><h1>沿着味道，认识一座城</h1><strong>从一碗面、一笼点心或一锅热汤开始，探索 12 座各有性格的美食城市。</strong><a class="primary-action" href="/?lang=zh">打开互动地图</a></section>
    <section class="guide-grid" aria-label="美食城市目录">
      ${cities.map((city, index) => `<article class="guide-city"><a href="${cityPath(city.slug, 'zh')}"><img src="/${city.heroImage}" alt="${escapeHtml(city.imageAlt)}" loading="${index < 2 ? 'eager' : 'lazy'}"><div><span>${String(index + 1).padStart(2, '0')} · ${escapeHtml(city.province)}</span><h2>${escapeHtml(city.name)}</h2><p>${escapeHtml(city.tagline)}</p><small>${city.dishes.map(dish => escapeHtml(dish.name)).join(' · ')}</small></div></a></article>`).join('\n      ')}
    </section>
  </main>
  <footer class="content-footer"><p>沿着味道认识中国城市。</p><a href="/?lang=zh">打开互动地图</a></footer>
  <script src="/js/content-page.js"></script>${analyticsSnippet}
</body>
</html>
`;
}

function marketingCards(cities, english) {
  const classic = cities.filter(city => city.group === '经典');
  const hidden = cities.filter(city => city.group === '宝藏');
  const flavorRoutes = [
    ['Spice first', ['chengdu', 'chongqing', 'changsha']],
    ['Slow mornings', ['guangzhou', 'wuhan', 'yangzhou']],
    ['A different bowl of noodles', ['xian', 'liuzhou', 'yanji']]
  ];

  const cityCard = city => {
    const content = english[city.slug];
    return `<article class="social-card" id="card-${city.slug}" style="--card-image: url('/${city.heroImage}')">
      <div class="card-top"><span>${city.group === '经典' ? 'THE CLASSICS' : 'HIDDEN GEMS'}</span><b>${siteName}</b></div>
      <div class="card-copy"><small>${escapeHtml(content.province)}</small><h2>${escapeHtml(content.name)}</h2><p>${escapeHtml(content.tagline)}</p><ol>${content.dishes.map(dish => `<li>${escapeHtml(dish.name)}</li>`).join('')}</ol><strong>${new URL(siteUrl).host}/city/${city.slug}/</strong></div>
    </article>`;
  };

  const comparisonGuides = {
    1: 'best-food-cities-in-china',
    2: 'hidden-gem-food-cities-in-china',
    3: 'china-food-travel-map'
  };
  const comparison = (title, subtitle, selected, index) => `<article class="comparison-card comparison-${index}" style="--card-image: url('/${selected[0].heroImage}')"><div class="card-top"><span>SWIPE GUIDE ${String(index).padStart(2, '0')}</span><b>${siteName}</b></div><div class="card-copy"><small>CHINA FOOD TRAVEL</small><h2>${escapeHtml(title)}</h2><p>${escapeHtml(subtitle)}</p><ol>${selected.map(city => `<li>${escapeHtml(english[city.slug].name)} <em>${escapeHtml(english[city.slug].dishes[0].name)}</em></li>`).join('')}</ol><strong>${new URL(siteUrl).host}/guides/${comparisonGuides[index]}/</strong></div></article>`;

  const flavorCities = flavorRoutes.flatMap(([, slugs]) => (
    slugs.slice(0, 2).map(slug => cities.find(city => city.slug === slug))
  ));

  return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="robots" content="noindex, nofollow"><title>${siteName} Social Card Kit</title><link rel="stylesheet" href="/marketing/cards/cards.css"></head><body><header class="kit-header"><p>ORGANIC LAUNCH KIT</p><h1>${siteName} social cards</h1><span>12 city spotlights and 3 comparison carousel covers · 4:5 format</span></header><main><section><h2>City spotlights</h2><div class="card-grid">${cities.map(cityCard).join('\n')}</div></section><section><h2>Comparison carousel covers</h2><div class="card-grid">${comparison('Start with the classics', 'Six essential stops for a first food trip across China.', classic, 1)}${comparison('Go beyond the obvious', 'Six hidden-gem cities with local flavors worth the detour.', hidden, 2)}${comparison('Choose your flavor', 'Build a route around spice, breakfast culture, or noodles.', flavorCities, 3)}</div></section></main></body></html>`;
}

function socialCopy(cities, english) {
  const lines = [
    '# Taste China Social Copy',
    '',
    `Campaign: \`${campaign}\``,
    '',
    'Use one city per post. Keep the first paragraph useful without requiring a click, then link to the matching city page.',
    ''
  ];

  cities.forEach((city, index) => {
    const content = english[city.slug];
    lines.push(
      `## ${String(index + 1).padStart(2, '0')}. ${content.name}`,
      '',
      `${content.name} is a city to taste through ${content.dishes.slice(0, 3).map(dish => dish.name).join(', ')}, and ${content.dishes[3]?.name || content.dishes[0].name}. ${content.tagline}`,
      '',
      `Start here: ${siteUrl}/city/${city.slug}/`,
      '',
      `Alt text: ${content.imageAlt}.`,
      '',
      `Hashtags: #ChinaTravel #FoodTravel #${content.name.replaceAll(' ', '')} #TasteChina`,
      ''
    );
  });

  lines.push(
    '## Comparison Posts',
    '',
    '### Start with the classics',
    '',
    'Six essential food stops for a first trip across China: Chengdu, Xi\'an, Guangzhou, Changsha, Wuhan, and Chongqing.',
    '',
    `Start here: ${siteUrl}/guides/best-food-cities-in-china/`,
    '',
    'Asset: `exports/comparison-classics.jpg`',
    '',
    'Hashtags: #ChinaTravel #FoodTravel #TasteChina',
    '',
    '### Go beyond the obvious',
    '',
    'Look one stop beyond the usual itinerary to Chaozhou, Liuzhou, Yanji, Taizhou, Kashgar, and Yangzhou.',
    '',
    `Start here: ${siteUrl}/guides/hidden-gem-food-cities-in-china/`,
    '',
    'Asset: `exports/comparison-hidden-gems.jpg`',
    '',
    'Hashtags: #ChinaTravel #HiddenGems #FoodTravel #TasteChina',
    '',
    '### Choose your China food trip by flavor',
    '',
    'For spice: Chengdu, Chongqing, Changsha. For slow breakfasts: Guangzhou, Wuhan, Yangzhou. For unforgettable noodles: Xi\'an, Liuzhou, Yanji.',
    '',
    `Start here: ${siteUrl}/guides/china-food-travel-map/`,
    '',
    'Asset: `exports/comparison-flavors.jpg`',
    '',
    'Hashtags: #ChinaTravel #FoodTravel #ChinaFood #TasteChina'
  );
  return `${lines.join('\n')}\n`;
}

function utmCsv(cities) {
  const channels = [
    ['pinterest', 'organic_social'],
    ['instagram', 'organic_social'],
    ['reddit', 'community'],
    ['creator', 'referral']
  ];
  const destinations = [
    ...cities.map(city => ({ content: city.slug, type: 'city', path: `/city/${city.slug}/`, asset: `${city.slug}_city_card` })),
    ...guideDefinitions.map(guide => ({ content: guide.slug, type: 'guide', path: `/guides/${guide.slug}/`, asset: `${guide.slug}_comparison_card` }))
  ];
  const rows = ['content,type,channel,url'];
  destinations.forEach(destination => {
    channels.forEach(([source, medium]) => {
      const url = new URL(`${siteUrl}${destination.path}`);
      url.searchParams.set('utm_source', source);
      url.searchParams.set('utm_medium', medium);
      url.searchParams.set('utm_campaign', campaign);
      url.searchParams.set('utm_content', destination.asset);
      rows.push(`${destination.content},${destination.type},${source},${url.toString()}`);
    });
  });
  return `${rows.join('\n')}\n`;
}

function dishSources(cities, english) {
  const lines = [
    '# 菜品图片来源',
    '',
    '本目录图片均裁切为 1200×900 WebP。除 CC0 作品外，改编图片沿用原作品许可；作者名和许可链接同时显示在使用图片的页面旁。',
    '',
    '| 城市 | 菜品 | 英文名 | 作者 | 许可 | 原作品 |',
    '| --- | --- | --- | --- | --- | --- |'
  ];

  cities.forEach(city => {
    city.dishes.forEach((dish, index) => {
      const englishDish = english[city.slug].dishes[index];
      lines.push(`| ${city.name} | ${dish.name} | ${englishDish.name} | ${dish.credit.author} | [${dish.credit.license}](${dish.credit.licenseUrl}) | [查看来源](${dish.credit.sourceUrl}) |`);
    });
  });

  return `${lines.join('\n')}\n`;
}

function imageReview(cities, english) {
  const citySections = cities.map(city => `<section><header><p>${escapeHtml(city.province)} · ${escapeHtml(english[city.slug].name)}</p><h2>${escapeHtml(city.name)}</h2></header><div class="review-grid">${city.dishes.map((dish, index) => `<figure><img src="/${dish.image}" alt="${escapeHtml(dish.imageAlt)}" loading="lazy"><figcaption><strong>${escapeHtml(dish.name)}</strong><span>${escapeHtml(english[city.slug].dishes[index].name)}</span><small>${escapeHtml(dish.credit.author)} · ${escapeHtml(dish.credit.license)}</small></figcaption></figure>`).join('')}</div></section>`).join('\n');
  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="robots" content="noindex, nofollow">
  <title>48 张菜品图片审核表</title>
  <style>
    *{box-sizing:border-box}body{margin:0;color:#171713;background:#f7f6f2;font-family:Arial,"Microsoft YaHei",sans-serif;letter-spacing:0}main{width:min(1440px,calc(100% - 40px));margin:auto;padding:48px 0 100px}h1{margin:0;font:700 48px Georgia,serif}.intro{max-width:760px;line-height:1.7}.checklist{display:flex;flex-wrap:wrap;gap:8px 24px;padding:16px 0 28px;border-bottom:2px solid #171713;list-style:none}.checklist li{font-size:13px;font-weight:700}section{padding:42px 0;border-bottom:1px solid #bbb}section header{display:flex;align-items:end;gap:18px;margin-bottom:18px}section h2,section p{margin:0}section h2{font:500 36px Georgia,serif}section p{color:#666;font-size:12px;font-weight:700}.review-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:18px}figure{margin:0;background:#fff}img{display:block;width:100%;aspect-ratio:4/3;object-fit:cover}figcaption{display:grid;gap:4px;padding:12px}figcaption strong{font-size:16px}figcaption span,figcaption small{color:#666;font-size:12px}@media(max-width:800px){main{width:calc(100% - 28px);padding-top:28px}h1{font-size:34px}.review-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:460px){.review-grid{grid-template-columns:1fr}}
  </style>
</head>
<body><main><h1>48 张菜品图片审核表</h1><p class="intro">此页面仅用于发布前人工审核，不进入生产构建。逐张检查菜品准确性、构图、色调、清晰度及是否含水印或商家宣传。</p><ul class="checklist"><li>□ 菜品与名称相符</li><li>□ 主体清晰</li><li>□ 裁切自然</li><li>□ 无水印或广告</li><li>□ 许可已记录</li></ul>${citySections}</main></body>
</html>
`;
}

function sitemap(cities) {
  const urls = [
    ['/', '1.0'],
    ['/zh/', '0.8'],
    ...guideDefinitions.map(guide => [`/guides/${guide.slug}/`, '0.8']),
    ...cities.flatMap(city => [[cityPath(city.slug, 'en'), '0.9'], [cityPath(city.slug, 'zh'), '0.7']])
  ];
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(([url, priority]) => `  <url><loc>${siteUrl}${url}</loc><changefreq>monthly</changefreq><priority>${priority}</priority></url>`).join('\n')}\n</urlset>\n`;
}

function buildFiles() {
  const { cities, english } = loadCities();
  englishLookup = english;
  const files = new Map();

  cities.forEach(city => {
    files.set(path.join('city', city.slug, 'index.html'), cityPage(city, english, cities, 'en'));
    files.set(path.join('zh', 'city', city.slug, 'index.html'), cityPage(city, english, cities, 'zh'));
  });
  guideDefinitions.forEach(guide => {
    files.set(path.join('guides', guide.slug, 'index.html'), guidePage(guide, cities, english));
  });

  files.set(path.join('zh', 'index.html'), chineseHub(cities));
  files.set(path.join('marketing', 'cards', 'index.html'), marketingCards(cities, english));
  files.set(path.join('marketing', 'social-copy.md'), socialCopy(cities, english));
  files.set(path.join('marketing', 'utm-links.csv'), utmCsv(cities));
  files.set(path.join('marketing', 'image-review.html'), imageReview(cities, english));
  files.set(path.join('assets', 'dishes', 'SOURCES.md'), dishSources(cities, english));
  files.set('sitemap.xml', sitemap(cities));
  files.set('robots.txt', `User-agent: *\nAllow: /\nDisallow: /marketing/\n\nSitemap: ${siteUrl}/sitemap.xml\n`);
  return files;
}

const files = buildFiles();
const differences = [];

files.forEach((content, relativePath) => {
  const outputPath = path.join(root, relativePath);
  if (checkOnly) {
    if (!fs.existsSync(outputPath) || fs.readFileSync(outputPath, 'utf8') !== content) differences.push(relativePath);
    return;
  }
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, content, 'utf8');
});

if (checkOnly && differences.length) {
  throw new Error(`Generated site files are stale or missing: ${differences.join(', ')}`);
}

console.log(checkOnly ? `Generated site check passed: ${files.size} files.` : `Generated site written: ${files.size} files.`);
