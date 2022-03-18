<template>
  <header
    class="firefox:bg-opacity-90 sticky top-0 z-30 h-[60px] bg-opacity-50 backdrop-blur backdrop-filter dark:bg-opacity-90"
  >
    <div class="max-w-8xl mx-auto xl:px-8">
      <div
        class="flex h-[60px] items-center justify-between border-b border-gray-200 px-4 py-5 dark:border-gray-700 sm:px-6 lg:px-8 xl:px-0"
      >
        <p class="mb-2 text-xl font-light text-gray-600 dark:text-gray-200 md:mb-0">
          {{ isDark ? "Dark" : "Light" }}
        </p>
        <div>
          <div
            class="relative mr-2 inline-block w-10 select-none align-middle transition duration-200 ease-in"
          >
            <input
              id="prefix-1"
              type="checkbox"
              name="toggle"
              :checked="isDark"
              class="absolute right-4 block h-6 w-6 cursor-pointer appearance-none rounded-full border-4 bg-white duration-200 ease-in checked:right-0 checked:bg-blue-600"
              @click="toggleDark()"
            /><label
              for="prefix-1"
              class="block h-6 cursor-pointer overflow-hidden rounded-full bg-gray-300"
            ></label>
          </div>
          <span class="font-medium text-gray-600 dark:text-gray-200">Dark mode</span>
        </div>
      </div>
    </div>
  </header>
</template>
<script setup lang="ts">
import { toggleDark } from "../utils/darkMode";
import { isDark } from "../utils/darkMode";
</script>
