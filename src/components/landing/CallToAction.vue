<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { SiteConstant } from "~/constant/siteConstant";
import Actions from "./Actions.vue";
import CopyCommand from "./CopyCommand.vue";

const { t } = useI18n();
</script>

<template>
  <section class="reveal container mx-auto flex flex-col items-center px-4 py-24 text-center sm:py-32">
    <h2 class="max-w-3xl text-4xl/[1.1] font-semibold tracking-[-0.03em] text-balance sm:text-6xl/[1.05] [&:lang(zh)]:tracking-normal">
      {{ t("home.cta.title") }}
    </h2>
    <p class="text-muted-foreground mt-5 max-w-xl text-lg/8 text-pretty">
      {{ t("home.cta.description") }}
    </p>
    <div class="mt-10">
      <Actions />
    </div>
    <div class="mt-12 flex w-full justify-center">
      <CopyCommand :command="SiteConstant.DEGIT_COMMAND" />
    </div>
  </section>
</template>
