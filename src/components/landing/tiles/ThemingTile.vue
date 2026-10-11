<script setup lang="ts">
import { useI18n } from "vue-i18n";
import BentoTile from "../BentoTile.vue";
import Scene from "../Scene.vue";
import AppearancePicker from "./AppearancePicker.vue";

const { t } = useI18n();
</script>

<template>
  <BentoTile
    id="theming"
    :eyebrow="t('home.features.theming.eyebrow')"
    :title="t('home.features.theming.title')"
    :description="t('home.features.theming.description')"
  >
    <Scene class="items-center justify-center bg-[linear-gradient(180deg,#f4f4f7,#ececf1)] p-6">
      <AppearancePicker />
    </Scene>
  </BentoTile>
</template>
