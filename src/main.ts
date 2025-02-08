import messages from "@intlify/unplugin-vue-i18n/messages";
import { useLocalStorage } from "@vueuse/core";

// Vue Router
import { createPinia } from "pinia";
import { createApp } from "vue";

import { createI18n } from "vue-i18n";
import App from "~/App.vue";

import { router } from "./router";
import { registerStore } from "./store";

// reset css
import "@kirklin/reset-css/kirklin.css";
import "~/styles/main.css";
import "uno.css";

const app = createApp(App);
app.use(createI18n({
  legacy: false,
  locale: unref(useLocalStorage("locale", "zh")),
  messages,
}));
app.use(createPinia());
registerStore();
app.use(router);
app.mount("#app");
