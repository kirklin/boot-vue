<div align='center'>
<h1>Boot-Vue </h1>
<img src='README.assets/logo.png' alt='Boot-Vue - Opinionated Vite Starter Template' width='344'/>
</div>

<p align='center'>
Mocking up web app with <b>Boot-Vue </b><sup><em>(speed)</em></sup><br>
</p>

<div align='center'>
<b>English</b> | <a href="README.zh-CN.md">简体中文</a>
</div>

## Features

- ⚡ [Lightning fast](https://github.com/kirklin/boot-vue#readme): Built with Vue 3, Vite, and pnpm 🔥
- 💪 [Strongly typed](https://www.typescriptlang.org/): Uses TypeScript 💻
- 🔥 [Latest syntax](https://github.com/vuejs/rfcs/pull/227): Uses the new <script setup> syntax 🆕
- 📦 [Components auto importing](./src/components): Automatically imports components 🚚
- 📥 [APIs auto importing](https://github.com/antfu/unplugin-auto-import): Uses unplugin-auto-import to directly import Composition API and others 📨
- 🎨 [Tailwind CSS](https://tailwindcss.com/) - The utility-first CSS framework, set up with its official Vite plugin
- 🧩 [shadcn-vue](https://www.shadcn-vue.com/) - Accessible components built on Reka UI, added to `src/components/ui` so the code is yours to change
- 🌓 [Dark mode](./src/layouts/Navbar/components/ThemeChange): Light, dark, or follow the system, revealed with a circular view transition 🌗
- 💡 [Official router](https://router.vuejs.org/): Uses Vue Router v5 🛣️
- 🎉 [Loading feedback](https://github.com/rstacruz/nprogress): Uses NProgress to provide page loading progress feedback 🔄
- 🍍 [State management](https://pinia.vuejs.org/): Uses Pinia for state management 🗃️
- 📜 [Chinese font stack](./src/styles/main.css): Chinese-first font family with Chinese punctuation glyphs 🇨🇳
- 🌍 [I18n ready](./src/locales): Ready for internationalization with locales 🌎
- ☁️ [Netlify ready](https://www.netlify.com/): Zero-config deployment on Netlify ☁️

### Coding Style

- [@kirklin/eslint-config](https://github.com/kirklin/eslint-config)

### Recommended IDE Setup

- 🌪️ [WebStorm](https://www.jetbrains.com/webstorm/)
- 💻 [VSCode](https://code.visualstudio.com/)
- 💡 [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

### Performance

<img src='README.assets/BootVue-Lighthouse.png' alt='Boot-Vue Outstanding performance' width='1851'/>

## directory

```
# boot-vue
├─.github                                # Stores GitHub related configuration files.
│  ├─ISSUE_TEMPLATE                       # GitHub Issue templates
│  └─workflows                            # GitHub Actions related configuration files
├─.husky                                  # Stores Git Hooks related configuration files
│  └─_                                    # Stores Git Hooks execution scripts
├─.vscode                                 # Stores VS Code related configuration files
├─public                                  # Stores static resources required by the web application
├─README.assets                           # Stores images and other resources used by README.md
├─src                                     # Stores the source code of the web application
│  ├─assets                               # Stores static resources required by the web application
│  ├─components                           # Stores the components of the web application
│  │  └─ui                                # Stores the shadcn-vue components added by its CLI
│  ├─composables                          # Stores the composables of the web application
│  ├─config                               # Stores the configuration files of the web application
│  │  └─nprogress                         # Stores the configuration file of the progress bar library NProgress
│  ├─constant                             # Stores the constant values used in the web application
│  ├─layouts                              # Stores the layout components of the web application
│  │  ├─Footer                            # Stores the layout component representing the footer of the page
│  │  └─Navbar                            # Stores the layout component representing the navigation bar of the page
│  │      └─components                    # Stores the child components of the Navbar layout component
│  │          ├─LocalesChange             # Stores the child component representing language switch
│  │          └─ThemeChange               # Stores the child component representing theme switch
│  ├─lib                                  # Stores helpers shared by the components, such as `cn`
│  ├─locales                              # Stores the content files of the web application's multiple languages
│  ├─pages                                # Stores the page components of the web application
│  │  ├─errorPages                        # Stores the components representing error pages
│  │  └─home                              # Stores the components representing the homepage
│  │      └─components                    # Stores the child components of the homepage components
│  ├─router                               # Stores the routing configuration files of the web application
│  │  └─routes                            # Stores the modules of the web application's routes
│  │      └─modules                       # Stores the sub-modules of the routing modules of the web application
│  ├─store                                # Stores the state management files of the web application
│  └─styles                               # Stores the Tailwind CSS entry and theme variables
├─test                                    # Stores the test code
└─types                                   # Stores the TypeScript type declaration files

```

## Try it now!

> Boot-Vue requires Node.js 22.22.2+, 24.15.0+, or 26+

### GitHub Template

[Create a repo from this template on GitHub](https://github.com/kirklin/boot-vue/generate).

### Clone to local

```bash
npx degit kirklin/boot-vue my-app
cd my-app
pnpm i
```

## Usage

### Development

Just run and visit http://localhost:8888

```bash
pnpm run dev
```

### Build

To build the App, run

```bash
pnpm run build
```

And you will see the generated file in `dist` that ready to be served.

### Add components

Pull more [shadcn-vue components](https://www.shadcn-vue.com/docs/components) into `src/components/ui` with its CLI

```bash
pnpm dlx shadcn-vue@latest add dialog
```

### Deploy on Netlify

Go to [Netlify](https://app.netlify.com/start) and select your clone, `OK` along the way, and your App will be live in a minute.

### Docker Production Build

First, build the boot-vue image by opening the terminal in the project's root directory.

```bash
docker buildx build . -t viteboot:latest
```

Run the image and specify port mapping with the `-p` flag.

```bash
docker run --rm -it -p 8080:80 viteboot:latest
```
