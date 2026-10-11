<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { ChevronRightIcon } from "@lucide/vue";
import { useI18n } from "vue-i18n";
import { SiteConstant } from "~/constant/siteConstant";
import { cn } from "~/lib/utils";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
const { t } = useI18n();
</script>

<template>
  <!-- The page's two calls to action: a filled pill and a text link. -->
  <div :class="cn('flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-8', props.class)">
    <a
      :href="SiteConstant.TEMPLATE_URL"
      target="_blank"
      rel="noreferrer"
      class="bg-brand text-brand-foreground hover:bg-brand/90 focus-visible:ring-brand/30 inline-flex h-12 items-center justify-center rounded-full px-7 text-[17px] font-medium transition-colors focus-visible:ring-4 focus-visible:outline-none"
    >
      {{ t("home.actions.template") }}
    </a>
    <a
      :href="SiteConstant.REPOSITORY_URL"
      target="_blank"
      rel="noreferrer"
      class="group text-link inline-flex items-center gap-0.5 text-[17px] underline-offset-4 hover:underline"
    >
      {{ t("home.actions.github") }}
      <ChevronRightIcon class="size-4 transition-transform group-hover:translate-x-0.5" />
    </a>
  </div>
</template>
