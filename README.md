<div align="center"><a name="readme-top"></a>

[![Boot Vue][image-banner]][github-link]

# Boot Vue

A Vue 3 starter on Vite 8, with Tailwind CSS 4 and shadcn-vue.<br/>

**English** · [简体中文](./README.zh-CN.md) · [Live demo][demo-link] · [Feedback][github-issues-link]

<!-- SHIELD GROUP -->

[![Vue 3.5][vue-shield]][vue-link]
[![Vite 8][vite-shield]][vite-link]
[![TypeScript 6][typescript-shield]][typescript-link]
[![Tailwind CSS 4][tailwind-shield]][tailwind-link]<br/>
[![CI][ci-shield]][ci-link]
[![GitHub stars][github-stars-shield]][github-stars-link]
[![License][github-license-shield]][github-license-link]

</div>

<details>
<summary><kbd>Table of contents</kbd></summary>

- [✨ Features](#-features)
  - [Components you own](#components-you-own)
  - [Ready in a blink](#ready-in-a-blink)
  - [Light by day, dark by night](#light-by-day-dark-by-night)
  - [State that stays](#state-that-stays)
  - [Every language, one codebase](#every-language-one-codebase)
  - [No import lines](#no-import-lines)
  - [Punctuation, set right](#punctuation-set-right)
  - [Installs like an app](#installs-like-an-app)
  - [Ship it anywhere](#ship-it-anywhere)
- [🚀 Getting started](#-getting-started)
- [🛠️ Usage](#️-usage)
  - [Add components](#add-components)
  - [Docker production build](#docker-production-build)
- [📁 Project structure](#-project-structure)
- [🤝 Feedback](#-feedback)

<br/>

</details>

## ✨ Features

![Components you own][image-feature-components]

### Components you own

[shadcn-vue][shadcn-vue-link] copies accessible components built on [Reka UI][reka-ui-link] into `src/components/ui`. They are styled with Tailwind CSS 4 and the theme variables in `src/styles/main.css`, and the code is yours to change. The template comes with button, card, dropdown menu, tooltip, avatar, switch, slider and label, and the CLI adds the rest, see [Add components](#add-components).

<div align="right">

[![Back to top][back-to-top]](#readme-top)

</div>

![Ready in a blink][image-feature-dev-server]

### Ready in a blink

Vite 8 builds with Rolldown. `pnpm dev` opens the app on <http://localhost:8888>, with [Vue DevTools][vue-devtools-link] at `/__devtools__/`, [Inspect][vite-inspect-link] at `/__inspect/` to see how each module is transformed, and an [MCP server][vite-mcp-link] at `/__mcp/sse` for AI assistants.

<div align="right">

[![Back to top][back-to-top]](#readme-top)

</div>

![Light by day, dark by night][image-feature-dark-mode]

### Light by day, dark by night

The site bar switches between light, dark and the system theme. VueUse's `useColorMode` stores the choice, a short script in `index.html` applies it before the first paint so a dark page never flashes white, and the new theme spreads from the click with a view transition (`src/composables/theme.ts`).

<div align="right">

[![Back to top][back-to-top]](#readme-top)

</div>

![State that stays][image-feature-state]

### State that stays

[Pinia][pinia-link] stores live in `src/store` and are imported automatically. The tile on the home page and the counter page both call `counter()`, so they share one count.

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

[![Back to top][back-to-top]](#readme-top)

</div>

![Every language, one codebase][image-feature-i18n]

### Every language, one codebase

Messages live in `src/locales/<language>.json` and are compiled at build time by [@intlify/unplugin-vue-i18n][unplugin-vue-i18n-link]. To add a language, add a file: the language menu lists every file in the folder, remembers the visitor's choice and sets the `lang` of the page.

<div align="right">

[![Back to top][back-to-top]](#readme-top)

</div>

![No import lines][image-feature-auto-imports]

### No import lines

[unplugin-auto-import][auto-import-link] brings in the APIs of Vue, Vue Router, vue-i18n and VueUse, and everything exported from `src/composables` and `src/store`. [unplugin-vue-components][vue-components-link] registers the components in `src/components`, and [unplugin-icons][icons-link] turns names such as `<IMdiGithub />` into icons from Iconify. The type declarations are generated into `types/`.

<div align="right">

[![Back to top][back-to-top]](#readme-top)

</div>

![Punctuation, set right][image-feature-typography]

### Punctuation, set right

Chinese and Latin text share the code points of quotation marks, dashes and ellipses, so a Latin font in front draws them narrow and in Latin style. The font stack in `src/styles/main.css` puts a `Punctuation Chinese` face first. It covers only these marks and takes them from PingFang SC, Noto Sans CJK SC or Microsoft YaHei, while Latin text keeps the system UI font.

<div align="right">

[![Back to top][back-to-top]](#readme-top)

</div>

![Installs like an app][image-feature-pwa]

### Installs like an app

[vite-plugin-pwa][pwa-link] generates the web app manifest and a Workbox service worker that updates itself. After the first visit, a production build keeps working offline. The service worker is only registered in production builds.

<div align="right">

[![Back to top][back-to-top]](#readme-top)

</div>

![Ship it anywhere][image-feature-deploy]

### Ship it anywhere

[![Deploy to Netlify][netlify-button]][netlify-deploy-link]
[![Deploy with Vercel][vercel-button]][vercel-deploy-link]

`netlify.toml` sets the build command and Node 24 for Netlify. Vercel finds the Vite settings by itself. The router uses hash history, so the app needs no rewrite rules on any static host. For a container, see [Docker production build](#docker-production-build).

<div align="right">

[![Back to top][back-to-top]](#readme-top)

</div>

## 🚀 Getting started

> [!NOTE]
> Boot Vue needs Node.js `^22.22.2`, `^24.15.0` or `>=26.0.0`. The `packageManager` field pins pnpm 12.11.2, and pnpm 10.34.5 or later switches to it by itself; with an older pnpm, update it first with `npm i -g pnpm`.

[Create a repository from this template][template-link], or copy it with degit:

```bash
npx degit kirklin/boot-vue my-app
cd my-app
pnpm i
pnpm dev
```

<div align="right">

[![Back to top][back-to-top]](#readme-top)

</div>

## 🛠️ Usage

| Command          | What it does                                            |
| ---------------- | ------------------------------------------------------- |
| `pnpm dev`       | Starts the dev server on <http://localhost:8888>        |
| `pnpm build`     | Builds the app into `dist`                              |
| `pnpm preview`   | Serves the build locally                                |
| `pnpm test`      | Runs the tests with Vitest                              |
| `pnpm lint`      | Lints with [@kirklin/eslint-config][eslint-config-link] |
| `pnpm lint:fix`  | Lints and fixes what can be fixed                       |
| `pnpm typecheck` | Checks the types with vue-tsc                           |

Each commit runs ESLint on the staged files and checks the message against [Conventional Commits][conventional-commits-link].

### Add components

Add [shadcn-vue components][shadcn-vue-components-link] with the CLI the template installs, then format the new files in the project's style:

```bash
pnpm shadcn-vue add dialog
pnpm lint:fix
```

When a component builds on one you already have, such as dialog on button, the CLI asks before it overwrites your copy.

### Docker production build

Build the image from the project root:

```bash
docker buildx build . -t boot-vue:latest
```

Run it and map a port with `-p`:

```bash
docker run --rm -it -p 8080:80 boot-vue:latest
```

The app is then served by nginx on <http://localhost:8080>.

<div align="right">

[![Back to top][back-to-top]](#readme-top)

</div>

## 📁 Project structure

| Path                     | What it holds                                             |
| ------------------------ | --------------------------------------------------------- |
| `src/components/ui`      | shadcn-vue components, added by its CLI                   |
| `src/components/landing` | The tiles of the home page                                |
| `src/composables`        | Composables, imported automatically                       |
| `src/layouts`            | The site bar with its menu, and the footer                |
| `src/locales`            | One JSON file of messages for each language               |
| `src/pages`              | Pages, routed in `src/router/routes/modules`              |
| `src/store`              | Pinia stores, imported automatically                      |
| `src/styles/main.css`    | Tailwind CSS entry, theme variables and the font stack    |
| `types`                  | Generated declarations of the auto imports and components |
| `public`                 | Files served as they are, such as the icons of the PWA    |

For the editor, [WebStorm][webstorm-link] works out of the box, and VS Code needs the [Vue - Official][vue-official-link] extension.

<div align="right">

[![Back to top][back-to-top]](#readme-top)

</div>

## 🤝 Feedback

If you have any questions or issues, please report them on [GitHub Issues][github-issues-link].

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
