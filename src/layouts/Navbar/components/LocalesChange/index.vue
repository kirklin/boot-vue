<script setup lang="ts">
import { useLocalStorage } from "@vueuse/core";
import { useI18n } from "vue-i18n";
import { languagesNameList } from "~/composables/langugage";

defineOptions({
  name: "LocalesChange",
});
const { availableLocales, locale } = useI18n();

// 创建一个排序后的语言列表
const sortedLocales = availableLocales.sort((a, b) => {
  const aIndex = languagesNameList.findIndex(item => item.code === a);
  const bIndex = languagesNameList.findIndex(item => item.code === b);
  return aIndex - bIndex;
});

function ChangeLocales(lang: string) {
  locale.value = lang;
  const localedLang = useLocalStorage("locale", "zh");
  localedLang.value = lang;
}
</script>

<template>
  <div class="dropdown dropdown-end">
    <div
      tabindex="0"
      role="button"
      class="font-bold gap-1 btn btn-ghost btn-sm"
      aria-label="Language"
      title="Change Language"
    >
      <svg class="text-base-content/70 size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          stroke-linejoin="round"
          stroke-linecap="round"
          stroke-width="2"
          fill="none"
          stroke="currentColor"
          d="M12 21a9 9 0 1 0 0-18m0 18a9 9 0 1 1 0-18m0 18c2.761 0 3.941-5.163 3.941-9S14.761 3 12 3m0 18c-2.761 0-3.941-5.163-3.941-9S9.239 3 12 3M3.5 9h17m-17 6h17"
        />
      </svg>
      <svg
        class="mt-px opacity-60 size-2 hidden fill-current sm:inline-block"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2048 2048"
      >
        <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z" />
      </svg>
    </div>
    <div
      tabindex="0"
      class="text-base-content mt-12 outline-1 outline-black/5 border border-white/5 bg-base-200 max-h-[calc(100vh-8.6rem)] w-56 shadow-2xl top-px overflow-y-auto dropdown-content rounded-box"
    >
      <ul class="w-full menu menu-sm">
        <li v-for="lang in sortedLocales" :key="lang">
          <button
            class="flex"
            :class="{ 'menu-active': locale === lang }"
            @click="ChangeLocales(lang)"
          >
            <span class="font-bold font-mono pe-4 opacity-40">
              {{ lang }}
            </span>
            <span class="font-[sans-serif]">
              {{ languagesNameList.find((item) => item.code === lang)?.nativeName }}
            </span>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.menu-active {
  background-color: hsl(var(--p) / var(--tw-bg-opacity));
  --tw-bg-opacity: 0.1;
}
</style>
