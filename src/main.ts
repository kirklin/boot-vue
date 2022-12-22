import { useLocalStorage } from "@vueuse/core";
import { createApp } from "vue";
// Vue Router
import { createPinia } from "pinia";
import { createI18n } from "vue-i18n";

import index from "./router";

import { registerStore } from "./store";
import App from "~/App.vue";

import "~/styles/tailwind.css";
import "~/styles/main.css";

const app = createApp(App);
const messages = Object.fromEntries(
  Object.entries(
    import.meta.glob<{ default: any }>("./locales/*.json", { eager: true }))
    .map(([key, value]) => {
      return [key.slice(10, -5), value.default];
    }),
);
app.use(createI18n({
  legacy: false,
  locale: unref(useLocalStorage("locale", "zh-CN")),
  messages,
}));
app.use(createPinia());
registerStore();
app.use(index);
app.mount("#app");
