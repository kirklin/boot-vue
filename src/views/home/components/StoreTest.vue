<template>
  <div class="flex flex-col items-center gap-20 bg-base-100 py-20">
    <div class="mockup-phone">
      <div class="camera"></div>
      <div class="display">
        <div class="artboard artboard-demo phone-1">
          <p class="text-10xl text-base font-medium uppercase tracking-wide">Counter:</p>
          <p class="text-10xl text-base font-bold uppercase">
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

<script setup lang="ts">
import appStore from "~/store";
</script>
