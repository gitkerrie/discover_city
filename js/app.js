// 应用主逻辑
class TravelExplorationMap {
  constructor() {
    this.map = null;
    this.markers = [];
    this.currentCategory = 'all';
    this.favorites = this.loadFavorites();
    this.currentDestination = null;
    
    this.init();
  }

  // 初始化应用
  init() {
    this.initMap();
    this.bindEvents();
    this.updateFavoritesCount();
    this.hideLoading();
  }

  // 初始化地图
  initMap() {
    // 使用Leaflet + OpenStreetMap
    this.initLeafletMap();
  }

  // 初始化Leaflet地图
  initLeafletMap() {
    // 中国边界范围
    const chinaBounds = [
      [18.16, 73.50], // 西南角
      [53.56, 135.05] // 东北角
    ];

    // 创建地图实例，限制在中国范围内
    this.map = L.map('map', {
      center: [35.8617, 104.1954], // 中国中心位置
      zoom: 5,
      minZoom: 4,
      maxZoom: 12,
      zoomControl: true,
      attributionControl: false, // 关闭默认版权信息
      maxBounds: chinaBounds, // 限制地图边界
      maxBoundsViscosity: 1.0 // 边界粘性，防止拖拽出边界
    });

    // 使用中文地图瓦片（高德地图样式，无需API Key）
    const chineseMapLayer = L.tileLayer('https://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}', {
      attribution: '© 高德地图',
      subdomains: '1234',
      maxZoom: 18
    });

    // 添加中文地图图层
    chineseMapLayer.addTo(this.map);

    // 添加自定义版权信息
    L.control.attribution({
      position: 'bottomright',
      prefix: false
    }).addAttribution('© 高德地图 | 探索地图').addTo(this.map);

    // 设置地图初始视图为中国
    this.map.fitBounds(chinaBounds);

    // 地图加载完成后添加标记
    this.map.whenReady(() => {
      this.addDestinationMarkers();
      this.setupMapInteractions();
    });
  }

  // 添加目的地标记
  addDestinationMarkers() {
    destinationsData.forEach(destination => {
      // 创建自定义标记图标
      const customIcon = this.createLeafletIcon(destination);
      
      // 创建标记
      const marker = L.marker([destination.coordinates[1], destination.coordinates[0]], {
        icon: customIcon
      }).addTo(this.map);

      // 添加点击事件
      marker.on('click', () => {
        this.showDestinationCard(destination);
        this.flyToDestination(destination.coordinates);
      });

      // 添加悬停提示（中文标签）
      marker.bindTooltip(destination.name, {
        permanent: false,
        direction: 'top',
        offset: [0, -20],
        className: 'custom-tooltip'
      });

      // 保存标记引用
      this.markers.push({
        marker: marker,
        destination: destination,
        element: marker.getElement()
      });
    });
  }

  // 创建Leaflet自定义图标
  createLeafletIcon(destination) {
    const color = categoryColors[destination.category];
    
    // 创建SVG图标
    const svgIcon = `
      <svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <circle cx="15" cy="15" r="8" fill="${color}" stroke="rgba(255,255,255,0.8)" stroke-width="2" filter="url(#glow)"/>
        <circle cx="15" cy="15" r="12" fill="none" stroke="${color}" stroke-width="1" opacity="0.5">
          <animate attributeName="r" values="8;15;8" dur="2s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.5;0;0.5" dur="2s" repeatCount="indefinite"/>
        </circle>
      </svg>
    `;

    return L.divIcon({
      html: svgIcon,
      className: 'custom-leaflet-marker',
      iconSize: [30, 30],
      iconAnchor: [15, 15],
      popupAnchor: [0, -15]
    });
  }

  // 创建简化的标记元素
  createSimpleMarkerElement(destination) {
    const element = document.createElement('div');
    element.className = `destination-point category-${destination.category}`;
    element.style.cssText = `
      position: absolute;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: ${categoryColors[destination.category]};
      border: 3px solid rgba(255, 255, 255, 0.8);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      transform: translate(-50%, -50%);
      z-index: 100;
    `;

    // 添加脉冲效果
    const pulse = document.createElement('div');
    pulse.style.cssText = `
      position: absolute;
      top: -3px;
      left: -3px;
      width: 26px;
      height: 26px;
      border-radius: 50%;
      background: ${categoryColors[destination.category]};
      opacity: 0.6;
      animation: pulse 2s infinite;
      pointer-events: none;
      z-index: -1;
    `;
    element.appendChild(pulse);

    // 悬停效果
    element.addEventListener('mouseenter', () => {
      element.style.transform = 'translate(-50%, -50%) scale(1.3)';
      element.style.zIndex = '1000';
    });

    element.addEventListener('mouseleave', () => {
      element.style.transform = 'translate(-50%, -50%) scale(1)';
      element.style.zIndex = '100';
    });

    return element;
  }

  // 创建自定义标记元素（保留原方法以防需要）
  createMarkerElement(destination) {
    const element = document.createElement('div');
    element.className = 'custom-marker';
    element.style.cssText = `
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: ${categoryColors[destination.category]};
      border: 3px solid rgba(255, 255, 255, 0.8);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
    `;

    // 添加脉冲效果
    const pulse = document.createElement('div');
    pulse.style.cssText = `
      position: absolute;
      top: -3px;
      left: -3px;
      width: 26px;
      height: 26px;
      border-radius: 50%;
      background: ${categoryColors[destination.category]};
      opacity: 0.6;
      animation: pulse 2s infinite;
    `;
    element.appendChild(pulse);

    // 悬停效果
    element.addEventListener('mouseenter', () => {
      element.style.transform = 'scale(1.3)';
      element.style.zIndex = '1000';
    });

    element.addEventListener('mouseleave', () => {
      element.style.transform = 'scale(1)';
      element.style.zIndex = 'auto';
    });

    return element;
  }

  // 设置地图交互
  setupMapInteractions() {
    // 地图点击时关闭卡片
    this.map.on('click', (e) => {
      // 检查是否点击在标记上
      if (!e.originalEvent.target.closest('.custom-leaflet-marker')) {
        this.hideDestinationCard();
      }
    });
  }

  // 飞到目的地
  flyToDestination(coordinates) {
    // 使用Leaflet的flyTo方法
    this.map.flyTo([coordinates[1], coordinates[0]], 8, {
      animate: true,
      duration: 1.5
    });
    
    // 找到对应的标记并添加高亮效果
    this.markers.forEach(({ marker, destination, element }) => {
      if (element) {
        element.classList.remove('highlighted');
      }
      if (destination.coordinates[0] === coordinates[0] && destination.coordinates[1] === coordinates[1]) {
        if (element) {
          element.classList.add('highlighted');
          // 3秒后移除高亮
          setTimeout(() => {
            element.classList.remove('highlighted');
          }, 3000);
        }
      }
    });
  }

  // 显示目的地卡片（沉浸式模式）
  showDestinationCard(destination) {
    this.currentDestination = destination;
    
    // 进入沉浸式模式
    this.enterImmersiveMode(destination);
    
    const modal = document.getElementById('cardModal');
    const img = document.getElementById('cardImg');
    const category = document.getElementById('cardCategory');
    const title = document.getElementById('cardTitle');
    const description = document.getElementById('cardDescription');
    const tagsContainer = document.getElementById('cardTags');
    const favoriteBtn = document.getElementById('favoriteBtn');

    // 设置卡片内容
    img.src = destination.image;
    img.alt = destination.name;
    category.textContent = categoryMap[destination.category];
    category.style.background = categoryColors[destination.category];
    title.textContent = destination.name;
    description.textContent = destination.description;

    // 创建标签
    tagsContainer.innerHTML = this.generateTags(destination);

    // 更新收藏按钮状态
    this.updateFavoriteButton(favoriteBtn, destination);

    // 延迟显示模态框以配合背景动画
    setTimeout(() => {
      modal.classList.add('show');
    }, 300);
  }

  // 进入沉浸式模式
  enterImmersiveMode(destination) {
    const mapContainer = document.getElementById('map');
    const immersiveBackground = document.getElementById('immersiveBackground');
    const backgroundImage = document.getElementById('backgroundImage');
    
    // 添加沉浸式模式类
    mapContainer.classList.add('immersive-mode');
    
    // 设置背景图片
    backgroundImage.style.backgroundImage = `url(${destination.image})`;
    
    // 激活背景层
    setTimeout(() => {
      immersiveBackground.classList.add('active');
    }, 100);
  }

  // 生成标签HTML
  generateTags(destination) {
    const tags = [
      categoryMap[destination.category],
      '探索发现',
      '冷门景点'
    ];
    
    return tags.map(tag => 
      `<span class="card-tag"># ${tag}</span>`
    ).join('');
  }

  // 隐藏目的地卡片
  hideDestinationCard() {
    const modal = document.getElementById('cardModal');
    
    // 先隐藏卡片
    modal.classList.remove('show');
    
    // 延迟退出沉浸式模式
    setTimeout(() => {
      this.exitImmersiveMode();
    }, 200);
    
    this.currentDestination = null;
  }

  // 退出沉浸式模式
  exitImmersiveMode() {
    const mapContainer = document.getElementById('map');
    const immersiveBackground = document.getElementById('immersiveBackground');
    
    // 移除沉浸式模式类
    mapContainer.classList.remove('immersive-mode');
    
    // 隐藏背景层
    immersiveBackground.classList.remove('active');
  }

  // 更新收藏按钮状态
  updateFavoriteButton(button, destination) {
    const isFavorited = this.favorites.some(fav => fav.id === destination.id);
    
    if (isFavorited) {
      button.classList.add('favorited');
      button.innerHTML = '<i class="fas fa-heart"></i><span>已收藏</span>';
    } else {
      button.classList.remove('favorited');
      button.innerHTML = '<i class="far fa-heart"></i><span>收藏</span>';
    }
  }

  // 切换收藏状态
  toggleFavorite(destination) {
    const index = this.favorites.findIndex(fav => fav.id === destination.id);
    
    if (index > -1) {
      // 取消收藏
      this.favorites.splice(index, 1);
    } else {
      // 添加收藏
      this.favorites.push({
        id: destination.id,
        name: destination.name,
        description: destination.description,
        image: destination.image,
        category: destination.category,
        coordinates: destination.coordinates
      });
    }

    this.saveFavorites();
    this.updateFavoritesCount();
    
    // 更新当前卡片的收藏按钮
    if (this.currentDestination && this.currentDestination.id === destination.id) {
      const favoriteBtn = document.getElementById('favoriteBtn');
      this.updateFavoriteButton(favoriteBtn, destination);
    }
  }

  // 筛选目的地
  filterDestinations(category) {
    this.currentCategory = category;
    
    this.markers.forEach(({ marker, destination, element }) => {
      if (category === 'all' || destination.category === category) {
        // 显示标记
        this.map.addLayer(marker);
        if (element) {
          element.style.opacity = '1';
          element.style.transform = 'scale(1)';
        }
      } else {
        // 隐藏标记
        this.map.removeLayer(marker);
      }
    });
  }

  // 显示收藏清单
  showFavoritesList() {
    const modal = document.getElementById('favoritesModal');
    const list = document.getElementById('favoritesList');
    
    if (this.favorites.length === 0) {
      list.innerHTML = `
        <div class="empty-favorites">
          <i class="far fa-heart"></i>
          <p>还没有收藏任何目的地</p>
          <p>快去地图上探索吧！</p>
        </div>
      `;
    } else {
      list.innerHTML = this.favorites.map(fav => `
        <div class="favorite-item" data-id="${fav.id}">
          <img src="${fav.image}" alt="${fav.name}">
          <div class="favorite-item-info">
            <div class="favorite-item-name">${fav.name}</div>
            <div class="favorite-item-desc">${fav.description}</div>
          </div>
          <button class="remove-favorite" onclick="app.removeFavorite(${fav.id})">
            <i class="fas fa-trash"></i>
          </button>
        </div>
      `).join('');

      // 为收藏项添加点击事件
      list.querySelectorAll('.favorite-item').forEach(item => {
        item.addEventListener('click', (e) => {
          if (e.target.closest('.remove-favorite')) return;
          
          const id = parseInt(item.dataset.id);
          const destination = destinationsData.find(d => d.id === id);
          if (destination) {
            this.hideFavoritesList();
            this.showDestinationCard(destination);
            this.flyToDestination(destination.coordinates);
          }
        });
      });
    }
    
    modal.classList.add('show');
  }

  // 隐藏收藏清单
  hideFavoritesList() {
    const modal = document.getElementById('favoritesModal');
    modal.classList.remove('show');
  }

  // 移除收藏
  removeFavorite(id) {
    const index = this.favorites.findIndex(fav => fav.id === id);
    if (index > -1) {
      this.favorites.splice(index, 1);
      this.saveFavorites();
      this.updateFavoritesCount();
      this.showFavoritesList(); // 刷新列表
    }
  }

  // 更新收藏数量
  updateFavoritesCount() {
    const countElement = document.querySelector('.favorites-count');
    countElement.textContent = this.favorites.length;
  }

  // 保存收藏到本地存储
  saveFavorites() {
    localStorage.setItem('travelFavorites', JSON.stringify(this.favorites));
  }

  // 从本地存储加载收藏
  loadFavorites() {
    const saved = localStorage.getItem('travelFavorites');
    return saved ? JSON.parse(saved) : [];
  }

  // 绑定事件监听器
  bindEvents() {
    // 标签筛选按钮
    document.querySelectorAll('.tag-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        // 更新按钮状态
        document.querySelectorAll('.tag-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // 筛选目的地
        const category = btn.dataset.category;
        this.filterDestinations(category);
      });
    });

    // 卡片关闭按钮
    document.getElementById('cardClose').addEventListener('click', () => {
      this.hideDestinationCard();
    });

    // 收藏按钮
    document.getElementById('favoriteBtn').addEventListener('click', () => {
      if (this.currentDestination) {
        this.toggleFavorite(this.currentDestination);
      }
    });

    // 收藏清单按钮
    document.getElementById('favoritesBtn').addEventListener('click', () => {
      this.showFavoritesList();
    });

    // 收藏清单关闭按钮
    document.getElementById('favoritesClose').addEventListener('click', () => {
      this.hideFavoritesList();
    });

    // 点击模态框背景关闭
    document.getElementById('cardModal').addEventListener('click', (e) => {
      if (e.target.id === 'cardModal') {
        this.hideDestinationCard();
      }
    });

    document.getElementById('favoritesModal').addEventListener('click', (e) => {
      if (e.target.id === 'favoritesModal') {
        this.hideFavoritesList();
      }
    });

    // ESC 键关闭模态框
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.hideDestinationCard();
        this.hideFavoritesList();
      }
    });

    // 分享按钮（示例功能）
    document.querySelector('.share-btn').addEventListener('click', () => {
      if (this.currentDestination && navigator.share) {
        navigator.share({
          title: `探索${this.currentDestination.name}`,
          text: this.currentDestination.description,
          url: window.location.href
        });
      } else {
        // 复制链接到剪贴板
        navigator.clipboard.writeText(window.location.href).then(() => {
          alert('链接已复制到剪贴板！');
        });
      }
    });
  }

  // 隐藏加载动画
  hideLoading() {
    setTimeout(() => {
      const loading = document.getElementById('loading');
      loading.classList.add('hidden');
      setTimeout(() => {
        loading.style.display = 'none';
      }, 500);
    }, 1000);
  }
}

// 应用实例
let app;

// 页面加载完成后初始化应用
document.addEventListener('DOMContentLoaded', () => {
  app = new TravelExplorationMap();
});

// 全局函数供HTML调用
window.app = null;
document.addEventListener('DOMContentLoaded', () => {
  window.app = new TravelExplorationMap();
});
