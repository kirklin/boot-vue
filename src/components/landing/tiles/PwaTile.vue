<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { cn } from "~/lib/utils";
import BentoTile from "../BentoTile.vue";
import { glass } from "../glass";
import Scene from "../Scene.vue";

const { t } = useI18n();
const time = useDateFormat(useNow({ scheduler: callback => useIntervalFn(callback, 1000) }), "H:mm");
const running = ref(false);

// The service worker is only registered by production builds.
onMounted(async () => {
  if (!("serviceWorker" in navigator)) {
    return;
  }
  const registration = await navigator.serviceWorker.getRegistration();
  running.value = Boolean(registration?.active);
  navigator.serviceWorker.ready.then(() => {
    running.value = true;
  });
});

// Placeholder apps around this one on the home screen.
const neighbors = [
  "from-[#ffd36e] to-[#f5a524]",
  "from-[#7cc4ff] to-[#3a86ff]",
  "from-[#ff8f9e] to-[#ef476f]",
  "from-[#b8a6ff] to-[#7b61ff]",
  "from-[#9be7c4] to-[#2bb673]",
  "from-[#cfd4dc] to-[#9aa3af]",
  "from-[#ffb48a] to-[#ff7a45]",
];
</script>

<template>
  <BentoTile
    id="pwa"
    eyebrow="PWA"
    :title="t('home.features.pwa.title')"
    :description="t('home.features.pwa.description')"
    visual-class="min-h-96"
  >
    <Scene class="items-center bg-[linear-gradient(180deg,#e9f1fb,#f5f8fc)] pt-6">
      <div class="relative h-[19rem] w-56 overflow-hidden rounded-t-[40px] border-[7px] border-b-0 border-zinc-900 bg-[linear-gradient(160deg,#cdeedd,#e9e2f8)] dark:border-zinc-700 dark:bg-[linear-gradient(160deg,#1f4a3c,#221a3a)]">
        <div class="flex items-center justify-between px-6 pt-3 text-[11px] font-semibold">
          <span class="tabular-nums">{{ time }}</span>
          <span class="h-[18px] w-16 rounded-full bg-zinc-900 dark:bg-black" />
          <span class="w-6" />
        </div>
        <!-- Icon size, margins and gaps follow an iPhone home screen scaled to this width. -->
        <ul class="mt-5 grid grid-cols-4 gap-x-[18px] gap-y-3 px-3.5">
          <li class="flex flex-col items-center gap-1">
            <!-- The round logo, cropped to the rounded square of a home screen icon. -->
            <span class="size-8 overflow-hidden rounded-[22.5%] shadow-[0_3px_8px_-3px_rgb(0_0_0/0.4)]">
              <img src="/pwa-192x192.png" alt="" width="32" height="32" class="size-full scale-[1.3]">
            </span>
            <span class="text-[9px] font-medium whitespace-nowrap">BootVue</span>
          </li>
          <li v-for="surface in neighbors" :key="surface" class="flex flex-col items-center gap-1" aria-hidden="true">
            <span :class="cn('size-8 rounded-[22.5%] bg-linear-to-b opacity-80', surface)" />
            <span class="bg-foreground/15 h-1 w-6 rounded-full" />
          </li>
        </ul>
      </div>
      <p :class="cn(glass, 'absolute bottom-5 flex items-center gap-2 rounded-full px-4 py-2 text-[13px] font-medium')">
        <span :class="cn('size-2 rounded-full', running ? 'bg-[#34c759]' : 'bg-zinc-400')" />
        {{ running ? t("home.features.pwa.running") : t("home.features.pwa.production") }}
      </p>
    </Scene>
  </BentoTile>
</template>
