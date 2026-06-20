// 中国美食探索地图交互逻辑。
const UI_TRANSLATIONS = {
  en: {
    pageTitle: "Taste China - A Map of China's Food Cities",
    metaDescription: "Explore 12 of China's great food cities, discover signature dishes, and save the places you want to taste next.",
    brandHome: 'Return to the Taste China map',
    brandName: 'Taste China',
    brandTagline: '12 cities. One delicious map.',
    language: 'Language',
    searchLabel: 'Search cities or signature dishes',
    searchPlaceholder: 'Search cities or signature dishes',
    clearSearch: 'Clear search',
    searchResults: 'Search results',
    openFavorites: 'Open my wish list',
    favoritesLabel: 'Wish list',
    favoritesCount: 'Saved cities',
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
    noResults: 'No matching city or dish found',
    matchPrefix: 'Match: {dishes}',
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
    tileLoadError: 'Some map tiles could not load. Check your connection.',
    markerAlt: '{city} food-city marker',
    imageFallback: 'Image unavailable. The flavors are still here.',
    mapAttribution: '© <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors · Taste China'
  },
  zh: {
    pageTitle: '寻味中国 - 中国美食探索地图',
    metaDescription: '在中国地图上探索 12 座美食城市，收藏想去的地方，发现每座城市的招牌味道。',
    brandHome: '返回寻味中国地图首页',
    brandName: '寻味中国',
    brandTagline: '12 座城市，一张好吃的地图',
    language: '语言',
    searchLabel: '搜索城市或招牌美食',
    searchPlaceholder: '搜索城市或招牌美食',
    clearSearch: '清空搜索',
    searchResults: '搜索结果',
    openFavorites: '打开我的想吃清单',
    favoritesLabel: '想吃清单',
    favoritesCount: '收藏数量',
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
    tileLoadError: '部分地图瓦片未能加载，请检查网络',
    markerAlt: '{city}美食城市标记',
    imageFallback: '图片暂时缺席，味道仍在',
    mapAttribution: '© <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> 贡献者 · 寻味中国'
  }
};

class FoodMapApp {
  constructor() {
    this.cities = foodCitiesData;
    this.language = this.loadLanguage();
    this.map = null;
    this.markers = new Map();
    this.attributionControl = null;
    this.currentCity = null;
    this.lastTrigger = null;
    this.toastTimer = null;
    this.tileErrorShown = false;
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
      cityImage: document.getElementById('cityImage'),
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

  initMap() {
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

    const tileLayer = L.tileLayer(
      'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 19
      }
    );

    tileLayer.on('tileerror', () => {
      if (!this.tileErrorShown) {
        this.tileErrorShown = true;
        this.showToast(this.t('tileLoadError'));
      }
    });

    tileLayer.addTo(this.map);
    this.refreshAttribution();

    this.addMarkers();
    this.map.fitBounds(chinaBounds, { padding: [24, 24] });

    this.map.whenReady(() => {
      this.hideLoading();
      this.syncFromHash();
    });
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

    elements.cityVisual.classList.remove('image-fallback');
    elements.cityImage.hidden = false;
    elements.cityImage.src = city.heroImage;
    elements.cityImage.alt = content.imageAlt;
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
      const number = document.createElement('span');
      const content = document.createElement('div');
      const name = document.createElement('h4');
      const description = document.createElement('p');

      number.textContent = String(index + 1).padStart(2, '0');
      name.textContent = dish.name;
      description.textContent = dish.description;
      content.append(name, description);
      item.append(number, content);
      dishFragment.appendChild(item);
    });
    elements.dishList.replaceChildren(dishFragment);

    this.updateFavoriteButton();
    document.querySelector('.drawer-scroll').scrollTop = 0;
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

    this.attributionControl = L.control.attribution({ position: 'bottomright', prefix: false })
      .addAttribution(this.t('mapAttribution'))
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

  renderSearchResults(query) {
    const results = this.searchCities(query);
    const fragment = document.createDocumentFragment();

    if (results.length === 0) {
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
        const firstResult = this.elements.searchResults.querySelector('button');
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

    this.elements.cityImage.addEventListener('load', () => {
      this.elements.cityImage.hidden = false;
      this.elements.cityVisual.classList.remove('image-fallback');
    });

    this.elements.cityImage.addEventListener('error', () => {
      this.elements.cityImage.hidden = true;
      this.elements.cityVisual.classList.add('image-fallback');
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
