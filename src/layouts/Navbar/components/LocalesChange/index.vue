<script setup lang="ts">
import { useLocalStorage } from "@vueuse/core";
import { useI18n } from "vue-i18n";
import { languagesNameList } from "~/composables/langugage";

defineOptions({
  name: "LocalesChange",
});
const { availableLocales, locale } = useI18n();
function ChangeLocales(lang: string) {
  locale.value = lang;
  const localedLang = useLocalStorage("locale", "zh");
  localedLang.value = lang;
}
</script>

<template>
  <div title="Change Locales" class="dropdown dropdown-end">
    <div tabindex="0" class="gap-1 normal-case btn btn-ghost">
      <UnoCSSIconButton icon="i-tabler-language" />
      <span class="hidden md:inline" />
      <UnoCSSIconButton icon="i-tabler-chevron-down" />
    </div>
    <div class="dropdown-content top-px mt-16 w-56 overflow-y-auto bg-base-200 text-base-content shadow-2xl rounded-t-box rounded-b-box">
      <ul class="menu-compact gap-1 p-3 menu" tabindex="0">
        <li v-for="lang in availableLocales" :key="lang">
          <button class="flex" @click="ChangeLocales(lang)">
            <span class="flex flex-1 justify-between">
              {{ languagesNameList.find((item) => item.code === lang)?.nativeName }}
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
