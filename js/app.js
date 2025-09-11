// 应用主逻辑
class TravelExplorationMap {
  constructor() {
    this.map = null;
    this.markers = [];
    this.markerClusterGroup = null; // 聚合标记组
    this.currentCategory = 'all';
    this.favorites = this.loadFavorites();
    this.currentDestination = null;
    this.searchResults = [];
    this.isSearching = false;
    this.currentImageIndex = 0;
    this.currentImages = [];
    this.loadingProgress = 0;
    this.loadingSteps = ['初始化应用...', '加载地图数据...', '准备景点信息...', '完成加载！'];
    this.currentStep = 0;
    
    this.init();
  }

  // 初始化应用
  async init() {
    try {
      this.updateLoadingProgress(0, '初始化应用...');
      
      await this.sleep(500); // 模拟初始化时间
      this.updateLoadingProgress(25, '加载地图数据...');
      
      await this.initMap();
      this.updateLoadingProgress(60, '准备景点信息...');
      
      await this.sleep(300);
      this.bindEvents();
      this.updateFavoritesCount();
      this.updateLoadingProgress(100, '完成加载！');
      
      await this.sleep(500);
      this.hideLoading();
    } catch (error) {
      this.showError('应用初始化失败，请刷新页面重试');
      console.error('Initialization error:', error);
    }
  }

  // 初始化地图
  initMap() {
    // 使用Leaflet + OpenStreetMap
    this.initLeafletMap();
  }

  // 初始化Leaflet地图
  initLeafletMap() {
    // 检查地图容器是否已经初始化，如果是则清理
    const mapContainer = document.getElementById('map');
    if (mapContainer._leaflet_id) {
      // 清理已存在的地图实例
      mapContainer._leaflet_id = null;
      mapContainer.innerHTML = '';
    }

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
      this.initMarkerCluster();
      this.addDestinationMarkers();
      this.setupMapInteractions();
    });
  }

  // 初始化标记聚合组
  initMarkerCluster() {
    // 创建聚合标记组，配置聚合参数
    this.markerClusterGroup = L.markerClusterGroup({
      // 聚合距离（像素）
      maxClusterRadius: 80,
      // 禁用聚合的最大缩放级别
      disableClusteringAtZoom: 10,
      // 聚合动画
      animate: true,
      animateAddingMarkers: true,
      // 聚合标记样式函数
      iconCreateFunction: (cluster) => {
        const childCount = cluster.getChildCount();
        let className = 'marker-cluster ';
        
        // 根据聚合数量设置不同样式
        if (childCount < 5) {
          className += 'marker-cluster-small';
        } else if (childCount < 15) {
          className += 'marker-cluster-medium';
        } else {
          className += 'marker-cluster-large';
        }
        
        const icon = new L.DivIcon({
          html: `<div><span>${childCount}</span></div>`,
          className: className,
          iconSize: new L.Point(40, 40)
        });
        
        // 为聚合标记添加悬停提示
        setTimeout(() => {
          this.addClusterTooltip(cluster, childCount);
        }, 100);
        
        return icon;
      },
      // 聚合标记点击事件
      spiderfyOnMaxZoom: true, // 在最大缩放时展开蜘蛛腿
      showCoverageOnHover: false, // 悬停时不显示覆盖范围
      zoomToBoundsOnClick: true, // 点击时缩放到边界
      // 自定义展开动画
      spiderfyDistanceMultiplier: 1.5,
      // 聚合标记的HTML模板
      polygonOptions: {
        fillColor: 'rgba(100, 181, 246, 0.2)',
        color: 'rgba(100, 181, 246, 0.6)',
        weight: 2,
        opacity: 1,
        fillOpacity: 0.5
      }
    });

    // 将聚合组添加到地图
    this.map.addLayer(this.markerClusterGroup);
    
    // 添加聚合事件监听
    this.setupClusterEvents();
  }

  // 设置聚合事件
  setupClusterEvents() {
    // 聚合标记创建时的动画
    this.markerClusterGroup.on('clustercreate', (event) => {
      const cluster = event.layer;
      const element = cluster.getElement();
      
      if (element) {
        // 添加出现动画
        element.style.opacity = '0';
        element.style.transform = 'scale(0.3)';
        
        setTimeout(() => {
          element.style.transition = 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
          element.style.opacity = '1';
          element.style.transform = 'scale(1)';
        }, 50);
      }
    });

    // 聚合标记点击时的反馈
    this.markerClusterGroup.on('clusterclick', (event) => {
      const cluster = event.layer;
      const element = cluster.getElement();
      
      if (element) {
        // 添加点击反馈动画
        element.style.transform = 'scale(0.9)';
        setTimeout(() => {
          element.style.transform = 'scale(1)';
        }, 150);
      }
    });

    // 标记展开时的动画（蜘蛛腿效果）
    this.markerClusterGroup.on('spiderfied', (event) => {
      const markers = event.markers;
      markers.forEach((marker, index) => {
        const element = marker.getElement();
        if (element) {
          element.style.opacity = '0';
          element.style.transform = 'scale(0.5)';
          
          setTimeout(() => {
            element.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
            element.style.opacity = '1';
            element.style.transform = 'scale(1)';
          }, index * 50);
        }
      });
    });

    // 标记收起时的动画
    this.markerClusterGroup.on('unspiderfied', (event) => {
      // 收起时的动画由CSS处理，这里可以添加额外的逻辑
    });
  }

  // 为聚合标记添加工具提示
  addClusterTooltip(cluster, childCount) {
    const childMarkers = cluster.getAllChildMarkers();
    const categories = {};
    
    // 统计聚合中各类别的数量
    childMarkers.forEach(marker => {
      const destination = this.markers.find(m => m.marker === marker)?.destination;
      if (destination) {
        categories[destination.category] = (categories[destination.category] || 0) + 1;
      }
    });

    // 生成类别描述
    const categoryMap = {
      'food': '美食',
      'culture': '文化',
      'nature': '自然',
      'adventure': '探险'
    };

    const categoryTexts = Object.entries(categories).map(([cat, count]) => 
      `${categoryMap[cat] || cat}: ${count}个`
    ).join(' | ');

    const tooltipContent = `
      <div class="cluster-info">
        <div class="cluster-count">${childCount} 个景点</div>
        <div class="cluster-categories">${categoryTexts}</div>
      </div>
    `;

    // 添加工具提示到聚合标记
    cluster.bindTooltip(tooltipContent, {
      permanent: false,
      direction: 'top',
      offset: [0, -10],
      className: 'cluster-tooltip'
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
      });

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

      // 添加标记到聚合组而不是直接到地图
      this.markerClusterGroup.addLayer(marker);

      // 保存标记引用
      this.markers.push({
        marker: marker,
        destination: destination,
        element: null // 聚合标记的element会动态变化
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
    const category = document.getElementById('cardCategory');
    const title = document.getElementById('cardTitle');
    const description = document.getElementById('cardDescription');
    const tagsContainer = document.getElementById('cardTags');
    const favoriteBtn = document.getElementById('favoriteBtn');

    // 初始化图片轮播
    this.initImageCarousel(destination.images);

    // 设置卡片内容
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
    
    // 设置背景图片（使用第一张图片）
    const firstImage = destination.images ? destination.images[0] : 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop';
    backgroundImage.style.backgroundImage = `url(${firstImage})`;
    
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
    
    // 清空聚合组
    this.markerClusterGroup.clearLayers();
    
    // 添加符合筛选条件的标记到聚合组
    this.markers.forEach(({ marker, destination }) => {
      if (category === 'all' || destination.category === category) {
        this.markerClusterGroup.addLayer(marker);
      }
    });
    
    // 添加聚合组重新加载的动画效果
    setTimeout(() => {
      const clusterElements = document.querySelectorAll('.marker-cluster');
      clusterElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'scale(0.5)';
        
        setTimeout(() => {
          element.style.transition = 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
          element.style.opacity = '1';
          element.style.transform = 'scale(1)';
        }, index * 100);
      });
    }, 100);
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

  // 搜索功能
  searchDestinations(query) {
    if (!query || query.trim().length < 1) {
      return [];
    }

    const searchTerm = query.toLowerCase().trim();
    return destinationsData.filter(destination => {
      return (
        destination.name.toLowerCase().includes(searchTerm) ||
        destination.description.toLowerCase().includes(searchTerm) ||
        categoryMap[destination.category].toLowerCase().includes(searchTerm)
      );
    });
  }

  // 显示搜索结果
  showSearchResults(results) {
    const searchResults = document.getElementById('searchResults');
    
    if (results.length === 0) {
      searchResults.innerHTML = `
        <div class="search-result-item">
          <div class="search-result-info">
            <div class="search-result-name">未找到相关目的地</div>
            <div class="search-result-desc">请尝试其他关键词</div>
          </div>
        </div>
      `;
    } else {
      searchResults.innerHTML = results.map(destination => {
        const firstImage = destination.images ? destination.images[0] : 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop';
        return `
          <div class="search-result-item" data-id="${destination.id}">
            <div class="search-result-icon" style="background-image: url(${firstImage})"></div>
            <div class="search-result-info">
              <div class="search-result-name">${destination.name}</div>
              <div class="search-result-desc">${destination.description.substring(0, 40)}...</div>
            </div>
            <div class="search-result-category">${categoryMap[destination.category]}</div>
          </div>
        `;
      }).join('');

      // 为搜索结果添加点击事件和进入动画
      searchResults.querySelectorAll('.search-result-item').forEach((item, index) => {
        // 添加进入动画
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        
        setTimeout(() => {
          item.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
          item.style.opacity = '1';
          item.style.transform = 'translateX(0)';
        }, index * 50); // 错开动画时间
        
        item.addEventListener('click', () => {
          const id = parseInt(item.dataset.id);
          const destination = destinationsData.find(d => d.id === id);
          if (destination) {
            // 添加点击反馈动画
            item.style.transform = 'scale(0.95)';
            setTimeout(() => {
              this.hideSearchResults();
              this.showDestinationCard(destination);
              this.flyToDestination(destination.coordinates);
            }, 150);
          }
        });
      });
    }
    
    searchResults.classList.add('show');
  }

  // 隐藏搜索结果
  hideSearchResults() {
    const searchResults = document.getElementById('searchResults');
    searchResults.classList.remove('show');
  }

  // 清空搜索
  clearSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchClear = document.getElementById('searchClear');
    
    searchInput.value = '';
    searchClear.classList.remove('show');
    this.hideSearchResults();
    this.isSearching = false;
  }

  // 初始化图片轮播
  initImageCarousel(images) {
    this.currentImages = images || [];
    this.currentImageIndex = 0;

    const carouselTrack = document.getElementById('carouselTrack');
    const carouselIndicators = document.getElementById('carouselIndicators');

    // 清空现有内容
    carouselTrack.innerHTML = '';
    carouselIndicators.innerHTML = '';

    // 如果没有图片，显示默认图片
    if (this.currentImages.length === 0) {
      this.currentImages = ['https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop'];
    }

    // 创建图片幻灯片
    this.currentImages.forEach((image, index) => {
      const slide = document.createElement('div');
      slide.className = 'carousel-slide';
      
      const img = document.createElement('img');
      img.src = image;
      img.alt = `景点图片 ${index + 1}`;
      img.loading = 'lazy';
      
      // 图片加载事件
      img.addEventListener('load', () => {
        slide.classList.add('loaded');
      });
      
      img.addEventListener('error', () => {
        slide.classList.add('error');
        img.src = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop';
        this.showError('图片加载失败，已显示默认图片', 3000);
      });
      
      slide.appendChild(img);
      carouselTrack.appendChild(slide);

      // 创建指示器
      const indicator = document.createElement('div');
      indicator.className = `carousel-indicator ${index === 0 ? 'active' : ''}`;
      indicator.addEventListener('click', () => this.goToSlide(index));
      carouselIndicators.appendChild(indicator);
    });

    // 如果只有一张图片，隐藏控制元素
    const prevBtn = document.getElementById('carouselPrev');
    const nextBtn = document.getElementById('carouselNext');
    
    if (this.currentImages.length <= 1) {
      prevBtn.style.display = 'none';
      nextBtn.style.display = 'none';
      carouselIndicators.style.display = 'none';
    } else {
      prevBtn.style.display = 'flex';
      nextBtn.style.display = 'flex';
      carouselIndicators.style.display = 'flex';
    }

    // 更新轮播状态
    this.updateCarousel();
  }

  // 切换到指定幻灯片
  goToSlide(index) {
    if (index < 0 || index >= this.currentImages.length) return;
    
    this.currentImageIndex = index;
    this.updateCarousel();
  }

  // 上一张图片
  previousSlide() {
    const newIndex = this.currentImageIndex === 0 
      ? this.currentImages.length - 1 
      : this.currentImageIndex - 1;
    this.goToSlide(newIndex);
  }

  // 下一张图片
  nextSlide() {
    const newIndex = this.currentImageIndex === this.currentImages.length - 1 
      ? 0 
      : this.currentImageIndex + 1;
    this.goToSlide(newIndex);
  }

  // 更新轮播显示
  updateCarousel() {
    const carouselTrack = document.getElementById('carouselTrack');
    const indicators = document.querySelectorAll('.carousel-indicator');
    const prevBtn = document.getElementById('carouselPrev');
    const nextBtn = document.getElementById('carouselNext');

    // 移动轮播轨道
    const translateX = -this.currentImageIndex * 100;
    carouselTrack.style.transform = `translateX(${translateX}%)`;

    // 更新指示器
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle('active', index === this.currentImageIndex);
    });

    // 更新按钮状态（可选：禁用边界按钮）
    // prevBtn.disabled = this.currentImageIndex === 0;
    // nextBtn.disabled = this.currentImageIndex === this.currentImages.length - 1;
  }

  // 绑定事件监听器
  bindEvents() {
    // 搜索功能事件
    const searchInput = document.getElementById('searchInput');
    const searchClear = document.getElementById('searchClear');
    
    let searchTimeout;
    
    // 搜索输入事件
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value;
      
      // 显示/隐藏清除按钮
      if (query.length > 0) {
        searchClear.classList.add('show');
      } else {
        searchClear.classList.remove('show');
        this.hideSearchResults();
      }
      
      // 防抖搜索
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        if (query.length > 0) {
          const results = this.searchDestinations(query);
          this.showSearchResults(results);
          this.isSearching = true;
        } else {
          this.hideSearchResults();
          this.isSearching = false;
        }
      }, 300);
    });
    
    // 清除搜索
    searchClear.addEventListener('click', () => {
      this.clearSearch();
    });
    
    // 点击外部隐藏搜索结果
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.search-container')) {
        this.hideSearchResults();
      }
    });
    
    // 键盘导航
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.clearSearch();
      }
    });

    // 标签筛选按钮
    document.querySelectorAll('.tag-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        // 清空搜索
        if (this.isSearching) {
          this.clearSearch();
        }
        
        // 更新按钮状态
        document.querySelectorAll('.tag-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // 筛选目的地
        const category = btn.dataset.category;
        this.filterDestinations(category);
      });
    });

    // 图片轮播控制
    document.getElementById('carouselPrev').addEventListener('click', () => {
      this.previousSlide();
    });

    document.getElementById('carouselNext').addEventListener('click', () => {
      this.nextSlide();
    });

    // 卡片关闭按钮
    document.getElementById('cardClose').addEventListener('click', () => {
      this.hideDestinationCard();
    });

    // 收藏按钮
    document.getElementById('favoriteBtn').addEventListener('click', (e) => {
      if (this.currentDestination) {
        // 添加点击动画效果
        const btn = e.currentTarget;
        btn.style.transform = 'scale(0.9)';
        
        setTimeout(() => {
          btn.style.transform = 'scale(1.1)';
          this.toggleFavorite(this.currentDestination);
          
          // 添加心形爆炸效果
          this.createHeartExplosion(btn);
          
          setTimeout(() => {
            btn.style.transform = '';
          }, 200);
        }, 100);
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

    // 错误提示关闭按钮
    document.getElementById('errorClose').addEventListener('click', () => {
      this.hideError();
    });

    // 分享按钮（示例功能）
    document.querySelector('.share-btn').addEventListener('click', () => {
      if (this.currentDestination && navigator.share) {
        navigator.share({
          title: `探索${this.currentDestination.name}`,
          text: this.currentDestination.description,
          url: window.location.href
        }).catch(() => {
          this.showError('分享功能暂不可用', 3000);
        });
      } else {
        // 复制链接到剪贴板
        if (navigator.clipboard) {
          navigator.clipboard.writeText(window.location.href).then(() => {
            this.showError('链接已复制到剪贴板！', 2000);
          }).catch(() => {
            this.showError('复制失败，请手动复制链接', 3000);
          });
        } else {
          this.showError('浏览器不支持复制功能', 3000);
        }
      }
    });
  }

  // 工具方法：延时
  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // 更新加载进度
  updateLoadingProgress(progress, text) {
    const progressBar = document.getElementById('loadingProgressBar');
    const loadingText = document.getElementById('loadingText');
    
    if (progressBar) {
      progressBar.style.width = `${progress}%`;
    }
    
    if (loadingText && text) {
      loadingText.textContent = text;
    }
    
    this.loadingProgress = progress;
  }

  // 隐藏加载动画
  hideLoading() {
    const loading = document.getElementById('loading');
    loading.classList.add('hidden');
    setTimeout(() => {
      loading.style.display = 'none';
    }, 800);
  }

  // 显示图片加载指示器
  showImageLoading() {
    const overlay = document.getElementById('imageLoadingOverlay');
    if (overlay) {
      overlay.classList.add('show');
    }
  }

  // 隐藏图片加载指示器
  hideImageLoading() {
    const overlay = document.getElementById('imageLoadingOverlay');
    if (overlay) {
      overlay.classList.remove('show');
    }
  }

  // 显示错误提示
  showError(message, duration = 5000) {
    const errorToast = document.getElementById('errorToast');
    const errorMessage = document.getElementById('errorMessage');
    
    if (errorMessage) {
      errorMessage.textContent = message;
    }
    
    if (errorToast) {
      errorToast.classList.add('show');
      
      // 自动隐藏
      setTimeout(() => {
        this.hideError();
      }, duration);
    }
  }

  // 隐藏错误提示
  hideError() {
    const errorToast = document.getElementById('errorToast');
    if (errorToast) {
      errorToast.classList.remove('show');
    }
  }

  // 创建心形爆炸效果
  createHeartExplosion(element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // 创建多个心形粒子
    for (let i = 0; i < 8; i++) {
      const heart = document.createElement('div');
      heart.innerHTML = '❤️';
      heart.style.cssText = `
        position: fixed;
        left: ${centerX}px;
        top: ${centerY}px;
        font-size: 16px;
        pointer-events: none;
        z-index: 9999;
        transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        opacity: 1;
        transform: scale(1);
      `;
      
      document.body.appendChild(heart);

      // 随机方向和距离
      const angle = (i / 8) * Math.PI * 2;
      const distance = 80 + Math.random() * 40;
      const deltaX = Math.cos(angle) * distance;
      const deltaY = Math.sin(angle) * distance - 50; // 向上偏移

      // 动画效果
      setTimeout(() => {
        heart.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(0.3)`;
        heart.style.opacity = '0';
      }, 50);

      // 清理元素
      setTimeout(() => {
        if (heart.parentNode) {
          heart.parentNode.removeChild(heart);
        }
      }, 800);
    }
  }
}

// 应用实例
let app;

// 页面加载完成后初始化应用
document.addEventListener('DOMContentLoaded', () => {
  // 如果已有实例，先清理
  if (app && app.map) {
    app.map.remove();
    app = null;
  }
  
  app = new TravelExplorationMap();
  // 同时设置为全局变量供调试使用
  window.app = app;
});
