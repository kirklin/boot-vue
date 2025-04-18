<script setup lang="ts">
import UnoCSSIconButton from "~/components/Icon/UnoCSSIconButton.vue";
import LocalesChange from "./components/LocalesChange/index.vue";
import ThemeChange from "./components/ThemeChange/index.vue";

defineOptions({
  name: "Navbar",
});
</script>

<template>
  <div
    class="text-base-content opacity-90 flex h-16 w-full transition-all duration-100 top-0 justify-center sticky z-30 backdrop-blur"
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
            class="text-primary text-lg inline-flex transition-all duration-200 md:text-3xl"
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
              class="gap-1 btn btn-ghost btn-sm"
            >
              <UnoCSSIconButton icon="i-mdi-github" />
            </a>
          </span>
        </span>
      </div>
    </nav>
  </div>
</template>
