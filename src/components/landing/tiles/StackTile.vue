<script setup lang="ts">
import { useI18n } from "vue-i18n";
import AppDock from "../AppDock.vue";
import AppIcon from "../AppIcon.vue";
import BentoTile from "../BentoTile.vue";
import Scene from "../Scene.vue";
import { STACK } from "../stack";

const { t } = useI18n();
</script>

<template>
  <BentoTile
    id="stack"
    :eyebrow="t('home.features.stack.eyebrow')"
    :title="t('home.features.stack.title')"
    :description="t('home.features.stack.description')"
  >
    <!-- The stack as app icons: a home screen grid on narrow tiles, a dock on wide ones. -->
    <Scene class="items-center justify-center bg-[#f1f5f3] bg-[radial-gradient(90%_110%_at_15%_0%,#d5efe3,transparent_60%),radial-gradient(90%_110%_at_100%_100%,#e6e2f6,transparent_60%)] p-6">
      <ul class="grid grid-cols-3 gap-x-8 gap-y-6 sm:gap-x-12 @2xl:hidden">
        <li v-for="app in STACK" :key="app.name" class="flex flex-col items-center gap-2">
          <AppIcon :icon="app.icon" :surface="app.surface" class="size-16" />
          <span class="text-foreground/70 text-xs font-medium">{{ app.name }}</span>
        </li>
      </ul>
      <div class="hidden pt-12 @2xl:flex">
        <AppDock :apps="STACK" />
      </div>
    </Scene>
  </BentoTile>
</template>
