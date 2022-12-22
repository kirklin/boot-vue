<div align='center'>
<h1>Vite-Boot </h1>
<img src='README.assets/logo.png' alt='Vite-Boot - Opinionated Vite Starter Template' width='344'/>
</div>

<p align='center'>
使用Vite-Boot快速地创建 Web 应用
</p>

## 特性

- ⚡  [Vue 3](https://github.com/vuejs/vue-next), [Vite 2](https://github.com/vitejs/vite), [pnpm](https://pnpm.js.org/) - 为速度而生
- 💪 [Typescript](https://www.typescriptlang.org/) - 强大的类型检查
- 🔥 使用 [新的 `<script setup>` 语法](https://github.com/vuejs/rfcs/pull/227)
- 🤙🏻 默认开启 [响应性语法糖](https://vuejs.org/guide/extras/reactivity-transform.html)
- 📦 [组件自动化加载](./src/components)
- 📥 [API 自动加载](https://github.com/antfu/unplugin-auto-import) - 直接使用 Composition API 无需引入
- 💡 [Vue Router v4](https://router.vuejs.org/zh/) - Vue 路由系统
- 🎨 [Tailwind CSS v3](https://tailwindcss.com/docs/configuration) - 快速建立现代网站，而不必离开 HTML。
- 🎉 [NProgress](https://github.com/rstacruz/nprogress) - 页面加载进度反馈
- 🍍 [使用 Pinia 的状态管理](https://pinia.esm.dev/)
- 🌼 [Daisy](https://daisyui.com/) - 开源的 Tailwind CSS 组件库
- 📜 [中文字体font-family常用预设]() 
- 🌍 [I18n 国际化开箱即用](./src/locales)
- ☁️ 零配置部署 Netlify

### 集成 Tailwind 插件:

- [tailwindcss/forms](https://github.com/tailwindlabs/tailwindcss-forms)
- [tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin)
- [tailwindcss/line-clamp](https://github.com/tailwindlabs/tailwindcss-line-clamp)
- [tailwindcss/aspect-ratio](https://github.com/tailwindlabs/tailwindcss-aspect-ratio)

### 编码风格

- [@kirklin/eslint-config](https://github.com/kirklin/eslint-config)

### 推荐的 IDE 设置

- [VSCode](https://code.visualstudio.com/)
- [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

### 性能
<img src='README.assets/ViteBoot-Lighthouse.png' alt='Vite-Boot Outstanding performance' width='1851'/>


## 项目结构

```
# vite-boot
├── LICENSE
├── README.assets
│   └── vite-vue-tailwind.png
├── README.md
├── README.zh-CN.md
├── index.html
├── node_modules
├── package.json
├── pnpm-lock.yaml
├── postcss.config.js        # tailwind 相关配置
├── public
│   └── favicon.ico
├── src
│   ├── App.vue              # 入口页面
│   ├── api                  # api 接口
│   ├── assets               # 静态资源
│   │   └── logo.png
│   ├── components           # 全局组件
│   │   └── Navbar.vue       # 顶部导航栏组件
│   ├── env.d.ts
│   ├── main.ts              # 入口文件
│   ├── router               # Vue router
│   │   └── index.ts
│   ├── settings.ts          # global configuration
│   ├── store                # Pinia 状态管理
│   │   ├── counter.ts
│   │   └── index.ts
│   ├── styles               # 全局样式
│   │   ├── main.scss
│   │   ├── nprogress.scss   # nprogress 样式（顶部加载样式）
│   │   ├── tailwind.css     # tailwind 样式
│   │   └── variables.scss   # SCSS全局变量
│   ├── utils                # 项目公共方法
│   │   └── darkMode.ts
│   └── views                # 所有页面
│       └── Index.vue        # APP首页
├── tailwind.config.js       # tailwind 配置文件
├── tsconfig.json            # TS 编译配置
└── vite.config.ts           # Vite 配置文件

```

## 快来试试吧！！

### GitHub 模板

[使用这个模板创建仓库](https://github.com/kirklin/vite-boot/generate).

### 克隆到本地

```bash
npx degit kirklin/vite-boot my-vite-app
cd my-vite-app
pnpm i
```

## 使用

### 开发

只需要执行以下命令就可以在 http://localhost:8888 中看到

```bash
pnpm run dev
```

### 构建

构建该应用只需要执行以下命令

```bash
pnpm run build
```

然后你会看到用于发布的 `dist` 文件夹被生成。


### 部署到 Netlify

前往 [Netlify](https://app.netlify.com/start) 并选择你的仓库, 一路 `OK` 下去，稍等一下后，你的应用将被创建.

### Docker Production Build

首先，在项目的根目录下打开终端，构建vite-boot镜像。

```bash
docker buildx build . -t viteboot:latest
```

运行镜像，用 "-p" 指定端口映射。

```bash
docker run --rm -it -p 8080:80 viteboot:latest
```

