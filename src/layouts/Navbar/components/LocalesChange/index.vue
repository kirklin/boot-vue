<script setup lang="ts">
import { ChevronDownIcon, LanguagesIcon } from "@lucide/vue";
import { useLocalStorage } from "@vueuse/core";
import { useI18n } from "vue-i18n";
import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { languagesNameList } from "~/composables/language";

defineOptions({
  name: "LocalesChange",
});
const { availableLocales, locale, t } = useI18n();
const storedLocale = useLocalStorage("locale", "zh");

// 创建一个排序后的语言列表
const sortedLocales = availableLocales.sort((a, b) => {
  const aIndex = languagesNameList.findIndex(item => item.code === a);
  const bIndex = languagesNameList.findIndex(item => item.code === b);
  return aIndex - bIndex;
});

function changeLocale(lang: string) {
  locale.value = lang;
  storedLocale.value = lang;
}
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="ghost" size="sm" :aria-label="t('Language')">
        <LanguagesIcon />
        <ChevronDownIcon class="hidden opacity-60 sm:block" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" class="w-48">
      <DropdownMenuRadioGroup :model-value="locale">
        <DropdownMenuRadioItem
          v-for="lang in sortedLocales"
          :key="lang"
          :value="lang"
          @select="changeLocale(lang)"
        >
          <span class="text-muted-foreground w-6 font-mono text-xs">{{ lang }}</span>
          {{ languagesNameList.find((item) => item.code === lang)?.nativeName }}
        </DropdownMenuRadioItem>
      </DropdownMenuRadioGroup>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
