<template>
  <section>
    <div class="container mx-auto py-8 text-center">
      <div>
        <p class="text-10xl font-medium uppercase tracking-wide text-gray-600 dark:text-gray-200">
          Counter:
        </p>
        <h5 class="text-8xl font-bold text-white">
          <span class="inline text-gray-600 dark:text-white">
            {{ appStore.counter.count }}
          </span>
        </h5>
      </div>

      <div class="mx-auto mt-4 flex w-52 p-4">
        <button
          type="button"
          class="w-full rounded-lg bg-white py-2 px-4 text-center text-base font-semibold text-indigo-500 text-white shadow-md transition duration-200 ease-in hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-indigo-200"
          @click="appStore.counter.increment()"
        >
          increment
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import appStore from "../store";
</script>
<style scoped></style>
