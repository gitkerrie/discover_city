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
  },
  {
    id: 23,
    slug: 'jinan',
    name: '济南',
    province: '山东',
    group: '宝藏',
    coordinates: [117.1201, 36.6512],
    tagline: '泉水润城，鲁菜收汁，一桌咸鲜里藏着火候与耐心。',
    description: '济南的味道一边连着鲁菜宴席，一边落在朴实日常里。糖醋、酱香与清鲜各有分寸，九转大肠讲究繁复火候，把子肉和甜沫则把这座泉城的早晚照顾得踏实温暖。',
    flavorTags: ['鲁菜火候', '咸鲜醇厚', '泉城小吃'],
    heroImage: 'assets/dishes/jinan/jiuzhuan-dachang.webp',
    imageAlt: '浓亮酱汁包裹的济南九转大肠',
    dishes: [
      { name: '九转大肠', description: '猪大肠经焯、炸、烧多道工序，酸甜咸辣与香料层层收进浓汁。' },
      { name: '把子肉', description: '大块五花肉用酱油与香料慢炖，软烂浓香，常配米饭与卤味。' },
      { name: '甜沫', description: '小米面熬成咸香热粥，加入粉条、花生、豆腐皮与青菜。' },
      { name: '糖醋鲤鱼', description: '整尾鲤鱼炸至昂首翘尾，再浇明亮酸甜汁，外酥里嫩。' }
    ],
    tip: '早晨先喝一碗甜沫，午餐吃把子肉，九转大肠与糖醋鲤鱼适合结伴分食。'
  },
  {
    id: 24,
    slug: 'qingdao',
    name: '青岛',
    province: '山东',
    group: '经典',
    coordinates: [120.3826, 36.0671],
    tagline: '蛤蜊沾着辣汤，海参裹着葱香，海风把鲜味吹进街巷。',
    description: '青岛餐桌的底色是海鲜的新鲜与山东人的爽快。鲅鱼做馅鲜嫩多汁，蛤蜊旺火快炒，海参用大葱托起醇香，街边烤鱿鱼则把海港夜色变成最直接的烟火味。',
    flavorTags: ['海鲜当季', '葱香咸鲜', '街头烧烤'],
    heroImage: 'assets/dishes/qingdao/mackerel-dumplings.webp',
    imageAlt: '薄皮包裹鲜嫩鱼馅的青岛鲅鱼水饺',
    dishes: [
      { name: '鲅鱼水饺', description: '新鲜鲅鱼肉打成柔嫩馅料，加入韭菜提香，饺皮薄而汁水充足。' },
      { name: '辣炒蛤蜊', description: '本地蛤蜊旺火快炒，辣椒与酱汁刚好衬出贝肉的鲜甜。' },
      { name: '葱烧海参', description: '海参软糯弹润，大葱煸至焦香后与浓汁共同收味。' },
      { name: '烤鱿鱼', description: '鱿鱼在铁板或炭火上烤出焦边，刷酱后撒辣椒与孜然。' }
    ],
    tip: '海鲜先问当天货色，蛤蜊和水饺趁热吃，葱烧海参适合留给一顿正式鲁菜。'
  },
  {
    id: 25,
    slug: 'suzhou',
    name: '苏州',
    province: '江苏',
    group: '经典',
    coordinates: [120.5853, 31.2989],
    tagline: '甜鲜不腻、刀工细巧，园林之外还有一碗随时令变化的面。',
    description: '苏州菜重视时令、刀工与恰到好处的甜鲜。松鼠桂鱼以花刀和复炸塑形，鳝糊靠滚油激香，汤面则随着四季更换浇头，精细之外仍保留街巷点心的热气。',
    flavorTags: ['甜鲜细腻', '时令浇头', '刀工讲究'],
    heroImage: 'assets/dishes/suzhou/squirrel-mandarin-fish.webp',
    imageAlt: '花刀炸开并淋酸甜汁的苏州松鼠桂鱼',
    dishes: [
      { name: '松鼠桂鱼', description: '桂鱼改花刀后炸至蓬松酥脆，浇上酸甜亮汁，形似松鼠。' },
      { name: '苏式汤面', description: '清汤或红汤配细面，焖肉、爆鱼与虾仁等浇头随时令变化。' },
      { name: '响油鳝糊', description: '鳝丝浓油赤酱，蒜末与滚油上桌时激出一声脆响和浓香。' },
      { name: '苏州生煎', description: '发面皮包住鲜肉汤汁，底部煎脆，芝麻与葱花补上香气。' }
    ],
    tip: '面馆宜早去，先选汤底再看当天浇头；松鼠桂鱼和响油鳝糊最好多人分享。'
  },
  {
    id: 26,
    slug: 'fuzhou',
    name: '福州',
    province: '福建',
    group: '宝藏',
    coordinates: [119.2965, 26.0745],
    tagline: '汤清味鲜，酸甜轻盈，山海食材在一只坛与一粒丸里相遇。',
    description: '福州菜把鲜味放在最前面，却不依赖厚重调味。鱼丸与肉燕讲究手工制皮，荔枝肉以酸甜提神，佛跳墙则用长时间煨制把海味、肉香与酒香收进一坛。',
    flavorTags: ['汤鲜清润', '酸甜醒味', '山海合鲜'],
    heroImage: 'assets/dishes/fuzhou/buddha-jumps-wall.webp',
    imageAlt: '坛中盛放多种山海食材的福州佛跳墙',
    dishes: [
      { name: '佛跳墙', description: '多种海味、禽肉与香菇入坛慢煨，汤汁醇厚而香气层叠。' },
      { name: '福州鱼丸', description: '鱼浆打至弹韧，包入猪肉馅，咬开时汤汁与海味同时释放。' },
      { name: '荔枝肉', description: '猪肉切花炸卷成荔枝形，以红糟或番茄调出明亮酸甜。' },
      { name: '肉燕', description: '猪肉捶打成薄韧燕皮，包肉馅煮入清汤，口感滑弹。' }
    ],
    tip: '先用鱼丸和肉燕感受清鲜，再吃荔枝肉转换味觉，佛跳墙适合留给从容的一餐。'
  },
  {
    id: 27,
    slug: 'nanning',
    name: '南宁',
    province: '广西',
    group: '宝藏',
    coordinates: [108.32, 22.824],
    tagline: '酸笋、豆豉、柠檬与鲜辣，把南国湿热变成明快食欲。',
    description: '南宁味道擅长用酸香打开胃口。老友粉在热锅里爆出蒜、豆豉与酸笋香，柠檬鸭酸辣回甘，酸嘢把当季果蔬腌得爽脆，五色糯米饭则保留壮乡节庆的植物清香。',
    flavorTags: ['酸香开胃', '米粉日常', '壮乡风味'],
    heroImage: 'assets/dishes/nanning/laoyoufen.webp',
    imageAlt: '酸笋、豆豉与牛肉搭配的南宁老友粉',
    dishes: [
      { name: '老友粉', description: '蒜末、豆豉、酸笋与辣椒爆香后冲入汤水，米粉酸辣热烈。' },
      { name: '柠檬鸭', description: '鸭肉与咸柠檬、酸姜、酸辣椒同炒，酸香里带着回甘。' },
      { name: '酸嘢', description: '木瓜、芒果或萝卜以盐、醋、糖和辣椒腌成爽脆街头零食。' },
      { name: '五色糯米饭', description: '糯米用天然植物染成多种颜色，蒸后清香软糯，是壮乡节庆味道。' }
    ],
    tip: '从老友粉开始适应酸辣，午后用酸嘢清口，柠檬鸭和五色糯米饭适合一起分享。'
  },
  {
    id: 28,
    slug: 'nanchang',
    name: '南昌',
    province: '江西',
    group: '宝藏',
    coordinates: [115.8582, 28.682],
    tagline: '拌粉清爽、瓦罐汤温热，辣椒与米香把赣味日常点亮。',
    description: '南昌的味道落在米粉、瓦罐与烟火小炒里。拌粉用酱油、萝卜干和辣椒油打开早晨，瓦罐汤慢煨出温润底味，炒粉讲究锅气，粉蒸肉则把米香和肉香蒸得绵密。',
    flavorTags: ['米粉日常', '瓦罐慢煨', '赣味鲜辣'],
    heroImage: 'assets/dishes/nanchang/nanchang-banfen.webp',
    imageAlt: '拌有辣椒油和小菜的南昌拌粉',
    dishes: [
      { name: '南昌拌粉', description: '米粉烫熟后拌入酱油、辣椒油、萝卜干与葱花，清爽却很有冲劲。' },
      { name: '瓦罐汤', description: '小瓦罐隔水慢煨，肉、蛋或菌菇的鲜味被稳稳锁进一盅热汤里。' },
      { name: '南昌炒粉', description: '米粉经旺火快炒，吸入酱香、辣味与锅气，是夜宵桌上的硬菜。' },
      { name: '米粉蒸肉', description: '五花肉裹上调味米粉蒸至软糯，油脂被米香托住，入口丰润。' }
    ],
    tip: '早餐从拌粉配瓦罐汤开始，晚上再点炒粉和粉蒸肉，辣度可以循序渐进。'
  },
  {
    id: 29,
    slug: 'haikou',
    name: '海口',
    province: '海南',
    group: '宝藏',
    coordinates: [110.3312, 20.031],
    tagline: '椰香、鸡油饭与清甜糖水，把热带海岛吃成轻快节奏。',
    description: '海口把海南的海岛物产收进日常餐桌。文昌鸡皮滑肉嫩，海南粉酸甜咸鲜，清补凉用椰奶和杂粮降温，椰子饭则把糯米和椰香蒸进同一个壳里。',
    flavorTags: ['热带椰香', '清爽粉食', '海岛慢食'],
    heroImage: 'assets/dishes/haikou/wenchang-chicken.webp',
    imageAlt: '切件装盘的海南文昌鸡',
    dishes: [
      { name: '文昌鸡', description: '鸡肉白切后皮滑肉嫩，蘸料里的酸、辣、蒜香衬出鸡味清甜。' },
      { name: '海南粉', description: '细粉拌入卤汁、酸菜、花生与肉丝，酸甜咸鲜层次明快。' },
      { name: '清补凉', description: '椰奶、绿豆、薏米、红枣与水果同碗，清甜冰凉，是海口的午后续命。' },
      { name: '椰子饭', description: '糯米与椰肉、椰汁同蒸，米粒软糯，带着干净的热带甜香。' }
    ],
    tip: '午间先吃文昌鸡和海南粉，下午留给清补凉，椰子饭适合当甜口收尾。'
  },
  {
    id: 30,
    slug: 'quanzhou',
    name: '泉州',
    province: '福建',
    group: '宝藏',
    coordinates: [118.6759, 24.8741],
    tagline: '海丝古城的清鲜与药膳香，藏在面线、姜母鸭和一粒粽里。',
    description: '泉州饮食兼具闽南海味与侨乡气息。面线糊柔滑暖胃，姜母鸭以老姜和药料焖出浓香，烧肉粽扎实饱满，润饼菜把春日蔬菜和花生糖粉卷成清爽一口。',
    flavorTags: ['闽南清鲜', '古早小吃', '姜香药膳'],
    heroImage: 'assets/dishes/quanzhou/misua-paste.webp',
    imageAlt: '碗中柔滑浓稠的泉州面线糊',
    dishes: [
      { name: '面线糊', description: '细面线煮成柔滑糊汤，常加醋肉、海蛎或卤料，清晨吃尤其暖胃。' },
      { name: '姜母鸭', description: '鸭肉与老姜、麻油和香料慢焖，姜香辛暖，肉质入味不腻。' },
      { name: '烧肉粽', description: '糯米包入烧肉、香菇、虾米等馅料，蒸透后蘸甜辣酱更显丰厚。' },
      { name: '润饼菜', description: '薄饼卷入蔬菜、海味、肉丝与花生糖粉，清爽中带着细碎甜香。' }
    ],
    tip: '面线糊适合早餐，姜母鸭留给晚餐慢吃；古城小吃可以沿街分段尝。'
  },
  {
    id: 31,
    slug: 'shenyang',
    name: '沈阳',
    province: '辽宁',
    group: '宝藏',
    coordinates: [123.4315, 41.8057],
    tagline: '鸡架、饺子、熏肉大饼和热气蒸腾的面点，构成东北街头的爽快。',
    description: '沈阳的味道豪爽却不粗糙。老边饺子以馅心和汤汁见长，鸡架是街头夜宵的灵魂，熏肉大饼把烟熏肉香包进酥韧饼皮，清真烧麦则让牛羊肉香与烫面皮结合。',
    flavorTags: ['东北烟火', '夜宵鸡架', '面点扎实'],
    heroImage: 'assets/dishes/shenyang/laobian-dumplings.webp',
    imageAlt: '盘中整齐摆放的沈阳老边饺子',
    dishes: [
      { name: '老边饺子', description: '馅料讲究煸炒与调汤，饺子皮薄馅香，是沈阳老字号味道。' },
      { name: '烤鸡架', description: '鸡架烤到边缘焦香，再刷酱撒料，啃骨间全是东北夜宵的痛快。' },
      { name: '熏肉大饼', description: '熏肉切片夹进薄韧大饼，配葱丝和甜面酱，烟香与面香直接碰撞。' },
      { name: '沈阳烧麦', description: '烫面皮裹住牛羊肉馅，蒸后油香充盈，趁热吃最能感受汤汁。' }
    ],
    tip: '白天吃饺子和烧麦，晚上把胃口留给鸡架；熏肉大饼适合多人分食。'
  },
  {
    id: 32,
    slug: 'taiyuan',
    name: '太原',
    province: '山西',
    group: '宝藏',
    coordinates: [112.5492, 37.8706],
    tagline: '醋香、面香与羊汤热气，铺开山西餐桌的筋道与厚实。',
    description: '太原是认识山西面食与老城味道的入口。头脑温补浓香，刀削面棱角分明，过油肉以醋香和滑嫩肉片见功夫，羊杂割则用热汤、胡椒和香菜唤醒清晨。',
    flavorTags: ['山西面食', '老城醋香', '羊汤热气'],
    heroImage: 'assets/dishes/taiyuan/tounao.webp',
    imageAlt: '太原头脑配腌韭菜一同上桌',
    dishes: [
      { name: '头脑', description: '黄酒、羊肉、藕片与药膳香气交织成温热浓汤，是太原清晨的老味道。' },
      { name: '刀削面', description: '面片中厚边薄，入汤后筋道爽利，配肉臊、醋和辣椒更显山西性格。' },
      { name: '过油肉', description: '肉片先滑油后与木耳、蒜薹同炒，醋香明亮，口感滑嫩。' },
      { name: '羊杂割', description: '羊杂切片入热汤，胡椒、葱花和香菜提香，喝起来热烈而实在。' }
    ],
    tip: '早起尝头脑或羊杂割，中午留给刀削面；吃过油肉时别忘了让醋香做主角。'
  },
  {
    id: 33,
    slug: 'xuzhou',
    name: '徐州',
    province: '江苏',
    group: '宝藏',
    coordinates: [117.2841, 34.2058],
    tagline: '羊汤的热气、辣汤的胡椒香和重口锅气，撑起淮海之夜。',
    description: '徐州位于南北风味交汇处，饮食既有北方面食与羊肉的厚实，也有苏北街头小吃的灵活。一碗辣汤醒早，地锅菜以饼菜同熟聚起热闹，伏羊与烧烤则把夜晚吃得酷畅。',
    flavorTags: ['胡椒辣香', '伏羊风俗', '锅气浓郁'],
    heroImage: 'assets/dishes/xuzhou/meatball-hulatang.webp',
    imageAlt: '肉丸与辣油点缀的徐州辣汤',
    dishes: [
      { name: '徐州辣汤', description: '鲜汤里加入面筋、肉丸等配料，胡椒的辛香醒胃又暖身。' },
      { name: '把子肉', description: '大块五花肉以酱油慢煮至软烂，汤汁配米饭尤其饱满。' },
      { name: '麻酱凉皮', description: '宽凉皮裹上浓厚芝麻酱，配黄瓜与辣油，香浓又爽利。' },
      { name: '肉酱米线', description: '滑润米线浸入鲜汤，以红烧肉酱增添咸香和厚度。' }
    ],
    tip: '早晨先吃辣汤，中午用米线或把子肉补足体力，晚上再去感受烧烤与伏羊的热气。'
  },
  {
    id: 34,
    slug: 'luoyang',
    name: '洛阳',
    province: '河南',
    group: '宝藏',
    coordinates: [112.454, 34.6197],
    tagline: '汤水贯穿三餐，酸辣、麦香与古都宴席在一碗中相遇。',
    description: '洛阳人爱“喝汤”，牛羊肉汤、不翻汤和胡辣汤撑起早晨，洛阳水席则用一道道汤菜讲述古都宴饮。浆面条的微酸与锅贴的焦脆，让这座面食之城多了更鲜明的节奏。',
    flavorTags: ['汤馆日常', '酸辣利口', '古都宴席'],
    heroImage: 'assets/dishes/luoyang/luoyang-water-banquet.webp',
    imageAlt: '洛阳真不同水席的汤菜宴面',
    dishes: [
      { name: '洛阳水席', description: '热菜多带汤水，菜品依次上桌，酸辣爽利中见古都宴席规矩。' },
      { name: '胡辣汤', description: '浓稠汤底融合胡椒辛香、面筋和蔬菜，是洛阳早餐里的热辣一口。' },
      { name: '小街锅贴', description: '月牙形面皮底部煎至金黄，内馅鲜香多汁，脆软相间。' },
      { name: '浆面条', description: '发酵酸浆将面条煮得柔软，配黄豆、青豆与菜码，微酸清爽。' }
    ],
    tip: '汤馆多在早晨最热闹；水席菜数多，适合结伴分享，再把锅贴和浆面条留给街头小吃时间。'
  },
  {
    id: 35,
    slug: 'kaifeng',
    name: '开封',
    province: '河南',
    group: '宝藏',
    coordinates: [114.3076, 34.7973],
    tagline: '汤包蒸气与夜市灯火交织，汴京老味在街头一直鲜活。',
    description: '开封的味道一头连着豫菜筵席，一头连着热闹夜市。灌汤包讲究皮薄、馅鲜、汤足，桶子鸡以卤香和紧实肉质取胜，羊汤与花生糕则把咸鲜与甜香铺进一整天。',
    flavorTags: ['汴京老味', '夜市烟火', '汤鲜卤香'],
    heroImage: 'assets/dishes/kaifeng/kaifeng-soup-buns.webp',
    imageAlt: '蒸笼中褶口细密的开封灌汤包',
    dishes: [
      { name: '开封灌汤包', description: '薄皮提褶包住鲜肉和汤汁，先开口吸汤，再蘸陈醋品尝。' },
      { name: '桶子鸡', description: '整鸡经老卤煮制后色泽金黄，皮脆肉紧，咸香醇厚。' },
      { name: '羊肉汤', description: '羊肉和羊骨熝出热汤，加葱花、香菜与胡椒，鲜浓暖胃。' },
      { name: '花生糕', description: '花生炒香后碾碎与糖反复锤打成型，口感酥松，香甜不腻。' }
    ],
    tip: '灌汤包要趁热慢吃；白天尝桶子鸡和羊汤，傍晚再转入夜市，用花生糕收尾。'
  }
];

foodCitiesData.push(
  {
    id: 36, slug: 'hongkong', name: '香港', province: '香港特别行政区', group: '经典',
    coordinates: [114.1694, 22.3193],
    tagline: '云吞面清鲜弹爽，茶餐厅的奶茶与酥香点心串起港式日常。',
    description: '香港把粤式手艺与中西交融的茶餐厅文化放进同一张餐桌。云吞面讲究汤鲜、面爽与虾肉弹嫩，菠萝油和奶茶组成午后搭档，街头鸡蛋仔则以刚出炉的蛋香留住脚步。',
    flavorTags: ['茶餐厅文化', '清鲜面食', '街头蛋香'],
    dishes: [
      { name: '云吞面', description: '细蛋面爽弹，鲜虾猪肉云吞饱满，配清鲜汤底，趁热吃最显口感。' },
      { name: '菠萝油', description: '菠萝包并不含菠萝，酥甜裂纹外皮包着松软面包，夹冷牛油后咸甜交融。' },
      { name: '鸡蛋仔', description: '蛋浆在蜂窝模具中烤成连串小球，边缘轻脆，内里柔软，出炉时蛋香最浓。' },
      { name: '港式奶茶', description: '浓红茶经冲泡过滤后加入淡奶，茶味醇厚、口感顺滑，冷热各有风味。' }
    ],
    tip: '上午吃云吞面，下午把菠萝油与奶茶一起点；鸡蛋仔尽量选现烤现吃，避免焖软。'
  },
  {
    id: 37, slug: 'macau', name: '澳门', province: '澳门特别行政区', group: '宝藏',
    coordinates: [113.5439, 22.1987],
    tagline: '葡挞焦香、香料浓郁，土生葡菜与中式饼食在小城交汇。',
    description: '澳门的餐桌连接粤式风味、葡式烘焙与土生葡人饮食传统。葡式蛋挞以焦斑和层层酥皮见长，免治把肉末与薯粒炒成家常滋味，非洲鸡展现复合香料的热烈，杏仁饼则留下酥松的手信记忆。',
    flavorTags: ['土生葡菜', '香料交融', '酥香饼食'],
    dishes: [
      { name: '葡式蛋挞', description: '层层酥皮托住柔滑蛋奶馅，高温烘烤形成焦斑，温热时外脆内嫩。' },
      { name: '免治', description: '肉末与薯粒、洋葱炒出咸香，常配米饭和煎蛋，是土生葡菜中的家常代表。' },
      { name: '非洲鸡', description: '鸡肉搭配辣椒、蒜与多种香料调成的浓汁，香气丰厚，各家配方略有不同。' },
      { name: '杏仁饼', description: '绿豆粉与糖、油脂制成酥松饼身，加入杏仁增添坚果香，轻咬便散开。' }
    ],
    tip: '蛋挞趁温热品尝，正餐留给免治或非洲鸡；杏仁饼可先试吃，再按口感挑选手信。'
  }
);

foodCitiesData.push(
  {
    id: 38,
    slug: 'jiujiang',
    name: '九江',
    province: '江西',
    group: '宝藏',
    coordinates: [116.0019, 29.7051],
    tagline: '江湖之间，炒粉的锅气与赣菜的鲜辣，接上庐山脚下的烟火日常。',
    description: '九江北临长江、邻近鄱阳湖，餐桌兼有水乡鲜味与赣菜的浓香。炒粉是认识城市日常的入口，粉蒸肉、啤酒鸭和小炒牛肉展现江西家常馆子的蒸、焖与快炒；萝卜饼、茶饼和修水哨子则值得在街巷与周边县市继续寻找。',
    flavorTags: ['赣北烟火', '鲜辣锅气', '米食日常'],
    dishes: [
      { name: '九江炒粉', description: '米粉与蔬菜、肉丝等配料大火快炒，根根裹上酱香，爽滑中带着锅气。' },
      { name: '粉蒸肉', description: '肉片裹上调味米粉蒸至软糯，米香吸收肉汁，是当地也常见的赣菜家常味。' },
      { name: '啤酒鸭', description: '鸭块以啤酒和香料焖烧入味，酱汁浓香，常用辣椒增添鲜辣层次。' },
      { name: '小炒牛肉', description: '牛肉切薄后与辣椒、蒜等快速翻炒，口感鲜嫩，体现江西家常小炒的利落。' }
    ],
    tip: '早餐或夜宵先尝炒粉，正餐点几道赣菜分享；另留一段老城散步时间，寻找萝卜饼与茶饼。'
  },
  {
    id: 39,
    slug: 'lijiang',
    name: '丽江',
    province: '云南',
    group: '宝藏',
    coordinates: [100.2253, 26.8721],
    tagline: '纳西粑粑的酥香、鸡豆凉粉的清爽，在高原古城里交替登场。',
    description: '丽江饮食以纳西风味为线索，也连接宁蒗、泸沽湖一带的摩梭餐桌。丽江粑粑酥香扎实，鸡豆凉粉冷热皆宜，饵块与鸡肉搭配出米香浓郁的地方菜，玫瑰鲜花饼则带来云南烘焙的甜口。腊排骨也是继续探索当地餐馆的好方向。',
    flavorTags: ['纳西风味', '豆香米香', '高原古城'],
    dishes: [
      { name: '丽江粑粑', description: '面团抹油后反复折叠烙熟，有甜咸不同口味，外层酥香，内里柔韧。' },
      { name: '鸡豆凉粉', description: '鸡豆制成细腻凉粉，可凉拌也可煎热，配辣椒、醋和蒜汁，豆香与酸辣相衬。' },
      { name: '摩梭饵块鸡', description: '宁蒗、泸沽湖一带的地方风味，软韧饵块与鸡肉同烹，吸收汤汁与肉香。' },
      { name: '鲜花饼', description: '酥皮包入可食用玫瑰制成的甜馅，是在丽江也常见的云南点心。' }
    ],
    tip: '粑粑与凉粉适合边逛边少量品尝；饵块鸡可留给多人正餐，去泸沽湖时再深入体验摩梭风味。'
  },
  {
    id: 40,
    slug: 'dali',
    name: '大理',
    province: '云南',
    group: '宝藏',
    coordinates: [100.1653, 25.6969],
    tagline: '乳扇奶香、喜洲粑粑焦香与一碗饵丝，铺开苍洱之间的白族滋味。',
    description: '大理的风味从白族乳食与米面点心展开。乳扇烤热后奶香浓郁，喜洲粑粑有甜咸两种性格，巍山的火巴肉饵丝将软烂猪肉与米食接在一起，清炒海菜则呈现当地餐桌清鲜的一面。可以沿大理古城、喜洲和巍山分段认识这些味道。',
    flavorTags: ['白族乳食', '苍洱清鲜', '古镇米面'],
    dishes: [
      { name: '烤乳扇', description: '薄片乳扇烤软后卷起，可配玫瑰糖等甜料，奶香与微酸交织。' },
      { name: '喜洲粑粑', description: '圆形面饼烤出焦香外壳，咸口常配肉末葱花，甜口常用糖与玫瑰馅。' },
      { name: '巍山火巴肉饵丝', description: '猪肉慢煮至酥软，配细软饵丝与肉汤，再用葱花、腌菜等提味。' },
      { name: '清炒海菜', description: '当地也称“水性杨花”的海菜，烹熟后柔嫩清鲜，是白族餐桌的一道时蔬。' }
    ],
    tip: '乳扇和粑粑趁热吃；喜洲、巍山各有地方口味，分开安排更从容，海菜按当季供应点选。'
  }
);

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
  },
  jinan: {
    name: 'Jinan',
    province: 'Shandong',
    tagline: 'Spring water, glossy sauces, and patient heat give Shandong flavor a generous capital.',
    description: 'Jinan moves easily between formal Shandong cooking and deeply practical everyday food. Sweet-sour, soy-rich, and clean savory flavors each have their place: nine-turn intestines showcase layered technique, while bazirou and tianmo keep the spring city warmly fed from morning to night.',
    flavorTags: ['Shandong technique', 'Deep savory flavor', 'Spring-city snacks'],
    imageAlt: 'Jinan nine-turn pork intestines coated in a glossy sauce',
    dishes: [
      { name: 'Nine-Turn Pork Intestines', description: 'Pork intestines are blanched, fried, and braised until sweet, sour, savory, spicy, and aromatic notes converge.' },
      { name: 'Bazirou', description: 'Thick pork belly slabs simmer slowly with soy and spices, then arrive with rice and other braised sides.' },
      { name: 'Tianmo', description: 'Despite its name, this hot millet porridge is savory, with noodles, peanuts, tofu skin, and greens.' },
      { name: 'Sweet-Sour Carp', description: 'A whole carp is scored and fried into an arched shape before a bright sweet-sour glaze is poured over.' }
    ],
    tip: 'Start the morning with tianmo, take bazirou for lunch, and share the two more elaborate Shandong dishes at dinner.'
  },
  qingdao: {
    name: 'Qingdao',
    province: 'Shandong',
    tagline: 'Clams meet chilies, sea cucumber meets scallion, and the sea breeze seasons every street.',
    description: 'Qingdao tables are shaped by fresh seafood and Shandong generosity. Spanish mackerel becomes a juicy dumpling filling, clams hit the wok over fierce heat, scallions deepen the flavor of sea cucumber, and grilled squid turns the harbor evening into pure street-food smoke.',
    flavorTags: ['Seasonal seafood', 'Scallion savor', 'Harbor grilling'],
    imageAlt: 'Qingdao fish dumplings filled with tender Spanish mackerel',
    dishes: [
      { name: 'Spanish Mackerel Dumplings', description: 'Fresh mackerel is beaten into a tender, juicy filling brightened with Chinese chives.' },
      { name: 'Spicy Stir-Fried Clams', description: 'Local clams are flash-fried with chilies and a light sauce that leaves their natural sweetness clear.' },
      { name: 'Scallion-Braised Sea Cucumber', description: 'Springy sea cucumber absorbs a glossy sauce built on deeply browned Shandong scallions.' },
      { name: 'Grilled Squid', description: 'Squid chars over a griddle or coals before a final brush of sauce, chili, and cumin.' }
    ],
    tip: 'Ask what seafood is freshest that day, eat clams and dumplings hot, and save sea cucumber for a full Shandong meal.'
  },
  suzhou: {
    name: 'Suzhou',
    province: 'Jiangsu',
    tagline: 'Refined knife work, measured sweetness, and noodle toppings that change with the season.',
    description: 'Suzhou cooking values seasonality, precise cutting, and a light-handed sweet-savory balance. Squirrel-shaped fish depends on scoring and double frying, hot-oil eel arrives fragrant and theatrical, while noodle shops rotate toppings through the year without losing their neighborhood warmth.',
    flavorTags: ['Delicate sweet-savory', 'Seasonal toppings', 'Precise knife work'],
    imageAlt: 'Suzhou squirrel-shaped mandarin fish with crisp scored flesh and sweet-sour sauce',
    dishes: [
      { name: 'Squirrel Mandarin Fish', description: 'A deeply scored fish fries into a crisp, fanned shape before receiving a vivid sweet-sour sauce.' },
      { name: 'Su-Style Soup Noodles', description: 'Fine noodles come in clear or red broth with seasonal toppings such as braised pork, fish, or shrimp.' },
      { name: 'Hot-Oil Eel Paste', description: 'Shredded eel in dark savory sauce is finished tableside with garlic and sizzling hot oil.' },
      { name: 'Suzhou Shengjian', description: 'Fluffy buns hold pork and broth above a crisp-fried base, finished with sesame and scallion.' }
    ],
    tip: 'Visit noodle shops early and choose from the day’s toppings; share the fish and eel dishes with the table.'
  },
  fuzhou: {
    name: 'Fuzhou',
    province: 'Fujian',
    tagline: 'Clear soups, lively sweet-sour notes, and mountain and sea meeting in a single clay jar.',
    description: 'Fuzhou cooking puts freshness first without leaning on heavy seasoning. Fish balls and rouyan require patient handwork, lychee pork gives the table an agile sweet-sour lift, and Buddha Jumps Over the Wall concentrates seafood, meat, mushrooms, and wine through long, gentle simmering.',
    flavorTags: ['Clear savory soups', 'Lively sweet-sour', 'Mountain and sea'],
    imageAlt: 'Fuzhou Buddha Jumps Over the Wall filled with slow-simmered delicacies',
    dishes: [
      { name: 'Buddha Jumps Over the Wall', description: 'Seafood, poultry, cured meat, and mushrooms simmer together in a clay jar into a layered, aromatic broth.' },
      { name: 'Fuzhou Fish Balls', description: 'Springy fish paste wraps a juicy pork center, releasing both broth and clean ocean flavor when bitten.' },
      { name: 'Lychee Pork', description: 'Scored pork curls into lychee-like shapes before frying and a bright red sweet-sour glaze.' },
      { name: 'Rouyan', description: 'Pork is pounded into thin, resilient wrappers that encase more meat and cook in a clear soup.' }
    ],
    tip: 'Begin with fish balls and rouyan, reset with lychee pork, and reserve the elaborate clay-jar soup for a leisurely meal.'
  },
  nanning: {
    name: 'Nanning',
    province: 'Guangxi',
    tagline: 'Sour bamboo, fermented black beans, lemon, and chili turn southern humidity into appetite.',
    description: 'Nanning food uses bright acidity to keep every meal lively. Laoyoufen blooms with garlic, black beans, and sour bamboo, lemon duck balances tang and mellow richness, suanye makes seasonal produce crisp and playful, and five-colored rice carries the botanical fragrance of Zhuang celebrations.',
    flavorTags: ['Appetite-waking sourness', 'Everyday rice noodles', 'Zhuang traditions'],
    imageAlt: 'Nanning laoyoufen with sour bamboo, fermented black beans, and beef',
    dishes: [
      { name: 'Laoyoufen', description: 'Garlic, fermented black beans, sour bamboo, and chili are fried before broth and rice noodles join the wok.' },
      { name: 'Lemon Duck', description: 'Duck is stir-fried with preserved lemon, pickled ginger, and chilies for a tangy, gently bitter finish.' },
      { name: 'Suanye', description: 'Papaya, mango, or radish is quickly pickled with salt, vinegar, sugar, and chili into a crisp street snack.' },
      { name: 'Five-Colored Glutinous Rice', description: 'Natural plant dyes tint sticky rice in several colors, adding a light herbal aroma to this Zhuang festival staple.' }
    ],
    tip: 'Begin with laoyoufen, cool down with suanye, then share lemon duck and fragrant colored rice.'
  },
  nanchang: {
    name: 'Nanchang',
    province: 'Jiangxi',
    tagline: 'Cool mixed rice noodles, warm crock soups, chile, and rice aroma light up everyday Jiangxi flavor.',
    description: 'Nanchang food lives in rice noodles, clay crocks, and wok-fired street meals. Banfen opens the morning with soy sauce, preserved radish, and chili oil, crock soup builds a gentle savory base, fried rice noodles bring wok heat, and steamed pork with rice powder turns meat and grain into something soft and fragrant.',
    flavorTags: ['Rice-noodle mornings', 'Slow crock soups', 'Jiangxi chile bite'],
    imageAlt: 'Nanchang banfen mixed with chili oil and small garnishes',
    dishes: [
      { name: 'Nanchang Banfen', description: 'Rice noodles are blanched, then mixed with soy sauce, chili oil, preserved radish, and scallions for a bright, punchy breakfast.' },
      { name: 'Earthenware Pot Soup', description: 'Small crocks slowly steam meat, egg, mushrooms, or other ingredients into a clear, warming soup.' },
      { name: 'Nanchang Fried Rice Noodles', description: 'Rice noodles meet high wok heat, soy aroma, chile, and smoky breath-of-the-wok flavor.' },
      { name: 'Steamed Pork with Rice Powder', description: 'Pork belly is coated in seasoned rice powder and steamed until soft, rich, and deeply fragrant.' }
    ],
    tip: 'Start with banfen and crock soup for breakfast, then save fried noodles and steamed pork for a more chile-forward evening.'
  },
  haikou: {
    name: 'Haikou',
    province: 'Hainan',
    tagline: 'Coconut fragrance, tender chicken, and cooling sweets turn tropical island cooking light and easy.',
    description: 'Haikou gathers Hainan’s island produce into an everyday table. Wenchang chicken is silky and clean-tasting, Hainanfen layers sweet, sour, and savory notes, qingbuliang cools the afternoon with coconut milk and grains, and coconut rice steams sticky rice inside pure tropical aroma.',
    flavorTags: ['Tropical coconut', 'Refreshing noodles', 'Island slow food'],
    imageAlt: 'Sliced Hainan Wenchang chicken served on a plate',
    dishes: [
      { name: 'Wenchang Chicken', description: 'Poached chicken is sliced with glossy skin and tender meat, then brightened by tangy, garlicky dipping sauces.' },
      { name: 'Hainanfen', description: 'Fine rice noodles are dressed with gravy, pickles, peanuts, and shredded meat for a sweet-sour-savory mix.' },
      { name: 'Qingbuliang', description: 'Coconut milk, mung beans, grains, dates, and fruit make a cooling Hainan dessert bowl.' },
      { name: 'Coconut Rice', description: 'Sticky rice steams with coconut flesh and juice, becoming soft, lightly sweet, and deeply aromatic.' }
    ],
    tip: 'Eat Wenchang chicken and Hainanfen at lunch, cool down with qingbuliang, and finish with coconut rice as a gentle sweet.'
  },
  quanzhou: {
    name: 'Quanzhou',
    province: 'Fujian',
    tagline: 'A Maritime Silk Road city where gentle seafood, ginger warmth, noodles, and zongzi meet.',
    description: 'Quanzhou cooking carries both Minnan seafood clarity and an old overseas-Chinese rhythm. Misua paste is silky and warming, ginger duck slowly draws depth from old ginger and aromatics, roast pork zongzi is hearty and compact, and runbing wraps vegetables, seafood, meat, and sweet peanut powder into one fresh bite.',
    flavorTags: ['Minnan freshness', 'Old-school snacks', 'Ginger warmth'],
    imageAlt: 'A bowl of thick, silky Quanzhou misua paste',
    dishes: [
      { name: 'Misua Paste', description: 'Fine wheat noodles cook into a smooth soup, often topped with fried pork, oysters, or braised garnishes.' },
      { name: 'Ginger Duck', description: 'Duck is braised with old ginger, sesame oil, and spices until warming, aromatic, and deeply seasoned.' },
      { name: 'Roast Pork Zongzi', description: 'Sticky rice wraps roast pork, mushrooms, dried shrimp, and other fillings, then pairs well with sweet chili sauce.' },
      { name: 'Runbing', description: 'Thin wrappers fold vegetables, seafood, shredded meat, and peanut sugar into a fresh, lightly sweet roll.' }
    ],
    tip: 'Make misua paste breakfast, save ginger duck for a slower dinner, and graze the old city in small snack stops.'
  },
  shenyang: {
    name: 'Shenyang',
    province: 'Liaoning',
    tagline: 'Chicken racks, dumplings, smoked pork flatbread, and steaming wheat snacks define Northeast street-table joy.',
    description: 'Shenyang food is bold without being careless. Laobian dumplings are known for their fragrant filling and juices, chicken rack anchors late-night snacking, smoked pork flatbread folds cured meat into chewy pastry, and Shenyang shaomai brings beef-and-lamb richness into thin hot-water dough.',
    flavorTags: ['Northeast street food', 'Chicken-rack nights', 'Hearty wheat snacks'],
    imageAlt: 'Laobian dumplings arranged neatly on a plate',
    dishes: [
      { name: 'Laobian Dumplings', description: 'A classic Shenyang dumpling style with seasoned fillings, thin wrappers, and a juicy bite.' },
      { name: 'Grilled Chicken Rack', description: 'Chicken frames are grilled until the edges char, then brushed with sauce and spices for late-night nibbling.' },
      { name: 'Smoked Pork Flatbread', description: 'Slices of smoked pork tuck into a pliant flatbread with scallions and sweet bean sauce.' },
      { name: 'Shenyang Shaomai', description: 'Hot-water dough holds beef or lamb filling, steaming into a rich, juicy northern snack.' }
    ],
    tip: 'Try dumplings and shaomai by day, save chicken rack for night, and split the smoked pork flatbread with friends.'
  },
  taiyuan: {
    name: 'Taiyuan',
    province: 'Shanxi',
    tagline: 'Vinegar brightness, chewy noodles, and steaming mutton broth show the sturdy side of Shanxi cooking.',
    description: 'Taiyuan is an entry point to Shanxi noodles and old-city flavors. Tounao is warming and aromatic, knife-cut noodles show off firm edges and soft centers, guoyourou balances tender pork with bright vinegar, and yangzage wakes the morning with hot offal soup, pepper, and herbs.',
    flavorTags: ['Shanxi noodles', 'Old-city vinegar', 'Mutton-broth warmth'],
    imageAlt: 'Taiyuan tounao soup served with pickled leeks',
    dishes: [
      { name: 'Tounao', description: 'A warming soup of huangjiu, mutton, lotus root, and medicinal aromatics, long tied to Taiyuan breakfasts.' },
      { name: 'Knife-Cut Noodles', description: 'Thick-edged noodle slices land springy in broth, especially lively with meat sauce, vinegar, and chili.' },
      { name: 'Guoyourou', description: 'Pork slices are oil-blanched, then stir-fried with wood ear and vegetables in a bright vinegar-leaning sauce.' },
      { name: 'Yangzage', description: 'Sliced mutton offal in hot broth gets lifted by pepper, scallion, and cilantro.' }
    ],
    tip: 'Wake early for tounao or yangzage, eat knife-cut noodles at lunch, and let vinegar lead when ordering guoyourou.'
  },
  xuzhou: {
    name: 'Xuzhou',
    province: 'Jiangsu',
    tagline: 'Peppery soup, mutton-broth steam, and bold wok flavor power the nights of the Huaihai region.',
    description: 'Xuzhou sits where northern and southern food traditions meet. Hearty wheat dishes and mutton share the table with flexible northern Jiangsu street food. Pepper soup wakes the morning, earthen-pot cooking brings breads and braises together, and late-night barbecue keeps the city lively.',
    flavorTags: ['Peppery warmth', 'Fuyang mutton season', 'Bold wok flavor'],
    imageAlt: 'Xuzhou pepper soup with meatballs and chili oil',
    dishes: [
      { name: 'Xuzhou Pepper Soup', description: 'A savory broth thick with gluten, meatballs, and other ingredients, sharpened by warming black pepper.' },
      { name: 'Bazirou', description: 'Large pieces of pork belly are slowly soy-braised until tender, with rich juices made for rice.' },
      { name: 'Sesame Liangpi', description: 'Broad cool noodles are coated in sesame paste, then brightened with cucumber and chili oil.' },
      { name: 'Meat-Sauce Rice Noodles', description: 'Slippery rice noodles sit in savory broth under a deeply seasoned braised-meat sauce.' }
    ],
    tip: 'Begin with pepper soup, refuel on rice noodles or bazirou at lunch, then save the evening for barbecue and summer mutton traditions.'
  },
  luoyang: {
    name: 'Luoyang',
    province: 'Henan',
    tagline: 'Soup runs through every meal as sour heat, wheat, and ancient banquet traditions meet.',
    description: 'Luoyang begins the day over soup: beef, mutton, bufan, and pepper soups are all part of the morning rhythm. The celebrated Water Banquet turns soup-rich dishes into an old-capital ceremony, while tangy fermented noodles and crisp-bottomed guotie reveal the city’s everyday wheat traditions.',
    flavorTags: ['Soup-house mornings', 'Bright sour heat', 'Ancient banquets'],
    imageAlt: 'Soup-rich dishes at a traditional Luoyang Water Banquet',
    dishes: [
      { name: 'Luoyang Water Banquet', description: 'Soup-rich dishes arrive in sequence, balancing lively sour heat with the formal rhythm of an old-capital feast.' },
      { name: 'Hulatang', description: 'A thick pepper soup with gluten and vegetables, served as a warming, spicy Luoyang breakfast.' },
      { name: 'Xiaojie Guotie', description: 'Crescent dumplings fry to a golden base while keeping their filling juicy and their upper wrappers tender.' },
      { name: 'Jiangmian Tiao', description: 'Noodles soften in a lightly fermented sour broth with soybeans, green peas, and chopped vegetables.' }
    ],
    tip: 'Visit soup shops early, share the many courses of a Water Banquet, and leave room for guotie and fermented noodles later.'
  },
  kaifeng: {
    name: 'Kaifeng',
    province: 'Henan',
    tagline: 'Soup-bun steam meets night-market light, keeping old Bianjing flavors vividly alive.',
    description: 'Kaifeng cooking connects formal Henan banquet traditions with one of China’s liveliest night-market cultures. Soup buns prize thin wrappers and abundant broth, tongzi chicken brings aromatic master-stock depth, while mutton soup and peanut candy carry the day from savory warmth to a crisp sweet finish.',
    flavorTags: ['Old Bianjing flavors', 'Night-market energy', 'Broth and master stock'],
    imageAlt: 'Pleated Kaifeng soup buns arranged in a bamboo steamer',
    dishes: [
      { name: 'Kaifeng Soup Buns', description: 'Fine pleats hold pork and hot broth inside a thin wrapper; open, sip, then season with vinegar.' },
      { name: 'Tongzi Chicken', description: 'A whole chicken is cooked in aromatic master stock until golden, firm-textured, and deeply savory.' },
      { name: 'Mutton Soup', description: 'Mutton and bones simmer into a warming broth lifted with scallion, cilantro, and pepper.' },
      { name: 'Peanut Candy', description: 'Roasted peanuts and sugar are pounded and shaped into a crisp, fragrant sweet that finishes cleanly.' }
    ],
    tip: 'Take soup buns slowly while hot, try tongzi chicken and mutton soup by day, then finish a night-market walk with peanut candy.'
  }
};

Object.assign(foodCitiesEnglish, {
  hongkong: {
    name: 'Hong Kong', province: 'Hong Kong SAR',
    tagline: 'Springy wonton noodles, silky milk tea, and warm bakery treats set the rhythm of Hong Kong.',
    description: 'Hong Kong brings Cantonese craft and the East-meets-West culture of cha chaan teng cafes to one table. Wonton noodles balance clear broth with springy noodles and shrimp fillings, pineapple buns accompany afternoon milk tea, and freshly baked egg waffles perfume the streets.',
    flavorTags: ['Cha chaan teng culture', 'Fresh noodle soups', 'Street-side baking'],
    dishes: [
      { name: 'Wonton Noodles', description: 'Springy fine egg noodles and plump shrimp-and-pork wontons meet a light, savory broth.' },
      { name: 'Pineapple Bun with Butter', description: 'A soft bun with a crackly sweet crust holds a slab of cold butter; despite its name, it contains no pineapple.' },
      { name: 'Egg Waffles', description: 'Egg batter bakes into connected little bubbles with crisp edges and soft centers, best eaten straight from the iron.' },
      { name: 'Hong Kong Milk Tea', description: 'Strong filtered black tea blended with evaporated milk makes a smooth, full-bodied drink, served hot or iced.' }
    ],
    tip: 'Try wonton noodles in the morning, pair a buttered pineapple bun with afternoon milk tea, and eat egg waffles freshly baked.'
  },
  macau: {
    name: 'Macao', province: 'Macao SAR',
    tagline: 'Caramelized egg tarts and fragrant spices connect Macanese cooking with Chinese bakery traditions.',
    description: 'Macao brings together Cantonese flavors, Portuguese-inspired baking, and Macanese home cooking. Egg tarts offer blistered custard and flaky pastry, minchi turns minced meat and potatoes into comfort food, African chicken layers aromatic spices, and almond cookies provide a crumbly sweet finish.',
    flavorTags: ['Macanese cooking', 'Layered spices', 'Crumbly bakery treats'],
    dishes: [
      { name: 'Portuguese-style Egg Tarts', description: 'Flaky pastry cradles silky custard with caramelized spots, especially delicate while still warm.' },
      { name: 'Minchi', description: 'Minced meat, diced potatoes, and onion are cooked into a savory Macanese staple, often served with rice and a fried egg.' },
      { name: 'African Chicken', description: 'Chicken meets a rich sauce of chilies, garlic, and aromatic spices, with recipes varying between kitchens.' },
      { name: 'Almond Cookies', description: 'Mung bean flour forms a crumbly cookie enriched with almonds for a fragrant, nutty bite.' }
    ],
    tip: 'Eat egg tarts warm, save a proper meal for minchi or African chicken, and sample almond cookies before choosing a souvenir box.'
  }
});

Object.assign(foodCitiesEnglish, {
  jiujiang: {
    name: 'Jiujiang',
    province: 'Jiangxi',
    tagline: 'Wok-fragrant rice noodles and bold Jiangxi cooking bring everyday warmth to the foot of Mount Lu.',
    description: 'Jiujiang lies beside the Yangtze and near Poyang Lake, bringing freshwater traditions together with aromatic Jiangxi cooking. Fried rice noodles introduce the daily rhythm, while rice-powder pork, beer-braised duck, and quick-fried beef show the regional restaurant repertoire. Seek out radish pastries, tea cakes, and Xiushui shaozi for more local discoveries.',
    flavorTags: ['Northern Jiangxi flavor', 'Fresh chili and wok heat', 'Everyday rice noodles'],
    dishes: [
      { name: 'Jiujiang Fried Rice Noodles', description: 'Rice noodles meet vegetables, shredded meat, and soy seasoning over fierce heat for a springy, fragrant plate.' },
      { name: 'Steamed Pork with Rice Powder', description: 'Seasoned rice powder coats pork slices and absorbs their juices as they steam into a tender Jiangxi comfort dish.' },
      { name: 'Beer-Braised Duck', description: 'Duck slowly cooks with beer and aromatics into a savory sauce, often lifted with fresh chili.' },
      { name: 'Stir-Fried Beef', description: 'Thin beef slices are quickly tossed with chilies and garlic, a lively example of Jiangxi home-style cooking.' }
    ],
    tip: 'Begin with fried rice noodles, share Jiangxi dishes at a proper meal, and leave an old-town walk for radish pastries and tea cakes.'
  },
  lijiang: {
    name: 'Lijiang',
    province: 'Yunnan',
    tagline: 'Crisp Naxi flatbreads and refreshing chickpea jelly set a delicious pace through the highland old town.',
    description: 'Lijiang connects Naxi food traditions with the Mosuo tables of Ninglang and Lugu Lake. Layered baba flatbreads contrast with chickpea jelly served cool or warm; rice cakes cooked with chicken provide a hearty regional meal, while rose pastries bring a sweet Yunnan finish. Cured pork ribs offer another direction for exploring local restaurants.',
    flavorTags: ['Naxi traditions', 'Beans and rice cakes', 'Highland old town'],
    dishes: [
      { name: 'Lijiang Baba', description: 'Oiled dough is folded and cooked into a layered flatbread, with sweet or savory versions and a crisp, fragrant surface.' },
      { name: 'Chickpea Jelly', description: 'Fine-textured chickpea jelly is served chilled or pan-fried with chili, vinegar, and garlic.' },
      { name: 'Mosuo Rice-Cake Chicken', description: 'A Ninglang and Lugu Lake regional dish pairing chicken with soft, chewy erkuai rice cakes that absorb the cooking juices.' },
      { name: 'Rose Pastries', description: 'Flaky pastry wraps a sweet edible-rose filling in a Yunnan bakery favorite also found throughout Lijiang.' }
    ],
    tip: 'Sample flatbreads and jelly in small portions, share rice-cake chicken at a proper meal, and explore more Mosuo flavors around Lugu Lake.'
  },
  dali: {
    name: 'Dali',
    province: 'Yunnan',
    tagline: 'Toasted milk fans, crisp Xizhou flatbreads, and warming rice noodles reveal the flavors of the Cangshan-Erhai region.',
    description: 'Dali food unfolds through Bai dairy traditions and rice-and-wheat snacks. Rushan cheese turns fragrant over heat, Xizhou baba comes sweet or savory, Weishan pork rice noodles marry tender meat with a soft rice base, and cooked aquatic greens reveal a lighter side of the table. Explore these tastes across Dali Old Town, Xizhou, and Weishan.',
    flavorTags: ['Bai dairy traditions', 'Fresh lake-region greens', 'Old-town rice and wheat'],
    dishes: [
      { name: 'Grilled Rushan Cheese', description: 'Thin sheets of milk cheese soften over heat and roll around sweet fillings such as rose syrup, with a gently tangy dairy aroma.' },
      { name: 'Xizhou Baba', description: 'A round flatbread with a browned crust, filled with pork and scallions or a sweet sugar-and-rose mixture.' },
      { name: 'Weishan Pork Ersi', description: 'Slow-cooked pork tops soft rice-cake noodles in meat broth, brightened with scallions and pickled vegetables.' },
      { name: 'Stir-Fried Aquatic Greens', description: 'Locally called shuixingyanghua, these tender cooked greens are a seasonal vegetable in Bai cuisine.' }
    ],
    tip: 'Eat cheese and flatbreads hot, give Xizhou and Weishan separate stops, and order aquatic greens when they are in season.'
  }
});

const dishLicenseUrls = {
  'CC0 1.0': 'https://creativecommons.org/publicdomain/zero/1.0/',
  'CC BY 2.0': 'https://creativecommons.org/licenses/by/2.0/',
  'CC BY 2.5': 'https://creativecommons.org/licenses/by/2.5/',
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
  ],
  jinan: [
    commonsDish('jiuzhuan-dachang', '浓亮酱汁包裹的济南九转大肠', 'Jinan nine-turn pork intestines coated in a glossy sauce', 'Rolfmueller', 'CC BY-SA 3.0', 'Jiuqu dachang 2009 03.jpg', 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Jiuqu_dachang_2009_03.jpg'),
    commonsDish('bazirou', '米饭旁摆放把子肉与肉丸', 'Jinan bazirou and meatballs served beside rice', 'Suginami', 'CC BY-SA 4.0', '济南把子肉和肉丸子.jpg', 'https://upload.wikimedia.org/wikipedia/commons/4/48/%E6%B5%8E%E5%8D%97%E6%8A%8A%E5%AD%90%E8%82%89%E5%92%8C%E8%82%89%E4%B8%B8%E5%AD%90.jpg'),
    commonsDish('tianmo', '盛在碗中的济南咸香甜沫', 'A bowl of savory Jinan tianmo millet porridge', 'Steven Sun', 'CC BY-SA 4.0', '甜沫 202509.jpg', 'https://upload.wikimedia.org/wikipedia/commons/d/d8/%E7%94%9C%E6%B2%AB_202509.jpg'),
    commonsDish('sweet-sour-carp', '浇有亮红酸甜汁的糖醋鲤鱼', 'Whole carp covered in a bright sweet-sour glaze', 'Steven Sun', 'CC BY-SA 4.0', 'Tangcu Liyu 20230622.jpg', 'https://upload.wikimedia.org/wikipedia/commons/4/48/Tangcu_Liyu_20230622.jpg')
  ],
  qingdao: [
    commonsDish('mackerel-dumplings', '薄皮包裹鲜嫩鱼馅的青岛鲅鱼水饺', 'Qingdao fish dumplings filled with tender Spanish mackerel', 'N509FZ', 'CC BY-SA 4.0', 'Four-in-one dumplings at Chuange Fish Dumplings, Chaoyang Joy City (20220201192212).jpg', 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Four-in-one_dumplings_at_Chuange_Fish_Dumplings%2C_Chaoyang_Joy_City_%2820220201192212%29.jpg'),
    commonsDish('spicy-clams', '辣椒酱汁快炒的青岛蛤蜊', 'Qingdao clams stir-fried with chilies and savory sauce', 'Xufanc', 'CC BY-SA 3.0', 'Hoi Lai Pad Phrik Pao75.jpg', 'https://upload.wikimedia.org/wikipedia/commons/2/25/Hoi_Lai_Pad_Phrik_Pao75.jpg'),
    commonsDish('scallion-sea-cucumber', '大葱与浓汁烧制的海参', 'Sea cucumber braised with browned scallions and glossy sauce', 'Worldtravelwiki', 'CC BY-SA 3.0', '葱烧海参 001.jpg', 'https://upload.wikimedia.org/wikipedia/commons/d/d5/%E8%91%B1%E7%83%A7%E6%B5%B7%E5%8F%82_001.jpg'),
    commonsDish('grilled-squid', '刷酱烤至焦香的整只鱿鱼', 'Whole squid grilled until lightly charred and brushed with sauce', 'Fumikas Sagisavas', 'CC0 1.0', 'Freshippo grilled squid.jpg', 'https://upload.wikimedia.org/wikipedia/commons/8/86/Freshippo_grilled_squid.jpg')
  ],
  suzhou: [
    commonsDish('squirrel-mandarin-fish', '花刀炸开并淋酸甜汁的苏州松鼠桂鱼', 'Suzhou squirrel-shaped mandarin fish with crisp scored flesh and sweet-sour sauce', 'Walter Grassroot', 'CC BY-SA 3.0', '松鼠桂鱼.jpg', 'https://upload.wikimedia.org/wikipedia/commons/e/e4/%E6%9D%BE%E9%BC%A0%E6%A1%82%E9%B1%BC.jpg'),
    commonsDish('su-style-noodles', '汤清面细并配浇头的苏式汤面', 'Fine Su-style noodles in broth with a seasonal topping', 'Finnnnnn', 'CC BY-SA 4.0', 'Su-style Noodle.jpg', 'https://upload.wikimedia.org/wikipedia/commons/2/22/Su-style_Noodle.jpg'),
    commonsDish('hot-oil-eel-paste', '蒜末与姜丝覆盖的苏州响油鳝糊', 'Suzhou shredded eel finished with garlic, ginger, and sizzling oil', 'N509FZ', 'CC BY-SA 4.0', 'Stir-fried shredded eel with hot oil and ginger at Songhelou Suzhou Noodles, Parkview Green (20210126165145).jpg', 'https://upload.wikimedia.org/wikipedia/commons/7/77/Stir-fried_shredded_eel_with_hot_oil_and_ginger_at_Songhelou_Suzhou_Noodles%2C_Parkview_Green_%2820210126165145%29.jpg'),
    commonsDish('suzhou-shengjian', '底部煎脆并撒葱花芝麻的苏州生煎', 'Suzhou shengjian buns with crisp bottoms, sesame, and scallion', 'Shwangtianyuan', 'CC BY-SA 4.0', "Shengjianbao and Suanlafen at Yang's Dumpling Suzhou Center-20220709.jpg", 'https://upload.wikimedia.org/wikipedia/commons/0/04/Shengjianbao_and_Suanlafen_at_Yang%27s_Dumpling_Suzhou_Center-20220709.jpg')
  ],
  fuzhou: [
    commonsDish('buddha-jumps-wall', '坛中盛放多种山海食材的福州佛跳墙', 'Fuzhou Buddha Jumps Over the Wall filled with slow-simmered delicacies', 'N509FZ', 'CC BY-SA 4.0', 'Buddha jumps over the wall at Jingrong (20161203135907).jpg', 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Buddha_jumps_over_the_wall_at_Jingrong_%2820161203135907%29.jpg'),
    commonsDish('fuzhou-fish-balls', '清汤面中盛放的弹嫩鱼丸', 'Springy fish balls served in a clear soup with noodles', 'ProjectManhattan', 'CC BY-SA 3.0', 'Fish ball soup noodle.jpg', 'https://upload.wikimedia.org/wikipedia/commons/a/af/Fish_ball_soup_noodle.jpg'),
    commonsDish('lychee-pork', '酸甜亮汁包裹的福州荔枝肉', 'Fuzhou lychee pork coated in bright sweet-sour glaze', 'N509FZ', 'CC BY-SA 4.0', 'Lychee pork at Yibian Restaurant, Fuzhou (20201002200754).jpg', 'https://upload.wikimedia.org/wikipedia/commons/0/04/Lychee_pork_at_Yibian_Restaurant%2C_Fuzhou_%2820201002200754%29.jpg'),
    commonsDish('rouyan', '成盘摆放的福州肉燕', 'Fuzhou rouyan pork dumplings arranged on a tray', 'Lianxx', 'CC BY 3.0', 'Rouyan.jpg', 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Rouyan.jpg')
  ],
  nanning: [
    commonsDish('laoyoufen', '酸笋、豆豉与牛肉搭配的南宁老友粉', 'Nanning laoyoufen with sour bamboo, fermented black beans, and beef', 'N509FZ', 'CC BY-SA 4.0', 'Laoyoufen with beef at Wanguo Restaurant, Nanning (20240216205412).jpg', 'https://upload.wikimedia.org/wikipedia/commons/9/92/Laoyoufen_with_beef_at_Wanguo_Restaurant%2C_Nanning_%2820240216205412%29.jpg'),
    commonsDish('lemon-duck', '酸香配料包裹的广西柠檬鸭', 'Guangxi lemon duck with pickled citrus and aromatic vegetables', 'N509FZ', 'CC BY-SA 4.0', 'Guangxi lemon duck on Z5 (20160323175957).jpg', 'https://upload.wikimedia.org/wikipedia/commons/b/b0/Guangxi_lemon_duck_on_Z5_%2820160323175957%29.jpg'),
    commonsDish('suanye', '摆满腌渍果蔬的广西酸嘢摊', 'A Guangxi suanye stall filled with pickled fruit and vegetables', 'EditQ', 'CC BY-SA 4.0', '酸嘢.jpg', 'https://upload.wikimedia.org/wikipedia/commons/0/0d/%E9%85%B8%E5%98%A2.jpg'),
    commonsDish('five-color-glutinous-rice', '植物染色蒸成的广西五色糯米饭', 'Guangxi glutinous rice naturally dyed in five colors', 'N509FZ', 'CC BY-SA 4.0', 'Five-colored glutinous rice at a Guangxi-style restaurant in Beijing (20250331105506).jpg', 'https://upload.wikimedia.org/wikipedia/commons/5/53/Five-colored_glutinous_rice_at_a_Guangxi-style_restaurant_in_Beijing_%2820250331105506%29.jpg')
  ],
  nanchang: [
    commonsDish('nanchang-banfen', '拌有辣椒油和小菜的南昌拌粉', 'Nanchang banfen mixed with chili oil and small garnishes', 'Nagae Iku', 'CC0 1.0', 'Nanchang Banfen (20251205 085026).jpg', 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Nanchang_Banfen_%2820251205_085026%29.jpg'),
    commonsDish('waguan-soup', '瓦罐中慢煨的南昌汤品', 'Nanchang earthenware pot soup simmered in a small crock', '吴光耀', 'CC BY-SA 4.0', '瓦罐汤.jpg', 'https://upload.wikimedia.org/wikipedia/commons/3/37/%E7%93%A6%E7%BD%90%E6%B1%A4.jpg'),
    commonsDish('nanchang-fried-rice-noodles', '酱香浓郁的南昌炒粉', 'Nanchang fried rice noodles with soy aroma and wok heat', 'Qa003qa003', 'CC BY-SA 4.0', '南昌炒粉 20161008 185424.jpg', 'https://upload.wikimedia.org/wikipedia/commons/f/f8/%E5%8D%97%E6%98%8C%E7%82%92%E7%B2%89_20161008_185424.jpg'),
    commonsDish('fenzhengrou', '米粉包裹蒸熟的粉蒸肉', 'Steamed pork coated with seasoned rice powder', 'Ruocaled', 'CC BY 2.0', '粉蒸肉.jpg', 'https://upload.wikimedia.org/wikipedia/commons/0/05/%E7%B2%89%E8%92%B8%E8%82%89.jpg')
  ],
  haikou: [
    commonsDish('wenchang-chicken', '切件装盘的海南文昌鸡', 'Sliced Hainan Wenchang chicken served on a plate', 'EVOW Sahgyune Paiem KAASEI 02238', 'CC0 1.0', 'HK SYP 西環 Sai Ying Pun 德輔道西 308 Des Voeux Road West 食神麗宮酒家 Chinese Banquet Seafood Restaurant food 海南 文昌 白切雞 Hainan Wenchang White Cut Chicken January 2026 N13P 06.jpg', 'https://upload.wikimedia.org/wikipedia/commons/c/c2/HK_SYP_%E8%A5%BF%E7%92%B0_Sai_Ying_Pun_%E5%BE%B7%E8%BC%94%E9%81%93%E8%A5%BF_308_Des_Voeux_Road_West_%E9%A3%9F%E7%A5%9E%E9%BA%97%E5%AE%AE%E9%85%92%E5%AE%B6_Chinese_Banquet_Seafood_Restaurant_food_%E6%B5%B7%E5%8D%97_%E6%96%87%E6%98%8C_%E7%99%BD%E5%88%87%E9%9B%9E_Hainan_Wenchang_White_Cut_Chicken_January_2026_N13P_06.jpg'),
    commonsDish('hainanfen', '卤汁与小料拌好的海南粉', 'Hainanfen rice noodles mixed with gravy and garnishes', 'N509FZ', 'CC BY-SA 4.0', 'Hainanfen at a restaurant in Sanya (20230324201859).jpg', 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Hainanfen_at_a_restaurant_in_Sanya_%2820230324201859%29.jpg'),
    commonsDish('qingbuliang', '椰奶中加入杂粮和水果的海南清补凉', 'Hainan qingbuliang dessert with coconut milk, grains, and fruit', 'N509FZ', 'CC BY-SA 4.0', 'Coconut milk Ching Bo Leung (20220421141453).jpg', 'https://upload.wikimedia.org/wikipedia/commons/a/ac/Coconut_milk_Ching_Bo_Leung_%2820220421141453%29.jpg'),
    commonsDish('coconut-rice', '装在椰壳中的海南椰子饭', 'Hainan coconut rice steamed and served in a coconut shell', 'Popolon', 'CC BY-SA 4.0', 'Riz-coco des Li.jpg', 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Riz-coco_des_Li.jpg')
  ],
  quanzhou: [
    commonsDish('misua-paste', '碗中柔滑浓稠的泉州面线糊', 'A bowl of thick, silky Quanzhou misua paste', 'N509FZ', 'CC BY-SA 4.0', 'Mī-suànn-kôo in Quanzhou (20200929220207).jpg', 'https://upload.wikimedia.org/wikipedia/commons/2/29/M%C4%AB-su%C3%A0nn-k%C3%B4o_in_Quanzhou_%2820200929220207%29.jpg'),
    commonsDish('ginger-duck', '姜香浓郁的泉州姜母鸭', 'Quanzhou ginger duck braised with old ginger and spices', 'N509FZ', 'CC BY-SA 4.0', 'Quanzhou-style Kiuⁿ-bó-ah (Ginger Duck) at Yipin Xiangqing Restaurant, Beijing (20240908174515).jpg', 'https://upload.wikimedia.org/wikipedia/commons/4/47/Quanzhou-style_Kiu%E2%81%BF-b%C3%B3-ah_%28Ginger_Duck%29_at_Yipin_Xiangqing_Restaurant%2C_Beijing_%2820240908174515%29.jpg'),
    commonsDish('roast-pork-zongzi', '剥开后露出烧肉馅料的闽南肉粽', 'Minnan roast pork zongzi opened to show its savory filling', '向史公哲曰', 'CC BY-SA 4.0', '1980烧肉粽前埔店的菜品.jpg', 'https://upload.wikimedia.org/wikipedia/commons/7/79/1980%E7%83%A7%E8%82%89%E7%B2%BD%E5%89%8D%E5%9F%94%E5%BA%97%E7%9A%84%E8%8F%9C%E5%93%81.jpg'),
    commonsDish('runbing', '薄饼卷起蔬菜和配料的泉州润饼菜', 'Quanzhou runbing wrapped with vegetables and savory fillings', 'Sjschen.', 'CC BY-SA 3.0', 'LunBhia.jpg', 'https://upload.wikimedia.org/wikipedia/commons/a/ae/LunBhia.jpg')
  ],
  shenyang: [
    commonsDish('laobian-dumplings', '盘中整齐摆放的沈阳老边饺子', 'Laobian dumplings arranged neatly on a plate', 'JIP', 'CC BY-SA 4.0', 'Chinese-style dumplings at home.jpg', 'https://upload.wikimedia.org/wikipedia/commons/8/86/Chinese-style_dumplings_at_home.jpg'),
    commonsDish('grilled-chicken-rack', '刷酱烤至焦香的沈阳鸡架', 'Shenyang grilled chicken rack brushed with sauce and spices', 'N509FZ', 'CC BY-SA 4.0', 'Grilled chicken ribs at Handsome Cooking Guys, Hopson One (20220330164842).jpg', 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Grilled_chicken_ribs_at_Handsome_Cooking_Guys%2C_Hopson_One_%2820220330164842%29.jpg'),
    commonsDish('smoked-pork-flatbread', '熏肉与大饼组合成的沈阳熏肉大饼', 'Smoked pork and flatbread served as a Shenyang-style set', 'N509FZ', 'CC BY-SA 4.0', 'Single set at Li Liangui Xunrou Dabing (20231010124144).jpg', 'https://upload.wikimedia.org/wikipedia/commons/8/87/Single_set_at_Li_Liangui_Xunrou_Dabing_%2820231010124144%29.jpg'),
    commonsDish('shenyang-shaomai', '蒸笼中的沈阳清真烧麦', 'Shenyang halal shaomai steaming in a bamboo basket', 'UjuiUjuMandan', 'CC BY-SA 4.0', '沈阳清真饭店的烧麦.jpg', 'https://upload.wikimedia.org/wikipedia/commons/2/2c/%E6%B2%88%E9%98%B3%E6%B8%85%E7%9C%9F%E9%A5%AD%E5%BA%97%E7%9A%84%E7%83%A7%E9%BA%A6.jpg')
  ],
  taiyuan: [
    commonsDish('tounao', '太原头脑配腌韭菜一同上桌', 'Taiyuan tounao soup served with pickled leeks', 'N509FZ', 'CC BY-SA 4.0', 'Tounao and pickled leek at Ren Yi Li, Taiyuannan Railway Station (20241104133220).jpg', 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Tounao_and_pickled_leek_at_Ren_Yi_Li%2C_Taiyuannan_Railway_Station_%2820241104133220%29.jpg'),
    commonsDish('knife-cut-noodles', '浇头覆盖的山西刀削面', 'Shanxi knife-cut noodles topped with savory sauce', 'N509FZ', 'CC BY-SA 4.0', 'Daoxiaomian at Beixinqiao, Beijing (20201011183536).jpg', 'https://upload.wikimedia.org/wikipedia/commons/9/91/Daoxiaomian_at_Beixinqiao%2C_Beijing_%2820201011183536%29.jpg'),
    commonsDish('guoyourou', '木耳和蔬菜同炒的山西过油肉', 'Shanxi guoyourou stir-fried with wood ear and vegetables', 'Liuxingy', 'CC BY-SA 4.0', '榆次 全盛园之胡师傅过油肉.jpg', 'https://upload.wikimedia.org/wikipedia/commons/4/4a/%E6%A6%86%E6%AC%A1_%E5%85%A8%E7%9B%9B%E5%9B%AD%E4%B9%8B%E8%83%A1%E5%B8%88%E5%82%85%E8%BF%87%E6%B2%B9%E8%82%89.jpg'),
    commonsDish('yangzage', '热汤中的山西羊杂割', 'Shanxi yangzage mutton offal served in hot broth', 'AddisWang', 'CC BY-SA 3.0', '羊杂割.JPG', 'https://upload.wikimedia.org/wikipedia/commons/c/c7/%E7%BE%8A%E6%9D%82%E5%89%B2.JPG')
  ],
  xuzhou: [
    commonsDish('meatball-hulatang', '肉丸与辣油点缀的徐州辣汤', 'Xuzhou pepper soup with meatballs and chili oil', 'Liuxingy', 'CC BY-SA 4.0', '肉丸胡辣汤.jpg', 'https://upload.wikimedia.org/wikipedia/commons/6/6e/%E8%82%89%E4%B8%B8%E8%83%A1%E8%BE%A3%E6%B1%A4.jpg'),
    commonsDish('bazirou', '白盘中叠放的酱香把子肉', 'Tender soy-braised bazirou pork stacked on a white plate', 'bryan...', 'CC BY-SA 2.0', 'Food 把子肉, Yi Yuan Peking Cuisine, The Westin Taipei, 頄園, 頄園北京料理, 六福皇宮, 台北威斯汀六福皇宮, 台北 (20222070712).jpg', 'https://upload.wikimedia.org/wikipedia/commons/1/14/Food_%E6%8A%8A%E5%AD%90%E8%82%89%2C_Yi_Yuan_Peking_Cuisine%2C_The_Westin_Taipei%2C_%E9%A0%A4%E5%9C%92%2C_%E9%A0%A4%E5%9C%92%E5%8C%97%E4%BA%AC%E6%96%99%E7%90%86%2C_%E5%85%AD%E7%A6%8F%E7%9A%87%E5%AE%AE%2C_%E5%8F%B0%E5%8C%97%E5%A8%81%E6%96%AF%E6%B1%80%E5%85%AD%E7%A6%8F%E7%9A%87%E5%AE%AE%2C_%E5%8F%B0%E5%8C%97_%2820222070712%29.jpg'),
    commonsDish('sesame-liangpi', '芝麻酱和黄瓜丝覆盖的宽凉皮', 'Wide liangpi noodles coated with sesame paste and cucumber', 'Steetsweet', 'CC BY-SA 4.0', '麻酱凉皮.jpg', 'https://upload.wikimedia.org/wikipedia/commons/a/a5/%E9%BA%BB%E9%85%B1%E5%87%89%E7%9A%AE.jpg'),
    commonsDish('meat-sauce-rice-noodles', '红烧肉酱与青菜搭配的米线', 'Rice noodles in broth with braised meat sauce and greens', '茅野ふたば', 'CC BY-SA 4.0', '红烧牛腩肉酱米线（2025年6月28日）.jpg', 'https://upload.wikimedia.org/wikipedia/commons/1/14/%E7%BA%A2%E7%83%A7%E7%89%9B%E8%85%A9%E8%82%89%E9%85%B1%E7%B1%B3%E7%BA%BF%EF%BC%882025%E5%B9%B46%E6%9C%8828%E6%97%A5%EF%BC%89.jpg')
  ],
  luoyang: [
    commonsDish('luoyang-water-banquet', '洛阳真不同水席的汤菜宴面', 'Soup-rich dishes at a traditional Luoyang Water Banquet', 'Aaron Zhu', 'CC BY-SA 3.0', '洛阳“真不同”水宴 - panoramio.jpg', 'https://commons.wikimedia.org/wiki/Special:Redirect/file/%E6%B4%9B%E9%98%B3%E2%80%9C%E7%9C%9F%E4%B8%8D%E5%90%8C%E2%80%9D%E6%B0%B4%E5%AE%B4%20-%20panoramio.jpg'),
    commonsDish('luoyang-hulatang', '面筋与蔬菜沉在浓稠的洛阳胡辣汤中', 'Thick Luoyang hulatang with gluten pieces and vegetables', 'Liuxingy', 'CC BY-SA 4.0', '河南胡辣汤.jpg', 'https://commons.wikimedia.org/wiki/Special:Redirect/file/%E6%B2%B3%E5%8D%97%E8%83%A1%E8%BE%A3%E6%B1%A4.jpg'),
    commonsDish('xiaojie-guotie', '煎至金黄的洛阳小街锅贴', 'Golden pan-fried guotie dumplings', 'Leiem', 'CC BY-SA 4.0', 'Jiucai guotie.jpg', 'https://upload.wikimedia.org/wikipedia/commons/9/97/Jiucai_guotie.jpg'),
    commonsDish('jiangmian-tiao', '配豆类和菜码的洛阳浆面条', 'Luoyang fermented-broth noodles with beans and vegetables', 'Fumikas Sagisavas', 'CC0 1.0', 'Knife sliced noodles.jpg', 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Knife%20sliced%20noodles.jpg')
  ],
  kaifeng: [
    commonsDish('kaifeng-soup-buns', '蒸笼中褶口细密的开封灌汤包', 'Pleated Kaifeng soup buns arranged in a bamboo steamer', 'Windmemories', 'CC BY-SA 4.0', 'Steamed soup buns of Kaifeng.jpg', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Steamed_soup_buns_of_Kaifeng.jpg'),
    commonsDish('tongzi-chicken', '熟食摊上金黄的开封桶子鸡', 'Golden Kaifeng tongzi chickens displayed at a cooked-food stall', 'Windmemories', 'CC BY-SA 4.0', '20240806 Tong Zi Chicken for sale at Pang Ji.jpg', 'https://upload.wikimedia.org/wikipedia/commons/1/16/20240806_Tong_Zi_Chicken_for_sale_at_Pang_Ji.jpg'),
    commonsDish('mutton-soup', '羊肉片、葱花和香菜浮在乳白羊汤中', 'Milky mutton soup with sliced lamb, scallions, and cilantro', 'N509FZ', 'CC BY-SA 4.0', 'Shanxian Mutton Soup in Beijing (20230224111441).jpg', 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Shanxian_Mutton_Soup_in_Beijing_%2820230224111441%29.jpg'),
    commonsDish('peanut-candy', '木墩上锤打与整形的开封花生糕', 'Handmade Kaifeng peanut candy being pounded and shaped', 'Caitriana Nicholson', 'CC BY-SA 2.0', 'Making peanut candy 花生糕 (6237580444).jpg', 'https://upload.wikimedia.org/wikipedia/commons/a/af/Making_peanut_candy_%E8%8A%B1%E7%94%9F%E7%B3%95_%286237580444%29.jpg')
  ]
};

Object.assign(foodDishMedia, {
  hongkong: [
    commonsDish('wonton-noodles', '香港西营盘的云吞面与奶茶', 'Wonton noodles and milk tea in Sai Ying Pun, Hong Kong', 'Yaoungendoack', 'CC BY-SA 3.0', 'HK Sai Ying Pun Milk tea 02 Wonton noodle July-2012.JPG', 'https://commons.wikimedia.org/wiki/Special:Redirect/file/HK_Sai_Ying_Pun_Milk_tea_02_Wonton_noodle_July-2012.JPG'),
    commonsDish('pineapple-bun', '夹着牛油的港式菠萝油', 'Hong Kong pineapple bun filled with butter', 'Dennis Wong', 'CC BY 2.0', 'Pineapple bun.jpg', 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Pineapple_bun.jpg'),
    commonsDish('egg-waffles', '纸袋中刚烤好的香港鸡蛋仔', 'Hong Kong egg waffles served in a paper bag', 'Sarah Stierch', 'CC BY-SA 3.0', 'Egg waffle - sarah stierch.jpg', 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Egg_waffle_-_sarah_stierch.jpg'),
    commonsDish('milk-tea', '杯中醇厚顺滑的港式奶茶', 'A cup of Hong Kong-style milk tea', 'WiNG', 'CC BY-SA 3.0', 'Hong Kong-style Milk Tea.jpg', 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Hong_Kong-style_Milk_Tea.jpg')
  ],
  macau: [
    commonsDish('portuguese-egg-tarts', '表面烤出焦斑的澳门葡式蛋挞', 'Macao Portuguese-style egg tarts with caramelized custard', 'Tom Liu', 'CC BY-SA 4.0', 'Macau Eggtart.jpg', 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Macau_Eggtart.jpg'),
    commonsDish('minchi', '澳门土生葡菜免治', 'Minchi, a Macanese minced-meat dish', 'Adriao', 'CC BY 3.0', 'Minchi.jpg', 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Minchi.jpg'),
    commonsDish('african-chicken', '澳门餐厅供应的非洲鸡', 'African chicken served in Macao', 'Wishds', 'CC BY-SA 3.0', 'African Chicken in Macau!.jpg', 'https://commons.wikimedia.org/wiki/Special:Redirect/file/African_Chicken_in_Macau%21.jpg'),
    commonsDish('almond-cookies', '澳门饼店里的杏仁饼', 'Almond cookies at a bakery in Macao', 'Kofdbelum Wimgari', 'CC BY-SA 4.0', 'MC 澳門 Macau 氹仔 Taipa 官也街 Rua do Cunha 鉅記餅家 Koi Kei Bakery food shop product 杏仁餅 Almond cookies January 2019 SSG try to eat trial eating experience 02.jpg', 'https://commons.wikimedia.org/wiki/Special:Redirect/file/' + encodeURIComponent('MC 澳門 Macau 氹仔 Taipa 官也街 Rua do Cunha 鉅記餅家 Koi Kei Bakery food shop product 杏仁餅 Almond cookies January 2019 SSG try to eat trial eating experience 02.jpg'))
  ]
});

Object.assign(foodDishMedia, {
  jiujiang: [
    commonsDish('fried-rice-noodles', '九江酒店供应的当地炒米粉', 'Jiujiang-style fried rice noodles photographed in Jiujiang', 'N509FZ', 'CC BY-SA 4.0', 'Fried rice noodles at a hotel in Jiujiang (20170118082245).jpg', 'https://commons.wikimedia.org/wiki/Special:Redirect/file/' + encodeURIComponent('Fried rice noodles at a hotel in Jiujiang (20170118082245).jpg')),
    commonsDish('rice-powder-pork', '米粉包裹蒸熟的粉蒸肉（菜品示意）', 'Steamed pork with rice powder, representative dish photograph', 'Ruocaled', 'CC BY 2.0', '粉蒸肉.jpg', 'https://upload.wikimedia.org/wikipedia/commons/0/05/%E7%B2%89%E8%92%B8%E8%82%89.jpg'),
    commonsDish('beer-braised-duck', '赣菜啤酒鸭（南昌拍摄的同菜品示意）', 'Jiangxi beer-braised duck, representative photograph taken in Nanchang', 'Sherbet', 'CC BY 2.5', 'Stewed Duck in Beer, Jiangxi cuisine.jpg', 'https://commons.wikimedia.org/wiki/Special:Redirect/file/' + encodeURIComponent('Stewed Duck in Beer, Jiangxi cuisine.jpg')),
    commonsDish('stir-fried-beef', '赣菜小炒牛肉（南昌拍摄的同菜品示意）', 'Jiangxi stir-fried beef, representative photograph taken in Nanchang', 'Sherbet', 'CC BY 2.5', 'Stir-fried yellow beef, Jiangxi cuisine.jpg', 'https://commons.wikimedia.org/wiki/Special:Redirect/file/' + encodeURIComponent('Stir-fried yellow beef, Jiangxi cuisine.jpg'))
  ],
  lijiang: [
    commonsDish('lijiang-baba', '丽江街头供应的葱花鸡蛋粑粑', 'Lijiang baba flatbread with spring onion and egg', 'Alpha', 'CC BY-SA 2.0', '丽江粑粑 Lijiang Ba Ba Bread with spring onion and egg - street vendor CNY4.jpg', 'https://commons.wikimedia.org/wiki/Special:Redirect/file/' + encodeURIComponent('丽江粑粑 Lijiang Ba Ba Bread with spring onion and egg - street vendor CNY4.jpg')),
    commonsDish('chickpea-jelly', '丽江鸡豆凉粉', 'Lijiang chickpea jelly with seasonings', 'Kent Wang', 'CC BY-SA 2.0', '丽江鸡豌豆凉粉 - Chicken pea jelly.jpg', 'https://commons.wikimedia.org/wiki/Special:Redirect/file/' + encodeURIComponent('丽江鸡豌豆凉粉 - Chicken pea jelly.jpg')),
    commonsDish('mosuo-rice-cake-chicken', '宁蒗餐馆中的摩梭饵块鸡', 'Mosuo rice-cake chicken at a restaurant in Ninglang', 'N509FZ', 'CC BY-SA 4.0', 'Mosuo Erkuai Chicken at Luguyao Restaurant, Ninglang (20230930185158).jpg', 'https://commons.wikimedia.org/wiki/Special:Redirect/file/' + encodeURIComponent('Mosuo Erkuai Chicken at Luguyao Restaurant, Ninglang (20230930185158).jpg')),
    commonsDish('rose-pastry', '露出玫瑰花馅的云南鲜花饼（菜品示意）', 'Yunnan rose pastries showing their filling, representative dish photograph', 'Hyuki', 'CC0 1.0', '云南玫瑰鲜花饼-2164122.jpg', 'https://upload.wikimedia.org/wikipedia/commons/c/cb/%E4%BA%91%E5%8D%97%E7%8E%AB%E7%91%B0%E9%B2%9C%E8%8A%B1%E9%A5%BC-2164122.jpg')
  ],
  dali: [
    { ...commonsDish('grilled-rushan', '大理炭火上烘烤并加糖的乳扇', 'Dali rushan cheese roasting over charcoal with sugar', 'rduta', 'CC BY 2.0', 'Dali Rushan.jpg', 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Dali_Rushan.jpg'), cropPosition: 'south' },
    commonsDish('xizhou-baba', '大理喜洲出售的咸味粑粑', 'Savory Xizhou baba flatbread sold in Dali', 'Mx. Granger', 'CC0 1.0', 'Xizhou baba.jpg', 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Xizhou_baba.jpg'),
    commonsDish('weishan-pork-ersi', '配软烂猪肉与葱花的巍山火巴肉饵丝', 'Weishan ersi rice noodles with tender pork and scallions', '瑞丽江的河水', 'CC BY-SA 4.0', '巍山耙肉饵丝.jpg', 'https://commons.wikimedia.org/wiki/Special:Redirect/file/' + encodeURIComponent('巍山耙肉饵丝.jpg')),
    commonsDish('aquatic-greens', '大理餐馆供应的白族海菜', 'Cooked aquatic greens served at a restaurant in Dali', 'Mx. Granger', 'CC0 1.0', '水性杨花.jpg', 'https://commons.wikimedia.org/wiki/Special:Redirect/file/' + encodeURIComponent('水性杨花.jpg'))
  ]
});

foodCitiesData.push(
  {
    id: 41,
    slug: 'changzhou',
    name: '常州',
    province: '江苏',
    group: '宝藏',
    coordinates: [119.9741, 31.8112],
    tagline: '大麻糕的芝麻香与一碗素面，串起运河龙城的早餐日常。',
    description: '常州的饮食藏在面馆、点心铺与乡镇豆制品里。大麻糕烤出层层酥香，豆斋饼把豆渣变成朴素小点，横山桥蜜汁豆腐带来甜咸滋味，天宁寺素面则以蔬菜浇头与热汤呈现清爽的一餐。继续探访老店，还能遇到豆腐汤、银丝面和加蟹小笼包。',
    flavorTags: ['运河点心', '豆香酥香', '江南鲜甜'],
    dishes: [
      { name: '常州大麻糕', description: '椭圆面饼覆满芝麻，烤出酥脆层次，有甜咸不同口味，适合配热汤或粥。' },
      { name: '豆斋饼', description: '也称豆渣饼，以豆渣等制成小饼，豆香质朴，是常州地方小吃的一种。' },
      { name: '横山桥蜜汁豆腐', description: '豆腐经调味卤制，甜咸酱汁包裹表面，既能佐餐，也可作小菜。' },
      { name: '天宁寺素面', description: '细面配蔬菜等素浇头与热汤，清鲜不腻，是游览天宁寺一带时可体验的面食。' }
    ],
    tip: '早餐先尝热麻糕，再走进面馆；豆制品与点心可少量分享，留胃口给豆腐汤和当地小笼。'
  },
  {
    id: 42,
    slug: 'tangshan',
    name: '唐山',
    province: '河北',
    group: '宝藏',
    coordinates: [118.1802, 39.6309],
    tagline: '煨肘子的醇厚、板栗的甜香与渤海海鲜，展现冀东山海之间的滋味。',
    description: '唐山风味连接燕山与渤海：煨肘子以慢火见功，迁西板栗带来山地物产的甜香，乐亭和曹妃甸沿海的鱼虾蟹贝则讲究时令与鲜度。本页从肘子、糖炒栗子和两种清鲜海味展开；棋子烧饼、蜂蜜麻糖与饹馇也是逛老街时值得继续寻找的标志性小吃。',
    flavorTags: ['冀东浓香', '燕山栗香', '渤海鲜味'],
    dishes: [
      { name: '煨肘子', description: '肘子以调味汤汁慢火煨至皮糯肉软，酱香醇厚，是唐山传统餐桌的一道大菜。' },
      { name: '糖炒栗子', description: '板栗炒熟后壳亮仁糯，甜香温暖；迁西板栗是探访唐山山地物产的好线索。' },
      { name: '清蒸皮皮虾', description: '皮皮虾是乐亭等沿海地区的海产之一，清蒸保留鲜甜，适合按当季供应点选。' },
      { name: '清煮海蟹', description: '海蟹简单煮熟后拆壳取肉，配姜醋品尝，呈现冀东沿海餐桌的清鲜一面。' }
    ],
    tip: '市区尝传统大菜，沿海按季节选海鲜；点单前确认品种、重量和价格，老街另留一站给棋子烧饼与饹馇。'
  },
  {
    id: 43,
    slug: 'dalian',
    name: '大连',
    province: '辽宁',
    group: '经典',
    coordinates: [121.6147, 38.9140],
    tagline: '焖子的焦香、咸鱼饼子的扎实与一桌海味，写出辽东海港的家常。',
    description: '大连的风味兼有辽东海鲜与北方家常。焖子煎出焦壳后配芝麻酱和蒜汁，咸鱼饼子把鱼鲜与玉米面香放在一起，清煮海蟹突出海产本味，家常水饺则让一餐有了温暖收尾。想进一步认识当地海味，也可寻找鲅鱼水饺等不同馅料。',
    flavorTags: ['辽东海鲜', '煎香蒜香', '北方家常'],
    dishes: [
      { name: '大连焖子', description: '淀粉凝成块后煎至表面焦香，浇上芝麻酱、蒜汁等调料，外香内软。' },
      { name: '咸鱼饼子', description: '咸香鱼肉配玉米面饼子，鱼的浓鲜与粗粮的甜香相互衬托。' },
      { name: '清煮海蟹', description: '海蟹以简单烹调突出鲜甜，可配姜醋蘸汁，按时令选择更能吃出海港滋味。' },
      { name: '家常水饺', description: '面皮包入肉、蔬菜或海鲜等不同馅料，煮熟后趁热吃，是当地家庭聚餐的常见主食。' }
    ],
    tip: '焖子适合做逛街小吃，咸鱼搭饼子一起吃；海鲜先确认重量和价格，水饺馅料按当天菜单选择。'
  }
);

Object.assign(foodCitiesEnglish, {
  changzhou: {
    name: 'Changzhou', province: 'Jiangsu',
    tagline: 'Sesame-scented flatbreads and a bowl of vegetarian noodles introduce daily life beside the Grand Canal.',
    description: 'Changzhou rewards visits to noodle shops, bakeries, and neighborhood tofu makers. Layered sesame cakes contrast with humble soybean-pulp cakes, Hengshanqiao tofu brings sweet-savory flavor, and Tianning Temple noodles offer vegetable toppings in warming broth. Tofu soup, fine silk noodles, and crab-filled soup buns invite further exploration.',
    flavorTags: ['Canal-side snacks', 'Sesame and soy', 'Jiangnan sweetness'],
    dishes: [
      { name: 'Changzhou Sesame Cakes', description: 'Oval, sesame-covered flatbreads bake into crisp layers, with sweet and savory versions to accompany soup or congee.' },
      { name: 'Douzhai Soybean Cakes', description: 'Also called douzha cakes, these small soybean-pulp cakes are a modest local snack with a gentle bean aroma.' },
      { name: 'Hengshanqiao Sweet-Marinated Tofu', description: 'Seasoned tofu carries a sweet-savory glaze and works as a small side dish or part of a shared meal.' },
      { name: 'Tianning Temple Vegetarian Noodles', description: 'Fine noodles meet vegetable toppings and hot broth for a light meal around the Tianning Temple area.' }
    ],
    tip: 'Start with warm sesame cakes, then visit a noodle shop; share small tofu dishes and leave room for tofu soup or local soup buns.'
  },
  tangshan: {
    name: 'Tangshan', province: 'Hebei',
    tagline: 'Slow-braised pork, fragrant chestnuts, and Bohai seafood connect eastern Hebei mountains with the coast.',
    description: 'Tangshan flavors span the Yanshan mountains and Bohai coast. Slow-braised pork offers a rich centerpiece, Qianxi chestnuts introduce mountain produce, and the coastal areas of Laoting and Caofeidian supply seasonal seafood. These four dishes are an introduction; seek out qizi pastries, honey matáng sweets, and gecha bean pancakes on a separate snack walk.',
    flavorTags: ['Eastern Hebei richness', 'Mountain chestnuts', 'Bohai seafood'],
    dishes: [
      { name: 'Slow-Braised Pork Knuckle', description: 'Pork knuckle slowly cooks in seasoned broth until the skin softens and the meat becomes tender, a traditional Tangshan banquet dish.' },
      { name: 'Sugar-Roasted Chestnuts', description: 'Roasted chestnuts have glossy shells and sweet, soft centers; Qianxi chestnuts are a notable local mountain product.' },
      { name: 'Steamed Mantis Shrimp', description: 'Mantis shrimp from coastal areas such as Laoting are simply steamed to emphasize their natural sweetness.' },
      { name: 'Boiled Sea Crab', description: 'Simply cooked sea crab, often paired with ginger and vinegar, reveals the lighter side of the eastern Hebei coast.' }
    ],
    tip: 'Try traditional dishes in town and seasonal seafood by the coast; confirm species, weight, and price before ordering, and save a snack stop for qizi pastries and gecha.'
  },
  dalian: {
    name: 'Dalian', province: 'Liaoning',
    tagline: 'Crisp-edged menzi, salted fish with corn cakes, and seafood tell the everyday story of a Liaodong port.',
    description: 'Dalian combines Liaodong seafood with northern home cooking. Menzi starch jelly is pan-fried and dressed with sesame sauce and garlic; salted fish meets hearty corn cakes; boiled sea crab keeps the focus on the catch; and homemade dumplings round out a family meal. Spanish-mackerel dumplings offer another direction for exploring local fillings.',
    flavorTags: ['Liaodong seafood', 'Garlicky street snacks', 'Northern home cooking'],
    dishes: [
      { name: 'Dalian Menzi', description: 'Starch-jelly cubes are pan-fried until crisp-edged, then dressed with sesame sauce and garlic for a soft-centered street snack.' },
      { name: 'Salted Fish with Corn Cakes', description: 'Savory salted fish pairs with cornmeal cakes, balancing concentrated fish flavor with gently sweet grain.' },
      { name: 'Boiled Sea Crab', description: 'Simply boiled crab highlights its natural sweetness, with ginger-vinegar dipping sauce and seasonal availability.' },
      { name: 'Homestyle Dumplings', description: 'Dumplings with meat, vegetable, or seafood fillings are boiled and served hot as a familiar centerpiece of family meals.' }
    ],
    tip: 'Snack on menzi, eat salted fish together with its corn cakes, and confirm seafood weights and prices; choose dumpling fillings from the actual menu.'
  }
});

Object.assign(foodDishMedia, {
  changzhou: [
    commonsDish('sesame-cakes', '常州大麻糕的芝麻外壳与层次', 'Sesame-covered Changzhou flatbreads', 'Vesekskiy', 'CC BY-SA 4.0', 'Changzhou sesame cake 02.jpg', 'https://upload.wikimedia.org/wikipedia/commons/7/73/Changzhou_sesame_cake_02.jpg'),
    commonsDish('douzhai-cakes', '常州豆斋饼', 'Changzhou douzhai soybean-pulp cakes', 'François Nguyen', 'CC BY 2.0', 'Douzhaibing.jpg', 'https://upload.wikimedia.org/wikipedia/commons/8/84/Douzhaibing.jpg'),
    commonsDish('hengshanqiao-tofu', '横山桥蜜汁豆腐', 'Hengshanqiao sweet-marinated tofu', 'Fumikas Sagisavas', 'CC0 1.0', 'Hengshanqiao sweet marinated tofu.jpg', 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Hengshanqiao_sweet_marinated_tofu.jpg'),
    commonsDish('tianning-noodles', '天宁寺什锦素面', 'Tianning Temple noodles with assorted vegetarian toppings', 'Fumikas Sagisavas', 'CC0 1.0', 'Tianning Temple assorted vegetarian noodles.jpg', 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Tianning_Temple_assorted_vegetarian_noodles.jpg')
  ],
  tangshan: [
    commonsDish('braised-pork-knuckle', '煨肘子同类菜品示意，非唐山店铺实拍', 'Representative braised pork knuckle, not photographed at a Tangshan restaurant', 'Fumikas Sagisavas', 'CC0 1.0', 'Braised pork knuckles.jpg', 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Braised_pork_knuckles.jpg'),
    commonsDish('sugar-roasted-chestnuts', '糖炒栗子菜品示意，非迁西产地认证照片', 'Representative sugar-roasted chestnuts; Qianxi origin is not asserted for this photograph', 'Fumikas Sagisavas', 'CC0 1.0', 'Sugar-roasted chestnuts (1).jpg', 'https://upload.wikimedia.org/wikipedia/commons/7/74/Sugar-roasted_chestnuts_%281%29.jpg'),
    commonsDish('steamed-mantis-shrimp', '清蒸皮皮虾菜品示意', 'Representative steamed mantis shrimp photograph', 'Fumikas Sagisavas', 'CC0 1.0', 'Steamed mantis shrimp.jpg', 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Steamed_mantis_shrimp.jpg'),
    commonsDish('boiled-sea-crab', '清煮海蟹菜品示意，原图摄于大连', 'Representative boiled sea crab photograph taken in Dalian', 'Jason M. C., Han', 'CC BY-SA 4.0', 'Boiled crabs in a Earlier Autumn Dish.jpg', 'https://upload.wikimedia.org/wikipedia/commons/2/24/Boiled_crabs_in_a_Earlier_Autumn_Dish.jpg')
  ],
  dalian: [
    commonsDish('menzi', '大连焖子', 'Dalian menzi starch-jelly snack', 'JesseW900', 'CC BY-SA 4.0', 'Dalian Menzi.JPG', 'https://upload.wikimedia.org/wikipedia/commons/8/80/Dalian_Menzi.JPG'),
    commonsDish('salted-fish-corn-cakes', '大连咸鱼饼子', 'Salted fish with corn cakes in Dalian', 'JesseW900', 'CC BY-SA 4.0', 'Salted fish Dalian.JPG', 'https://upload.wikimedia.org/wikipedia/commons/5/53/Salted_fish_Dalian.JPG'),
    commonsDish('boiled-sea-crab', '大连家宴中的清煮海蟹', 'Boiled sea crabs at a family meal in Dalian', 'Jason M. C., Han', 'CC BY-SA 4.0', 'Boiled crabs in a Earlier Autumn Dish.jpg', 'https://upload.wikimedia.org/wikipedia/commons/2/24/Boiled_crabs_in_a_Earlier_Autumn_Dish.jpg'),
    commonsDish('homestyle-dumplings', '大连家庭制作的水饺，图片不限定馅料', 'Homemade dumplings in Dalian; the photograph does not identify their filling', 'CEphoto, Uwe Aranas', 'CC BY-SA 3.0', 'Dalian Liaoning China Homemade-Jiaotze-01.jpg', 'https://upload.wikimedia.org/wikipedia/commons/8/85/Dalian_Liaoning_China_Homemade-Jiaotze-01.jpg')
  ]
});

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
