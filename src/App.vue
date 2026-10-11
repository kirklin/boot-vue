<script setup lang="ts">
import { logger } from "@kirklin/logger";
import { useI18n } from "vue-i18n";
import { TooltipProvider } from "~/components/ui/tooltip";

logger.info("I'm ready!  ⸜(๑'ᵕ'๑)⸝⋆*");

// The page language picks the fonts and line breaking for Chinese text
const { locale } = useI18n();
watchEffect(() => {
  document.documentElement.lang = locale.value === "zh" ? "zh-CN" : locale.value;
});
</script>

<template>
  <TooltipProvider>
    <RouterView />
  </TooltipProvider>
</template>
