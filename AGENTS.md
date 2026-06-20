# 仓库指南

## 项目结构与模块组织

本仓库是一个原生 HTML、CSS 和 JavaScript 实现的中国美食地图。

- `index.html` 定义顶栏、地图、城市详情抽屉和收藏弹窗。
- `css/style.css` 包含桌面端与移动端响应式样式。
- `js/app.js` 管理 Leaflet 地图、搜索、深链接、收藏和分享。
- `js/data.js` 存放 12 座美食城市的结构化数据。
- `assets/cities/` 存放本地 WebP 主图和 `SOURCES.md` 来源说明。
- `city/`、`zh/city/` 与 `guides/` 是由脚本生成的 SEO 落地页。
- `marketing/` 存放海外推广卡片、文案、UTM 链接和首月日历。
- `scripts/validate-data.js` 校验数据及图片完整性。

## 构建、测试与本地开发命令

在仓库根目录运行：

```bash
npm run dev
npm start
npm run generate
npm run check
```

前两个命令通过 `node scripts/server.js` 启动静态服务器，访问 `http://localhost:8000`。`npm run generate` 根据城市数据更新落地页、站点地图和营销素材。`npm run check` 检查语法、数据及生成文件是否同步。

## 编码风格与命名约定

保持两空格缩进。JavaScript 变量、方法和 DOM ID 使用描述性的 camelCase，例如 `favoriteSlugs`、`selectCity`；CSS 类名使用 kebab-case，例如 `city-drawer`。

修改城市内容时优先编辑 `js/data.js`，并同步维护中文原稿与 `foodCitiesEnglish` 英文内容。每座城市必须拥有唯一的英文 `slug`、两种语言各 3 个风味标签、3-5 道对应的招牌美食和本地 WebP 主图。图片变更需同步更新 `assets/cities/SOURCES.md`。

## 测试指南

提交前运行 `npm run check`，再通过浏览器验证中英文切换、两种语言的城市与菜名搜索、地图点位、详情抽屉、分享深链接、收藏持久化及旧收藏迁移。至少检查一个桌面视口和一个手机视口，并确认图片失败状态和 `Esc` 关闭操作正常。

## 提交与 Pull Request 指南

提交信息使用简洁的祈使句或 Conventional Commits，例如 `feat: add food city drawer`、`fix: restore shared city link`。Pull Request 应说明改动、测试记录和关联 issue；界面变更需提供桌面端与移动端截图。

## 安全与配置提示

不要提交 API Key 或私有 Token。新增外部资源前确认许可和稳定性；地图或图片来源变化时同步更新说明文档。
