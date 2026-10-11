<script setup lang="ts">
import { ChevronRightIcon, PlusIcon } from "@lucide/vue";
import { useI18n } from "vue-i18n";
import BentoTile from "../BentoTile.vue";
import { glassCircle } from "../glass";
import Scene from "../Scene.vue";

const { t } = useI18n();
const store = counter();
</script>

<template>
  <BentoTile
    id="state"
    eyebrow="Pinia"
    :title="t('home.features.state.title')"
    :description="t('home.features.state.description')"
  >
    <Scene class="items-center justify-center gap-7 bg-[linear-gradient(180deg,#fff6dd,#fffbf0)] p-6">
      <p class="relative h-20 overflow-hidden text-7xl/20 font-semibold tracking-tight tabular-nums" aria-live="polite">
        <span :key="store.count" class="animate-in fade-in slide-in-from-bottom-4 block duration-300">{{ store.count }}</span>
      </p>
      <button
        type="button"
        :class="glassCircle"
        :aria-label="t('home.features.state.increment')"
        @click="store.increment()"
      >
        <PlusIcon />
      </button>
      <RouterLink
        to="/StoreTest"
        class="group text-link inline-flex items-center gap-0.5 text-[15px] underline-offset-4 hover:underline"
      >
        {{ t("home.features.state.open") }}
        <ChevronRightIcon class="size-4 transition-transform group-hover:translate-x-0.5" />
      </RouterLink>
    </Scene>
  </BentoTile>
</template>
