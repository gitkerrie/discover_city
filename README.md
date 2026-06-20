# 寻味中国

一张专注中国城市风味的互动地图。首发收录 12 座美食城市，用户可以按城市或招牌美食搜索、查看详情、收藏想吃清单，并分享可直接打开的城市指南。界面默认英文，可切换中文。

## 本地运行

```bash
npm run generate
npm run dev
```

访问 `http://localhost:8000`。地图入口位于 `/`，英文城市页使用 `/city/chengdu/`，中文城市页使用 `/zh/city/chengdu/`。

## 校验

```bash
npm run check
```

该命令检查 JavaScript 语法、城市数据、双语内容、图片、城市落地页、SEO 元数据、站点地图、UTM 链接和营销卡片。

## 项目结构

```text
.
├── index.html              # 互动地图入口
├── css/                    # 地图与内容页样式
├── js/                     # 地图交互、城市数据和内容页行为
├── city/                   # 生成的英文城市页
├── zh/                     # 生成的中文目录与城市页
├── guides/                 # 生成的英文主题指南
├── marketing/              # 海外推广素材与首月日历
├── assets/cities/          # 城市主图与来源说明
└── scripts/                # 静态服务器、生成器与校验脚本
```

城市内容以 `js/data.js` 为唯一数据源。修改后运行 `npm run generate`，不要直接编辑生成页面。收藏与语言偏好保存在浏览器 `localStorage` 中，无需注册。

生产地址为 [mitaste.com](https://mitaste.com)。图片许可与来源见 `assets/cities/SOURCES.md`。
