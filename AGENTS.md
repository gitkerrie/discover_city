# 仓库指南

## 项目结构与模块组织

本仓库是一个静态 Web 应用，用交互式中国地图展示旅行目的地。

- `index.html` 是主页面，负责加载样式、脚本和第三方 CDN 资源。
- `css/style.css` 包含应用样式和响应式布局规则。
- `js/app.js` 包含主要界面逻辑，包括地图、搜索、筛选、收藏和详情弹窗。
- `js/data.js` 存放目的地数据。
- `README.md` 记录应用说明；当启动方式或使用方式变化时应同步更新。

当前仓库没有 `tests/`、构建产物目录或本地资源目录。

## 构建、测试与本地开发命令

请在仓库根目录运行命令。

```bash
npm run dev
npm start
```

以上两个命令都会通过 `python -m http.server 8000` 启动本地静态服务器，访问地址为 `http://localhost:8000`。

```bash
python -m http.server 8000
```

如果无法使用 npm，可直接运行此命令。应用依赖 Leaflet、Font Awesome 等浏览器端 CDN 资源，完整渲染需要网络访问。

## 编码风格与命名约定

使用原生 HTML、CSS 和 JavaScript。保持现有两空格缩进，并延续 `js/app.js` 中基于 class 的 JavaScript 写法。

JavaScript 变量、方法和 DOM ID 使用描述性的 camelCase，例如 `currentCategory`、`searchResults`、`favoritesBtn`。CSS 类名使用 kebab-case，例如 `search-container`、`favorites-btn`。

目的地数据变更应优先限制在 `js/data.js`；只有界面行为需要调整时才修改应用逻辑。

## 测试指南

当前未配置自动化测试框架。修改后请启动本地服务器，并在浏览器中手动验证。

至少检查：

- 地图可以初始化，瓦片可以加载。
- 分类筛选会更新可见目的地。
- 搜索结果和清空按钮正常工作。
- 目的地详情卡片可以打开和关闭。
- 收藏内容在页面刷新后仍能保留。

如果后续添加测试，请在此处记录测试框架和运行命令。

## 提交与 Pull Request 指南

当前环境无法读取 Git 历史。提交信息请使用简洁的祈使句，例如 `Add destination search fallback` 或 `Fix favorites count update`。

Pull Request 应包含简短说明、测试记录，以及界面变更对应的截图或录屏。有关联 issue 时请链接；如新增外部服务、CDN 依赖或配置要求，也需要明确说明。

## 安全与配置提示

不要提交 API Key 或私有 Token。如果后续引入需要凭据的地图服务，请从本地配置读取密钥，并只记录配置步骤，不暴露密钥内容。
