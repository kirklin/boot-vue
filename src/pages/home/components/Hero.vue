<script setup lang="ts">
import { useI18n } from "vue-i18n";
import Actions from "~/components/landing/Actions.vue";

const { t } = useI18n();
</script>

<template>
  <!-- The product in one headline, with what it includes and the two calls to action beside it. -->
  <div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
    <div>
      <p class="text-muted-foreground text-lg font-semibold sm:text-xl">
        Boot Vue
      </p>
      <h1 class="mt-2 max-w-4xl text-5xl/[1.05] font-semibold tracking-[-0.035em] text-balance sm:text-6xl/[1.03] lg:text-7xl/[1.02] [&:lang(zh)]:tracking-normal">
        {{ t("home.hero.title") }}
      </h1>
    </div>
    <div class="max-w-sm lg:pb-1.5">
      <p class="text-muted-foreground text-[17px]/7 text-pretty">
        {{ t("home.hero.description") }}
      </p>
      <Actions class="mt-6 items-start justify-start sm:items-center" />
    </div>
  </div>
</template>
