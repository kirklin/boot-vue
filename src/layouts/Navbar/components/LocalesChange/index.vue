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
    <div tabindex="0" class="gap-1 btn btn-ghost btn-sm">
      <UnoCSSIconButton icon="i-tabler-language" />
      <span class="hidden md:inline" />
      <UnoCSSIconButton icon="i-tabler-chevron-down" />
    </div>
    <div class="bg-base-200 mt-4 p-2 w-52 shadow-sm z-1 dropdown-content menu rounded-box" tabindex="0">
      <li v-for="lang in availableLocales" :key="lang">
        <button class="flex" @click="ChangeLocales(lang)">
          <span class="flex flex-1 justify-between">
            {{ languagesNameList.find((item) => item.code === lang)?.nativeName }}
            <!--              <span class="badge-ghost badge badge-sm" /> -->
          </span>
        </button>
      </li>
    </div>
  </div>
</template>

 <style scoped>

 </style>
