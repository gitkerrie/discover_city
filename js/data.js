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
    heroImage: 'assets/dishes/chengdu/zhong-shui-jiao.webp',
    imageAlt: '成都钟水饺配红油酱汁',
    dishes: [
      { name: '钟水饺', description: '薄皮猪肉馅，淋复制酱油与红油，甜咸微辣。' },
      { name: '担担面', description: '芽菜、肉臊和红油裹住细面，香气集中利落。' },
      { name: '龙抄手', description: '皮薄汤鲜，红油与清汤两种吃法各有拥趸。' },
      { name: '麻婆豆腐', description: '豆腐柔嫩，牛肉末、豆瓣与花椒叠出麻辣鲜香。' }
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
    heroImage: 'assets/dishes/xian/roujiamo.webp',
    imageAlt: '西安肉夹馍夹着切碎的腊汁肉',
    dishes: [
      { name: '肉夹馍', description: '白吉馍外酥内软，腊汁肉肥瘦相间、汁香饱满。' },
      { name: '羊肉泡馍', description: '手掰馍粒吸足羊汤，配糖蒜与辣酱更显醇厚。' },
      { name: '油泼面', description: '热油激出辣椒与葱蒜香，宽面筋道爽利。' },
      { name: '凉皮', description: '米皮爽滑筋道，配辣油、醋和蒜水，酸辣清爽。' }
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
    heroImage: 'assets/dishes/guangzhou/har-gow.webp',
    imageAlt: '竹蒸笼中的透明虾饺',
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
    heroImage: 'assets/dishes/changsha/stinky-tofu.webp',
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
    heroImage: 'assets/dishes/wuhan/hot-dry-noodles.webp',
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
    heroImage: 'assets/dishes/chongqing/chongqing-hot-pot.webp',
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
    heroImage: 'assets/dishes/chaozhou/beef-hot-pot.webp',
    imageAlt: '锅边摆放鲜切牛肉的潮汕牛肉火锅',
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
    heroImage: 'assets/dishes/liuzhou/luosifen.webp',
    imageAlt: '柳州螺蛳粉配酸笋腐竹和花生',
    dishes: [
      { name: '螺蛳粉', description: '螺蛳汤鲜辣，酸笋醒目，腐竹与花生补足脆香。' },
      { name: '三江油茶', description: '茶叶、生姜与米香熬成咸香茶汤，配炒米和花生食用。' },
      { name: '酿豆腐', description: '豆腐填入肉馅后煎炖入味，外香内嫩，是桂北家常味。' },
      { name: '竹筒饭', description: '糯米与配料装入竹筒焖熟，带着清新的竹香。' }
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
    heroImage: 'assets/dishes/yanji/yanji-cold-noodles.webp',
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
    heroImage: 'assets/dishes/taizhou/fanfenyuan.webp',
    imageAlt: '浙江台州特色饭粉圆',
    dishes: [
      { name: '饭粉圆', description: '米粉与薯粉制成软糯圆子，包裹鲜香馅料，是台州特色米食。' },
      { name: '红烧带鱼', description: '带鱼煎香后以酱油焖烧，鱼肉细嫩，咸鲜略带回甜。' },
      { name: '香煎小黄鱼', description: '小黄鱼煎至表皮金黄，肉质细嫩，保留东海鲜味。' },
      { name: '清蒸青蟹', description: '青蟹以清蒸突出鲜甜，蟹肉饱满，做法简洁直接。' }
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
    heroImage: 'assets/dishes/kashgar/lamb-polu.webp',
    imageAlt: '胡萝卜与羊肉烹制的喀什手抓饭',
    dishes: [
      { name: '手抓饭', description: '米饭吸收羊肉油香，胡萝卜与洋葱带出自然甜味。' },
      { name: '烤包子', description: '馕坑烤出酥脆外壳，羊肉洋葱馅汁水丰盈。' },
      { name: '新疆馕', description: '馕坑烤出酥香表面与扎实麦香，是当地餐桌的日常主食。' },
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
    heroImage: 'assets/dishes/yangzhou/braised-shredded-tofu.webp',
    imageAlt: '高汤中的扬州大煮干丝',
    dishes: [
      { name: '大煮干丝', description: '细如发丝的豆腐干与高汤、火腿等同煮，清鲜醇厚。' },
      { name: '三丁包', description: '鸡丁、肉丁和笋丁组成馅心，咸鲜带微甜。' },
      { name: '红烧狮子头', description: '大肉丸慢火红烧，口感松软丰润，酱汁醇厚。' },
      { name: '扬州炒饭', description: '米粒分明，鸡蛋、虾仁与配料均匀交织。' }
    ],
    tip: '早茶尽量预留两小时，先干丝与包点，再以面或炒饭收尾。'
  }
];

// English copy is keyed by the stable city slug so favorites and deep links stay language-neutral.
const foodCitiesEnglish = {
  chengdu: {
    name: 'Chengdu',
    province: 'Sichuan',
    tagline: 'Red chili oil, sweet heat, and a city that turns every meal into a daily ritual.',
    description: 'Chengdu is about far more than heat. The numbing lift of Sichuan pepper, the aroma of chili oil, and sweet-savory sauces create layers of classic Sichuan flavor. Street snacks and neighborhood restaurants flow into one another, keeping the city delicious from breakfast to late night.',
    flavorTags: ['Numbing heat', 'Street-snack culture', 'All-day dining'],
    imageAlt: 'Chengdu-style Zhong Shui Jiao dumplings in red chili oil',
    dishes: [
      { name: 'Zhong Shui Jiao', description: 'Thin-skinned pork dumplings dressed with sweet soy sauce and red chili oil.' },
      { name: 'Dan Dan Noodles', description: 'Fine noodles coated with preserved greens, minced pork, and fragrant chili oil.' },
      { name: 'Long Chao Shou', description: 'Delicate wontons served either in a clear broth or a vivid red-oil sauce.' },
      { name: 'Mapo Tofu', description: 'Tender tofu, minced beef, chile bean paste, and Sichuan pepper in a vivid numbing sauce.' }
    ],
    tip: 'Begin with red-oil wontons in the morning, graze on snacks in the afternoon, and save dinner for a full Sichuan meal.'
  },
  xian: {
    name: "Xi'an",
    province: 'Shaanxi',
    tagline: 'Wheat, slow-cooked meat, and warm spices build layer upon layer through the old city.',
    description: "Xi'an is a food city built on wheat. Flatbreads, noodles, rich broths, and beef or lamb form its backbone. Substantial textures and bright northwestern spices make every meal feel generous and deeply satisfying.",
    flavorTags: ['Wheat traditions', 'Beef and lamb', 'Bold and hearty'],
    imageAlt: "Xi'an roujiamo filled with chopped braised pork",
    dishes: [
      { name: 'Roujiamo', description: 'A crisp, tender flatbread packed with juicy, long-braised pork.' },
      { name: 'Lamb Paomo', description: 'Hand-torn bread soaked in lamb broth and served with pickled garlic and chili.' },
      { name: 'Oil-Splashed Noodles', description: 'Hot oil blooms chili, scallion, and garlic over broad, springy noodles.' },
      { name: 'Liangpi', description: 'Springy cold rice noodles dressed with chili oil, vinegar, garlic, and crisp vegetables.' }
    ],
    tip: 'Portions are generous, so share with companions if you want to sample several wheat dishes in one day.'
  },
  guangzhou: {
    name: 'Guangzhou',
    province: 'Guangdong',
    tagline: 'Dim sum taken slowly, where freshness and exacting technique define everyday Lingnan cooking.',
    description: 'Guangzhou cooking prizes the natural character of ingredients and precise control of heat. Morning tea folds intricate dim sum into the city rhythm, while roast meats and slow soups reveal a different kind of patience. Freshness here is expressive, never plain.',
    flavorTags: ['Clean freshness', 'Morning tea', 'Precise technique'],
    imageAlt: 'A Guangzhou morning-tea table filled with steamed dim sum',
    dishes: [
      { name: 'Shrimp Dumplings', description: 'Translucent, supple wrappers hold springy shrimp and showcase a dim sum chef\'s skill.' },
      { name: 'Char Siu Bao', description: 'Soft steamed buns filled with honeyed barbecue pork in a savory-sweet sauce.' },
      { name: 'Roast Goose', description: 'Crisp skin, succulent meat, and plum sauce for a bright finish.' },
      { name: 'Sampan Congee', description: 'Silky rice porridge layered with fish, peanuts, and crisp garnishes.' }
    ],
    tip: 'Arrive early for morning tea. Start with steamed baskets, then linger over congee, sweets, and a pot of tea.'
  },
  changsha: {
    name: 'Changsha',
    province: 'Hunan',
    tagline: 'Fresh chilies, tangy ferments, and fierce wok heat grow livelier as the night deepens.',
    description: 'Changsha heat is direct but layered. Fresh chilies bring a bright fragrance, while fermented ingredients and fast, high-heat cooking add depth. From rice noodles to late-night snacks, freshness and intensity shape the city\'s appetite.',
    flavorTags: ['Fresh chili heat', 'Late-night feasts', 'Wok-fired flavor'],
    imageAlt: 'Changsha-style black stinky tofu with chili and garlic',
    dishes: [
      { name: 'Stinky Tofu', description: 'A crisp black shell gives way to a tender center filled with garlic and chili sauce.' },
      { name: 'Spicy Crayfish', description: 'Crayfish steeped in chilies, perilla, and spices, made for late-night eating.' },
      { name: 'Chopped-Chili Fish Head', description: 'Tangy chopped chilies season tender fish and leave a sauce made for noodles.' },
      { name: 'Sugar-Oil Rice Cakes', description: 'Glutinous rice cakes glazed in caramelized sugar, crisp outside and chewy within.' }
    ],
    tip: 'Plan one proper Hunan meal and one late-night feast, with rice noodles and small snacks between them.'
  },
  wuhan: {
    name: 'Wuhan',
    province: 'Hubei',
    tagline: 'The city wakes over breakfast, then moves through sesame, river fish, and restorative soups.',
    description: 'Wuhan begins the day with guozao, its celebrated breakfast ritual. Sesame paste, rice batter, sticky rice, and fish broth fill the morning; later meals turn toward river produce and slow soups. The flavors are honest, sustaining, and full of the city\'s brisk energy.',
    flavorTags: ['Breakfast ritual', 'Toasted sesame', 'River-city comfort'],
    imageAlt: 'Wuhan hot dry noodles tossed with sesame paste and scallions',
    dishes: [
      { name: 'Hot Dry Noodles', description: 'Springy alkaline noodles coated in sesame paste with crisp pickled beans.' },
      { name: 'Three-Delicacy Doupi', description: 'A crisp egg-and-bean wrapper filled with sticky rice, pork, and mushrooms.' },
      { name: 'Fish Broth Rice Noodles', description: 'Fine rice noodles in a peppery fish broth, often paired with a fried dough stick.' },
      { name: 'Pork Rib and Lotus Root Soup', description: 'Powdery lotus root and tender ribs create a gentle Hubei classic.' }
    ],
    tip: 'Treat breakfast as a full itinerary: head out early and order small portions so you can visit several stalls.'
  },
  chongqing: {
    name: 'Chongqing',
    province: 'Chongqing',
    tagline: 'Beef tallow bubbles and Sichuan pepper wakes the senses; this mountain city never whispers.',
    description: 'Chongqing builds its food on numbing heat, but hot pot is only the beginning. Noodles, river dishes, and street snacks all lead with aroma. Sichuan pepper, chilies, and beef tallow keep flavors vivid across the city\'s steep streets.',
    flavorTags: ['Numbing intensity', 'Rich beef tallow', 'Streetwise spirit'],
    imageAlt: 'A nine-grid Chongqing hot pot filled with red broth',
    dishes: [
      { name: 'Chongqing Hot Pot', description: 'A rich beef-tallow broth for quick-cooking tripe, duck intestine, and vegetables.' },
      { name: 'Chongqing Xiaomian', description: 'Noodles layered with chili oil, Sichuan pepper, preserved greens, and peanuts.' },
      { name: 'Chili Chicken', description: 'Crisp morsels of chicken hidden among a fragrant heap of dried chilies.' },
      { name: 'Hot and Sour Noodles', description: 'Chewy sweet-potato noodles with vinegar, chili, soybeans, and pickled mustard.' }
    ],
    tip: 'Start hot pot at a moderate heat level; garlic and sesame oil in the dipping bowl help soften the burn.'
  },
  chaozhou: {
    name: 'Chaozhou',
    province: 'Guangdong',
    tagline: 'Pure flavors and aromatic braises meet rice-cake craft and glowing charcoal.',
    description: 'Chaozhou cooking respects natural flavor while extending it through master stock, fish sauce, and rice-based specialties. Beef is sliced by cut, seafood is served at peak freshness, and humble rice batter becomes a remarkable range of snacks.',
    flavorTags: ['Pure freshness', 'Rice-cake craft', 'Master-stock aroma'],
    imageAlt: 'Chaoshan beef-ball rice noodle soup',
    dishes: [
      { name: 'Fresh Beef Hot Pot', description: 'Precisely cut beef is swished by the second and paired with nutty satay sauce.' },
      { name: 'Oyster Omelet', description: 'Sweet oysters and starch batter form crisp edges, brightened with fish sauce.' },
      { name: 'Master-Stock Goose', description: 'Aromatic soy braise permeates the goose, with liver and web prized separately.' },
      { name: 'Red Peach Rice Cake', description: 'A peach-shaped rice wrapper encloses sticky rice and savory fillings.' }
    ],
    tip: 'Share beef hot pot with a group, explore rice cakes by day, then graze through old-town stalls after dark.'
  },
  liuzhou: {
    name: 'Liuzhou',
    province: 'Guangxi',
    tagline: 'Sour, hot, savory, and steaming flavors converge in one audacious bowl of noodles.',
    description: 'Liuzhou is famous for luosifen, but the deeper story is its culture of pickled flavor. Sour bamboo shoots, beans, wood ear, and chili oil build complexity, while rice noodles and braised snacks carry that bold profile through everyday meals.',
    flavorTags: ['Sour and fiery', 'Rice-noodle city', 'Night-market energy'],
    imageAlt: 'Liuzhou luosifen with sour bamboo shoots, tofu skin, and peanuts',
    dishes: [
      { name: 'Luosifen', description: 'A savory snail broth with sour bamboo shoots, crisp tofu skin, peanuts, and chili.' },
      { name: 'Sanjiang Oil Tea', description: 'Tea leaves, ginger, and rice form a savory brew topped with toasted rice and peanuts.' },
      { name: 'Stuffed Tofu', description: 'Tofu filled with seasoned pork is pan-seared and braised until savory and tender.' },
      { name: 'Bamboo Rice', description: 'Glutinous rice and seasonings steam inside bamboo, taking on a fresh woodland aroma.' }
    ],
    tip: 'Taste the broth before adding chili, and add sour bamboo shoots gradually until the balance feels right.'
  },
  yanji: {
    name: 'Yanji',
    province: 'Jilin',
    tagline: 'Icy noodles and glowing charcoal bring Korean-Chinese traditions together on the border.',
    description: 'Yanji links northeastern produce with Korean-Chinese culinary traditions. Cold noodles are tangy and refreshing; barbecue and blood sausage are earthy and rich. Kimchi and fermented sauces run through the meal, creating a vivid rhythm between cold and hot.',
    flavorTags: ['Tangy and cool', 'Charcoal barbecue', 'Fermented depth'],
    imageAlt: 'Yanji-style cold noodles with beef, egg, and vegetables',
    dishes: [
      { name: 'Yanji Cold Noodles', description: 'Chewy buckwheat noodles in an icy sweet-sour broth with beef, egg, and kimchi.' },
      { name: 'Rice Sausage', description: 'Glutinous rice and seasoned blood are steamed in casing and served with dip.' },
      { name: 'Charcoal Skewers', description: 'Meat skewers release their fat over charcoal and finish with chili and cumin.' },
      { name: 'Stone-Pot Bibimbap', description: 'Rice, vegetables, and chili paste are mixed over a crisp layer of scorched rice.' }
    ],
    tip: 'Pair icy noodles with hot barbecue; kimchi and small side dishes are commonly replenished.'
  },
  taizhou: {
    name: 'Taizhou',
    province: 'Zhejiang',
    tagline: 'Between mountain and sea, chewy rice snacks share the table with vivid seafood.',
    description: 'Taizhou faces the sea with mountains at its back, combining lively harbor seafood with a broad repertoire of rice and wheat snacks. The cooking is fresh and gently savory-sweet, shaped by ginger, fermented rice, and the daily catch.',
    flavorTags: ['Mountain and sea', 'Rice-snack variety', 'Home-style seafood'],
    imageAlt: 'Fanfenyuan, a distinctive rice dish from Taizhou, Zhejiang',
    dishes: [
      { name: 'Fanfenyuan', description: 'Soft rice-and-starch dumplings wrap a savory filling in a distinctive Taizhou snack.' },
      { name: 'Braised Hairtail', description: 'Seared hairtail is gently braised with soy for tender flesh and rounded savory flavor.' },
      { name: 'Pan-Fried Yellow Croaker', description: 'Small yellow croaker is fried until golden while keeping its delicate East China Sea flavor.' },
      { name: 'Steamed Blue Crab', description: 'Simple steaming highlights the crab\'s sweet, full meat and clean coastal freshness.' }
    ],
    tip: 'Each county has its own specialties; organize visits around Jiaojiang, Linhai, and Wenling for an easier pace.'
  },
  kashgar: {
    name: 'Kashgar',
    province: 'Xinjiang',
    tagline: 'Tandoor smoke and warm spice meet the bright fruit of the western oases.',
    description: 'Kashgar meals revolve around wheat, lamb, and seasonal fruit. The tandoor lends food a smoky crust, cumin and onion frame the meat, and carrots or raisins bring a gentle sweetness to rice pilaf.',
    flavorTags: ['Tandoor smoke', 'Lamb and beef', 'Oasis fruit'],
    imageAlt: 'Dried fruit and spice stalls in the lanes of Kashgar bazaar',
    dishes: [
      { name: 'Lamb Polu', description: 'Rice absorbs fragrant lamb fat while carrots and onions add natural sweetness.' },
      { name: 'Tandoor Samsa', description: 'A crisp tandoor-baked shell holds juicy lamb and onion.' },
      { name: 'Xinjiang Naan', description: 'Tandoor baking gives this everyday flatbread a crisp face and deep wheat aroma.' },
      { name: 'Lamb Skewers', description: 'Alternating lean and fatty lamb is grilled over charcoal with vivid cumin.' }
    ],
    tip: 'Browse the bazaar for naan and fruit by day, then save the evening for polu and grilled lamb.'
  },
  yangzhou: {
    name: 'Yangzhou',
    province: 'Jiangsu',
    tagline: 'Knife work, clear broths, and gentle flavors unfold over an unhurried morning tea.',
    description: 'Yangzhou is a landmark of Huaiyang cuisine, known for precise knife work, clear savory broths, and rounded textures. Its morning-tea tradition is especially complete, moving at an easy pace from fine tofu shreds to filled buns.',
    flavorTags: ['Gentle freshness', 'Leisurely morning tea', 'Refined knife work'],
    imageAlt: 'Yangzhou fried rice with distinct, evenly coated grains',
    dishes: [
      { name: 'Braised Shredded Tofu', description: 'Hair-thin tofu shreds simmer with stock and ham for a delicate yet deeply savory bowl.' },
      { name: 'Three-Dice Bao', description: 'Chicken, pork, and bamboo shoots form a savory filling with a hint of sweetness.' },
      { name: 'Red-Braised Lion\'s Head', description: 'Large pork meatballs cook slowly in a rich soy sauce until tender and succulent.' },
      { name: 'Yangzhou Fried Rice', description: 'Distinct rice grains are evenly folded with egg, shrimp, and colorful garnishes.' }
    ],
    tip: 'Reserve two hours for morning tea: begin with tofu and buns, then finish with noodles or fried rice.'
  }
};

const dishLicenseUrls = {
  'CC0 1.0': 'https://creativecommons.org/publicdomain/zero/1.0/',
  'CC BY 2.0': 'https://creativecommons.org/licenses/by/2.0/',
  'CC BY 3.0': 'https://creativecommons.org/licenses/by/3.0/',
  'CC BY-SA 2.0': 'https://creativecommons.org/licenses/by-sa/2.0/',
  'CC BY-SA 3.0': 'https://creativecommons.org/licenses/by-sa/3.0/',
  'CC BY-SA 4.0': 'https://creativecommons.org/licenses/by-sa/4.0/'
};

function dishMedia(slug, imageAltZh, imageAltEn, author, license, sourceUrl, originalUrl) {
  return {
    slug,
    imageAlt: { zh: imageAltZh, en: imageAltEn },
    credit: { author, license, licenseUrl: dishLicenseUrls[license], sourceUrl },
    originalUrl
  };
}

function commonsDish(slug, imageAltZh, imageAltEn, author, license, fileName, originalUrl) {
  return dishMedia(
    slug,
    imageAltZh,
    imageAltEn,
    author,
    license,
    `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(fileName)}`,
    originalUrl
  );
}

// Shared image and license metadata. English copy only supplies translated text and alt text.
const foodDishMedia = {
  chengdu: [
    commonsDish('zhong-shui-jiao', '红油酱汁中的成都钟水饺', 'Chengdu Zhong Shui Jiao dumplings in red chili oil', '유신예', 'CC0 1.0', 'Chengdu Zhong Dumpling(Zhong Jiaozi).jpg', 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Chengdu_Zhong_Dumpling%28Zhong_Jiaozi%29.jpg'),
    commonsDish('dan-dan-noodles', '撒有花生碎和葱花的担担面', 'Dan Dan noodles topped with peanuts and scallions', 'Sharon Ang', 'CC0 1.0', '担担面 Dandan noodles.jpg', 'https://upload.wikimedia.org/wikipedia/commons/9/95/%E6%8B%85%E6%8B%85%E9%9D%A2_Dandan_noodles.jpg'),
    commonsDish('red-oil-wontons', '浸在红油酱汁中的龙抄手', 'Chengdu wontons dressed in red chili oil', 'NeoBatfreak', 'CC BY-SA 4.0', 'Red Oil Wontons (红油抄手).jpg', 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Red_Oil_Wontons_%28%E7%BA%A2%E6%B2%B9%E6%8A%84%E6%89%8B%29.jpg'),
    dishMedia('mapo-tofu', '花椒与葱花点缀的麻婆豆腐', 'Mapo tofu topped with Sichuan pepper and scallions', 'avlxyz', 'CC BY-SA 2.0', 'https://www.flickr.com/photos/10559879@N00/2268560276', 'https://live.staticflickr.com/2106/2268560276_ef078caa43_b.jpg')
  ],
  xian: [
    commonsDish('roujiamo', '夹着卤肉的西安肉夹馍', "Xi'an roujiamo filled with braised pork", 'Fumikas Sagisavas', 'CC0 1.0', 'Laotongguan thousand layer roujiamo.jpg', 'https://upload.wikimedia.org/wikipedia/commons/5/55/Laotongguan_thousand_layer_roujiamo.jpg'),
    commonsDish('lamb-paomo', '羊肉汤中的掰馍与粉丝', 'Hand-torn bread and noodles in lamb broth', 'NNU-1-05100104', 'CC BY-SA 3.0', 'Pita Bread Soaked in Lamb Soup.jpg', 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Pita_Bread_Soaked_in_Lamb_Soup.jpg'),
    commonsDish('oil-splashed-noodles', '辣椒与葱蒜覆盖的油泼宽面', 'Broad oil-splashed noodles with chili and scallions', 'Liuxingy', 'CC BY-SA 4.0', '油泼扯面.jpg', 'https://upload.wikimedia.org/wikipedia/commons/4/45/%E6%B2%B9%E6%B3%BC%E6%89%AF%E9%9D%A2.jpg'),
    commonsDish('liangpi', '拌有辣油与蔬菜的西安凉皮', "Xi'an liangpi dressed with chili oil and vegetables", 'Liuxingy', 'CC BY-SA 4.0', '西安美食凉皮.jpg', 'https://upload.wikimedia.org/wikipedia/commons/9/92/%E8%A5%BF%E5%AE%89%E7%BE%8E%E9%A3%9F%E5%87%89%E7%9A%AE.jpg')
  ],
  guangzhou: [
    commonsDish('har-gow', '竹蒸笼中的透明虾饺', 'Translucent shrimp dumplings in a bamboo steamer', 'N509FZ', 'CC BY-SA 4.0', 'Har Gow at Canal Luna restaurant, InterContinental Guangzhou Exhibition Center (20180923125523).jpg', 'https://upload.wikimedia.org/wikipedia/commons/d/da/Har_Gow_at_Canal_Luna_restaurant%2C_InterContinental_Guangzhou_Exhibition_Center_%2820180923125523%29.jpg'),
    commonsDish('char-siu-bao', '掰开后露出叉烧馅的叉烧包', 'Steamed char siu bao opened to show the barbecue pork filling', 'Takeaway', 'CC BY-SA 3.0', 'Char siu bao.jpg', 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Char_siu_bao.jpg'),
    commonsDish('roast-goose', '切件装盘的广式烧鹅', 'Sliced Cantonese roast goose on a serving plate', 'Dinkun Chen', 'CC BY-SA 4.0', 'Cantonese roasted goose.jpg', 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Cantonese_roasted_goose.jpg'),
    commonsDish('sampan-congee', '盛有鱼片和脆料的艇仔粥', 'Sampan congee with fish and crisp garnishes', 'ZhengZhou', 'CC BY-SA 4.0', 'Cantonese Sampan Congee (Boat Congee).jpeg', 'https://upload.wikimedia.org/wikipedia/commons/2/20/Cantonese_Sampan_Congee_%28Boat_Congee%29.jpeg')
  ],
  changsha: [
    commonsDish('stinky-tofu', '淋有辣椒酱汁的长沙黑色臭豆腐', 'Black Changsha stinky tofu dressed with chili sauce', 'Popolon', 'CC BY-SA 4.0', 'Changsha.zhenzong.choudoufu.jpg', 'https://upload.wikimedia.org/wikipedia/commons/2/23/Changsha.zhenzong.choudoufu.jpg'),
    commonsDish('spicy-crayfish', '红油与香料烹制的口味虾', 'Spicy crayfish cooked with chili oil and aromatics', 'Fumikas Sagisavas', 'CC0 1.0', 'Spicy crayfish.jpg', 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Spicy_crayfish.jpg'),
    commonsDish('chopped-chili-fish-head', '覆盖红色剁椒的蒸鱼头', 'Steamed fish head covered with chopped red chilies', 'Huangdan2060', 'CC BY 3.0', 'Steamed fish head with diced hot red peppers 20211206.jpg', 'https://upload.wikimedia.org/wikipedia/commons/4/49/Steamed_fish_head_with_diced_hot_red_peppers_20211206.jpg'),
    commonsDish('sugar-oil-rice-cakes', '糖浆包裹的长沙糖油粑粑', 'Changsha glutinous rice cakes glazed in caramelized sugar', 'EditQ', 'CC BY-SA 4.0', '糖油粑粑.jpg', 'https://upload.wikimedia.org/wikipedia/commons/6/6b/%E7%B3%96%E6%B2%B9%E7%B2%91%E7%B2%91.jpg')
  ],
  wuhan: [
    commonsDish('hot-dry-noodles', '芝麻酱拌匀的武汉热干面', 'Wuhan hot dry noodles coated in sesame paste', 'Nature42', 'CC0 1.0', '热干面.jpg', 'https://upload.wikimedia.org/wikipedia/commons/4/4f/%E7%83%AD%E5%B9%B2%E9%9D%A2.jpg'),
    commonsDish('three-delicacy-doupi', '切块装盘的武汉三鲜豆皮', 'Sliced Wuhan doupi filled with sticky rice and savory ingredients', 'ZhengZhou', 'CC BY-SA 4.0', 'Doupi breakfast in Wuhan.jpeg', 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Doupi_breakfast_in_Wuhan.jpeg'),
    commonsDish('fish-broth-rice-noodles', '武汉鲜鱼糊汤粉与豆皮早餐', 'Wuhan fish broth rice noodles served with doupi', 'Auongkinghe', 'CC BY-SA 4.0', '鲜鱼糊汤粉豆皮套餐 20251018.jpg', 'https://upload.wikimedia.org/wikipedia/commons/c/ce/%E9%B2%9C%E9%B1%BC%E7%B3%8A%E6%B1%A4%E7%B2%89%E8%B1%86%E7%9A%AE%E5%A5%97%E9%A4%90_20251018.jpg'),
    dishMedia('lotus-root-rib-soup', '莲藕与排骨炖成的湖北汤', 'Hubei soup with lotus root and pork ribs', 'Colin ZHU', 'CC BY-SA 2.0', 'https://www.flickr.com/photos/71834709@N00/8546361421', 'https://live.staticflickr.com/8392/8546361421_d892e2dab2_b.jpg')
  ],
  chongqing: [
    commonsDish('chongqing-hot-pot', '翻滚红汤中的重庆火锅食材', 'Ingredients cooking in a bubbling red Chongqing hot pot', 'WFan', 'CC BY-SA 4.0', '20191016 重庆火锅.jpg', 'https://upload.wikimedia.org/wikipedia/commons/0/00/20191016_%E9%87%8D%E5%BA%86%E7%81%AB%E9%94%85.jpg'),
    commonsDish('chongqing-xiaomian', '红油与青菜搭配的重庆小面', 'Chongqing xiaomian with red chili oil and greens', '瑞丽江的河水', 'CC BY-SA 4.0', '重庆小面 - 2024-05-25.jpg', 'https://upload.wikimedia.org/wikipedia/commons/0/0b/%E9%87%8D%E5%BA%86%E5%B0%8F%E9%9D%A2_-_2024-05-25.jpg'),
    commonsDish('laziji', '干辣椒与花椒中的辣子鸡', 'Crisp laziji chicken among dried chilies and Sichuan pepper', 'Suginami', 'CC0 1.0', 'Laziji 辣子鸡.jpg', 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Laziji_%E8%BE%A3%E5%AD%90%E9%B8%A1.jpg'),
    commonsDish('hot-sour-noodles', '铺有配料的重庆酸辣粉', 'Chongqing hot and sour sweet-potato noodles with toppings', 'Jpatokal', 'CC BY-SA 4.0', 'Hot and sour noodles with pork intestines.jpg', 'https://upload.wikimedia.org/wikipedia/commons/8/88/Hot_and_sour_noodles_with_pork_intestines.jpg')
  ],
  chaozhou: [
    commonsDish('beef-hot-pot', '锅边摆放鲜切牛肉的潮汕牛肉火锅', 'Chaoshan beef hot pot surrounded by plates of fresh sliced beef', 'N509FZ', 'CC BY-SA 4.0', 'Chaoshan Beef Hot Pot at Baheli Haiji, ZGC1 (20221003132726).jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Chaoshan_Beef_Hot_Pot_at_Baheli_Haiji%2C_ZGC1_%2820221003132726%29.jpg/1280px-Chaoshan_Beef_Hot_Pot_at_Baheli_Haiji%2C_ZGC1_%2820221003132726%29.jpg'),
    commonsDish('oyster-omelet', '边缘焦脆的潮州蚝烙', 'Chaozhou oyster omelet with crisp golden edges', '水餃喵', 'CC BY-SA 4.0', 'Oyster omelette 蚝烙.jpg', 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Oyster_omelette_%E8%9A%9D%E7%83%99.jpg'),
    commonsDish('braised-goose', '切片装盘的潮汕卤水鹅', 'Sliced Chaoshan master-stock braised goose', '0754Hombee', 'CC BY-SA 4.0', '潮汕非遗卤鹅.jpg', 'https://upload.wikimedia.org/wikipedia/commons/9/93/%E6%BD%AE%E6%B1%95%E9%9D%9E%E9%81%97%E5%8D%A4%E9%B9%85.jpg'),
    commonsDish('red-peach-rice-cake', '桃形粉红色潮州红桃粿', 'Pink peach-shaped Chaozhou red peach rice cakes', '白布飘扬', 'CC BY-SA 4.0', 'Red peach cake.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Red_peach_cake.jpg/1280px-Red_peach_cake.jpg')
  ],
  liuzhou: [
    commonsDish('luosifen', '配酸笋、腐竹和花生的柳州螺蛳粉', 'Liuzhou luosifen with sour bamboo shoots, tofu skin, and peanuts', 'N509FZ', 'CC BY-SA 4.0', 'Luosifen at Guangya, Liuzhou (20190420141814).jpg', 'https://upload.wikimedia.org/wikipedia/commons/1/16/Luosifen_at_Guangya%2C_Liuzhou_%2820190420141814%29.jpg'),
    commonsDish('sanjiang-oil-tea', '炒米与花生漂在三江油茶茶汤中', 'Sanjiang oil tea topped with toasted rice and peanuts', 'Klemhao', 'CC BY-SA 4.0', 'Youcha of Sanjiang 三江油茶.jpg', 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Youcha_of_Sanjiang_%E4%B8%89%E6%B1%9F%E6%B2%B9%E8%8C%B6.jpg'),
    commonsDish('stuffed-tofu', '煎至金黄并填有肉馅的酿豆腐', 'Golden pan-seared tofu filled with seasoned pork', 'Mx. Granger', 'CC0 1.0', '酿豆腐 2.jpg', 'https://upload.wikimedia.org/wikipedia/commons/c/c4/%E9%85%BF%E8%B1%86%E8%85%90_2.jpg'),
    commonsDish('bamboo-rice', '剖开竹筒露出的竹筒饭', 'Bamboo tubes opened to reveal steamed rice', 'Peter maying', 'CC BY-SA 4.0', 'Ever tried a rice cooked in a bamboo?.jpg', 'https://upload.wikimedia.org/wikipedia/commons/8/83/Ever_tried_a_rice_cooked_in_a_bamboo%3F.jpg')
  ],
  yanji: [
    commonsDish('yanji-cold-noodles', '牛肉、鸡蛋和蔬菜搭配的延吉冷面', 'Yanji cold noodles with beef, egg, and vegetables', 'N509FZ', 'CC BY-SA 4.0', 'Yanji-style mul-naengmyeon at Qiaotou (20190610190649).jpg', 'https://upload.wikimedia.org/wikipedia/commons/3/30/Yanji-style_mul-naengmyeon_at_Qiaotou_%2820190610190649%29.jpg'),
    commonsDish('rice-sausage', '切片装盘的朝鲜族米肠', 'Sliced Korean-style rice sausage on a plate', 'Popo le Chien', 'CC0 1.0', 'Sundae.jpg', 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Sundae.jpg'),
    dishMedia('charcoal-skewers', '炭火烤架上的肉串', 'Meat skewers browning over a charcoal grill', '~Mers', 'CC BY-SA 2.0', 'https://www.flickr.com/photos/96262218@N00/26601291661', 'https://live.staticflickr.com/1646/26601291661_9a1ed66134_b.jpg'),
    commonsDish('stone-pot-bibimbap', '热石锅中的牛肉拌饭', 'Beef bibimbap served in a hot stone pot', 'Andy Li', 'CC0 1.0', 'Hot stone pot bibimbap with beef (Bulgogi dolsot bibimbap) - Kogi 2023-10-16.jpg', 'https://upload.wikimedia.org/wikipedia/commons/6/60/Hot_stone_pot_bibimbap_with_beef_%28Bulgogi_dolsot_bibimbap%29_-_Kogi_2023-10-16.jpg')
  ],
  taizhou: [
    commonsDish('fanfenyuan', '台州特色饭粉圆与鲜香馅料', 'Taizhou fanfenyuan rice dumplings with savory filling', 'Rowingbohe', 'CC BY-SA 4.0', 'Fanfenyuan, a kind of food in Taizhou, Zhejiang, China.jpg', 'https://upload.wikimedia.org/wikipedia/commons/6/65/Fanfenyuan%2C_a_kind_of_food_in_Taizhou%2C_Zhejiang%2C_China.jpg'),
    commonsDish('braised-hairtail', '酱香浓郁的红烧带鱼', 'Hairtail braised in a glossy savory soy sauce', 'Fumikas Sagisavas', 'CC0 1.0', 'Braised hairtail fish.jpg', 'https://upload.wikimedia.org/wikipedia/commons/d/de/Braised_hairtail_fish.jpg'),
    commonsDish('pan-fried-yellow-croaker', '煎至金黄的小黄鱼', 'Small yellow croaker pan-fried until golden', 'Fumikas Sagisavas', 'CC0 1.0', 'Fried small yellow croaker.jpg', 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Fried_small_yellow_croaker.jpg'),
    commonsDish('steamed-blue-crab', '蒸熟后橙红饱满的青蟹', 'Fresh blue crabs after steaming', 'YEUalichangpsia', 'CC BY-SA 4.0', 'SZ 深圳 Shenzhen DMD 東門町美食街 Dong Men Ding Food Street steamed crabs Feb 2017 IX1 (2).jpg', 'https://upload.wikimedia.org/wikipedia/commons/1/12/SZ_%E6%B7%B1%E5%9C%B3_Shenzhen_DMD_%E6%9D%B1%E9%96%80%E7%94%BA%E7%BE%8E%E9%A3%9F%E8%A1%97_Dong_Men_Ding_Food_Street_steamed_crabs_Feb_2017_IX1_%282%29.jpg')
  ],
  kashgar: [
    commonsDish('lamb-polu', '胡萝卜与羊肉烹制的喀什手抓饭', 'Kashgar lamb polu rice with carrots and tender meat', 'Rjanag', 'CC BY-SA 3.0', 'Uyghur polu closeup.JPG', 'https://upload.wikimedia.org/wikipedia/commons/4/41/Uyghur_polu_closeup.JPG'),
    commonsDish('tandoor-samsa', '馕坑烤出的维吾尔烤包子', 'Uyghur samsa baked crisp in a tandoor', 'Mizu basyo', 'CC BY-SA 3.0', 'Uyghur samsa.jpg', 'https://upload.wikimedia.org/wikipedia/commons/0/09/Uyghur_samsa.jpg'),
    commonsDish('xinjiang-naan', '喀什馕坑内壁烘烤的新疆馕', 'Xinjiang naan baking against a Kashgar tandoor wall', 'George6996', 'CC BY-SA 4.0', 'Naan prepared in tandyr oven, Kashgar, Xinjiang.jpg', 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Naan_prepared_in_tandyr_oven%2C_Kashgar%2C_Xinjiang.jpg'),
    commonsDish('lamb-skewers', '炭火烤制并撒有孜然的新疆羊肉串', 'Xinjiang lamb skewers grilled over charcoal with cumin', 'Alpha / avlxyz', 'CC BY-SA 2.0', '新疆羊肉串.jpg', 'https://upload.wikimedia.org/wikipedia/commons/9/97/%E6%96%B0%E7%96%86%E7%BE%8A%E8%82%89%E4%B8%B2.jpg')
  ],
  yangzhou: [
    commonsDish('braised-shredded-tofu', '高汤中的扬州大煮干丝', 'Yangzhou braised shredded tofu in a clear savory broth', '猫猫的日记本', 'CC BY-SA 3.0', 'Braised Shredded Chicken with Ham and Dried Tofu 2011-04.JPG', 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Braised_Shredded_Chicken_with_Ham_and_Dried_Tofu_2011-04.JPG'),
    commonsDish('three-dice-bao', '蒸笼中的扬州三丁包', 'Yangzhou three-dice buns in a bamboo steamer', 'Gisling', 'CC BY 3.0', 'Fu Chun Tea House buns.JPG', 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Fu_Chun_Tea_House_buns.JPG'),
    commonsDish('red-braised-lions-head', '浓郁酱汁中的红烧狮子头', "Red-braised lion's head meatballs in a rich soy sauce", 'Jpatokal', 'CC BY-SA 4.0', 'Lions head meatballs in brown sauce.jpg', 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Lions_head_meatballs_in_brown_sauce.jpg'),
    commonsDish('yangzhou-fried-rice', '虾仁与鸡蛋搭配的扬州炒饭', 'Yangzhou fried rice with shrimp, egg, and distinct grains', 'LN9267', 'CC BY-SA 4.0', 'Yangzhou fried rice and drinks 25-09-2019.jpg', 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Yangzhou_fried_rice_and_drinks_25-09-2019.jpg')
  ]
};

foodCitiesData.forEach(city => {
  const media = foodDishMedia[city.slug];
  const english = foodCitiesEnglish[city.slug];

  city.dishes = city.dishes.map((dish, index) => ({
    ...dish,
    slug: media[index].slug,
    image: `assets/dishes/${city.slug}/${media[index].slug}.webp`,
    imageAlt: media[index].imageAlt.zh,
    credit: media[index].credit
  }));
  english.dishes = english.dishes.map((dish, index) => ({
    ...dish,
    slug: media[index].slug,
    image: `assets/dishes/${city.slug}/${media[index].slug}.webp`,
    imageAlt: media[index].imageAlt.en,
    credit: media[index].credit
  }));
  city.heroImage = city.dishes[0].image;
  city.imageAlt = city.dishes[0].imageAlt;
  english.imageAlt = english.dishes[0].imageAlt;
});
