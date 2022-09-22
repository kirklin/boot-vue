import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

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
