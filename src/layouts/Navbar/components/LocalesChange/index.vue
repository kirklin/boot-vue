<script setup lang="ts">
import { GlobeIcon } from "@lucide/vue";
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
import { barButton } from "../barButton";

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
      <Button variant="ghost" size="icon-sm" :class="barButton" :aria-label="t('Language')">
        <GlobeIcon class="size-4" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" class="w-40">
      <DropdownMenuRadioGroup :model-value="locale">
        <DropdownMenuRadioItem
          v-for="lang in sortedLocales"
          :key="lang"
          :value="lang"
          @select="changeLocale(lang)"
        >
          {{ languagesNameList.find((item) => item.code === lang)?.nativeName }}
          <span class="text-muted-foreground ml-auto font-mono text-xs uppercase">{{ lang }}</span>
        </DropdownMenuRadioItem>
      </DropdownMenuRadioGroup>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
