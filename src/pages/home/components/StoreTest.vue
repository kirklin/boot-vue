<script setup lang="ts">
import appStore from "~/store";
</script>

<template>
  <div class="py-20 bg-base-100 flex flex-col gap-20 items-center">
    <div class="mockup-phone">
      <div class="mockup-phone-camera" />
      <div class="text-white mockup-phone-display">
        <div class="text-center grid h-full place-content-center">
          <p class="text-xl tracking-wide font-medium uppercase">
            Counter:
          </p>
          <p class="text-4xl font-bold uppercase">
            {{ appStore.counter.count }}
          </p>
          <button type="button" class="btn btn-primary" @click="appStore.counter.increment()">
            increment
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
