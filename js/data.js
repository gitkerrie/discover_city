// 中国美食探索地图首发城市数据。
const foodCitiesData = [
  {
    id: 1,
    slug: 'chengdu',
    name: '成都',
    province: '四川',
    group: '经典',
    coordinates: [104.0665, 30.5728],
    tagline: '红油翻香，甜辣交错，一座把吃饭过成日常仪式的城市。',
    description: '成都的味道不只在一个“辣”字。花椒的麻、红油的香、复合酱汁的甜鲜，共同构成层次分明的川味。街边小吃与家常馆子紧密相连，从清晨到深夜都能找到一口热闹。',
    flavorTags: ['麻辣鲜香', '小吃密集', '昼夜皆食'],
    heroImage: 'assets/cities/chengdu.webp',
    imageAlt: '成都钟水饺配红油酱汁',
    dishes: [
      { name: '钟水饺', description: '薄皮猪肉馅，淋复制酱油与红油，甜咸微辣。' },
      { name: '担担面', description: '芽菜、肉臊和红油裹住细面，香气集中利落。' },
      { name: '龙抄手', description: '皮薄汤鲜，红油与清汤两种吃法各有拥趸。' },
      { name: '甜水面', description: '粗面筋道，酱油回甜，蒜香和辣味随后而来。' }
    ],
    tip: '从早上的红油抄手开始，午后穿插小吃，晚上再把正餐留给川菜馆。'
  },
  {
    id: 2,
    slug: 'xian',
    name: '西安',
    province: '陕西',
    group: '经典',
    coordinates: [108.9398, 34.3416],
    tagline: '麦香、肉香与香料气息，在古城街巷里层层叠起。',
    description: '西安是一座由面食撑起的美食城市。馍、面、汤与牛羊肉构成主线，碳水的扎实质感和西北香料的明快气息，让每一餐都充满力量。',
    flavorTags: ['面食王国', '牛羊肉香', '饱足扎实'],
    heroImage: 'assets/cities/xian.webp',
    imageAlt: '西安肉夹馍夹着切碎的腊汁肉',
    dishes: [
      { name: '肉夹馍', description: '白吉馍外酥内软，腊汁肉肥瘦相间、汁香饱满。' },
      { name: '羊肉泡馍', description: '手掰馍粒吸足羊汤，配糖蒜与辣酱更显醇厚。' },
      { name: '油泼面', description: '热油激出辣椒与葱蒜香，宽面筋道爽利。' },
      { name: '葫芦鸡', description: '先煮再蒸后炸，外皮酥脆，鸡肉仍然鲜嫩。' }
    ],
    tip: '面食分量通常不小，结伴分食更容易在一天里多尝几种。'
  },
  {
    id: 3,
    slug: 'guangzhou',
    name: '广州',
    province: '广东',
    group: '经典',
    coordinates: [113.2644, 23.1291],
    tagline: '一盅两件慢慢吃，鲜味与火候共同定义岭南日常。',
    description: '广州饮食讲究食材本味与细致火候。早茶把精巧点心融进城市节奏，烧味和老火汤则展示另一种从容。这里的“鲜”并不清淡，而是对质地与香气的准确把握。',
    flavorTags: ['清鲜本味', '早茶文化', '火候细腻'],
    heroImage: 'assets/cities/guangzhou.webp',
    imageAlt: '广州早茶餐桌上的多款蒸点',
    dishes: [
      { name: '虾饺', description: '澄面皮透亮柔韧，虾肉弹脆，最见点心师傅功力。' },
      { name: '叉烧包', description: '松软包皮裹着蜜香叉烧馅，咸甜平衡。' },
      { name: '烧鹅', description: '皮脆油香，肉质丰润，酸梅酱带来清爽收尾。' },
      { name: '艇仔粥', description: '粥底绵滑，鱼片、花生与脆料组合出丰富口感。' }
    ],
    tip: '早茶宜早到，先点蒸笼类，再用粥、甜点和一壶茶慢慢收尾。'
  },
  {
    id: 4,
    slug: 'changsha',
    name: '长沙',
    province: '湖南',
    group: '经典',
    coordinates: [112.9388, 28.2282],
    tagline: '鲜辣、酸香、锅气足，夜色越深，味道越热烈。',
    description: '长沙的辣直接而有层次，新鲜辣椒带来清亮香气，发酵食材与猛火快炒补上厚度。从米粉到夜宵，鲜活与热烈是这座城市共同的味觉语言。',
    flavorTags: ['鲜辣直接', '夜宵丰盛', '锅气十足'],
    heroImage: 'assets/cities/changsha.webp',
    imageAlt: '长沙火宫殿风格的黑色臭豆腐',
    dishes: [
      { name: '臭豆腐', description: '外壳黑亮酥脆，内里柔嫩，灌入蒜汁和辣椒水。' },
      { name: '口味虾', description: '小龙虾吸足辣椒、紫苏和香料味，是夜宵主角。' },
      { name: '剁椒鱼头', description: '剁椒的酸辣渗入鱼肉，汤汁尤其适合拌面。' },
      { name: '糖油粑粑', description: '糯米粑裹上糖油，外脆内糯，为辣味留出甜口停顿。' }
    ],
    tip: '安排一顿正餐和一场夜宵，中间用米粉、小吃控制节奏。'
  },
  {
    id: 5,
    slug: 'wuhan',
    name: '武汉',
    province: '湖北',
    group: '经典',
    coordinates: [114.3055, 30.5928],
    tagline: '从“过早”开始，碳水、江鲜和热汤接管整座城市。',
    description: '武汉人的一天从过早开始。芝麻酱、米浆、糯米和鱼汤构成丰盛早餐，到了正餐又转向江鲜与煨汤。味道朴实饱满，带着码头城市的爽快。',
    flavorTags: ['过早文化', '芝麻浓香', '江城滋味'],
    heroImage: 'assets/cities/wuhan.webp',
    imageAlt: '武汉热干面拌有芝麻酱和葱花',
    dishes: [
      { name: '热干面', description: '碱水面筋道，芝麻酱浓香，酸豆角增添脆爽。' },
      { name: '三鲜豆皮', description: '蛋皮包住糯米、肉丁和香菇，外脆内软。' },
      { name: '鲜鱼糊汤粉', description: '细米粉浸在胡椒味浓郁的鱼汤中，常配油条。' },
      { name: '排骨藕汤', description: '莲藕粉糯、排骨软烂，是湖北餐桌的温柔底色。' }
    ],
    tip: '把早餐当成正式行程，早点出门，一次只点小份才能多吃几摊。'
  },
  {
    id: 6,
    slug: 'chongqing',
    name: '重庆',
    province: '重庆',
    group: '经典',
    coordinates: [106.5516, 29.563],
    tagline: '牛油翻滚、花椒醒神，山城的味道从不绕弯。',
    description: '重庆味道以麻辣为骨架，却不止火锅一种表达。小面、江湖菜和街边小吃都强调香气先行，花椒、辣椒与牛油让味觉在山城坡坎间保持高昂。',
    flavorTags: ['麻辣浓烈', '牛油醇厚', '江湖气'],
    heroImage: 'assets/cities/chongqing.webp',
    imageAlt: '重庆九宫格红汤火锅',
    dishes: [
      { name: '重庆火锅', description: '牛油红汤厚重辛香，毛肚、鸭肠讲究短时涮烫。' },
      { name: '重庆小面', description: '一碗面集合红油、花椒、芽菜和花生碎的复合香。' },
      { name: '辣子鸡', description: '鸡丁干香酥脆，埋在辣椒与花椒之间寻找更有趣。' },
      { name: '酸辣粉', description: '红薯粉滑韧，酸辣开胃，黄豆和榨菜补充口感。' }
    ],
    tip: '火锅先从微辣起步，油碟中加入蒜泥和香油能缓和灼热感。'
  },
  {
    id: 7,
    slug: 'chaozhou',
    name: '潮州',
    province: '广东',
    group: '宝藏',
    coordinates: [116.6226, 23.6567],
    tagline: '清鲜与卤香并行，一块粿、一炉炭火都藏着古城手艺。',
    description: '潮州菜重本味，也擅长用卤水、鱼露和粿品延长风味。牛肉按部位细分，海鲜追求鲜活，街头小食则把米浆变化成丰富形态，细致却不拘谨。',
    flavorTags: ['清鲜原味', '粿品丰富', '卤香悠长'],
    heroImage: 'assets/cities/chaozhou.webp',
    imageAlt: '潮汕牛肉丸粿条汤',
    dishes: [
      { name: '牛肉火锅', description: '鲜切牛肉按部位涮烫，沙茶酱增添坚果与香料气息。' },
      { name: '蚝烙', description: '薯粉浆煎出焦边，蚝仔鲜嫩，蘸鱼露更显鲜甜。' },
      { name: '卤水鹅', description: '老卤渗入鹅肉，咸香温润，鹅肝与鹅掌各有拥趸。' },
      { name: '红桃粿', description: '桃形粿皮包入糯米等馅料，兼具节庆意味与米香。' }
    ],
    tip: '牛肉火锅适合多人分享，白天留给粿品，晚上再逛古城小吃摊。'
  },
  {
    id: 8,
    slug: 'liuzhou',
    name: '柳州',
    province: '广西',
    group: '宝藏',
    coordinates: [109.4281, 24.3264],
    tagline: '酸、辣、鲜、烫汇在一碗粉里，气味大胆，层次更大胆。',
    description: '柳州因螺蛳粉闻名，但真正迷人的是整套酸食体系。酸笋、豆角、木耳与辣油共同建立味道，米粉和炖煮小吃则让这种强烈风格落回日常。',
    flavorTags: ['酸辣鲜烫', '米粉主场', '夜市烟火'],
    heroImage: 'assets/cities/liuzhou.webp',
    imageAlt: '柳州螺蛳粉配酸笋腐竹和花生',
    dishes: [
      { name: '螺蛳粉', description: '螺蛳汤鲜辣，酸笋醒目，腐竹与花生补足脆香。' },
      { name: '鸭脚煲', description: '炸过的鸭脚久煮入味，搭配酸笋和螺蛳更浓郁。' },
      { name: '柳州滤粉', description: '米浆现滤成粉，口感柔滑，常配肉末与酸豆角。' },
      { name: '露水汤圆', description: '咸口糯米团包入肉馅，软糯中带着鲜香。' }
    ],
    tip: '先尝原汤再加辣，酸笋不必一次加满，找到自己的酸香比例更重要。'
  },
  {
    id: 9,
    slug: 'yanji',
    name: '延吉',
    province: '吉林',
    group: '宝藏',
    coordinates: [129.5089, 42.8913],
    tagline: '冷面清冽、炭火热烈，朝鲜族风味在边城交汇。',
    description: '延吉饮食把东北物产与朝鲜族传统连接起来。冷面酸甜清爽，烤肉与米肠朴实浓香，泡菜和酱料贯穿餐桌，冷与热之间形成鲜明节奏。',
    flavorTags: ['酸甜清爽', '炭火烤香', '发酵风味'],
    heroImage: 'assets/cities/yanji.webp',
    imageAlt: '延吉风格冷面配牛肉鸡蛋和蔬菜',
    dishes: [
      { name: '延吉冷面', description: '荞麦面筋韧，冰凉汤底酸甜，配牛肉、鸡蛋与泡菜。' },
      { name: '米肠', description: '糯米与血料灌入肠衣蒸熟，蘸料后香气更完整。' },
      { name: '烤串', description: '肉串经炭火逼出油香，常用辣椒面与孜然调味。' },
      { name: '石锅拌饭', description: '锅底形成焦脆锅巴，蔬菜、米饭与辣酱充分拌匀。' }
    ],
    tip: '冷面和烤肉一冷一热很适合搭配，泡菜与小菜通常可以续加。'
  },
  {
    id: 10,
    slug: 'taizhou',
    name: '台州',
    province: '浙江',
    group: '宝藏',
    coordinates: [121.4208, 28.6561],
    tagline: '山海之间，糯叽叽的米食与鲜猛海味同桌出现。',
    description: '台州靠山面海，饮食既有渔港的鲜活，也有丰富的米面小吃。味道重鲜、略带咸甜，姜汁、酒糟和本地海产共同形成鲜明的沿海气质。',
    flavorTags: ['山海鲜味', '米食多样', '家烧烟火'],
    heroImage: 'assets/cities/taizhou.webp',
    imageAlt: '浙江台州特色饭粉圆',
    dishes: [
      { name: '食饼筒', description: '薄饼卷入肉丝、蛋皮、豆面等丰富馅料，层次饱满。' },
      { name: '姜汤面', description: '姜汁汤底辛香温暖，搭配海鲜与米面尤为鲜明。' },
      { name: '麦虾', description: '面糊削入汤中形似小虾，口感软韧，汤头鲜浓。' },
      { name: '家烧海鲜', description: '小海鲜以酱油和本地调味家常烧制，鲜味直接。' }
    ],
    tip: '不同县市各有代表小吃，按椒江、临海、温岭分区安排更从容。'
  },
  {
    id: 11,
    slug: 'kashgar',
    name: '喀什',
    province: '新疆',
    group: '宝藏',
    coordinates: [75.9898, 39.4704],
    tagline: '馕坑炭火与香料交织，西域果香让肉食更显明亮。',
    description: '喀什的餐桌围绕小麦、羊肉和时令瓜果展开。馕坑赋予食物焦香，孜然与洋葱衬托肉味，抓饭中的胡萝卜和葡萄干又带来温和甜意。',
    flavorTags: ['馕坑炭香', '牛羊肉食', '果香清甜'],
    heroImage: 'assets/cities/kashgar.webp',
    imageAlt: '喀什大巴扎街巷中的干果与香料摊位',
    dishes: [
      { name: '手抓饭', description: '米饭吸收羊肉油香，胡萝卜与洋葱带出自然甜味。' },
      { name: '烤包子', description: '馕坑烤出酥脆外壳，羊肉洋葱馅汁水丰盈。' },
      { name: '缸子肉', description: '羊肉与胡萝卜在搪瓷缸中慢炖，汤清肉香。' },
      { name: '烤羊肉串', description: '肥瘦相间的羊肉经炭火烤制，孜然香气醒目。' }
    ],
    tip: '白天逛巴扎尝馕和瓜果，傍晚再把胃口留给抓饭与烤肉。'
  },
  {
    id: 12,
    slug: 'yangzhou',
    name: '扬州',
    province: '江苏',
    group: '宝藏',
    coordinates: [119.4129, 32.3942],
    tagline: '刀工、汤水与清鲜慢慢铺开，一顿早茶就是半日闲适。',
    description: '扬州是淮扬味道的重要坐标，强调细致刀工、清鲜汤汁和温润口感。早茶体系尤其完整，从干丝到包点，节奏舒缓却处处讲究。',
    flavorTags: ['清鲜温润', '早茶悠闲', '刀工讲究'],
    heroImage: 'assets/cities/yangzhou.webp',
    imageAlt: '粒粒分明的扬州炒饭',
    dishes: [
      { name: '烫干丝', description: '豆腐干切得细如发丝，以热汤烫熟后清鲜爽口。' },
      { name: '三丁包', description: '鸡丁、肉丁和笋丁组成馅心，咸鲜带微甜。' },
      { name: '蟹粉狮子头', description: '肉质松软丰润，汤味清鲜，火候决定口感。' },
      { name: '扬州炒饭', description: '米粒分明，鸡蛋、虾仁与配料均匀交织。' }
    ],
    tip: '早茶尽量预留两小时，先干丝与包点，再以面或炒饭收尾。'
  }
];
