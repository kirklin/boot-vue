<script setup lang="ts">
import { ChevronLeftIcon, PlusIcon } from "@lucide/vue";
import { useI18n } from "vue-i18n";
import { glassCircle } from "~/components/landing/glass";

const { t } = useI18n();
const store = counter();
</script>

<template>
  <!-- The counter of the home page tile on a page of its own: the Pinia store keeps the same count across pages. -->
  <section class="container mx-auto flex flex-col items-center px-4 pt-14 pb-24 text-center sm:pt-20 sm:pb-32">
    <p class="text-muted-foreground text-lg font-semibold sm:text-xl">
      Pinia
    </p>
    <h1 class="mt-2 max-w-2xl text-4xl/[1.1] font-semibold tracking-[-0.03em] text-balance sm:text-5xl/[1.05] [&:lang(zh)]:tracking-normal">
      {{ t("store.title") }}
    </h1>
    <p class="text-muted-foreground mt-4 max-w-lg text-[17px]/7 text-pretty">
      {{ t("store.description") }}
    </p>

    <div class="bg-background dark:bg-card mt-12 w-full max-w-xl rounded-[28px] p-2">
      <div class="flex flex-col items-center gap-8 rounded-[22px] bg-[linear-gradient(180deg,#fff6dd,#fffbf0)] px-6 py-16 dark:bg-black dark:bg-none">
        <p class="relative h-28 overflow-hidden text-8xl/28 font-semibold tracking-tight tabular-nums" aria-live="polite">
          <span :key="store.count" class="animate-in fade-in slide-in-from-bottom-4 block duration-300">{{ store.count }}</span>
        </p>
        <button
          type="button"
          :class="glassCircle"
          :aria-label="t('store.increment')"
          @click="store.increment()"
        >
          <PlusIcon />
        </button>
      </div>
    </div>

    <RouterLink
      :to="{ path: '/home', hash: '#state' }"
      class="group text-link mt-10 inline-flex items-center gap-0.5 text-[17px] underline-offset-4 hover:underline"
    >
      <ChevronLeftIcon class="size-4 transition-transform group-hover:-translate-x-0.5" />
      {{ t("store.back") }}
    </RouterLink>
  </section>
</template>
