<script setup lang="ts">
import { useLocalStorage } from "@vueuse/core";
import { useI18n } from "vue-i18n";

const { availableLocales, locale } = useI18n();
const ChangeLocales = (lang: string) => {
  locale.value = lang;
  const localedLang = useLocalStorage("locale", "zh-CN");
  localedLang.value = lang;
};
</script>

<template>
  <div title="Change Locales" class="dropdown-end dropdown">
    <div tabindex="0" class="btn-ghost btn gap-1 normal-case">
      <ITablerLanguage />
      <span class="hidden md:inline" />
      <ITablerChevronDown />
    </div>
    <div class="dropdown-content rounded-t-box rounded-b-box top-px mt-16 w-56 overflow-y-auto bg-base-200 text-base-content shadow-2xl">
      <ul class="menu menu-compact gap-1 p-3" tabindex="0">
        <li v-for="lang in availableLocales" :key="lang">
          <button class="flex" @click="ChangeLocales(lang)">
            <span class="flex flex-1 justify-between">
              {{ lang }}
              <!--              <span class="badge-ghost badge badge-sm" /> -->
            </span>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

 <style scoped>

 </style>
