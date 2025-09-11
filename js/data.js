// 图片库 - 为不同类型的景点提供多样化的图片
const imagePool = {
  food: [
    'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop'
  ],
  culture: [
    'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1580837119756-563d608dd119?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1528127269322-539801943592?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1562813733-b31f71025d54?w=600&h=400&fit=crop'
  ],
  nature: [
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=600&h=400&fit=crop'
  ]
};

// 随机获取指定类别的图片数组
function getRandomImages(category, count = 3) {
  const pool = imagePool[category] || imagePool.nature;
  const shuffled = [...pool].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// 旅行目的地数据
const destinationsData = [
  // 美食类
  {
    id: 1,
    name: '潮州',
    coordinates: [116.6227, 23.6618],
    category: 'food',
    description: '千年古城的潮汕美食天堂，牛肉火锅、功夫茶文化的发源地',
    images: [
      'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop'
    ]
  },
  {
    id: 2,
    name: '柳州',
    coordinates: [109.4281, 24.3146],
    category: 'food',
    description: '螺蛳粉的故乡，广西工业重镇中的美食惊喜',
    images: [
      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=600&h=400&fit=crop'
    ]
  },
  {
    id: 3,
    name: '台州',
    coordinates: [121.4287, 28.6561],
    category: 'food',
    description: '浙江沿海小城，海鲜美食和温岭大溪的特色小吃',
    images: [
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=600&h=400&fit=crop'
    ]
  },
  {
    id: 4,
    name: '兰州',
    coordinates: [103.8236, 36.0581],
    category: 'food',
    description: '黄河穿城而过，正宗兰州拉面和西北美食的集大成者',
    images: getRandomImages('food')
  },
  {
    id: 5,
    name: '扬州',
    coordinates: [119.4179, 32.3932],
    category: 'food',
    description: '淮扬菜的发源地，精致的早茶文化和园林美景',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
  },
  {
    id: 6,
    name: '南宁',
    coordinates: [108.3669, 22.8174],
    category: 'food',
    description: '壮乡首府的东南亚风味，老友粉和酸嘢的天堂',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
  },
  {
    id: 7,
    name: '宜昌',
    coordinates: [111.3006, 30.6957],
    category: 'food',
    description: '三峡门户的江鲜美食，土家族特色菜肴',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
  },
  {
    id: 8,
    name: '临沂',
    coordinates: [118.3118, 35.0653],
    category: 'food',
    description: '沂蒙山区的朴实美食，煎饼果子和糁汤的故乡',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
  },
  {
    id: 9,
    name: '泉州',
    coordinates: [118.6754, 24.8742],
    category: 'food',
    description: '海上丝绸之路起点，闽南小吃和海鲜的天堂',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
  },
  {
    id: 10,
    name: '绵阳',
    coordinates: [104.7327, 31.4677],
    category: 'food',
    description: '科技城中的川菜精华，米粉和火锅的完美结合',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
  },
  {
    id: 11,
    name: '芜湖',
    coordinates: [118.3757, 31.3299],
    category: 'food',
    description: '长江明珠的徽菜文化，江鲜和小笼包的美味',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
  },
  {
    id: 12,
    name: '湛江',
    coordinates: [110.3594, 21.2707],
    category: 'food',
    description: '南海明珠的海鲜大餐，白切鸡和海鲜粥的故乡',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
  },
  {
    id: 13,
    name: '洛阳',
    coordinates: [112.4540, 34.6197],
    category: 'food',
    description: '十三朝古都的宫廷美食，水席和胡辣汤的传承',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
  },
  {
    id: 14,
    name: '威海',
    coordinates: [122.1136, 37.5137],
    category: 'food',
    description: '胶东半岛的海鲜盛宴，海带和扇贝的鲜美',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
  },
  {
    id: 15,
    name: '包头',
    coordinates: [109.8403, 40.6572],
    category: 'food',
    description: '草原钢城的蒙古族美食，手把肉和奶茶的醇香',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
  },
  {
    id: 16,
    name: '景德镇',
    coordinates: [117.1786, 29.2689],
    category: 'food',
    description: '瓷都的赣菜风味，瓷器与美食的双重享受',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
  },
  {
    id: 17,
    name: '遵义',
    coordinates: [106.9274, 27.7253],
    category: 'food',
    description: '黔北重镇的酸辣美食，羊肉粉和豆花面的香辣',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
  },

  // 文化类
  {
    id: 18,
    name: '平遥',
    coordinates: [112.1751, 37.1879],
    category: 'culture',
    description: '保存完整的明清古城，晋商文化的活化石',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
  },
  {
    id: 19,
    name: '开封',
    coordinates: [114.3075, 34.7975],
    category: 'culture',
    description: '七朝古都的宋朝繁华，清明上河图的现实再现',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
  },
  {
    id: 20,
    name: '曲阜',
    coordinates: [116.9811, 35.5956],
    category: 'culture',
    description: '孔子故里的儒家文化圣地，三孔古迹的庄严',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
  },
  {
    id: 21,
    name: '敦煌',
    coordinates: [94.6619, 40.1424],
    category: 'culture',
    description: '丝绸之路上的文化明珠，莫高窟的千年艺术',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
  },
  {
    id: 22,
    name: '大同',
    coordinates: [113.3004, 40.0931],
    category: 'culture',
    description: '北魏古都的石窟艺术，云冈石窟的佛教瑰宝',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
  },
  {
    id: 23,
    name: '天水',
    coordinates: [105.7129, 34.5785],
    category: 'culture',
    description: '羲皇故里的历史文化，麦积山石窟的精美雕刻',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
  },
  {
    id: 24,
    name: '安阳',
    coordinates: [114.3924, 36.1034],
    category: 'culture',
    description: '殷商文化的发源地，甲骨文的故乡',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
  },
  {
    id: 25,
    name: '邯郸',
    coordinates: [114.4775, 36.6253],
    category: 'culture',
    description: '赵国古都的成语典故，邯郸学步的历史见证',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
  },
  {
    id: 26,
    name: '承德',
    coordinates: [117.9633, 40.9543],
    category: 'culture',
    description: '避暑山庄的皇家园林，多民族文化的交融地',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
  },
  {
    id: 27,
    name: '嘉峪关',
    coordinates: [98.2773, 39.8035],
    category: 'culture',
    description: '万里长城的西端起点，丝路文化的重要节点',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
  },
  {
    id: 28,
    name: '喀什',
    coordinates: [75.9891, 39.4677],
    category: 'culture',
    description: '丝绸之路的重镇，维吾尔族文化的璀璨明珠',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
  },
  {
    id: 29,
    name: '拉萨',
    coordinates: [91.1409, 29.6456],
    category: 'culture',
    description: '日光城的藏传佛教圣地，布达拉宫的神圣庄严',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
  },
  {
    id: 30,
    name: '银川',
    coordinates: [106.2309, 38.4872],
    category: 'culture',
    description: '塞上江南的回族文化，西夏王朝的历史遗迹',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
  },
  {
    id: 31,
    name: '呼和浩特',
    coordinates: [111.7519, 40.8414],
    category: 'culture',
    description: '青城的蒙古族文化，草原丝绸之路的起点',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
  },
  {
    id: 32,
    name: '吐鲁番',
    coordinates: [89.1841, 42.9513],
    category: 'culture',
    description: '火焰山下的绿洲文化，葡萄沟的古老传说',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
  },
  {
    id: 33,
    name: '赤峰',
    coordinates: [118.9024, 42.2587],
    category: 'culture',
    description: '红山文化的发源地，契丹辽文化的重要见证',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
  },

  // 自然类
  {
    id: 34,
    name: '张家界',
    coordinates: [110.4793, 29.1275],
    category: 'nature',
    description: '奇峰异石的仙境世界，阿凡达取景地的神奇',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
  },
  {
    id: 35,
    name: '九寨沟',
    coordinates: [103.9197, 33.2540],
    category: 'nature',
    description: '童话世界的彩色海子，藏族村寨的自然画卷',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
  },
  {
    id: 36,
    name: '稻城亚丁',
    coordinates: [100.3016, 28.4277],
    category: 'nature',
    description: '蓝色星球上的最后净土，三神山的雪域风光',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
  },
  {
    id: 37,
    name: '阿尔山',
    coordinates: [119.9432, 47.1772],
    category: 'nature',
    description: '大兴安岭的温泉小镇，火山湖泊的神秘美景',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
  },
  {
    id: 38,
    name: '额济纳旗',
    coordinates: [101.0686, 41.9707],
    category: 'nature',
    description: '胡杨林的金秋传奇，居延海的沙漠绿洲',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
  },
  {
    id: 39,
    name: '漠河',
    coordinates: [122.3775, 52.9722],
    category: 'nature',
    description: '中国最北端的极光小镇，白夜现象的神奇体验',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
  },
  {
    id: 40,
    name: '茶卡盐湖',
    coordinates: [99.0652, 36.7519],
    category: 'nature',
    description: '天空之镜的梦幻倒影，青海湖畔的盐晶奇观',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
  },
  {
    id: 41,
    name: '霞浦',
    coordinates: [120.0052, 26.8856],
    category: 'nature',
    description: '摄影师天堂的滩涂光影，海上田园的诗意画卷',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
  },
  {
    id: 42,
    name: '色达',
    coordinates: [100.3259, 32.2685],
    category: 'nature',
    description: '世界最大的佛学院，红房子海洋中的心灵净土',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
  },
  {
    id: 43,
    name: '伊犁',
    coordinates: [81.3179, 43.9219],
    category: 'nature',
    description: '塞外江南的薰衣草海洋，天山雪峰下的绿色走廊',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
  },
  {
    id: 44,
    name: '腾冲',
    coordinates: [98.4951, 25.0158],
    category: 'nature',
    description: '火山热海的地质奇观，银杏村的金黄秋色',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
  },
  {
    id: 45,
    name: '东川红土地',
    coordinates: [103.1372, 26.0832],
    category: 'nature',
    description: '上帝打翻的调色盘，云南高原的彩色梯田',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
  },
  {
    id: 46,
    name: '长白山',
    coordinates: [128.0573, 42.0042],
    category: 'nature',
    description: '东北屋脊的天池秘境，原始森林的生态宝库',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
  },
  {
    id: 47,
    name: '若尔盖',
    coordinates: [102.9689, 33.5776],
    category: 'nature',
    description: '中国最美湿地草原，黄河九曲第一湾的壮丽',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
  },
  {
    id: 48,
    name: '可可西里',
    coordinates: [94.2608, 35.3758],
    category: 'nature',
    description: '无人区的野生动物天堂，藏羚羊的最后家园',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
  },
  {
    id: 49,
    name: '梅里雪山',
    coordinates: [98.6738, 28.4396],
    category: 'nature',
    description: '藏区八大神山之首，日照金山的神圣时刻',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
  },
  {
    id: 50,
    name: '巴丹吉林沙漠',
    coordinates: [102.4180, 40.3002],
    category: 'nature',
    description: '世界最高沙山群，沙漠中的神秘湖泊群',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
  }
];

// 分类映射
const categoryMap = {
  all: '全部',
  food: '美食',
  culture: '文化', 
  nature: '自然'
};

// 分类颜色
const categoryColors = {
  food: '#ff6b6b',
  culture: '#4ecdc4',
  nature: '#45b7d1'
};

// 为所有没有images属性的景点添加图片数组
destinationsData.forEach(destination => {
  if (!destination.images && destination.image) {
    // 如果有单个image属性，转换为images数组并添加更多图片
    destination.images = [destination.image, ...getRandomImages(destination.category, 2)];
    delete destination.image; // 删除旧的image属性
  } else if (!destination.images) {
    // 如果没有任何图片，生成默认图片数组
    destination.images = getRandomImages(destination.category, 3);
  }
});
