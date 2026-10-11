<div align="center"><a name="readme-top"></a>

[![Boot Vue][image-banner]][github-link]

# Boot Vue

基于 Vite 8 的 Vue 3 模板，带有 Tailwind CSS 4 和 shadcn-vue。<br/>

[English](./README.md) · **简体中文** · [在线演示][demo-link] · [问题反馈][github-issues-link]

<!-- SHIELD GROUP -->

[![Vue 3.5][vue-shield]][vue-link]
[![Vite 8][vite-shield]][vite-link]
[![TypeScript 6][typescript-shield]][typescript-link]
[![Tailwind CSS 4][tailwind-shield]][tailwind-link]<br/>
[![CI][ci-shield]][ci-link]
[![GitHub 星标][github-stars-shield]][github-stars-link]
[![许可证][github-license-shield]][github-license-link]

</div>

<details>
<summary><kbd>目录</kbd></summary>

- [✨ 特性](#-特性)
  - [组件代码，归你所有](#组件代码归你所有)
  - [眨眼间就绪](#眨眼间就绪)
  - [白天浅色，夜晚深色](#白天浅色夜晚深色)
  - [状态，一直都在](#状态一直都在)
  - [多种语言，一套代码](#多种语言一套代码)
  - [不用写 import](#不用写-import)
  - [中文标点，显示正确](#中文标点显示正确)
  - [像应用一样安装](#像应用一样安装)
  - [部署到任何地方](#部署到任何地方)
- [🚀 快速开始](#-快速开始)
- [🛠️ 使用](#️-使用)
  - [添加组件](#添加组件)
  - [Docker 生产构建](#docker-生产构建)
- [📁 项目结构](#-项目结构)
- [🤝 问题反馈](#-问题反馈)

<br/>

</details>

## ✨ 特性

![组件代码，归你所有][image-feature-components]

### 组件代码，归你所有

[shadcn-vue][shadcn-vue-link] 把基于 [Reka UI][reka-ui-link] 的无障碍组件复制到 `src/components/ui`。组件的样式由 Tailwind CSS 4 和 `src/styles/main.css` 里的主题变量决定，代码可以随意修改。模板自带按钮、卡片、下拉菜单、提示、头像、开关、滑块和标签，其余组件用命令行工具添加，见[添加组件](#添加组件)。

<div align="right">

[![返回顶部][back-to-top]](#readme-top)

</div>

![眨眼间就绪][image-feature-dev-server]

### 眨眼间就绪

Vite 8 使用 Rolldown 构建。`pnpm dev` 在 <http://localhost:8888> 打开应用，同时提供 `/__devtools__/` 上的 [Vue DevTools][vue-devtools-link]、`/__inspect/` 上查看每个模块转换过程的 [Inspect][vite-inspect-link]，以及 `/__mcp/sse` 上供 AI 助手使用的 [MCP 服务][vite-mcp-link]。

<div align="right">

[![返回顶部][back-to-top]](#readme-top)

</div>

![白天浅色，夜晚深色][image-feature-dark-mode]

### 白天浅色，夜晚深色

顶栏可以在浅色、深色和跟随系统之间切换。VueUse 的 `useColorMode` 保存这个选择，`index.html` 里的一小段脚本在首次绘制前应用它，深色页面不会先闪一下白色；切换时，新主题通过视图过渡从点击的位置展开（`src/composables/theme.ts`）。

<div align="right">

[![返回顶部][back-to-top]](#readme-top)

</div>

![状态，一直都在][image-feature-state]

### 状态，一直都在

[Pinia][pinia-link] 的状态仓库放在 `src/store`，会自动导入。首页的 Pinia 演示和计数器页面都调用 `counter()`，共用同一个计数。

```ts
// src/store/counter.ts
export const counter = defineStore("counter", () => {
  const count = ref<number>(1);
  function increment() {
    count.value++;
  }

  return { count, increment };
});
```

<div align="right">

[![返回顶部][back-to-top]](#readme-top)

</div>

![多种语言，一套代码][image-feature-i18n]

### 多种语言，一套代码

翻译文本放在 `src/locales/<语言>.json`，由 [@intlify/unplugin-vue-i18n][unplugin-vue-i18n-link] 在构建时预先编译。添加一种语言只需要添加一个文件：语言菜单会列出这个文件夹里的全部文件，记住访客的选择，并设置页面的 `lang`。

<div align="right">

[![返回顶部][back-to-top]](#readme-top)

</div>

![不用写 import][image-feature-auto-imports]

### 不用写 import

[unplugin-auto-import][auto-import-link] 自动导入 Vue、Vue Router、vue-i18n 和 VueUse 的 API，以及 `src/composables` 和 `src/store` 导出的全部内容。[unplugin-vue-components][vue-components-link] 注册 `src/components` 里的组件，[unplugin-icons][icons-link] 把 `<IMdiGithub />` 这样的名字变成 Iconify 的图标。类型声明生成在 `types/` 目录。

<div align="right">

[![返回顶部][back-to-top]](#readme-top)

</div>

![中文标点，显示正确][image-feature-typography]

### 中文标点，显示正确

中文和西文共用引号、破折号和省略号的码位，西文字体排在前面时，这些标点会按西文的样子显示，又窄又挤。`src/styles/main.css` 的字体设置把 `Punctuation Chinese` 字体放在最前面，这个字体只包含这些标点，字形取自苹方、Noto Sans CJK SC 或微软雅黑，西文仍然使用系统界面字体。

<div align="right">

[![返回顶部][back-to-top]](#readme-top)

</div>

![像应用一样安装][image-feature-pwa]

### 像应用一样安装

[vite-plugin-pwa][pwa-link] 生成应用清单和自动更新的 Workbox Service Worker。访问过一次之后，生产构建的网站在离线时也能使用。Service Worker 只在生产构建中注册。

<div align="right">

[![返回顶部][back-to-top]](#readme-top)

</div>

![部署到任何地方][image-feature-deploy]

### 部署到任何地方

[![部署到 Netlify][netlify-button]][netlify-deploy-link]
[![部署到 Vercel][vercel-button]][vercel-deploy-link]

`netlify.toml` 为 Netlify 设置了构建命令和 Node 24，Vercel 会自动识别 Vite 的设置。路由使用 hash 模式，部署到任何静态托管都不需要配置重写规则。容器部署见 [Docker 生产构建](#docker-生产构建)。

<div align="right">

[![返回顶部][back-to-top]](#readme-top)

</div>

## 🚀 快速开始

> [!NOTE]
> Boot Vue 需要 Node.js `^22.22.2`、`^24.15.0` 或 `>=26.0.0`。`packageManager` 字段固定了 pnpm 12.11.2，pnpm 10.34.5 及以上版本会自动切换过去；pnpm 版本更早的话，先运行 `npm i -g pnpm` 升级。

[用这个模板创建仓库][template-link]，或者用 degit 复制：

```bash
npx degit kirklin/boot-vue my-app
cd my-app
pnpm i
pnpm dev
```

<div align="right">

[![返回顶部][back-to-top]](#readme-top)

</div>

## 🛠️ 使用

| 命令             | 作用                                                     |
| ---------------- | -------------------------------------------------------- |
| `pnpm dev`       | 在 <http://localhost:8888> 启动开发服务器                |
| `pnpm build`     | 把应用构建到 `dist`                                      |
| `pnpm preview`   | 在本地预览构建结果                                       |
| `pnpm test`      | 用 Vitest 运行测试                                       |
| `pnpm lint`      | 用 [@kirklin/eslint-config][eslint-config-link] 检查代码 |
| `pnpm lint:fix`  | 检查代码，并修复能自动修复的问题                         |
| `pnpm typecheck` | 用 vue-tsc 检查类型                                      |

每次提交都会对暂存的文件运行 ESLint，并按照 [Conventional Commits][conventional-commits-link] 检查提交信息。

### 添加组件

用模板安装好的命令行工具添加 [shadcn-vue 组件][shadcn-vue-components-link]，再把新文件格式化成项目的代码风格：

```bash
pnpm shadcn-vue add dialog
pnpm lint:fix
```

如果新组件依赖已有的组件，例如对话框依赖按钮，命令行工具会在覆盖你的版本之前先询问。

### Docker 生产构建

在项目根目录构建镜像：

```bash
docker buildx build . -t boot-vue:latest
```

运行镜像，用 `-p` 映射端口：

```bash
docker run --rm -it -p 8080:80 boot-vue:latest
```

之后由 nginx 在 <http://localhost:8080> 提供这个应用。

<div align="right">

[![返回顶部][back-to-top]](#readme-top)

</div>

## 📁 项目结构

| 路径                     | 内容                                       |
| ------------------------ | ------------------------------------------ |
| `src/components/ui`      | shadcn-vue 组件，由它的命令行工具添加      |
| `src/components/landing` | 首页的功能展示                             |
| `src/composables`        | 组合式函数，会自动导入                     |
| `src/layouts`            | 带菜单的顶栏和页脚                         |
| `src/locales`            | 每种语言一个 JSON 翻译文件                 |
| `src/pages`              | 页面，路由写在 `src/router/routes/modules` |
| `src/store`              | Pinia 状态仓库，会自动导入                 |
| `src/styles/main.css`    | Tailwind CSS 入口、主题变量和字体设置      |
| `types`                  | 自动导入和组件注册生成的类型声明           |
| `public`                 | 按原样提供的文件，例如 PWA 的图标          |

编辑器方面，[WebStorm][webstorm-link] 打开即可使用，VS Code 需要安装 [Vue - Official][vue-official-link] 扩展。

<div align="right">

[![返回顶部][back-to-top]](#readme-top)

</div>

## 🤝 问题反馈

如果有任何问题，请在 [GitHub Issues][github-issues-link] 反馈。

---

[MIT](./LICENSE) License &copy; 2023-PRESENT [Kirk Lin](https://github.com/kirklin)

<!-- LINK GROUP -->

[auto-import-link]: https://github.com/unplugin/unplugin-auto-import
[back-to-top]: https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square
[ci-link]: https://github.com/kirklin/boot-vue/actions/workflows/ci.yml
[ci-shield]: https://img.shields.io/github/actions/workflow/status/kirklin/boot-vue/ci.yml?branch=master&label=ci&labelColor=black&style=flat-square
[conventional-commits-link]: https://www.conventionalcommits.org
[demo-link]: https://boot-vue.vercel.app
[eslint-config-link]: https://github.com/kirklin/eslint-config
[github-issues-link]: https://github.com/kirklin/boot-vue/issues
[github-license-link]: https://github.com/kirklin/boot-vue/blob/master/LICENSE
[github-license-shield]: https://img.shields.io/github/license/kirklin/boot-vue?color=white&labelColor=black&style=flat-square
[github-link]: https://github.com/kirklin/boot-vue
[github-stars-link]: https://github.com/kirklin/boot-vue/stargazers
[github-stars-shield]: https://img.shields.io/github/stars/kirklin/boot-vue?color=ffcb47&labelColor=black&style=flat-square
[icons-link]: https://github.com/unplugin/unplugin-icons
[image-banner]: ./README.assets/banner.png
[image-feature-auto-imports]: ./README.assets/feature-auto-imports.png
[image-feature-components]: ./README.assets/feature-components.png
[image-feature-dark-mode]: ./README.assets/feature-dark-mode.png
[image-feature-deploy]: ./README.assets/feature-deploy.png
[image-feature-dev-server]: ./README.assets/feature-dev-server.png
[image-feature-i18n]: ./README.assets/feature-i18n.png
[image-feature-pwa]: ./README.assets/feature-pwa.png
[image-feature-state]: ./README.assets/feature-state.png
[image-feature-typography]: ./README.assets/feature-typography.png
[netlify-button]: https://www.netlify.com/img/deploy/button.svg
[netlify-deploy-link]: https://app.netlify.com/start/deploy?repository=https://github.com/kirklin/boot-vue
[pinia-link]: https://pinia.vuejs.org
[pwa-link]: https://vite-pwa-org.netlify.app
[reka-ui-link]: https://reka-ui.com
[shadcn-vue-components-link]: https://www.shadcn-vue.com/docs/components
[shadcn-vue-link]: https://www.shadcn-vue.com
[tailwind-link]: https://tailwindcss.com
[tailwind-shield]: https://img.shields.io/badge/tailwind_css-4-38bdf8?labelColor=black&logo=tailwindcss&logoColor=white&style=flat-square
[template-link]: https://github.com/kirklin/boot-vue/generate
[typescript-link]: https://www.typescriptlang.org
[typescript-shield]: https://img.shields.io/badge/typescript-6-3178c6?labelColor=black&logo=typescript&logoColor=white&style=flat-square
[unplugin-vue-i18n-link]: https://github.com/intlify/bundle-tools/tree/main/packages/unplugin-vue-i18n
[vercel-button]: https://vercel.com/button
[vercel-deploy-link]: https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fkirklin%2Fboot-vue
[vite-inspect-link]: https://github.com/antfu-collective/vite-plugin-inspect
[vite-link]: https://vite.dev
[vite-mcp-link]: https://github.com/antfu/nuxt-mcp/tree/main/packages/vite-plugin-mcp
[vite-shield]: https://img.shields.io/badge/vite-8-646cff?labelColor=black&logo=vite&logoColor=white&style=flat-square
[vue-components-link]: https://github.com/unplugin/unplugin-vue-components
[vue-devtools-link]: https://devtools.vuejs.org
[vue-link]: https://vuejs.org
[vue-official-link]: https://marketplace.visualstudio.com/items?itemName=Vue.volar
[vue-shield]: https://img.shields.io/badge/vue-3.5-42b883?labelColor=black&logo=vuedotjs&logoColor=white&style=flat-square
[webstorm-link]: https://www.jetbrains.com/webstorm/
