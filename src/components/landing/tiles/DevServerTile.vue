<script setup lang="ts">
import { useI18n } from "vue-i18n";
import BentoTile from "../BentoTile.vue";
import Scene from "../Scene.vue";
import DevTerminal from "./DevTerminal.vue";

const { t } = useI18n();
</script>

<template>
  <BentoTile
    id="dev-server"
    eyebrow="Vite 8"
    :title="t('home.features.dev.title')"
    :description="t('home.features.dev.description')"
    visual-class="min-h-96"
  >
    <Scene class="bg-[linear-gradient(180deg,#eceff4,#f5f6f9)]">
      <DevTerminal />
    </Scene>
  </BentoTile>
</template>
