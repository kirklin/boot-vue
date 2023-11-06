<script setup lang="ts">
import ThemeChange from "./components/ThemeChange/index.vue";
import LocalesChange from "./components/LocalesChange/index.vue";
import UnoCSSIconButton from "~/components/Icon/UnoCSSIconButton.vue";

defineOptions({
  name: "Navbar",
});
</script>

<template>
  <div
    class="sticky top-0 z-30 h-16 w-full flex justify-center text-base-content opacity-90 backdrop-blur transition-all duration-100"
  >
    <nav class="w-full navbar">
      <div class="flex flex-1 lg:gap-2 md:gap-1">
        <RouterLink
          to="/"
          aria-current="page"
          aria-label="Homepage"
          class="px-2 btn btn-ghost"
        >
          <div
            class="inline-flex text-lg text-primary transition-all duration-200 md:text-3xl"
          >
            <span class="text-accent">B<span class="lowercase">oot</span></span>
            <span class="text-base-content">V<span class="lowercase">ue</span></span>
          </div>
        </RouterLink>
      </div>
      <div>
        <ThemeChange />
        <LocalesChange />
        <span
          class="tooltip tooltip-bottom before:text-xs before:content-[attr(data-tip)]"
          data-tip="GitHub"
        >
          <span class="flex-none items-center">
            <a
              aria-label="Github"
              target="_blank"
              href="https://github.com/kirklin/boot-vue"
              class="drawer-button normal-case btn btn-square btn-ghost"
            >
              <UnoCSSIconButton icon="i-mdi-github" />
            </a>
          </span>
        </span>
      </div>
    </nav>
  </div>
</template>
