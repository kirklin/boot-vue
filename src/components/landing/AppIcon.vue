<script setup lang="ts">
import type { Component, HTMLAttributes } from "vue";
import { cn } from "~/lib/utils";

const props = defineProps<{
  icon: Component;
  // Gradient stops and glyph color of the icon surface.
  surface: string;
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <!-- A logo drawn as an app icon: squircle, lit brand gradient, soft shadow. -->
  <span
    :class="cn(
      'relative flex items-center justify-center overflow-hidden rounded-[22.5%] bg-linear-to-b shadow-[0_1px_2px_rgb(0_0_0/0.14),0_8px_18px_-6px_rgb(0_0_0/0.35)]',
      props.surface,
      props.class,
    )"
  >
    <span class="absolute inset-0 bg-[radial-gradient(120%_80%_at_30%_0%,rgb(255_255_255/0.32),transparent_60%)]" />
    <component :is="props.icon" class="relative size-1/2 drop-shadow-[0_1px_1px_rgb(0_0_0/0.25)]" />
  </span>
</template>
