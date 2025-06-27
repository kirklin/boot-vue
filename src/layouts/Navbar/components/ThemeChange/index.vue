<script setup lang="ts">
import type { CustomTheme } from "~/layouts/Navbar/components/ThemeChange/types";
import { logger } from "@kirklin/logger";
import { useI18n } from "vue-i18n";
import { themeList } from "./data";

defineOptions({
  name: "ThemeChange",
});
const { t } = useI18n();
const mode = useColorMode<CustomTheme>({
  attribute: "data-theme",
  modes: {
    light: "light",
    dark: "dark",
    cupcake: "cupcake",
    bumblebee: "bumblebee",
    emerald: "emerald",
    corporate: "corporate",
    synthwave: "synthwave",
    retro: "retro",
    cyberpunk: "cyberpunk",
    valentine: "valentine",
    halloween: "halloween",
    garden: "garden",
    forest: "forest",
    aqua: "aqua",
    lofi: "lofi",
    pastel: "pastel",
    fantasy: "fantasy",
    wireframe: "wireframe",
    black: "black",
    luxury: "luxury",
    dracula: "dracula",
    cmyk: "cmyk",
    autumn: "autumn",
    business: "business",
    acid: "acid",
    lemonade: "lemonade",
    night: "night",
    coffee: "coffee",
    winter: "winter",
    dim: "dim",
    nord: "nord",
    sunset: "sunset",
    caramellatte: "caramellatte",
    abyss: "abyss",
    silk: "silk",
  },
});

function changeTheme(event: MouseEvent, theme: CustomTheme) {
  const isSameTheme = mode.value === theme;
  try {
    if (document.startViewTransition === undefined) {
      throw new Error("document.startViewTransition is undefined, please update your browser to the latest version or use a modern browser.");
    }
    const x = event.clientX;
    const y = event.clientY;
    const endRadius = Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y),
    );
    const transition = document.startViewTransition();
    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ];
      document.documentElement.animate(
        {
          clipPath: isSameTheme ? [...clipPath].reverse() : clipPath,
        },
        {
          duration: 500,
          easing: "ease-in",
          pseudoElement: isSameTheme
            ? "::view-transition-old(root)"
            : "::view-transition-new(root)",
        },
      );
    });
  } catch (error: unknown) {
    logger.error(`Failed to change theme : ${error instanceof Error ? error.message : ""}`);
  } finally {
    mode.value = theme;
  }
}

function handleKeyDown(event: KeyboardEvent, theme: CustomTheme) {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    changeTheme(event as unknown as MouseEvent, theme);
  }
}
</script>

<template>
  <div title="Change Theme" class="dropdown dropdown-end">
    <div tabindex="0" role="button" class="gap-1 btn btn-ghost btn-sm" aria-label="Change Theme">
      <div class="p-1 border border-base-content/10 rounded-md bg-base-100 shrink-0 gap-0.5 grid grid-cols-2">
        <div class="rounded-full bg-base-content size-1" />
        <div class="rounded-full bg-primary size-1" />
        <div class="rounded-full bg-secondary size-1" />
        <div class="rounded-full bg-accent size-1" />
      </div>
      <span class="hidden md:inline">{{ t("Themes") }}</span>
      <svg
        width="12px"
        height="12px"
        class="mt-px opacity-60 h-2 w-2 hidden fill-current sm:inline-block"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2048 2048"
      >
        <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z" />
      </svg>
    </div>
    <div
      tabindex="0"
      class="text-base-content mt-12 outline-1 outline-black/5 border border-white/5 bg-base-200 h-[30.5rem] max-h-[calc(100vh-8.6rem)] shadow-2xl top-px overflow-y-auto dropdown-content rounded-box"
    >
      <ul class="w-56 menu">
        <li class="text-xs menu-title">
          {{ t("Themes") }}
        </li>
        <li v-for="theme in themeList" :key="theme.id">
          <button
            class="px-2 gap-3"
            :class="mode === theme.id ? '[&_svg]:visible' : ''"
            @click="changeTheme($event, theme.id)"
            @keydown="handleKeyDown($event, theme.id)"
          >
            <div
              :data-theme="theme.id"
              class="p-1 rounded-md bg-base-100 shrink-0 gap-0.5 grid grid-cols-2 shadow-sm"
            >
              <div class="rounded-full bg-base-content size-1" />
              <div class="rounded-full bg-primary size-1" />
              <div class="rounded-full bg-secondary size-1" />
              <div class="rounded-full bg-accent size-1" />
            </div>
            <div class="w-32 truncate">
              {{ theme.id }}
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="shrink-0 h-3 w-3 invisible">
              <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
            </svg>
          </button>
        </li>
        <li />
      </ul>
    </div>
  </div>
</template>

<style scoped>
 .scrollbar::-webkit-scrollbar {
  width: 20px;
  height: 20px;
}

.scrollbar::-webkit-scrollbar-track {
  border-radius: 100vh;
  background: #f7f4ed;
}

.scrollbar::-webkit-scrollbar-thumb {
  background: #e0cbcb;
  border-radius: 100vh;
  border: 3px solid #f6f7ed;
}

.scrollbar::-webkit-scrollbar-thumb:hover {
  background: #c0a0b9;
}

::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

::view-transition-old(root) {
  z-index: 999;
}
::view-transition-new(root) {
  z-index: 1;
}
</style>
