// 中国美食探索地图交互逻辑。
class FoodMapApp {
  constructor() {
    this.cities = foodCitiesData;
    this.map = null;
    this.markers = new Map();
    this.currentCity = null;
    this.lastTrigger = null;
    this.toastTimer = null;
    this.tileErrorShown = false;
    this.favoriteSlugs = this.loadFavorites();

    this.cacheElements();
    this.renderCityIndex();
    this.bindEvents();
    this.updateFavoritesCount();
    this.initMap();
  }

  cacheElements() {
    this.elements = {
      loading: document.getElementById('loading'),
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

  initMap() {
    if (typeof L === 'undefined') {
      this.hideLoading();
      this.showToast('地图资源加载失败，请检查网络后刷新');
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
      'https://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}',
      {
        subdomains: '1234',
        maxZoom: 18,
        attribution: '高德地图'
      }
    );

    tileLayer.on('tileerror', () => {
      if (!this.tileErrorShown) {
        this.tileErrorShown = true;
        this.showToast('部分地图瓦片未能加载，请检查网络');
      }
    });

    tileLayer.addTo(this.map);
    L.control.attribution({ position: 'bottomright', prefix: false })
      .addAttribution('高德地图 · 寻味中国')
      .addTo(this.map);

    this.addMarkers();
    this.map.fitBounds(chinaBounds, { padding: [24, 24] });

    this.map.whenReady(() => {
      this.hideLoading();
      this.syncFromHash();
    });
  }

  addMarkers() {
    this.cities.forEach(city => {
      const marker = L.marker([city.coordinates[1], city.coordinates[0]], {
        icon: this.createMarkerIcon(city, false),
        title: `${city.name} · ${city.tagline}`,
        alt: `${city.name}美食城市标记`,
        riseOnHover: true
      });

      marker.on('click', event => {
        this.lastTrigger = event.originalEvent?.target || null;
        this.selectCity(city, { updateHash: true });
      });

      marker.bindTooltip(`${city.name} · ${city.dishes[0].name}`, {
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

    return L.divIcon({
      className: 'city-marker-shell',
      html: `
        <span class="city-marker ${groupClass}${selectedClass}">
          <i class="marker-pulse"></i>
          <i class="marker-core"></i>
          <span class="marker-label">${city.name}</span>
        </span>
      `,
      iconSize: [40, 40],
      iconAnchor: [20, 20]
    });
  }

  renderCityIndex() {
    const fragment = document.createDocumentFragment();

    this.cities.forEach((city, index) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'city-index-btn';
      button.dataset.slug = city.slug;
      button.innerHTML = `<span>${String(index + 1).padStart(2, '0')}</span>${city.name}`;
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
  }

  populateDrawer(city) {
    const { elements } = this;

    elements.cityVisual.classList.remove('image-fallback');
    elements.cityImage.hidden = false;
    elements.cityImage.src = city.heroImage;
    elements.cityImage.alt = city.imageAlt;
    elements.cityGroup.textContent = city.group === '经典' ? '经典风味' : '宝藏风味';
    elements.cityGroup.dataset.group = city.group;
    elements.cityProvince.textContent = city.province;
    elements.cityName.textContent = city.name;
    elements.cityTagline.textContent = city.tagline;
    elements.cityDescription.textContent = city.description;
    elements.cityTip.textContent = city.tip;

    const tagFragment = document.createDocumentFragment();
    city.flavorTags.forEach(tag => {
      const span = document.createElement('span');
      span.textContent = tag;
      tagFragment.appendChild(span);
    });
    elements.flavorTags.replaceChildren(tagFragment);

    const dishFragment = document.createDocumentFragment();
    city.dishes.forEach((dish, index) => {
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

  updateSelectedCity(slug) {
    this.markers.forEach((marker, markerSlug) => {
      const city = this.findCity(markerSlug);
      marker.setIcon(this.createMarkerIcon(city, markerSlug === slug));
    });

    document.querySelectorAll('.city-index-btn').forEach(button => {
      const selected = button.dataset.slug === slug;
      button.classList.toggle('is-active', selected);
      button.setAttribute('aria-current', selected ? 'true' : 'false');
    });
  }

  searchCities(query) {
    const term = query.trim().toLocaleLowerCase('zh-CN');
    if (!term) return [];

    return this.cities.filter(city => {
      const haystack = [
        city.name,
        city.province,
        city.group,
        city.tagline,
        city.description,
        ...city.flavorTags,
        ...city.dishes.flatMap(dish => [dish.name, dish.description])
      ].join(' ').toLocaleLowerCase('zh-CN');

      return haystack.includes(term);
    });
  }

  renderSearchResults(query) {
    const results = this.searchCities(query);
    const fragment = document.createDocumentFragment();

    if (results.length === 0) {
      const empty = document.createElement('p');
      empty.className = 'search-empty';
      empty.textContent = '没有找到相关城市或美食';
      fragment.appendChild(empty);
    } else {
      results.forEach(city => {
        const button = document.createElement('button');
        const matchedDishes = city.dishes
          .filter(dish => dish.name.includes(query.trim()))
          .map(dish => dish.name);

        button.type = 'button';
        button.className = 'search-result';
        button.setAttribute('role', 'option');
        button.innerHTML = `
          <img src="${city.heroImage}" alt="">
          <span class="search-result-copy">
            <strong>${city.name}<small>${city.province}</small></strong>
            <span>${matchedDishes.length ? `匹配：${matchedDishes.join('、')}` : city.tagline}</span>
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
          const cityByName = this.cities.find(city => city.name === favorite.name);
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
    const existingIndex = this.favoriteSlugs.indexOf(slug);

    if (existingIndex >= 0) {
      this.favoriteSlugs.splice(existingIndex, 1);
      this.showToast(`已从想吃清单移除${this.currentCity.name}`);
    } else {
      this.favoriteSlugs.push(slug);
      this.showToast(`已把${this.currentCity.name}加入想吃清单`);
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
    label.textContent = favorited ? '已加入想吃清单' : '加入想吃清单';
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
        <h3>清单还是空的</h3>
        <p>在地图上打开一座城市，把想吃的味道留在这里。</p>
      `;
      fragment.appendChild(empty);
    } else {
      favoriteCities.forEach(city => {
        const item = document.createElement('article');
        const openButton = document.createElement('button');
        const removeButton = document.createElement('button');

        item.className = 'favorite-item';
        openButton.type = 'button';
        openButton.className = 'favorite-open';
        openButton.innerHTML = `
          <img src="${city.heroImage}" alt="">
          <span>
            <small>${city.province} · ${city.group}</small>
            <strong>${city.name}</strong>
            <em>${city.dishes.map(dish => dish.name).slice(0, 3).join(' · ')}</em>
          </span>
        `;
        openButton.addEventListener('click', event => {
          this.closeFavorites();
          this.lastTrigger = event.currentTarget;
          this.selectCity(city, { updateHash: true });
        });

        removeButton.type = 'button';
        removeButton.className = 'icon-btn favorite-remove';
        removeButton.setAttribute('aria-label', `从想吃清单移除${city.name}`);
        removeButton.title = '移除';
        removeButton.innerHTML = '<i class="fa-solid fa-xmark" aria-hidden="true"></i>';
        removeButton.addEventListener('click', () => {
          this.favoriteSlugs = this.favoriteSlugs.filter(slug => slug !== city.slug);
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
    const shareUrl = new URL(window.location.href);
    shareUrl.hash = `city=${city.slug}`;
    const shareData = {
      title: `寻味${city.name} - 寻味中国`,
      text: `${city.tagline} 招牌味道：${city.dishes.map(dish => dish.name).join('、')}`,
      url: shareUrl.toString()
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch (error) {
        if (error.name === 'AbortError') return;
      }
    }

    try {
      await navigator.clipboard.writeText(shareData.url);
      this.showToast('城市链接已复制');
    } catch (error) {
      window.prompt('复制这个城市链接：', shareData.url);
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
