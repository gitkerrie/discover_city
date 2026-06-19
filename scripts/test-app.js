const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
const dataSource = fs.readFileSync(path.join(root, 'js', 'data.js'), 'utf8');
const appSource = fs.readFileSync(path.join(root, 'js', 'app.js'), 'utf8');

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function createStorage(initialEntries = []) {
  const values = new Map(initialEntries);

  return {
    getItem(key) {
      return values.has(key) ? values.get(key) : null;
    },
    removeItem(key) {
      values.delete(key);
    },
    setItem(key, value) {
      values.set(key, String(value));
    }
  };
}

function createApp(storage) {
  const context = {
    console,
    document: { addEventListener() {} },
    localStorage: storage,
    window: {}
  };

  vm.createContext(context);
  vm.runInContext(
    `${dataSource}\n${appSource}\nglobalThis.__FoodMapApp = FoodMapApp; globalThis.__foodCitiesData = foodCitiesData; globalThis.__translations = UI_TRANSLATIONS;`,
    context
  );

  const app = Object.create(context.__FoodMapApp.prototype);
  app.cities = context.__foodCitiesData;
  app.language = app.loadLanguage();
  app.translations = context.__translations;
  return app;
}

const v2Storage = createStorage([
  ['foodFavoritesV2', JSON.stringify(['wuhan', 'wuhan', 'missing-city'])]
]);
const v2App = createApp(v2Storage);
assert(JSON.stringify(v2App.loadFavorites()) === JSON.stringify(['wuhan']), '新版收藏去重或过滤失败');

const legacyStorage = createStorage([
  [
    'travelFavorites',
    JSON.stringify([
      { id: 1, name: '潮州' },
      { id: 999, name: '武汉' },
      { id: 5, name: '扬州' },
      { id: 34, name: '已移除城市' },
      { id: 1, name: '潮州' }
    ])
  ]
]);
const legacyApp = createApp(legacyStorage);
const migrated = legacyApp.loadFavorites();

assert(
  JSON.stringify(migrated) === JSON.stringify(['chaozhou', 'wuhan', 'yangzhou']),
  `旧收藏迁移结果不正确：${JSON.stringify(migrated)}`
);
assert(legacyStorage.getItem('travelFavorites') === null, '迁移完成后未清理旧收藏键');
assert(legacyStorage.getItem('foodFavoritesV2') === JSON.stringify(migrated), '迁移结果未写入新版收藏键');

const searchStorage = createStorage();
const searchApp = createApp(searchStorage);
assert(searchApp.searchCities('热干面').map(city => city.slug).join(',') === 'wuhan', '菜名搜索未命中武汉');
assert(searchApp.searchCities('广西').map(city => city.slug).join(',') === 'liuzhou', '省份搜索未命中柳州');
assert(searchApp.searchCities('宝藏').length === 6, '分组搜索结果数量不正确');
assert(searchApp.searchCities('hot dry noodles').map(city => city.slug).join(',') === 'wuhan', '英文菜名搜索未命中武汉');
assert(searchApp.searchCities('Guangxi').map(city => city.slug).join(',') === 'liuzhou', '英文省份搜索未命中柳州');
assert(searchApp.searchCities('hidden gems').length === 6, '英文分组搜索结果数量不正确');
assert(searchApp.language === 'en', '首次访问未默认使用英文');

const zhApp = createApp(createStorage([['foodMapLanguage', 'zh']]));
assert(zhApp.language === 'zh', '未恢复已保存的中文偏好');
assert(zhApp.getCityContent(zhApp.cities[0]).name === '成都', '中文城市内容读取失败');
assert(searchApp.getCityContent(searchApp.cities[0]).name === 'Chengdu', '英文城市内容读取失败');

const englishKeys = Object.keys(searchApp.translations.en).sort();
const chineseKeys = Object.keys(searchApp.translations.zh).sort();
assert(JSON.stringify(englishKeys) === JSON.stringify(chineseKeys), '中英文界面文案键不一致');

console.log('应用逻辑测试通过：双语切换、收藏迁移和城市美食搜索正常。');
