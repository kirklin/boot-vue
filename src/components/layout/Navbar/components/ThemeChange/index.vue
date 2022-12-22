<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { themeList } from "./data";
import type { CustomTheme } from "~/components/layout/Navbar/components/ThemeChange/types";
const { t } = useI18n();
const mode = useColorMode<CustomTheme>({
  attribute: "data-theme",
  modes: {
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
  },
});
</script>

<template>
  <div title="Change Theme" class="dropdown-end dropdown">
    <div tabindex="0" class="btn-ghost btn gap-1 normal-case">
      <ITablerColorSwatch />
      <span class="hidden md:inline">{{ t("Themes") }}</span>
      <ITablerChevronDown />
    </div>
    <div
      class="scrollbar dropdown-content rounded-t-box rounded-b-box top-px mt-16 h-[70vh] max-h-96 w-52 overflow-y-auto bg-base-200 text-base-content shadow-2xl"
    >
      <div class="grid grid-cols-1 gap-3 p-3" tabindex="0">
        <div
          v-for="theme in themeList"
          :key="theme.id"
          class="overflow-hidden rounded-lg outline-2 outline-offset-2 outline-base-content hover:outline"
          :class="mode === theme.id ? 'outline' : ''"
          @click="mode = theme.id"
        >
          <div
            :data-theme="theme.id"
            class="w-full cursor-pointer bg-base-100 font-sans text-base-content"
          >
            <div class="grid grid-cols-5 grid-rows-3">
              <div class="col-span-5 row-span-3 row-start-1 flex gap-1 px-4 py-3">
                <div class="grow text-sm font-bold">
                  {{ theme.id }}
                </div>
                <div class="flex shrink-0 flex-wrap gap-1">
                  <div class="w-2 rounded bg-primary" />
                  <div class="w-2 rounded bg-secondary" />
                  <div class="w-2 rounded bg-accent" />
                  <div class="w-2 rounded bg-neutral" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
 </style>
