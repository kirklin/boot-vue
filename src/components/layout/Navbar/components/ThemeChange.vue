<template>
  <div title="Change Theme" class="dropdown dropdown-end">
    <div tabindex="0" class="btn btn-ghost gap-1 normal-case">
      <svg
        width="20"
        height="20"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        class="inline-block h-5 w-5 stroke-current md:h-6 md:w-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      </svg>
      <span class="hidden md:inline">Theme</span>
      <svg
        width="12px"
        height="12px"
        class="ml-1 hidden h-3 w-3 fill-current opacity-60 sm:inline-block"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2048 2048"
      >
        <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z" />
      </svg>
    </div>
    <div
      class="scrollbar dropdown-content rounded-t-box rounded-b-box top-px mt-16 h-[70vh] max-h-96 w-52 overflow-y-auto bg-base-200 text-base-content shadow-2xl"
    >
      <div class="grid grid-cols-1 gap-3 p-3" tabindex="0">
        <div
          v-for="theme in themes"
          :key="theme.id"
          class="overflow-hidden rounded-lg outline outline-2 outline-offset-2 outline-base-content"
          :data-set-theme="theme.id"
          data-act-class="outline"
        >
          <div
            :data-theme="theme.id"
            class="w-full cursor-pointer bg-base-100 font-sans text-base-content"
          >
            <div class="grid grid-cols-5 grid-rows-3">
              <div class="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                <div class="flex-grow text-sm font-bold">
                  {{ theme.id }}
                </div>
                <div class="flex flex-shrink-0 flex-wrap gap-1">
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

<script setup lang="ts">
import { themeChange } from "theme-change";
import { onMounted } from "vue";
onMounted(() => {
  themeChange(false);
});
const themes = [
  {
    name: "🌝 light",
    id: "light",
  },
  {
    name: "🌚 dark",
    id: "dark",
  },
  {
    name: "🧁 cupcake",
    id: "cupcake",
  },
  {
    name: "🐝 bumblebee",
    id: "bumblebee",
  },
  {
    name: "✳️ Emerald",
    id: "emerald",
  },
  {
    name: "🏢 Corporate",
    id: "corporate",
  },
  {
    name: "🌃 synthwave",
    id: "synthwave",
  },
  {
    name: "👴 retro",
    id: "retro",
  },
  {
    name: "🤖 cyberpunk",
    id: "cyberpunk",
  },
  {
    name: "🌸 valentine",
    id: "valentine",
  },
  {
    name: "🎃 halloween",
    id: "halloween",
  },
  {
    name: "🌷 garden",
    id: "garden",
  },
  {
    name: "🌲 forest",
    id: "forest",
  },
  {
    name: "🐟 aqua",
    id: "aqua",
  },
  {
    name: "👓 lofi",
    id: "lofi",
  },
  {
    name: "🖍 pastel",
    id: "pastel",
  },
  {
    name: "🧚‍♀️ fantasy",
    id: "fantasy",
  },
  {
    name: "📝 Wireframe",
    id: "wireframe",
  },
  {
    name: "🏴 black",
    id: "black",
  },
  {
    name: "💎 luxury",
    id: "luxury",
  },
  {
    name: "🧛‍♂️ dracula",
    id: "dracula",
  },
  {
    name: "🖨 CMYK",
    id: "cmyk",
  },
  {
    name: "🍁 Autumn",
    id: "autumn",
  },
  {
    name: "💼 Business",
    id: "business",
  },
  {
    name: "💊 Acid",
    id: "acid",
  },
  {
    name: "🍋 Lemonade",
    id: "lemonade",
  },
  {
    name: "🌙 Night",
    id: "night",
  },
  {
    name: "☕️ Coffee",
    id: "coffee",
  },
  {
    name: "❄️ Winter",
    id: "winter",
  },
];
</script>

<!--<style scoped>-->
<!--.scrollbar::-webkit-scrollbar {-->
<!--  width: 20px;-->
<!--  height: 20px;-->
<!--}-->

<!--.scrollbar::-webkit-scrollbar-track {-->
<!--  border-radius: 100vh;-->
<!--  background: #f7f4ed;-->
<!--}-->

<!--.scrollbar::-webkit-scrollbar-thumb {-->
<!--  background: #e0cbcb;-->
<!--  border-radius: 100vh;-->
<!--  border: 3px solid #f6f7ed;-->
<!--}-->

<!--.scrollbar::-webkit-scrollbar-thumb:hover {-->
<!--  background: #c0a0b9;-->
<!--}-->
<!--</style>-->
