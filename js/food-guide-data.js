// 地图之外的中华美食图鉴；由首页搜索与静态专题页共同使用。
const featuredFoodsData = [
  {
    slug: 'jiaozi',
    zhName: '饺子',
    enName: 'Jiaozi · Chinese Dumplings',
    zhRegion: '北方各地',
    enRegion: 'Northern China',
    zhCategory: '面点',
    enCategory: 'Dumplings',
    zhDescription: '薄面皮包入肉馅、蔬菜或两者混合的馅料，可水煮、蒸制或煎成焦脆锅贴。不同地区的面皮厚薄、形状和蘸料各有习惯。',
    enDescription: 'Wheat wrappers hold meat, vegetables, or a mixture of both. Jiaozi may be boiled, steamed, or pan-fried, with regional differences in shape, wrapper thickness, and dipping sauce.',
    relatedCities: [
      { slug: 'chengdu', zhLabel: '成都钟水饺', enLabel: 'Chengdu Zhong Shui Jiao' }
    ]
  },
  {
    slug: 'beijing-roast-duck',
    zhName: '烤鸭',
    enName: 'Beijing Roast Duck',
    zhRegion: '北京',
    enRegion: 'Beijing',
    zhCategory: '烤味',
    enCategory: 'Roast dishes',
    zhDescription: '整鸭烤至皮脆肉嫩，通常片切后与薄饼、葱丝、黄瓜和甜面酱同食。挂炉与焖炉是北京烤鸭常见的两类烤制传统。',
    enDescription: 'A whole duck is roasted until its skin turns crisp and the meat stays tender, then sliced for thin pancakes with scallion, cucumber, and sweet bean sauce. Open and closed ovens represent two Beijing traditions.',
    relatedCities: []
  },
  {
    slug: 'spring-rolls',
    zhName: '春卷',
    enName: 'Spring Rolls',
    zhRegion: '多地风味',
    enRegion: 'Many regional styles',
    zhCategory: '节令小吃',
    enCategory: 'Seasonal snacks',
    zhDescription: '薄皮卷入时蔬、肉丝或其他地方馅料，封口后炸至金黄酥脆。它与迎春食俗相连，但如今在许多地方全年都能吃到。',
    enDescription: 'Thin wrappers enclose seasonal vegetables, shredded meat, or other local fillings before frying until golden. Spring rolls retain a link to springtime customs but are now enjoyed throughout the year.',
    relatedCities: [
      { slug: 'chaozhou', zhLabel: '潮州粿品与小吃', enLabel: 'Chaozhou snacks and rice cakes' }
    ]
  },
  {
    slug: 'dongpo-pork',
    zhName: '东坡肉',
    enName: 'Dongpo Pork',
    zhRegion: '浙江杭州',
    enRegion: 'Hangzhou, Zhejiang',
    zhCategory: '慢火菜',
    enCategory: 'Slow braises',
    zhDescription: '方正的带皮五花肉以酱油、糖、黄酒等调味，小火慢煨至色泽红亮、肥润软糯。菜名与宋代文人苏轼号“东坡”相连。',
    enDescription: 'Neat cubes of skin-on pork belly are slowly braised with soy sauce, sugar, rice wine, and aromatics until glossy and yielding. The name connects the dish with the Song-dynasty writer Su Shi, also known as Dongpo.',
    relatedCities: []
  },
  {
    slug: 'lanzhou-beef-noodles',
    zhName: '兰州牛肉面（兰州拉面）',
    enName: 'Lanzhou Beef Noodles',
    zhRegion: '甘肃兰州',
    enRegion: 'Lanzhou, Gansu',
    zhCategory: '汤面',
    enCategory: 'Noodles',
    zhDescription: '清亮牛肉汤、白萝卜、红辣油、绿香菜蒜苗与手工抻制的面条组成鲜明的一碗。面条可按粗细和形状选择，兰州本地更常简称“牛肉面”。',
    enDescription: 'Clear beef broth, white radish, red chili oil, green herbs, and hand-pulled noodles create a vivid bowl. Diners choose from several noodle shapes and widths; in Lanzhou it is commonly shortened to “beef noodles.”',
    relatedCities: []
  },
  {
    slug: 'chuanchuanxiang',
    zhName: '串串香',
    enName: 'Chuanchuanxiang · Skewers in Hot Pot',
    zhRegion: '四川成都',
    enRegion: 'Chengdu, Sichuan',
    zhCategory: '围炉',
    enCategory: 'Communal pots',
    zhDescription: '肉、豆制品和蔬菜穿在竹签上，放入麻辣汤底中烫熟，取食灵活，也便于一餐尝到多种食材。常见吃法有热锅串串与冷锅串串。',
    enDescription: 'Meat, tofu products, and vegetables are threaded onto bamboo skewers and cooked in a chile-and-Sichuan-pepper broth. The format makes it easy to sample many ingredients in one meal.',
    relatedCities: [
      { slug: 'chengdu', zhLabel: '成都麻辣风味', enLabel: 'Chengdu’s numbing heat' }
    ]
  },
  {
    slug: 'hot-sour-noodles',
    zhName: '酸辣粉',
    enName: 'Hot and Sour Sweet Potato Noodles',
    zhRegion: '川渝地区',
    enRegion: 'Sichuan and Chongqing',
    zhCategory: '粉食',
    enCategory: 'Noodles',
    zhDescription: '弹韧的红薯粉浸在酸辣汤汁里，常以醋、辣椒油、花生、黄豆和榨菜叠加味道与口感，入口先酸后辣。',
    enDescription: 'Springy sweet-potato noodles sit in a sharp, chile-warmed broth, often layered with vinegar, chili oil, peanuts or soybeans, and preserved vegetables for crunch.',
    relatedCities: [
      { slug: 'chongqing', zhLabel: '重庆酸辣粉', enLabel: 'Chongqing hot and sour noodles' }
    ]
  },
  {
    slug: 'spicy-crayfish',
    zhName: '小龙虾',
    enName: 'Spicy Crayfish',
    zhRegion: '多地夜宵',
    enRegion: 'Night markets across China',
    zhCategory: '夜宵',
    enCategory: 'Late-night food',
    zhDescription: '小龙虾常与辣椒、花椒、蒜或香料大火烧制，也有十三香、蒜蓉等流行口味。剥壳慢吃、适合分享，是许多城市夏夜餐桌的主角。',
    enDescription: 'Crayfish are wok-cooked with chilies, Sichuan pepper, garlic, or layered spice blends. Peeling them by hand slows the meal down, making the dish a social fixture of warm-weather nights.',
    relatedCities: [
      { slug: 'changsha', zhLabel: '长沙口味虾', enLabel: 'Changsha spicy crayfish' }
    ]
  },
  {
    slug: 'changfen',
    zhName: '肠粉',
    enName: 'Changfen · Rice Noodle Rolls',
    zhRegion: '广东',
    enRegion: 'Guangdong',
    zhCategory: '米食',
    enCategory: 'Rice dishes',
    zhDescription: '米浆蒸成薄而柔滑的粉皮，可卷入牛肉、猪肉、虾或鸡蛋，切段后淋上豉油。它既是街头早餐，也常出现在广式茶楼。',
    enDescription: 'Rice batter is steamed into delicate sheets, wrapped around beef, pork, shrimp, or egg, then cut and dressed with seasoned soy sauce. It appears at breakfast counters and in Cantonese teahouses.',
    relatedCities: [
      { slug: 'guangzhou', zhLabel: '广州早茶与点心', enLabel: 'Guangzhou dim sum' }
    ]
  },
  {
    slug: 'xiaolongbao',
    zhName: '小笼包',
    enName: 'Xiaolongbao · Soup Dumplings',
    zhRegion: '江南地区',
    enRegion: 'Jiangnan region',
    zhCategory: '蒸点',
    enCategory: 'Dumplings',
    zhDescription: '薄面皮裹住肉馅与受热融化的皮冻，蒸熟后形成一包热汤。通常先夹到汤匙里轻轻开口，避免汤汁溅出或烫口。',
    enDescription: 'A thin wrapper encloses minced meat and chilled aspic, which melts into hot broth as the dumpling steams. Move one to a spoon and open it gently before sipping the soup.',
    relatedCities: []
  },
  {
    slug: 'baodu',
    zhName: '爆肚',
    enName: 'Baodu · Quick-Boiled Tripe',
    zhRegion: '北京',
    enRegion: 'Beijing',
    zhCategory: '传统小吃',
    enCategory: 'Traditional snacks',
    zhDescription: '牛肚或羊肚按不同部位切片，在滚水中迅速汆熟，以保留脆嫩口感，再蘸麻酱、醋、香菜等调成的蘸料趁热吃。',
    enDescription: 'Cuts of beef or lamb tripe are briefly plunged into boiling water to keep them crisp and tender, then eaten hot with a sesame-paste dip sharpened by vinegar and herbs.',
    relatedCities: []
  },
  {
    slug: 'yunnan-rice-noodles',
    zhName: '米线',
    enName: 'Yunnan Rice Noodles',
    zhRegion: '云南',
    enRegion: 'Yunnan',
    zhCategory: '粉食',
    enCategory: 'Noodles',
    zhDescription: '以大米制成的米线爽滑柔韧，在云南可见汤煮、凉拌、焖炒等多种吃法。过桥米线只是其中一种，地方汤底与配料变化十分丰富。',
    enDescription: 'Smooth, resilient rice noodles appear across Yunnan in broths, chilled preparations, and stir-fries. Crossing-the-Bridge noodles are one expression within a much wider family of local bowls.',
    relatedCities: []
  },
  {
    slug: 'miancha',
    zhName: '面茶',
    enName: 'Miancha · Millet Porridge with Sesame Paste',
    zhRegion: '北京、天津',
    enRegion: 'Beijing and Tianjin',
    zhCategory: '早餐',
    enCategory: 'Breakfast',
    zhDescription: '以糜子面或小米面熬成浓稠糊状，表面浇芝麻酱并撒芝麻盐。它虽名为“茶”，却是一碗咸香、稠滑的传统早餐。',
    enDescription: 'Millet flour is cooked into a thick porridge, striped with sesame paste, and finished with seasoned sesame salt. Despite the word “tea” in its name, this is a savory breakfast bowl.',
    relatedCities: []
  },
  {
    slug: 'youtiao',
    zhName: '油条',
    enName: 'Youtiao · Fried Dough Sticks',
    zhRegion: '全国多地',
    enRegion: 'Across China',
    zhCategory: '早餐',
    enCategory: 'Breakfast',
    zhDescription: '两条发面叠合后拉长油炸，形成外脆内空的长条。各地常配豆浆、粥、豆腐脑或米粉，也会夹入烧饼、饭团和煎饼。',
    enDescription: 'Two strips of leavened dough are joined, stretched, and fried until crisp outside and airy within. Youtiao accompany soy milk, congee, tofu pudding, rice noodles, and many wrapped breakfasts.',
    relatedCities: [
      { slug: 'wuhan', zhLabel: '武汉过早文化', enLabel: 'Wuhan breakfast culture' }
    ]
  },
  {
    slug: 'hulatang',
    zhName: '胡辣汤',
    enName: 'Hulatang · Peppery Breakfast Soup',
    zhRegion: '河南',
    enRegion: 'Henan',
    zhCategory: '早餐汤',
    enCategory: 'Breakfast soup',
    zhDescription: '胡椒和多种香料带来温热辛香，汤体通常略稠，并加入面筋、木耳、粉条等配料；不同地方也会使用牛羊肉或其他食材。',
    enDescription: 'Pepper and layered spices give this thickened breakfast soup its warming bite. Wheat gluten, wood ear mushrooms, and noodles are common, while beef, lamb, and other additions vary by place.',
    relatedCities: []
  },
  {
    slug: 'nine-grid-hot-pot',
    zhName: '九宫格火锅',
    enName: 'Nine-Grid Chongqing Hot Pot',
    zhRegion: '重庆',
    enRegion: 'Chongqing',
    zhCategory: '火锅',
    enCategory: 'Hot pot',
    zhDescription: '金属格把同一锅麻辣红汤分成九个涮煮区域，方便摆放食材、掌握不同火候，也避免大家夹取时混在一起；九格并不代表九种锅底。',
    enDescription: 'A metal divider splits one pot of chile-red broth into nine cooking zones, helping diners organize ingredients and cooking times. The grid does not mean the pot contains nine different broths.',
    relatedCities: [
      { slug: 'chongqing', zhLabel: '重庆火锅', enLabel: 'Chongqing hot pot' }
    ]
  },
  {
    slug: 'morning-tea',
    zhName: '早茶',
    enName: 'Morning Tea · Yum Cha',
    zhRegion: '岭南与江淮多地',
    enRegion: 'Lingnan and parts of Jiangsu',
    zhCategory: '饮食场景',
    enCategory: 'Dining tradition',
    zhDescription: '早茶不是单独一道菜，而是围绕茶与点心展开的一餐。广式早茶常见虾饺、烧卖、肠粉和叉烧包，扬州早茶则有干丝、包点与汤面。',
    enDescription: 'Morning tea is a meal built around tea and small dishes rather than one recipe. Cantonese tables may hold shrimp dumplings, siu mai, rice rolls, and buns; Yangzhou adds tofu shreds, filled buns, and noodles.',
    relatedCities: [
      { slug: 'guangzhou', zhLabel: '广州早茶', enLabel: 'Guangzhou morning tea' },
      { slug: 'yangzhou', zhLabel: '扬州早茶', enLabel: 'Yangzhou morning tea' }
    ]
  },
  {
    slug: 'kaifeng-soup-dumplings',
    zhName: '灌汤包',
    enName: 'Kaifeng Soup Dumplings',
    zhRegion: '河南开封',
    enRegion: 'Kaifeng, Henan',
    zhCategory: '蒸点',
    enCategory: 'Dumplings',
    zhDescription: '薄皮包住肉馅与充足汤汁，蒸熟后提起如灯笼、放下似菊花。与小巧的江南小笼包相比，开封灌汤包通常个头更大、褶纹更醒目。',
    enDescription: 'A thin wrapper holds minced meat and plentiful broth, with prominent pleats gathered at the top. Kaifeng versions are generally larger than Jiangnan xiaolongbao, though both reward careful sipping.',
    relatedCities: []
  },
  {
    slug: 'mahua',
    zhName: '麻花',
    enName: 'Mahua · Fried Dough Twists',
    zhRegion: '多地风味',
    enRegion: 'Many regional styles',
    zhCategory: '炸面点',
    enCategory: 'Fried pastries',
    zhDescription: '面条状的面团拧成绳结后炸至酥脆，可甜可咸、可大可小。天津大麻花以酥脆香甜和夹馅见长，其他地方也有更轻巧的日常版本。',
    enDescription: 'Ropes of dough are twisted together and fried crisp, with sweet and savory versions in many sizes. Tianjin is known for large, crunchy, filled twists, while other regions favor lighter everyday styles.',
    relatedCities: []
  }
];
