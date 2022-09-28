import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "localhost",
    port: 8888,
    open: true,
    https: false,
    proxy: {},
  },
  plugins: [
    vue({
      // https://vuejs.org/guide/extras/reactivity-transform.html
      // 开启响应性语法糖 （试验性特性）
      // Reactivity Transform
      reactivityTransform: true,
    }),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        "vue",
        "vue-router",
        "vue-i18n",
        "vue/macros",
        "@vueuse/head",
        "@vueuse/core",
      ],
      dts: "types/auto-imports.d.ts",
      dirs: [
        "src/composables",
        "src/store",
      ],
      vueTemplate: true,
    }),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      extensions: ["vue"],
      include: [/\.vue$/, /\.vue\?vue/],
      dts: "types/components.d.ts",
      exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],
    }),
  ],
  resolve: {
    alias: {
      "~/": `${path.resolve(__dirname, "src")}/`,
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
      @import "~/styles/variables.scss";
    `,
        javascriptEnabled: true,
      },
    },
  },
});
