// 中国美食探索地图交互逻辑。
const UI_TRANSLATIONS = {
  en: {
    pageTitle: "Taste China - A Map of China's Food Cities",
    metaDescription: "Explore 12 of China's great food cities, discover signature dishes, and save the places you want to taste next.",
    brandHome: 'Return to the Taste China map',
    brandName: 'Taste China',
    brandTagline: '12 cities. One delicious map.',
    language: 'Language',
    searchLabel: 'Search cities or Chinese foods',
    searchPlaceholder: 'Search cities or Chinese foods',
    clearSearch: 'Clear search',
    searchResults: 'Search results',
    openFavorites: 'Open my wish list',
    favoritesLabel: 'Wish list',
    favoritesCount: 'Saved cities',
    foodsGuide: '19 foods',
    foodsGuideLabel: 'Open the Chinese food guide',
    mapLabel: "Map of China's food cities",
    mapEyebrow: "A MAP OF CHINA'S FOOD CITIES",
    mapTitle: 'Meet a city through its flavors',
    mapIntro: 'Pick a city and begin with a bowl of noodles, a bamboo steamer, or a bubbling pot.',
    mapStats: 'Map overview',
    citiesUnit: 'cities',
    dishesUnit: 'signature dishes',
    cityIndexLabel: 'Featured food cities',
    cityIndexTitle: 'CITY INDEX',
    classicCities: 'Classics',
    hiddenGemCities: 'Hidden gems',
    closeDetails: 'Close city details',
    close: 'Close',
    imageCredit: 'Image license:',
    sourceNotes: 'source notes',
    galleryLabel: 'Signature dish gallery',
    previousImage: 'Previous dish image',
    nextImage: 'Next dish image',
    viewDishImage: 'View the photo of {dish}',
    imageCount: '{current} of {total}',
    flavorTags: 'Flavor tags',
    signatureDishes: 'Signature dishes',
    foodTip: 'How to eat like a local',
    addFavorite: 'Add to wish list',
    addedFavorite: 'Saved to wish list',
    shareCity: 'Share city',
    closeFavorites: 'Close wish list',
    favoritesTitle: 'My wish list',
    loading: 'Setting the table',
    classicFlavor: 'Classic flavor',
    hiddenGemFlavor: 'Hidden-gem flavor',
    noResults: 'No matching city or food found',
    matchPrefix: 'Match: {dishes}',
    foodGuideResult: 'Food guide · {region}',
    emptyFavoritesTitle: 'Your wish list is empty',
    emptyFavoritesBody: 'Open a city on the map and save the flavors you want to try.',
    removeFavorite: 'Remove {city} from wish list',
    remove: 'Remove',
    favoriteAdded: '{city} added to your wish list',
    favoriteRemoved: '{city} removed from your wish list',
    linkCopied: 'City link copied',
    copyLink: 'Copy this city link:',
    shareTitle: 'Taste {city} - Taste China',
    shareText: '{tagline} Signature dishes: {dishes}',
    mapLoadError: 'The map could not load. Check your connection and refresh.',
    detailedMapFallback: 'Detailed map unavailable. Showing the simplified offline map.',
    markerAlt: '{city} food-city marker',
    imageFallback: 'Image unavailable. The flavors are still here.',
    mapAttributionDetailed: '<a href="https://openfreemap.org/" target="_blank" rel="noopener">OpenFreeMap</a> · © <a href="https://openmaptiles.org/" target="_blank" rel="noopener">OpenMapTiles</a> · Data from <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> · Taste China',
    mapAttributionFallback: 'Land data: <a href="https://www.naturalearthdata.com/" target="_blank" rel="noopener">Natural Earth</a> · Taste China'
  },
  zh: {
    pageTitle: '寻味中国 - 中国美食探索地图',
    metaDescription: '在中国地图上探索 12 座美食城市，收藏想去的地方，发现每座城市的招牌味道。',
    brandHome: '返回寻味中国地图首页',
    brandName: '寻味中国',
    brandTagline: '12 座城市，一张好吃的地图',
    language: '语言',
    searchLabel: '搜索城市或中国美食',
    searchPlaceholder: '搜索城市或中国美食',
    clearSearch: '清空搜索',
    searchResults: '搜索结果',
    openFavorites: '打开我的想吃清单',
    favoritesLabel: '想吃清单',
    favoritesCount: '收藏数量',
    foodsGuide: '美食图鉴',
    foodsGuideLabel: '打开中华美食图鉴',
    mapLabel: '中国美食城市地图',
    mapEyebrow: '中国美食探索地图',
    mapTitle: '顺着味道，认识一座城',
    mapIntro: '点击地图上的城市，从一碗面、一笼点心或一锅热汤开始。',
    mapStats: '地图数据概览',
    citiesUnit: '座城市',
    dishesUnit: '道招牌味道',
    cityIndexLabel: '首发美食城市',
    cityIndexTitle: '城市索引',
    classicCities: '经典城市',
    hiddenGemCities: '宝藏城市',
    closeDetails: '关闭城市详情',
    close: '关闭',
    imageCredit: '图片许可见',
    sourceNotes: '来源说明',
    galleryLabel: '招牌菜图片画廊',
    previousImage: '上一张菜品图片',
    nextImage: '下一张菜品图片',
    viewDishImage: '查看{dish}图片',
    imageCount: '第 {current} / {total} 张',
    flavorTags: '风味标签',
    signatureDishes: '招牌味道',
    foodTip: '怎么吃更对味',
    addFavorite: '加入想吃清单',
    addedFavorite: '已加入想吃清单',
    shareCity: '分享城市',
    closeFavorites: '关闭想吃清单',
    favoritesTitle: '我的想吃清单',
    loading: '正在铺开美食地图',
    classicFlavor: '经典风味',
    hiddenGemFlavor: '宝藏风味',
    noResults: '没有找到相关城市或美食',
    matchPrefix: '匹配：{dishes}',
    foodGuideResult: '美食图鉴 · {region}',
    emptyFavoritesTitle: '清单还是空的',
    emptyFavoritesBody: '在地图上打开一座城市，把想吃的味道留在这里。',
    removeFavorite: '从想吃清单移除{city}',
    remove: '移除',
    favoriteAdded: '已把{city}加入想吃清单',
    favoriteRemoved: '已从想吃清单移除{city}',
    linkCopied: '城市链接已复制',
    copyLink: '复制这个城市链接：',
    shareTitle: '寻味{city} - 寻味中国',
    shareText: '{tagline} 招牌味道：{dishes}',
    mapLoadError: '地图资源加载失败，请检查网络后刷新',
    detailedMapFallback: '详细地图暂不可用，已切换到简化离线地图',
    markerAlt: '{city}美食城市标记',
    imageFallback: '图片暂时缺席，味道仍在',
    mapAttributionDetailed: '<a href="https://openfreemap.org/" target="_blank" rel="noopener">OpenFreeMap</a> · © <a href="https://openmaptiles.org/" target="_blank" rel="noopener">OpenMapTiles</a> · 数据来自 <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> · 寻味中国',
    mapAttributionFallback: '陆地数据：<a href="https://www.naturalearthdata.com/" target="_blank" rel="noopener">Natural Earth</a> · 寻味中国'
  }
};

class FoodMapApp {
  constructor() {
    this.cities = foodCitiesData;
    this.featuredFoods = typeof featuredFoodsData === 'undefined' ? [] : featuredFoodsData;
    this.language = this.loadLanguage();
    this.map = null;
    this.markers = new Map();
    this.attributionControl = null;
    this.detailedMapLayer = null;
    this.detailedMapReady = false;
    this.detailedMapTimer = null;
    this.detailedMapFallbackShown = false;
    this.currentCity = null;
    this.lastTrigger = null;
    this.toastTimer = null;
    this.tileErrorShown = false;
    this.galleryIndex = 0;
    this.galleryDishes = [];
    this.galleryTouchStartX = null;
    this.favoriteSlugs = this.loadFavorites();

    this.cacheElements();
    this.applyStaticTranslations();
    this.renderCityIndex();
    this.bindEvents();
    this.updateFavoritesCount();
    this.initMap();
  }

  cacheElements() {
    this.elements = {
      loading: document.getElementById('loading'),
      metaDescription: document.querySelector('meta[name="description"]'),
      languageOptions: document.querySelectorAll('.language-option'),
      searchContainer: document.getElementById('searchContainer'),
      searchInput: document.getElementById('searchInput'),
      searchClear: document.getElementById('searchClear'),
      searchResults: document.getElementById('searchResults'),
      cityIndex: document.getElementById('cityIndex'),
      cityDrawer: document.getElementById('cityDrawer'),
      drawerBackdrop: document.getElementById('drawerBackdrop'),
      drawerClose: document.getElementById('drawerClose'),
      cityVisual: document.getElementById('cityVisual'),
      drawerGallery: document.getElementById('drawerGallery'),
      galleryTrack: document.getElementById('galleryTrack'),
      galleryPrevious: document.getElementById('galleryPrevious'),
      galleryNext: document.getElementById('galleryNext'),
      galleryDishName: document.getElementById('galleryDishName'),
      galleryCounter: document.getElementById('galleryCounter'),
      gallerySource: document.getElementById('gallerySource'),
      galleryLicense: document.getElementById('galleryLicense'),
      cityGroup: document.getElementById('cityGroup'),
      cityProvince: document.getElementById('cityProvince'),
      cityName: document.getElementById('cityName'),
      cityTagline: document.getElementById('cityTagline'),
      flavorTags: document.getElementById('flavorTags'),
      cityDescription: document.getElementById('cityDescription'),
      dishList: document.getElementById('dishList'),
      cityTip: document.getElementById('cityTip'),
      favoriteBtn: document.getElementById('favoriteBtn'),
      shareBtn: document.getElementById('shareBtn'),
      favoritesBtn: document.getElementById('favoritesBtn'),
      foodsGuideLink: document.getElementById('foodsGuideLink'),
      favoritesCount: document.querySelector('.favorites-count'),
      favoritesModal: document.getElementById('favoritesModal'),
      favoritesBackdrop: document.getElementById('favoritesBackdrop'),
      favoritesClose: document.getElementById('favoritesClose'),
      favoritesList: document.getElementById('favoritesList'),
      toast: document.getElementById('toast')
    };
  }

  loadLanguage() {
    const requested = typeof window !== 'undefined' && window.location?.search
      ? new URLSearchParams(window.location.search).get('lang')
      : null;
    if (requested === 'zh' || requested === 'en') return requested;

    const saved = localStorage.getItem('foodMapLanguage');
    return saved === 'zh' || saved === 'en' ? saved : 'en';
  }

  trackEvent(name, data = {}) {
    if (typeof window.va === 'function') {
      window.va('event', { name, data });
    }
  }

  t(key, replacements = {}) {
    const value = UI_TRANSLATIONS[this.language][key] || UI_TRANSLATIONS.en[key] || key;
    return value.replace(/\{(\w+)\}/g, (_, name) => replacements[name] ?? '');
  }

  getCityContent(city, language = this.language) {
    if (language === 'zh') return city;
    return { ...city, ...foodCitiesEnglish[city.slug] };
  }

  getGroupLabel(city) {
    return city.group === '经典' ? this.t('classicFlavor') : this.t('hiddenGemFlavor');
  }

  applyStaticTranslations() {
    document.documentElement.lang = this.language === 'zh' ? 'zh-CN' : 'en';
    document.title = this.t('pageTitle');
    this.elements.metaDescription.content = this.t('metaDescription');

    document.querySelectorAll('[data-i18n]').forEach(element => {
      element.textContent = this.t(element.dataset.i18n);
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(element => {
      element.setAttribute('aria-label', this.t(element.dataset.i18nAria));
    });
    document.querySelectorAll('[data-i18n-title]').forEach(element => {
      element.title = this.t(element.dataset.i18nTitle);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
      element.placeholder = this.t(element.dataset.i18nPlaceholder);
    });

    this.elements.languageOptions.forEach(button => {
      const selected = button.dataset.language === this.language;
      button.classList.toggle('is-active', selected);
      button.setAttribute('aria-pressed', selected ? 'true' : 'false');
    });
    if (this.elements.foodsGuideLink) {
      this.elements.foodsGuideLink.href = this.language === 'zh'
        ? '/zh/guides/chinese-foods/'
        : '/guides/chinese-foods/';
    }
    this.elements.cityVisual.dataset.fallback = this.t('imageFallback');
  }

  setLanguage(language) {
    if (!UI_TRANSLATIONS[language] || language === this.language) return;

    this.language = language;
    localStorage.setItem('foodMapLanguage', language);
    if (window.location?.href && typeof history !== 'undefined') {
      const url = new URL(window.location.href);
      if (language === 'zh') url.searchParams.set('lang', 'zh');
      else url.searchParams.delete('lang');
      history.replaceState(null, '', `${url.pathname}${url.search}${url.hash}`);
    }
    this.applyStaticTranslations();
    this.renderCityIndex();
    this.updateSelectedCity(this.currentCity?.slug || null);
    this.refreshAttribution();

    if (this.currentCity) this.populateDrawer(this.currentCity);
    if (this.elements.favoritesModal.classList.contains('is-open')) this.renderFavorites();
    if (this.elements.searchInput.value.trim()) this.renderSearchResults(this.elements.searchInput.value);
    this.trackEvent('Language Changed', { language });
  }

  async initMap() {
    if (typeof L === 'undefined') {
      this.hideLoading();
      this.showToast(this.t('mapLoadError'));
      return;
    }

    const chinaBounds = [[18.1, 73.4], [53.6, 135.1]];

    this.map = L.map('map', {
      center: [35.8, 103.8],
      zoom: 5,
      minZoom: 4,
      maxZoom: 11,
      zoomControl: false,
      attributionControl: false,
      maxBounds: chinaBounds,
      maxBoundsViscosity: 0.85
    });

    L.control.zoom({ position: 'bottomleft' }).addTo(this.map);

    this.map.createPane('landPane');
    this.map.getPane('landPane').style.zIndex = 190;
    this.map.getPane('landPane').style.pointerEvents = 'none';

    try {
      const response = await fetch('/assets/maps/land-110m.geojson');
      if (!response.ok) throw new Error(`Land data request failed with ${response.status}`);

      const land = await response.json();
      L.geoJSON(land, {
        pane: 'landPane',
        interactive: false,
        style: {
          color: '#aeb4aa',
          fillColor: '#d8dbd3',
          fillOpacity: 1,
          weight: 1
        }
      }).addTo(this.map);
    } catch (error) {
      console.warn('Local land data could not load.', error);
    }

    this.map.invalidateSize({ animate: false, pan: false });
    this.map.fitBounds(chinaBounds, { padding: [24, 24], animate: false });

    this.addDetailedMap();
    this.refreshAttribution();
    this.addMarkers();

    this.map.whenReady(() => {
      this.hideLoading();
      this.syncFromHash();
    });
  }

  addDetailedMap() {
    const mapElement = document.getElementById('map');
    const canRenderDetailedMap = typeof maplibregl !== 'undefined'
      && typeof L.maplibreGL === 'function';

    if (!canRenderDetailedMap) {
      this.useFallbackMap();
      return;
    }

    this.detailedMapLayer = L.maplibreGL({
      style: 'https://tiles.openfreemap.org/styles/liberty',
      attributionControl: false,
      pane: 'tilePane',
      interactive: false,
      // Keep low-zoom wide viewports centered on China instead of clamping at the world edge.
      renderWorldCopies: true
    }).addTo(this.map);

    const detailedMap = this.detailedMapLayer.getMaplibreMap();
    detailedMap.on('error', () => {});
    detailedMap.once('load', () => {
      if (!this.detailedMapLayer) return;

      this.syncDetailedMap();
      window.requestAnimationFrame(() => {
        if (!this.detailedMapLayer) return;

        this.syncDetailedMap();
        window.clearTimeout(this.detailedMapTimer);
        this.detailedMapReady = true;
        mapElement.classList.add('map-detailed-ready');
        this.refreshAttribution();

        // After the MapLibre GL layer loads and syncs, the map container
        // layout may have shifted. Invalidate size so Leaflet recalculates
        // marker positions — otherwise markers appear offset until the
        // user zooms, which internally triggers the same recalculation.
        this.map.invalidateSize({ animate: false, pan: false });
      });
    });

    this.detailedMapTimer = window.setTimeout(() => {
      if (!this.detailedMapReady) this.useFallbackMap();
    }, 8000);
  }

  syncDetailedMap() {
    if (!this.map || !this.detailedMapLayer) return;

    const detailedMap = this.detailedMapLayer.getMaplibreMap();
    const center = this.map.getCenter();
    detailedMap.resize();
    detailedMap.jumpTo({
      center: [center.lng, center.lat],
      zoom: this.map.getZoom() - 1
    });
  }

  useFallbackMap() {
    window.clearTimeout(this.detailedMapTimer);
    document.getElementById('map').classList.remove('map-detailed-ready');
    this.detailedMapReady = false;

    if (this.detailedMapLayer && this.map.hasLayer(this.detailedMapLayer)) {
      this.map.removeLayer(this.detailedMapLayer);
    }
    this.detailedMapLayer = null;
    this.refreshAttribution();

    if (!this.detailedMapFallbackShown) {
      this.detailedMapFallbackShown = true;
      this.showToast(this.t('detailedMapFallback'));
    }
  }

  addMarkers() {
    this.cities.forEach(city => {
      const content = this.getCityContent(city);
      const marker = L.marker([city.coordinates[1], city.coordinates[0]], {
        icon: this.createMarkerIcon(city, false),
        title: `${content.name} · ${content.tagline}`,
        alt: this.t('markerAlt', { city: content.name }),
        riseOnHover: true
      });

      marker.on('click', event => {
        this.lastTrigger = event.originalEvent?.target || null;
        this.selectCity(city, { updateHash: true });
      });

      marker.bindTooltip(`${content.name} · ${content.dishes[0].name}`, {
        direction: 'top',
        offset: [0, -18],
        className: 'city-tooltip'
      });

      marker.addTo(this.map);
      this.markers.set(city.slug, marker);
    });
  }

  createMarkerIcon(city, selected) {
    const groupClass = city.group === '经典' ? 'classic' : 'hidden-gem';
    const selectedClass = selected ? ' is-selected' : '';
    const content = this.getCityContent(city);

    return L.divIcon({
      className: 'city-marker-shell',
      html: `
        <span class="city-marker ${groupClass}${selectedClass}">
          <i class="marker-pulse"></i>
          <i class="marker-core"></i>
          <span class="marker-label">${content.name}</span>
        </span>
      `,
      iconSize: [40, 40],
      iconAnchor: [20, 20]
    });
  }

  renderCityIndex() {
    const fragment = document.createDocumentFragment();

    this.cities.forEach((city, index) => {
      const content = this.getCityContent(city);
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'city-index-btn';
      button.dataset.slug = city.slug;
      button.innerHTML = `<span>${String(index + 1).padStart(2, '0')}</span>${content.name}`;
      button.addEventListener('click', event => {
        this.lastTrigger = event.currentTarget;
        this.selectCity(city, { updateHash: true });
      });
      fragment.appendChild(button);
    });

    this.elements.cityIndex.replaceChildren(fragment);
  }

  selectCity(city, { updateHash = false } = {}) {
    if (!city) return;

    this.currentCity = city;
    this.populateDrawer(city);
    this.updateSelectedCity(city.slug);
    this.elements.cityDrawer.classList.add('is-open');
    this.elements.drawerBackdrop.classList.add('is-visible');
    this.elements.cityDrawer.setAttribute('aria-hidden', 'false');
    document.body.classList.add('drawer-open');

    if (this.map) {
      const targetZoom = window.matchMedia('(max-width: 760px)').matches ? 6 : 7;
      this.map.flyTo([city.coordinates[1], city.coordinates[0]], targetZoom, {
        duration: 0.8
      });
    }

    if (updateHash) {
      const nextHash = `#city=${city.slug}`;
      if (window.location.hash !== nextHash) {
        history.pushState(null, '', nextHash);
      }
    }

    this.trackEvent('City Viewed', { city: city.slug, language: this.language });
  }

  populateDrawer(city) {
    const { elements } = this;
    const content = this.getCityContent(city);

    this.renderDishGallery(content);
    elements.cityGroup.textContent = this.getGroupLabel(city);
    elements.cityGroup.dataset.group = city.group;
    elements.cityProvince.textContent = content.province;
    elements.cityName.textContent = content.name;
    elements.cityTagline.textContent = content.tagline;
    elements.cityDescription.textContent = content.description;
    elements.cityTip.textContent = content.tip;

    const tagFragment = document.createDocumentFragment();
    content.flavorTags.forEach(tag => {
      const span = document.createElement('span');
      span.textContent = tag;
      tagFragment.appendChild(span);
    });
    elements.flavorTags.replaceChildren(tagFragment);

    const dishFragment = document.createDocumentFragment();
    content.dishes.forEach((dish, index) => {
      const item = document.createElement('li');
      const button = document.createElement('button');
      const thumbnail = document.createElement('img');
      const number = document.createElement('span');
      const dishCopy = document.createElement('div');
      const name = document.createElement('h4');
      const description = document.createElement('p');

      button.type = 'button';
      button.className = 'dish-row';
      button.dataset.galleryIndex = String(index);
      button.setAttribute('aria-label', this.t('viewDishImage', { dish: dish.name }));
      thumbnail.src = dish.image;
      thumbnail.alt = '';
      thumbnail.loading = 'lazy';
      thumbnail.decoding = 'async';
      number.textContent = String(index + 1).padStart(2, '0');
      name.textContent = dish.name;
      description.textContent = dish.description;
      dishCopy.append(name, description);
      button.append(thumbnail, number, dishCopy);
      item.appendChild(button);
      dishFragment.appendChild(item);
    });
    elements.dishList.replaceChildren(dishFragment);
    elements.dishList.querySelector('li')?.classList.add('is-active');

    this.updateFavoriteButton();
    document.querySelector('.drawer-scroll').scrollTop = 0;
  }

  renderDishGallery(content) {
    this.galleryDishes = content.dishes;
    this.galleryIndex = 0;
    const fragment = document.createDocumentFragment();

    content.dishes.forEach((dish, index) => {
      const slide = document.createElement('div');
      const image = document.createElement('img');
      slide.className = 'gallery-slide';
      slide.dataset.fallback = this.t('imageFallback');
      slide.setAttribute('aria-hidden', index === 0 ? 'false' : 'true');
      image.src = dish.image;
      image.alt = dish.imageAlt;
      image.loading = index === 0 ? 'eager' : 'lazy';
      image.decoding = 'async';
      if (index === 0) image.id = 'cityImage';
      slide.appendChild(image);
      fragment.appendChild(slide);
    });

    this.elements.galleryTrack.replaceChildren(fragment);
    this.setGalleryIndex(0);
  }

  setGalleryIndex(index, { focusThumbnail = false } = {}) {
    if (!this.galleryDishes.length) return;
    const total = this.galleryDishes.length;
    this.galleryIndex = (index + total) % total;
    const dish = this.galleryDishes[this.galleryIndex];

    this.elements.galleryTrack.style.transform = `translateX(-${this.galleryIndex * 100}%)`;
    this.elements.galleryDishName.textContent = dish.name;
    this.elements.galleryCounter.textContent = this.t('imageCount', {
      current: this.galleryIndex + 1,
      total
    });
    this.elements.gallerySource.textContent = dish.credit.author;
    this.elements.gallerySource.href = dish.credit.sourceUrl;
    this.elements.galleryLicense.textContent = dish.credit.license;
    this.elements.galleryLicense.href = dish.credit.licenseUrl;
    this.elements.galleryTrack.querySelectorAll('.gallery-slide').forEach((slide, slideIndex) => {
      slide.setAttribute('aria-hidden', slideIndex === this.galleryIndex ? 'false' : 'true');
    });
    this.elements.dishList.querySelectorAll('li').forEach((item, itemIndex) => {
      item.classList.toggle('is-active', itemIndex === this.galleryIndex);
    });

    if (focusThumbnail) {
      this.elements.dishList.querySelector(`[data-gallery-index="${this.galleryIndex}"]`)?.focus();
    }
  }

  moveGallery(direction) {
    this.setGalleryIndex(this.galleryIndex + direction);
  }

  closeDrawer({ updateHash = true, restoreFocus = true } = {}) {
    if (!this.currentCity) return;

    this.elements.cityDrawer.classList.remove('is-open');
    this.elements.drawerBackdrop.classList.remove('is-visible');
    this.elements.cityDrawer.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('drawer-open');
    this.updateSelectedCity(null);
    this.currentCity = null;

    if (updateHash && window.location.hash.startsWith('#city=')) {
      history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
    }

    if (restoreFocus && this.lastTrigger instanceof HTMLElement) {
      this.lastTrigger.focus({ preventScroll: true });
    }
  }

  refreshAttribution() {
    if (!this.map || typeof L === 'undefined') return;
    if (this.attributionControl) this.map.removeControl(this.attributionControl);

    const attributionKey = this.detailedMapReady
      ? 'mapAttributionDetailed'
      : 'mapAttributionFallback';
    this.attributionControl = L.control.attribution({ position: 'bottomright', prefix: false })
      .addAttribution(this.t(attributionKey))
      .addTo(this.map);
  }

  updateSelectedCity(slug) {
    this.markers.forEach((marker, markerSlug) => {
      const city = this.findCity(markerSlug);
      const content = this.getCityContent(city);
      marker.setIcon(this.createMarkerIcon(city, markerSlug === slug));
      marker.setTooltipContent(`${content.name} · ${content.dishes[0].name}`);

      const markerElement = marker.getElement();
      if (markerElement) {
        markerElement.setAttribute('title', `${content.name} · ${content.tagline}`);
        markerElement.setAttribute('aria-label', this.t('markerAlt', { city: content.name }));
      }
    });

    document.querySelectorAll('.city-index-btn').forEach(button => {
      const selected = button.dataset.slug === slug;
      button.classList.toggle('is-active', selected);
      button.setAttribute('aria-current', selected ? 'true' : 'false');
    });
  }

  searchCities(query) {
    const term = query.trim().toLocaleLowerCase();
    if (!term) return [];

    return this.cities.filter(city => {
      const english = this.getCityContent(city, 'en');
      const haystack = [
        city.name,
        city.province,
        city.group,
        city.tagline,
        city.description,
        ...city.flavorTags,
        ...city.dishes.flatMap(dish => [dish.name, dish.description]),
        english.name,
        english.province,
        english.tagline,
        english.description,
        ...english.flavorTags,
        ...english.dishes.flatMap(dish => [dish.name, dish.description]),
        city.group === '经典' ? 'classic classics 经典' : 'hidden gem hidden gems 宝藏'
      ].join(' ').toLocaleLowerCase();

      return haystack.includes(term);
    });
  }

  getFeaturedFoodContent(food, language = this.language) {
    return language === 'zh'
      ? { name: food.zhName, region: food.zhRegion, category: food.zhCategory, description: food.zhDescription }
      : { name: food.enName, region: food.enRegion, category: food.enCategory, description: food.enDescription };
  }

  searchFeaturedFoods(query) {
    const term = query.trim().toLocaleLowerCase();
    if (!term) return [];

    return this.featuredFoods.filter(food => [
      food.zhName,
      food.enName,
      food.zhRegion,
      food.enRegion,
      food.zhCategory,
      food.enCategory,
      food.zhDescription,
      food.enDescription
    ].join(' ').toLocaleLowerCase().includes(term));
  }

  renderSearchResults(query) {
    const results = this.searchCities(query);
    const foodResults = this.searchFeaturedFoods(query);
    const fragment = document.createDocumentFragment();

    if (results.length === 0 && foodResults.length === 0) {
      const empty = document.createElement('p');
      empty.className = 'search-empty';
      empty.textContent = this.t('noResults');
      fragment.appendChild(empty);
    } else {
      results.forEach(city => {
        const content = this.getCityContent(city);
        const alternateContent = this.getCityContent(city, this.language === 'en' ? 'zh' : 'en');
        const button = document.createElement('button');
        const term = query.trim().toLocaleLowerCase();
        const matchedDishes = content.dishes
          .filter((dish, index) => {
            const alternateDish = alternateContent.dishes[index];
            return [dish.name, dish.description, alternateDish.name, alternateDish.description]
              .join(' ')
              .toLocaleLowerCase()
              .includes(term);
          })
          .map(dish => dish.name);

        button.type = 'button';
        button.className = 'search-result';
        button.setAttribute('role', 'option');
        button.innerHTML = `
          <img src="${city.heroImage}" alt="">
          <span class="search-result-copy">
            <strong>${content.name}<small>${content.province}</small></strong>
            <span>${matchedDishes.length ? this.t('matchPrefix', { dishes: matchedDishes.join(this.language === 'zh' ? '、' : ', ') }) : content.tagline}</span>
          </span>
          <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
        `;
        button.addEventListener('click', event => {
          this.lastTrigger = event.currentTarget;
          this.selectCity(city, { updateHash: true });
          this.clearSearch();
        });
        fragment.appendChild(button);
      });

      foodResults.forEach(food => {
        const content = this.getFeaturedFoodContent(food);
        const link = document.createElement('a');
        link.className = 'search-result food-search-result';
        link.setAttribute('role', 'option');
        link.href = `${this.language === 'zh' ? '/zh' : ''}/guides/chinese-foods/#food-${food.slug}`;
        link.innerHTML = `
          <span class="search-result-symbol" aria-hidden="true">${food.zhName.charAt(0)}</span>
          <span class="search-result-copy">
            <strong>${content.name}<small>${content.category}</small></strong>
            <span>${this.t('foodGuideResult', { region: content.region })}</span>
          </span>
          <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
        `;
        link.addEventListener('click', () => this.clearSearch());
        fragment.appendChild(link);
      });
    }

    this.elements.searchResults.replaceChildren(fragment);
    this.elements.searchResults.classList.add('is-visible');
    this.elements.searchInput.setAttribute('aria-expanded', 'true');
  }

  clearSearch() {
    this.elements.searchInput.value = '';
    this.elements.searchClear.classList.remove('is-visible');
    this.closeSearchResults();
  }

  closeSearchResults() {
    this.elements.searchResults.classList.remove('is-visible');
    this.elements.searchInput.setAttribute('aria-expanded', 'false');
  }

  loadFavorites() {
    const validSlugs = new Set(this.cities.map(city => city.slug));

    try {
      const saved = JSON.parse(localStorage.getItem('foodFavoritesV2'));
      if (Array.isArray(saved)) {
        return [...new Set(saved.filter(slug => validSlugs.has(slug)))];
      }
    } catch (error) {
      console.warn('无法读取新版收藏数据：', error);
    }

    const legacyIdMap = {
      1: 'chaozhou',
      2: 'liuzhou',
      3: 'taizhou',
      5: 'yangzhou'
    };

    try {
      const legacyFavorites = JSON.parse(localStorage.getItem('travelFavorites'));
      if (!Array.isArray(legacyFavorites)) return [];

      const migrated = legacyFavorites
        .map(favorite => {
          if (favorite.slug && validSlugs.has(favorite.slug)) return favorite.slug;
          const cityByName = this.cities.find(city => (
            city.name === favorite.name || this.getCityContent(city, 'en').name === favorite.name
          ));
          return cityByName?.slug || legacyIdMap[favorite.id] || null;
        })
        .filter(slug => slug && validSlugs.has(slug));

      const uniqueMigrated = [...new Set(migrated)];
      localStorage.setItem('foodFavoritesV2', JSON.stringify(uniqueMigrated));
      localStorage.removeItem('travelFavorites');
      return uniqueMigrated;
    } catch (error) {
      console.warn('无法迁移旧收藏数据：', error);
      return [];
    }
  }

  saveFavorites() {
    localStorage.setItem('foodFavoritesV2', JSON.stringify(this.favoriteSlugs));
  }

  toggleFavorite() {
    if (!this.currentCity) return;

    const slug = this.currentCity.slug;
    const content = this.getCityContent(this.currentCity);
    const existingIndex = this.favoriteSlugs.indexOf(slug);

    if (existingIndex >= 0) {
      this.favoriteSlugs.splice(existingIndex, 1);
      this.showToast(this.t('favoriteRemoved', { city: content.name }));
      this.trackEvent('Favorite Changed', { city: slug, action: 'removed' });
    } else {
      this.favoriteSlugs.push(slug);
      this.showToast(this.t('favoriteAdded', { city: content.name }));
      this.trackEvent('Favorite Changed', { city: slug, action: 'added' });
    }

    this.saveFavorites();
    this.updateFavoriteButton();
    this.updateFavoritesCount();
  }

  updateFavoriteButton() {
    if (!this.currentCity) return;

    const favorited = this.favoriteSlugs.includes(this.currentCity.slug);
    const icon = this.elements.favoriteBtn.querySelector('i');
    const label = this.elements.favoriteBtn.querySelector('span');

    this.elements.favoriteBtn.classList.toggle('is-favorited', favorited);
    this.elements.favoriteBtn.setAttribute('aria-pressed', favorited ? 'true' : 'false');
    icon.className = favorited ? 'fa-solid fa-heart' : 'fa-regular fa-heart';
    label.textContent = favorited ? this.t('addedFavorite') : this.t('addFavorite');
  }

  updateFavoritesCount() {
    this.elements.favoritesCount.textContent = this.favoriteSlugs.length;
  }

  openFavorites() {
    this.renderFavorites();
    this.elements.favoritesModal.classList.add('is-open');
    this.elements.favoritesModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    this.elements.favoritesClose.focus();
  }

  closeFavorites() {
    this.elements.favoritesModal.classList.remove('is-open');
    this.elements.favoritesModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    this.elements.favoritesBtn.focus({ preventScroll: true });
  }

  renderFavorites() {
    const favoriteCities = this.favoriteSlugs
      .map(slug => this.findCity(slug))
      .filter(Boolean);
    const fragment = document.createDocumentFragment();

    if (favoriteCities.length === 0) {
      const empty = document.createElement('div');
      empty.className = 'favorites-empty';
      empty.innerHTML = `
        <i class="fa-regular fa-heart" aria-hidden="true"></i>
        <h3>${this.t('emptyFavoritesTitle')}</h3>
        <p>${this.t('emptyFavoritesBody')}</p>
      `;
      fragment.appendChild(empty);
    } else {
      favoriteCities.forEach(city => {
        const content = this.getCityContent(city);
        const item = document.createElement('article');
        const openButton = document.createElement('button');
        const removeButton = document.createElement('button');

        item.className = 'favorite-item';
        openButton.type = 'button';
        openButton.className = 'favorite-open';
        openButton.innerHTML = `
          <img src="${city.heroImage}" alt="">
          <span>
            <small>${content.province} · ${this.getGroupLabel(city)}</small>
            <strong>${content.name}</strong>
            <em>${content.dishes.map(dish => dish.name).slice(0, 3).join(' · ')}</em>
          </span>
        `;
        openButton.addEventListener('click', event => {
          this.closeFavorites();
          this.lastTrigger = event.currentTarget;
          this.selectCity(city, { updateHash: true });
        });

        removeButton.type = 'button';
        removeButton.className = 'icon-btn favorite-remove';
        removeButton.setAttribute('aria-label', this.t('removeFavorite', { city: content.name }));
        removeButton.title = this.t('remove');
        removeButton.innerHTML = '<i class="fa-solid fa-xmark" aria-hidden="true"></i>';
        removeButton.addEventListener('click', () => {
          this.favoriteSlugs = this.favoriteSlugs.filter(slug => slug !== city.slug);
          this.trackEvent('Favorite Changed', { city: city.slug, action: 'removed' });
          this.saveFavorites();
          this.updateFavoritesCount();
          this.renderFavorites();
        });

        item.append(openButton, removeButton);
        fragment.appendChild(item);
      });
    }

    this.elements.favoritesList.replaceChildren(fragment);
  }

  async shareCurrentCity() {
    if (!this.currentCity) return;

    const city = this.currentCity;
    const content = this.getCityContent(city);
    const sharePath = this.language === 'zh' ? `/zh/city/${city.slug}/` : `/city/${city.slug}/`;
    const shareUrl = new URL(sharePath, window.location.origin);
    const shareData = {
      title: this.t('shareTitle', { city: content.name }),
      text: this.t('shareText', {
        tagline: content.tagline,
        dishes: content.dishes.map(dish => dish.name).join(this.language === 'zh' ? '、' : ', ')
      }),
      url: shareUrl.toString()
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        this.trackEvent('City Shared', { city: city.slug, method: 'native', language: this.language });
        return;
      } catch (error) {
        if (error.name === 'AbortError') return;
      }
    }

    try {
      await navigator.clipboard.writeText(shareData.url);
      this.showToast(this.t('linkCopied'));
      this.trackEvent('City Shared', { city: city.slug, method: 'clipboard', language: this.language });
    } catch (error) {
      window.prompt(this.t('copyLink'), shareData.url);
    }
  }

  syncFromHash() {
    const params = new URLSearchParams(window.location.hash.replace(/^#/, ''));
    const slug = params.get('city');
    const city = this.findCity(slug);

    if (city) {
      this.selectCity(city, { updateHash: false });
    } else if (this.currentCity) {
      this.closeDrawer({ updateHash: false, restoreFocus: false });
    }
  }

  findCity(slug) {
    return this.cities.find(city => city.slug === slug);
  }

  showToast(message) {
    window.clearTimeout(this.toastTimer);
    this.elements.toast.textContent = message;
    this.elements.toast.classList.add('is-visible');
    this.toastTimer = window.setTimeout(() => {
      this.elements.toast.classList.remove('is-visible');
    }, 2800);
  }

  hideLoading() {
    this.elements.loading.classList.add('is-hidden');
    window.setTimeout(() => this.elements.loading.remove(), 350);
  }

  bindEvents() {
    this.elements.languageOptions.forEach(button => {
      button.addEventListener('click', () => this.setLanguage(button.dataset.language));
    });

    this.elements.searchInput.addEventListener('input', event => {
      const query = event.target.value;
      this.elements.searchClear.classList.toggle('is-visible', Boolean(query));

      if (query.trim()) {
        this.renderSearchResults(query);
      } else {
        this.closeSearchResults();
      }
    });

    this.elements.searchInput.addEventListener('keydown', event => {
      if (event.key === 'ArrowDown') {
        const firstResult = this.elements.searchResults.querySelector('.search-result');
        if (firstResult) {
          event.preventDefault();
          firstResult.focus();
        }
      }
    });

    this.elements.searchClear.addEventListener('click', () => {
      this.clearSearch();
      this.elements.searchInput.focus();
    });

    document.addEventListener('click', event => {
      if (!event.target.closest('#searchContainer')) this.closeSearchResults();
    });

    this.elements.drawerClose.addEventListener('click', () => this.closeDrawer());
    this.elements.drawerBackdrop.addEventListener('click', () => this.closeDrawer());
    this.elements.favoriteBtn.addEventListener('click', () => this.toggleFavorite());
    this.elements.shareBtn.addEventListener('click', () => this.shareCurrentCity());
    this.elements.favoritesBtn.addEventListener('click', () => this.openFavorites());
    this.elements.favoritesClose.addEventListener('click', () => this.closeFavorites());
    this.elements.favoritesBackdrop.addEventListener('click', () => this.closeFavorites());

    this.elements.galleryPrevious.addEventListener('click', () => this.moveGallery(-1));
    this.elements.galleryNext.addEventListener('click', () => this.moveGallery(1));
    this.elements.drawerGallery.addEventListener('keydown', event => {
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        event.preventDefault();
        this.moveGallery(event.key === 'ArrowLeft' ? -1 : 1);
      }
    });
    this.elements.drawerGallery.addEventListener('touchstart', event => {
      this.galleryTouchStartX = event.changedTouches[0]?.clientX ?? null;
    }, { passive: true });
    this.elements.drawerGallery.addEventListener('touchend', event => {
      if (this.galleryTouchStartX === null) return;
      const delta = (event.changedTouches[0]?.clientX ?? this.galleryTouchStartX) - this.galleryTouchStartX;
      this.galleryTouchStartX = null;
      if (Math.abs(delta) > 40) this.moveGallery(delta > 0 ? -1 : 1);
    }, { passive: true });
    this.elements.galleryTrack.addEventListener('error', event => {
      if (!(event.target instanceof HTMLImageElement)) return;
      event.target.hidden = true;
      event.target.closest('.gallery-slide')?.classList.add('image-fallback');
    }, true);
    this.elements.dishList.addEventListener('click', event => {
      const button = event.target.closest('[data-gallery-index]');
      if (button) this.setGalleryIndex(Number(button.dataset.galleryIndex));
    });
    this.elements.dishList.addEventListener('error', event => {
      if (!(event.target instanceof HTMLImageElement)) return;
      event.target.hidden = true;
      event.target.closest('.dish-row')?.classList.add('image-fallback');
    }, true);
    this.elements.dishList.addEventListener('keydown', event => {
      if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
      const button = event.target.closest('[data-gallery-index]');
      if (!button) return;
      event.preventDefault();
      this.setGalleryIndex(Number(button.dataset.galleryIndex) + (event.key === 'ArrowLeft' ? -1 : 1), {
        focusThumbnail: true
      });
    });

    document.addEventListener('keydown', event => {
      if (event.key !== 'Escape') return;

      if (this.elements.favoritesModal.classList.contains('is-open')) {
        this.closeFavorites();
      } else if (this.elements.searchResults.classList.contains('is-visible')) {
        this.closeSearchResults();
        this.elements.searchInput.focus();
      } else if (this.currentCity) {
        this.closeDrawer();
      }
    });

    window.addEventListener('popstate', () => this.syncFromHash());
    window.addEventListener('hashchange', () => this.syncFromHash());
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.app = new FoodMapApp();
});
