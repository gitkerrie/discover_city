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
  },
  {
    id: 13,
    slug: 'beijing',
    name: '北京',
    province: '北京',
    group: '经典',
    coordinates: [116.4074, 39.9042],
    tagline: '鸭皮酥脆、酱香浓郁，胡同里藏着一整套老北京吃法。',
    description: '北京的味道既有宫廷菜的讲究，也有胡同小吃的朴实。烤鸭展示刀工与火候，炸酱面、豆汁和涮羊肉则把酱香、面香与锅气落在日常。',
    flavorTags: ['酱香浓厚', '炉火功夫', '胡同早点'],
    heroImage: 'assets/dishes/beijing/peking-duck.webp',
    imageAlt: '片好装盘的北京烤鸭',
    dishes: [
      { name: '北京烤鸭', description: '鸭皮烤得酥脆油亮，与薄饼、葱丝和甜面酱同食。' },
      { name: '老北京炸酱面', description: '肉丁炸酱裹住筋道面条，配时令菜码解腻。' },
      { name: '豆汁儿', description: '绿豆发酵后酸香醒目，常与焦圈和咸菜丝搭配。' },
      { name: '铜锅涮羊肉', description: '薄切羊肉在清汤中快涮，麻酱小料补上醇厚香气。' }
    ],
    tip: '烤鸭适合多人分食，早上先小份试豆汁，晚上再围着铜锅慢慢涮。'
  },
  {
    id: 14,
    slug: 'shanghai',
    name: '上海',
    province: '上海',
    group: '经典',
    coordinates: [121.4737, 31.2304],
    tagline: '浓油赤酱遇上精巧点心，咸甜鲜香都收在一口里。',
    description: '上海本帮菜用酱油、黄酒和糖造出油润色泽与咸甜回味，街头点心则追求皮薄、汁足、底脆。从早餐生煎到晚餐红烧肉，味道精致却不疏离。',
    flavorTags: ['浓油赤酱', '咸甜并行', '点心精巧'],
    heroImage: 'assets/dishes/shanghai/xiaolongbao.webp',
    imageAlt: '蒸笼中的上海小笼包',
    dishes: [
      { name: '小笼包', description: '薄皮包住鲜肉与汤汁，轻提慢咬才不辜负热汤。' },
      { name: '生煎馒头', description: '底部煎至金黄酥脆，上层松软，肉馅和汤汁饱满。' },
      { name: '本帮红烧肉', description: '五花肉经酱油与糖慢烧，色泽红亮，咸甜油润。' },
      { name: '葱油拌面', description: '葱段熬出焦香葱油，与酱汁一起裹住细面。' }
    ],
    tip: '小笼和生煎出锅时最烫，先开口散热，再配米醋慢慢吃。'
  },
  {
    id: 15,
    slug: 'hangzhou',
    name: '杭州',
    province: '浙江',
    group: '经典',
    coordinates: [120.1551, 30.2741],
    tagline: '茶香、湖鲜与柔和酸甜，把江南的清丽做成一桌菜。',
    description: '杭州菜讲究清鲜、嫩滑与温和回甜。西湖水产、龙井茶和笋菜等时令食材被细致处理，而面馆与家常菜又让这份雅致保持日常感。',
    flavorTags: ['清鲜温润', '茶香入菜', '湖鲜当令'],
    heroImage: 'assets/dishes/hangzhou/west-lake-fish.webp',
    imageAlt: '淋着醋汁的西湖醋鱼',
    dishes: [
      { name: '西湖醋鱼', description: '鱼肉嫩滑，醋汁酸甜适中，强调湖鲜本味。' },
      { name: '东坡肉', description: '方正五花肉以黄酒和酱油慢焖，酥软油润。' },
      { name: '龙井虾仁', description: '虾仁嫩弹，龙井茶叶带来清雅香气和轻微回甘。' },
      { name: '虾爆鳝面', description: '虾仁清鲜、鳝片浓香，两种浇头共享一碗面。' }
    ],
    tip: '河鲜和龙井虾仁更看重时令，中午吃杭帮菜，傍晚再去老面馆。'
  },
  {
    id: 16,
    slug: 'nanjing',
    name: '南京',
    province: '江苏',
    group: '宝藏',
    coordinates: [118.7969, 32.0603],
    tagline: '鸭香贯穿三餐，汤包与甜羹又给古都留下温柔。',
    description: '南京人吃鸭有一整套门道，盐水鸭清香、鸭血粉丝汤鲜热，街头小吃则在汤包的鲜和赤豆元宵的甜之间切换，一天的口味很有层次。',
    flavorTags: ['鸭香鲜润', '汤水丰富', '咸甜交错'],
    heroImage: 'assets/dishes/nanjing/salted-duck.webp',
    imageAlt: '白嫩切件的南京盐水鸭',
    dishes: [
      { name: '盐水鸭', description: '鸭肉皮白肉嫩，盐卤入味却不厚重，带清晰鸭香。' },
      { name: '鸭血粉丝汤', description: '鸭血、鸭肠与粉丝浸在鲜汤里，胡椒香气醒目。' },
      { name: '鸡汁汤包', description: '薄皮收住鲜肉和丰沛汤汁，先吸汤再吃馅。' },
      { name: '赤豆酒酿元宵', description: '赤豆沙、小元宵与酒酿同煮，绵密中带微微发酵香。' }
    ],
    tip: '盐水鸭可买小份切盘，粉丝汤和汤包都宜趁热，最后用赤豆元宵收尾。'
  },
  {
    id: 17,
    slug: 'tianjin',
    name: '天津',
    province: '天津',
    group: '经典',
    coordinates: [117.2008, 39.0842],
    tagline: '早餐摊铛铛响，煎饼果子、锅巴菜和卤面撑起卫嘴子。',
    description: '天津的精彩往往从早餐开始。杂粮面糊、果子和浓卤构成扎实口感，包子与打卤面又延续了面食传统。味道咸香、热乎，带着码头城市的利落。',
    flavorTags: ['卫嘴早餐', '面香扎实', '卤香浓郁'],
    heroImage: 'assets/dishes/tianjin/goubuli-baozi.webp',
    imageAlt: '蒸笼里的天津狗不理包子',
    dishes: [
      { name: '狗不理包子', description: '包子褶花紧密，面皮松软，肉馅汁水饱满。' },
      { name: '煎饼果子', description: '杂粮薄饼摊上鸡蛋和酱料，裹进脆果子或薄脆。' },
      { name: '锅巴菜', description: '绿豆煎饼切条浸入香浓卤汁，配腐乳与麻酱。' },
      { name: '三鲜打卤面', description: '筋道面条浇上虾仁、鸡蛋等做成的浓稠三鲜卤。' }
    ],
    tip: '煎饼果子和锅巴菜要趁早，中午再用一碗打卤面把卫嘴碳水吃完整。'
  },
  {
    id: 18,
    slug: 'harbin',
    name: '哈尔滨',
    province: '黑龙江',
    group: '宝藏',
    coordinates: [126.6424, 45.756],
    tagline: '酸甜锅包肉、熏香红肠和大列巴，在严寒里给足热量。',
    description: '哈尔滨饮食把东北菜的大方与俄式风味的面包、红肠放在同一张桌上。酸甜、熏香、酱香都很鲜明，分量扎实，特别适合冬天共享。',
    flavorTags: ['酸甜酥脆', '熏香肉食', '东北分量'],
    heroImage: 'assets/dishes/harbin/guobaorou.webp',
    imageAlt: '挂汁金黄的哈尔滨锅包肉',
    dishes: [
      { name: '锅包肉', description: '猪里脊挂糊炸至酥脆，酸甜汁明亮，葱姜香气突出。' },
      { name: '哈尔滨红肠', description: '肉质紧实，带明显蒜香和烟熏气息，冷吃热吃皆可。' },
      { name: '大列巴', description: '圆形大面包外壳厚实，麦香和发酵风味深。' },
      { name: '酱骨头', description: '猪骨在浓酱汤里慢炖，肉质软烂，适合戴手套慢慢拆。' }
    ],
    tip: '东北菜盘大，锅包肉与酱骨头最好多人分食，红肠和列巴可带着逛城。'
  },
  {
    id: 19,
    slug: 'xiamen',
    name: '厦门',
    province: '福建',
    group: '宝藏',
    coordinates: [118.0894, 24.4798],
    tagline: '沙茶浓香、海蛎鲜甜，闽南小吃带着海风和花生香。',
    description: '厦门的风味由海产、沙茶酱和米面小吃组成。鲜味里常带花生、蒜香与轻微甜口，土笋冻和海蛎煎则展示了海岛对食材质地的大胆利用。',
    flavorTags: ['沙茶浓香', '海味鲜甜', '闽南小吃'],
    heroImage: 'assets/dishes/xiamen/shacha-noodles.webp',
    imageAlt: '加海鲜配料的厦门沙茶面',
    dishes: [
      { name: '沙茶面', description: '沙茶酱与花生风味融入浓汤，可自选海鲜、肉类与豆制品。' },
      { name: '土笋冻', description: '星虫胶质冷却成晶莹冻品，配蒜蓉、芥末和酱汁。' },
      { name: '海蛎煎', description: '小海蛎与蛋液、地瓜粉煎出焦边，外香内嫩。' },
      { name: '厦门炒米粉', description: '细米粉吸收海鲜和配菜香气，口感干香利落。' }
    ],
    tip: '沙茶面加料很快变成大份，先选两三样，再把胃口留给海蛎煎与土笋冻。'
  },
  {
    id: 20,
    slug: 'kunming',
    name: '昆明',
    province: '云南',
    group: '宝藏',
    coordinates: [102.8329, 24.8801],
    tagline: '鲜花、米线与蒸汽锅，春城的味道清新又充满野趣。',
    description: '昆明是理解云南风味的好入口。米线吃法丰富，汽锅用蒸汽凝成鲜汤，饵块和鲜花饼则把稻米与高原花香变成日常小吃。',
    flavorTags: ['米线多变', '高原清鲜', '花香入点'],
    heroImage: 'assets/dishes/kunming/crossing-bridge-noodles.webp',
    imageAlt: '汤面与配料分开上桌的过桥米线',
    dishes: [
      { name: '过桥米线', description: '滚烫鲜汤与生熟配料分开上桌，依次涮熟后加入米线。' },
      { name: '汽锅鸡', description: '蒸汽经汽锅中孔凝结成汤，鸡肉鲜嫩，汤味清醇。' },
      { name: '烧饵块', description: '米制饵块烤至柔韧焦香，抹酱后卷入油条或配菜。' },
      { name: '鲜花饼', description: '酥皮包住玫瑰花馅，甜味轻盈，花香鲜明。' }
    ],
    tip: '过桥米线上桌后先下生肉，别急着喝被油层保温的汤，它比看起来更烫。'
  },
  {
    id: 21,
    slug: 'guiyang',
    name: '贵阳',
    province: '贵州',
    group: '宝藏',
    coordinates: [106.6302, 26.647],
    tagline: '酸汤醒味、糊辣椒提香，一桌黔味酸辣得很有层次。',
    description: '贵阳的辣并不只是灼热，糊辣、糟辣和油辣带来不同香气，发酵酸汤则让肉类与米粉更清亮。从丝娃娃到牛肉粉，爽脆、柔嫩与浓香轮番出现。',
    flavorTags: ['酸辣醒味', '糊辣焦香', '米粉丰富'],
    heroImage: 'assets/dishes/guiyang/siwawa.webp',
    imageAlt: '用薄饼包裹多种菜丝的贵阳丝娃娃',
    dishes: [
      { name: '丝娃娃', description: '小薄饼包进各色菜丝，再浇入酸辣蘸水，爽脆开胃。' },
      { name: '酸汤牛肉', description: '发酵酸汤清亮开胃，薄切牛肉嫩滑，适合涮蔬菜。' },
      { name: '豆花面', description: '柔嫩豆花与面条搭配，蘸水集中了辣椒、酱香与脆哨。' },
      { name: '红烧牛肉粉', description: '米粉浸在浓香牛肉汤里，红烧牛肉软烂，辣油提香。' }
    ],
    tip: '蘸水是黔味的灵魂，先少加糊辣椒，吃出香气后再逐步加码。'
  },
  {
    id: 22,
    slug: 'lanzhou',
    name: '兰州',
    province: '甘肃',
    group: '经典',
    coordinates: [103.8343, 36.0611],
    tagline: '一清二白三红四绿，一碗牛肉面把西北早晨叫醒。',
    description: '兰州的餐桌围绕牛羊肉、手工面食和清亮香料展开。牛肉面讲究汤清、萝卜白、辣油红和香菜绿，酿皮与羊肉汤又展示凉热两种西北节奏。',
    flavorTags: ['清汤麦香', '牛羊肉食', '手工面食'],
    heroImage: 'assets/dishes/lanzhou/beef-noodles.webp',
    imageAlt: '清汤中配牛肉、萝卜与辣油的兰州牛肉面',
    dishes: [
      { name: '兰州牛肉面', description: '清亮牛汤配手拉面、白萝卜、辣油和蒜苗，层次分明。' },
      { name: '酿皮子', description: '面粉蒸成的酿皮柔韧，拌醋、蒜水、辣油和面筋。' },
      { name: '手抓羊肉', description: '羊肉清煮保留本味，肉质鲜嫩，配椒盐或蒜片食用。' },
      { name: '羊肉粉汤', description: '羊肉汤清鲜温热，粉条滑韧，胡椒和香菜带来明快收尾。' }
    ],
    tip: '牛肉面店早上状态最好，点单时记得选面形，中午再吃酿皮与手抓羊肉。'
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
  },
  beijing: {
    name: 'Beijing',
    province: 'Beijing',
    tagline: 'Crisp duck skin, deep bean-paste savor, and an entire old-city repertoire hidden in the hutongs.',
    description: 'Beijing balances the precision of imperial cooking with the sturdy pleasures of neighborhood snacks. Roast duck showcases knife work and fire, while zhajiang noodles, fermented mung-bean drink, and copper-pot mutton keep wheat, sauce, and communal dining at the center of daily life.',
    flavorTags: ['Deep bean-paste savor', 'Fire and knife work', 'Hutong breakfasts'],
    imageAlt: 'Sliced Peking duck arranged on a serving plate',
    dishes: [
      { name: 'Peking Duck', description: 'Crisp, glossy duck skin is wrapped in thin pancakes with scallion and sweet bean sauce.' },
      { name: 'Beijing Zhajiangmian', description: 'Springy noodles meet diced-pork bean sauce and a generous spread of crisp vegetables.' },
      { name: 'Douzhir', description: 'Fermented mung-bean drink brings a distinctive tang, traditionally paired with fried rings and pickles.' },
      { name: 'Copper-Pot Mutton', description: 'Paper-thin lamb cooks quickly in clear broth before a dip in rich sesame sauce.' }
    ],
    tip: 'Share roast duck with a group, sample a small douzhir at breakfast, and gather around a copper pot in the evening.'
  },
  shanghai: {
    name: 'Shanghai',
    province: 'Shanghai',
    tagline: 'Glossy soy braises meet intricate dumplings, gathering sweet, savory, and fresh flavors in every bite.',
    description: 'Shanghai cooking uses soy, Shaoxing wine, and sugar for its signature glossy, savory-sweet braises. Street snacks pursue a different precision: thin wrappers, abundant broth, and crisp pan-fried bottoms. From breakfast shengjian to red-braised pork at dinner, the city eats with polish but never stiffness.',
    flavorTags: ['Glossy soy braises', 'Savory-sweet balance', 'Intricate dumplings'],
    imageAlt: 'Shanghai xiaolongbao in a bamboo steamer',
    dishes: [
      { name: 'Xiaolongbao', description: 'Delicate wrappers hold pork and hot broth; lift gently, vent, and sip before biting.' },
      { name: 'Shengjian Mantou', description: 'Golden crisp bottoms support fluffy tops and a juicy pork filling.' },
      { name: 'Red-Braised Pork', description: 'Pork belly cooks slowly with soy and sugar until lacquered, tender, and savory-sweet.' },
      { name: 'Scallion-Oil Noodles', description: 'Slow-fried scallions perfume oil and soy before coating fine wheat noodles.' }
    ],
    tip: 'Soup dumplings and shengjian arrive fiercely hot, so open them first and add rice vinegar after the steam escapes.'
  },
  hangzhou: {
    name: 'Hangzhou',
    province: 'Zhejiang',
    tagline: 'Tea fragrance, lake fish, and gentle sweet-sour flavors turn Jiangnan scenery into a meal.',
    description: 'Hangzhou cooking favors freshness, silky textures, and a restrained sweetness. West Lake fish, Longjing tea, and seasonal bamboo shoots receive careful treatment, while old noodle shops keep the city cuisine grounded in everyday appetite.',
    flavorTags: ['Gentle freshness', 'Tea in the wok', 'Seasonal lake fare'],
    imageAlt: 'West Lake fish covered with a glossy sweet-sour vinegar sauce',
    dishes: [
      { name: 'West Lake Fish in Vinegar Gravy', description: 'Tender fish is dressed in a balanced sweet-sour sauce that preserves its delicate flavor.' },
      { name: 'Dongpo Pork', description: 'A square of pork belly braises slowly with Shaoxing wine and soy until yielding.' },
      { name: 'Longjing Prawns', description: 'Springy prawns take on the clean perfume and gentle finish of Longjing tea.' },
      { name: 'Shrimp and Eel Noodles', description: 'Fresh shrimp and richly flavored eel form two contrasting toppings over one bowl.' }
    ],
    tip: 'Lake fish and tea-season dishes reward timing; plan a Hangzhou lunch, then visit an old noodle shop toward evening.'
  },
  nanjing: {
    name: 'Nanjing',
    province: 'Jiangsu',
    tagline: 'Duck runs through every meal, while soup dumplings and sweet rice desserts soften the ancient capital.',
    description: 'Nanjing has a remarkable repertoire built around duck: delicately brined meat, peppery duck-blood soup, and countless supporting cuts. Street snacks shift easily from savory soup dumplings to sweet red-bean rice balls, giving a day of eating a graceful rhythm.',
    flavorTags: ['Delicate duck savor', 'Broths and soups', 'Sweet-savory rhythm'],
    imageAlt: 'Pale, tender slices of Nanjing salted duck',
    dishes: [
      { name: 'Nanjing Salted Duck', description: 'Gently brined duck stays pale and tender, with clean seasoning and a deep natural aroma.' },
      { name: 'Duck Blood Vermicelli Soup', description: 'Duck blood, offal, and glass noodles sit in a hot, peppery duck broth.' },
      { name: 'Chicken-Broth Soup Dumplings', description: 'Thin wrappers capture pork and abundant broth, best sipped before the filling is eaten.' },
      { name: 'Red Bean Jiuniang Rice Balls', description: 'Red bean, tiny glutinous rice balls, and fermented rice make a softly fragrant dessert soup.' }
    ],
    tip: 'Buy salted duck by the small portion, eat soup and dumplings hot, then finish with red-bean rice balls.'
  },
  tianjin: {
    name: 'Tianjin',
    province: 'Tianjin',
    tagline: 'Breakfast griddles ring out as jianbing, gabacai, and gravy noodles feed this candid port city.',
    description: 'Tianjin is at its most delicious in the morning. Multigrain batter, crisp fried dough, and rich gravies create substantial textures; filled buns and dalumian extend the city’s devotion to wheat. The flavors are hot, savory, and as direct as the local conversation.',
    flavorTags: ['Serious breakfast', 'Hearty wheat dishes', 'Rich savory gravies'],
    imageAlt: 'Tianjin Goubuli baozi arranged in a bamboo steamer',
    dishes: [
      { name: 'Goubuli Baozi', description: 'Precisely pleated steamed buns have soft dough and a juicy seasoned pork filling.' },
      { name: 'Jianbing Guozi', description: 'A multigrain crêpe with egg and bean sauce wraps crisp fried dough or a brittle cracker.' },
      { name: 'Gabacai', description: 'Strips of mung-bean crêpe soak in savory gravy with sesame paste and fermented tofu.' },
      { name: 'Three-Delicacy Dalumian', description: 'Springy noodles carry a thick gravy of shrimp, egg, and other savory ingredients.' }
    ],
    tip: 'Catch jianbing and gabacai early, then complete the Tianjin carb tour with dalumian at lunch.'
  },
  harbin: {
    name: 'Harbin',
    province: 'Heilongjiang',
    tagline: 'Sweet-sour pork, smoked sausage, and giant rye loaves supply serious warmth in the northern cold.',
    description: 'Harbin sets generous northeastern cooking beside Russian-influenced bread and smoked sausage. Sweet-sour, garlicky, smoky, and soy-braised flavors all arrive boldly, usually in portions designed for sharing through a long winter.',
    flavorTags: ['Crisp sweet-sour', 'Garlicky smoke', 'Generous portions'],
    imageAlt: 'Golden Harbin guobaorou glazed in a bright sweet-sour sauce',
    dishes: [
      { name: 'Guobaorou', description: 'Battered pork loin fries crisp before a vivid sweet-sour glaze and aromatic ginger.' },
      { name: 'Harbin Red Sausage', description: 'Firm, smoky sausage carries a pronounced garlic aroma and works hot or cold.' },
      { name: 'Dalieba Bread', description: 'The oversized round loaf has a substantial crust and deep fermented wheat flavor.' },
      { name: 'Soy-Braised Pork Bones', description: 'Meaty pork bones simmer in dark savory sauce until tender enough to pull apart by hand.' }
    ],
    tip: 'Share the large hot dishes, then carry red sausage and dalieba as easy provisions while exploring the city.'
  },
  xiamen: {
    name: 'Xiamen',
    province: 'Fujian',
    tagline: 'Satay-peanut richness and sweet shellfish give Minnan snacks the scent of the sea.',
    description: 'Xiamen’s food draws on seafood, shacha sauce, and rice-based snacks. Briny freshness often meets peanut, garlic, and a hint of sweetness, while worm jelly and oyster omelets reveal the island city’s playful attention to texture.',
    flavorTags: ['Shacha richness', 'Sweet seafood', 'Minnan snacks'],
    imageAlt: 'Xiamen shacha noodles topped with assorted seafood',
    dishes: [
      { name: 'Shacha Noodles', description: 'A peanut-satay broth supports a customizable mix of seafood, meats, and tofu.' },
      { name: 'Tusundong', description: 'Marine worm collagen sets into a clear chilled jelly served with garlic, mustard, and sauce.' },
      { name: 'Oyster Omelet', description: 'Baby oysters, egg, and sweet-potato starch form crisp edges and a tender center.' },
      { name: 'Xiamen Fried Rice Vermicelli', description: 'Fine rice noodles absorb the aroma of seafood and vegetables in a dry, fragrant stir-fry.' }
    ],
    tip: 'Keep shacha noodle toppings focused so there is room left for an oyster omelet and a cool plate of tusundong.'
  },
  kunming: {
    name: 'Kunming',
    province: 'Yunnan',
    tagline: 'Flowers, rice noodles, and a steam pot make the Spring City taste fresh and wonderfully untamed.',
    description: 'Kunming is an inviting gateway to Yunnan food. Rice noodles appear in countless forms, a clay steam pot condenses its own pure chicken broth, and grilled erkuai or rose cakes turn rice and highland flowers into everyday snacks.',
    flavorTags: ['Many rice noodles', 'Highland freshness', 'Floral pastries'],
    imageAlt: 'Crossing-the-bridge rice noodles served with broth and ingredients separately',
    dishes: [
      { name: 'Crossing-the-Bridge Rice Noodles', description: 'Scalding broth arrives with raw and cooked ingredients to add in sequence before the noodles.' },
      { name: 'Steam-Pot Chicken', description: 'Steam condenses through a clay pot’s center to produce an exceptionally clear chicken broth.' },
      { name: 'Grilled Erkuai', description: 'A pliable rice cake is grilled, spread with sauce, and wrapped around crisp dough or vegetables.' },
      { name: 'Yunnan Flower Cake', description: 'Flaky pastry holds fragrant rose-petal filling with a light, floral sweetness.' }
    ],
    tip: 'Add raw meat to crossing-the-bridge broth first, and remember that its insulating oil cap hides serious heat.'
  },
  guiyang: {
    name: 'Guiyang',
    province: 'Guizhou',
    tagline: 'Fermented sour broth wakes the palate while toasted chilies build a deeper, fragrant heat.',
    description: 'Guiyang heat is never one-dimensional: toasted, fermented, and oil-bloomed chilies each bring a different aroma, while sour broth brightens meat and rice noodles. Crisp vegetables, tender tofu, and rich beef rotate through an unusually lively table.',
    flavorTags: ['Bright sour heat', 'Toasted chili aroma', 'Rice-noodle culture'],
    imageAlt: 'Guiyang siwawa wrappers with a colorful selection of shredded vegetables',
    dishes: [
      { name: 'Siwawa', description: 'Tiny wrappers gather colorful shredded vegetables before a sharp, spicy dipping sauce is poured in.' },
      { name: 'Sour-Broth Beef', description: 'Fermented sour broth keeps thin beef and vegetables vivid, light, and deeply appetizing.' },
      { name: 'Douhua Noodles', description: 'Soft tofu and noodles are paired with a concentrated chili, bean-paste, and crisp-pork dip.' },
      { name: 'Red-Braised Beef Rice Noodles', description: 'Silky rice noodles carry tender braised beef, rich broth, and a fragrant slick of chili oil.' }
    ],
    tip: 'Dipping sauces define Guizhou food; begin with a little toasted chili and build once its aroma comes through.'
  },
  lanzhou: {
    name: 'Lanzhou',
    province: 'Gansu',
    tagline: 'Clear broth, white radish, red chili, green herbs: one noodle bowl wakes the northwest.',
    description: 'Lanzhou tables revolve around beef, lamb, handmade wheat dishes, and clean aromatic seasoning. Beef noodles prize clear broth and precise colors, while cold niangpi and warming lamb soup reveal two complementary rhythms of northwestern eating.',
    flavorTags: ['Clear broth and wheat', 'Beef and lamb', 'Handmade noodles'],
    imageAlt: 'Lanzhou beef noodles with clear broth, beef, radish, chili oil, and herbs',
    dishes: [
      { name: 'Lanzhou Beef Noodles', description: 'Clear beef broth, hand-pulled noodles, white radish, chili oil, and herbs form a precise bowl.' },
      { name: 'Niangpi', description: 'Steamed wheat sheets and gluten are dressed with vinegar, garlic water, and chili oil.' },
      { name: 'Hand-Grabbed Lamb', description: 'Simply boiled lamb stays sweet and tender, served with salt, pepper, or raw garlic.' },
      { name: 'Lamb Vermicelli Soup', description: 'Clear lamb broth and slippery noodles finish brightly with pepper and cilantro.' }
    ],
    tip: 'Beef noodle shops peak in the morning; choose your noodle width, then save niangpi and lamb for lunch.'
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
  ],
  beijing: [
    commonsDish('peking-duck', '切片装盘并配薄饼的北京烤鸭', 'Sliced Peking duck served with thin pancakes', 'Mr Wabu', 'CC BY-SA 2.0', 'Peking duck by Mr Wabu in Beijing.jpg', 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Peking_duck_by_Mr_Wabu_in_Beijing.jpg'),
    commonsDish('zhajiangmian', '炸酱与菜码铺在面条上的老北京炸酱面', 'Beijing zhajiangmian topped with pork bean sauce and vegetables', 'N509FZ', 'CC BY-SA 4.0', 'Noodles with diced meat soybean paste before stirring (20210102181759).jpg', 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Noodles_with_diced_meat_soybean_paste_before_stirring_%2820210102181759%29.jpg'),
    commonsDish('douzhir', '豆汁儿与焦圈组成的北京早点', 'Beijing douzhir served with crisp fried rings', 'N509FZ', 'CC BY-SA 4.0', 'Douzhir at Huguosi Snacks, Beijing (20180728170403).jpg', 'https://upload.wikimedia.org/wikipedia/commons/2/27/Douzhir_at_Huguosi_Snacks%2C_Beijing_%2820180728170403%29.jpg'),
    commonsDish('instant-boiled-mutton', '铜锅旁摆着鲜切羊肉的北京涮羊肉', 'Beijing copper-pot mutton surrounded by plates of sliced lamb', 'ZhengZhou', 'CC BY-SA 4.0', 'Instant-boiled mutton of Beijing.jpg', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Instant-boiled_mutton_of_Beijing.jpg')
  ],
  shanghai: [
    commonsDish('xiaolongbao', '竹蒸笼中的上海小笼包', 'Shanghai xiaolongbao in a bamboo steamer', 'Robigasp', 'CC BY-SA 4.0', 'Xiaolongbao Shanghai.jpg', 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Xiaolongbao_Shanghai.jpg'),
    commonsDish('shengjian-mantou', '底部煎至金黄的上海生煎馒头', 'Shanghai shengjian mantou with crisp golden bottoms', 'Pauloleong2002', 'CC BY-SA 4.0', 'Shengjian mantou.jpg', 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Shengjian_mantou.jpg'),
    commonsDish('red-braised-pork', '酱汁红亮的上海本帮红烧肉', 'Shanghai red-braised pork belly in glossy soy sauce', 'N509FZ', 'CC BY-SA 4.0', 'Red braised pork (20141106191221).JPG', 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Red_braised_pork_%2820141106191221%29.JPG'),
    commonsDish('scallion-oil-noodles', '葱油与酱汁拌匀的上海细面', 'Shanghai noodles coated in scallion oil and soy', "HanWei's EXP", 'CC BY-SA 2.0', 'Shanghai oil noodle.jpg', 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Shanghai_oil_noodle.jpg')
  ],
  hangzhou: [
    commonsDish('west-lake-fish', '浇有酸甜醋汁的西湖醋鱼', 'West Lake fish covered with sweet-sour vinegar gravy', 'Zheng Zhou', 'CC BY-SA 4.0', 'West Lake Fish in Vinegar Gravy.jpg', 'https://upload.wikimedia.org/wikipedia/commons/1/1b/West_Lake_Fish_in_Vinegar_Gravy.jpg'),
    commonsDish('dongpo-pork', '酥软油亮的杭州东坡肉', 'Tender lacquered Dongpo pork from Hangzhou', 'Pauloleong2002', 'CC BY-SA 4.0', 'Dongpo pork (a Hangzhou dish).jpg', 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Dongpo_pork_%28a_Hangzhou_dish%29.jpg'),
    commonsDish('longjing-prawns', '茶叶点缀的杭州龙井虾仁', 'Hangzhou Longjing prawns garnished with tea leaves', '猫猫的日记本', 'CC BY-SA 4.0', 'Longjing prawns in Hangzhou Restaurant 2015-07.JPG', 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Longjing_prawns_in_Hangzhou_Restaurant_2015-07.JPG'),
    commonsDish('shrimp-eel-noodles', '虾仁与鳝片浇头搭配的杭州面', 'Hangzhou noodles topped with shrimp and eel', 'MasaneMiyaPA', 'CC BY-SA 4.0', '20191101奎元馆虾爆鳝面品锅.jpg', 'https://upload.wikimedia.org/wikipedia/commons/9/92/20191101%E5%A5%8E%E5%85%83%E9%A6%86%E8%99%BE%E7%88%86%E9%B3%9D%E9%9D%A2%E5%93%81%E9%94%85.jpg')
  ],
  nanjing: [
    commonsDish('salted-duck', '白嫩切件的南京盐水鸭', 'Pale tender slices of Nanjing salted duck', 'AddisWang', 'CC BY-SA 3.0', 'Nanjing Salted Duck.jpg', 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Nanjing_Salted_Duck.jpg'),
    commonsDish('duck-blood-vermicelli', '鸭血与粉丝浸在鲜汤中的南京小吃', 'Nanjing duck blood and vermicelli soup', 'N509FZ', 'CC BY-SA 4.0', 'Duck blood and vermicelli soup (20150819124849).JPG', 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Duck_blood_and_vermicelli_soup_%2820150819124849%29.JPG'),
    commonsDish('chicken-broth-tangbao', '蒸笼中的南京鸡汁汤包', 'Nanjing chicken-broth soup dumplings in a steamer', 'Caitriana Nicholson', 'CC BY-SA 2.0', '南京鸡汁汤包 (5811394807).jpg', 'https://upload.wikimedia.org/wikipedia/commons/a/ae/%E5%8D%97%E4%BA%AC%E9%B8%A1%E6%B1%81%E6%B1%A4%E5%8C%85_%285811394807%29.jpg'),
    commonsDish('red-bean-jiuniang', '赤豆与小元宵煮成的酒酿甜羹', 'Sweet soup with red beans, jiuniang, and small rice balls', '三猎', 'CC BY-SA 4.0', '赤豆酒酿元宵.jpg', 'https://upload.wikimedia.org/wikipedia/commons/2/27/%E8%B5%A4%E8%B1%86%E9%85%92%E9%85%BF%E5%85%83%E5%AE%B5.jpg')
  ],
  tianjin: [
    commonsDish('goubuli-baozi', '蒸笼中的天津狗不理包子', 'Tianjin Goubuli baozi in a bamboo steamer', 'Techyan', 'CC BY-SA 4.0', '天津狗不理包子.JPG', 'https://upload.wikimedia.org/wikipedia/commons/0/0d/%E5%A4%A9%E6%B4%A5%E7%8B%97%E4%B8%8D%E7%90%86%E5%8C%85%E5%AD%90.JPG'),
    commonsDish('jianbing-guozi', '摊在鏊子上的天津煎饼果子', 'Tianjin jianbing guozi cooking on a round griddle', 'N509FZ', 'CC BY-SA 4.0', 'Preparing Jianbing in Binhai, Tianjin (20191006080631).jpg', 'https://upload.wikimedia.org/wikipedia/commons/d/de/Preparing_Jianbing_in_Binhai%2C_Tianjin_%2820191006080631%29.jpg'),
    commonsDish('gabacai', '浸着卤汁的天津锅巴菜', 'Tianjin gabacai in rich savory gravy', 'N509FZ', 'CC BY-SA 4.0', 'Gabacai in Binhai, Tianjin (20191006081240).jpg', 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Gabacai_in_Binhai%2C_Tianjin_%2820191006081240%29.jpg'),
    commonsDish('three-delicacy-dalumian', '三鲜浓卤浇在面条上的天津打卤面', 'Tianjin dalumian covered with three-delicacy gravy', 'N509FZ', 'CC BY-SA 4.0', 'Tianjin-style three delicacies Dalumian (20200426140633).jpg', 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Tianjin-style_three_delicacies_Dalumian_%2820200426140633%29.jpg')
  ],
  harbin: [
    commonsDish('guobaorou', '酸甜汁包裹的金黄锅包肉', 'Golden guobaorou coated in sweet-sour sauce', 'chengzhu', 'CC0 1.0', 'Guōbāoròu.jpg', 'https://upload.wikimedia.org/wikipedia/commons/2/29/Gu%C5%8Db%C4%81or%C3%B2u.jpg'),
    commonsDish('harbin-red-sausage', '切片摆放的哈尔滨红肠', 'Sliced Harbin red sausages', 'Lennartbj', 'CC BY-SA 4.0', 'China Harbin Hongchang Sausages.jpg', 'https://upload.wikimedia.org/wikipedia/commons/c/c9/China_Harbin_Hongchang_Sausages.jpg'),
    commonsDish('dalieba', '哈尔滨店铺中的圆形大列巴', 'Round loaves of dalieba bread sold in Harbin', 'Keiri', 'CC BY-SA 4.0', 'Dalieba sold in Harbin.jpg', 'https://upload.wikimedia.org/wikipedia/commons/6/63/Dalieba_sold_in_Harbin.jpg'),
    commonsDish('soy-braised-pork-bones', '浓酱炖煮的哈尔滨酱骨头', 'Harbin pork bones slow-braised in savory soy sauce', 'KQuhen', 'CC BY-SA 4.0', 'Jiangdagu bang Harbin 03.jpg', 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Jiangdagu_bang_Harbin_03.jpg')
  ],
  xiamen: [
    commonsDish('shacha-noodles', '海鲜与豆制品铺满的厦门沙茶面', 'Xiamen shacha noodles topped with seafood and tofu', 'Windmemories', 'CC BY-SA 4.0', '20230131 Seafood Shacha Noodle.jpg', 'https://upload.wikimedia.org/wikipedia/commons/9/97/20230131_Seafood_Shacha_Noodle.jpg'),
    commonsDish('tusundong', '切片装盘的厦门土笋冻', 'Sliced Xiamen tusundong jelly on a plate', 'Hhaithait', 'CC BY-SA 3.0', 'Tusundong Xiamen.jpg', 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Tusundong_Xiamen.jpg'),
    commonsDish('oyster-omelet', '煎至焦香的闽南海蛎煎', 'Minnan oyster omelet fried until golden', 'YUCHIA CHUNG', 'CC BY 2.0', 'Oyster omelette DSC08499 (4910296256).jpg', 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Oyster_omelette_DSC08499_%284910296256%29.jpg'),
    commonsDish('fried-rice-vermicelli', '海鲜配菜炒制的厦门米粉', 'Xiamen fried rice vermicelli with seafood and vegetables', 'Hhaithait', 'CC BY-SA 3.0', 'Fried Rice vermicelli Xiamen.jpg', 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Fried_Rice_vermicelli_Xiamen.jpg')
  ],
  kunming: [
    commonsDish('crossing-bridge-noodles', '高汤与配菜分开上桌的过桥米线', 'Crossing-the-bridge rice noodles with broth and ingredients served separately', 'N509FZ', 'CC BY-SA 4.0', 'Crossing the Bridge Rice Noodles at Jian Xin Yuan, Tangzixiang (20210321135908).jpg', 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Crossing_the_Bridge_Rice_Noodles_at_Jian_Xin_Yuan%2C_Tangzixiang_%2820210321135908%29.jpg'),
    commonsDish('steam-pot-chicken', '陶制汽锅中的云南汽锅鸡', 'Yunnan steam-pot chicken in its clay cooking vessel', 'tak.wing', 'CC BY-SA 2.0', '汽锅鸡 - 5059256289.jpg', 'https://upload.wikimedia.org/wikipedia/commons/0/08/%E6%B1%BD%E9%94%85%E9%B8%A1_-_5059256289.jpg'),
    commonsDish('grilled-erkuai', '抹酱并夹有配菜的昆明烧饵块', 'Kunming grilled erkuai spread with sauce and fillings', '瑞丽江的河水', 'CC BY-SA 4.0', '昆明英凤烧饵块.jpg', 'https://upload.wikimedia.org/wikipedia/commons/6/66/%E6%98%86%E6%98%8E%E8%8B%B1%E5%87%A4%E7%83%A7%E9%A5%B5%E5%9D%97.jpg'),
    commonsDish('flower-cake', '露出玫瑰花馅的云南鲜花饼', 'Yunnan flower cakes showing rose-petal filling', 'Hyuki', 'CC0 1.0', '云南玫瑰鲜花饼-2164122.jpg', 'https://upload.wikimedia.org/wikipedia/commons/c/cb/%E4%BA%91%E5%8D%97%E7%8E%AB%E7%91%B0%E9%B2%9C%E8%8A%B1%E9%A5%BC-2164122.jpg')
  ],
  guiyang: [
    commonsDish('siwawa', '薄饼与各色菜丝组成的贵阳丝娃娃', 'Guiyang siwawa with wrappers and colorful shredded vegetables', 'Caitriana Nicholson', 'CC BY-SA 2.0', '丝娃娃 (28664736712).jpg', 'https://upload.wikimedia.org/wikipedia/commons/d/d5/%E4%B8%9D%E5%A8%83%E5%A8%83_%2828664736712%29.jpg'),
    commonsDish('sour-broth-beef', '红亮酸汤中涮煮的贵州牛肉', 'Guizhou beef cooking in vivid fermented sour broth', 'Leeinm', 'CC BY-SA 4.0', '酸汤牛肉.jpg', 'https://upload.wikimedia.org/wikipedia/commons/c/c7/%E9%85%B8%E6%B1%A4%E7%89%9B%E8%82%89.jpg'),
    commonsDish('douhua-noodles', '豆花与辣椒蘸水搭配的贵州面', 'Guizhou douhua noodles served with a chili dipping sauce', 'Augusthaiho', 'CC BY-SA 4.0', '豆花面 6993.jpg', 'https://upload.wikimedia.org/wikipedia/commons/8/8c/%E8%B1%86%E8%8A%B1%E9%9D%A2_6993.jpg'),
    commonsDish('braised-beef-rice-noodles', '红烧牛肉铺在贵州米粉上', 'Guizhou rice noodles topped with red-braised beef', 'N509FZ', 'CC BY-SA 4.0', 'Hongshao Niuroufen at a restaurant in Xixiu, Anshun (20230404120748).jpg', 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Hongshao_Niuroufen_at_a_restaurant_in_Xixiu%2C_Anshun_%2820230404120748%29.jpg')
  ],
  lanzhou: [
    commonsDish('beef-noodles', '牛肉、萝卜和辣油搭配的兰州牛肉面', 'Lanzhou beef noodles with beef, radish, and chili oil', 'N509FZ', 'CC BY-SA 4.0', 'Beef noodles set in Anning, Lanzhou (20171005085705).jpg', 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Beef_noodles_set_in_Anning%2C_Lanzhou_%2820171005085705%29.jpg'),
    commonsDish('niangpi', '拌有面筋与辣油的甘肃酿皮', 'Gansu niangpi with wheat gluten and chili oil', 'Vmenkov', 'CC BY-SA 3.0', '5658-Linxia-City-niang-pi.jpg', 'https://upload.wikimedia.org/wikipedia/commons/1/15/5658-Linxia-City-niang-pi.jpg'),
    commonsDish('hand-grabbed-lamb', '清煮切块的甘肃手抓羊肉', 'Gansu hand-grabbed lamb cut into tender pieces', 'N509FZ', 'CC BY-SA 4.0', 'Shouzhua Yangrou at Masongji Restaurant, Jiayuguan (20230919132517).jpg', 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Shouzhua_Yangrou_at_Masongji_Restaurant%2C_Jiayuguan_%2820230919132517%29.jpg'),
    commonsDish('lamb-vermicelli-soup', '羊肉与粉条盛在清汤中的甘肃粉汤', 'Gansu lamb and vermicelli in a clear hot broth', 'N509FZ', 'CC BY-SA 4.0', 'Yangrou Fentang at Xiajia Hezhi, Dunhuang (20230917073058).jpg', 'https://upload.wikimedia.org/wikipedia/commons/3/31/Yangrou_Fentang_at_Xiajia_Hezhi%2C_Dunhuang_%2820230917073058%29.jpg')
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
