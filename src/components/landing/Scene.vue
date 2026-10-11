<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "~/lib/utils";

const props = defineProps<{ class?: HTMLAttributes["class"] }>();
</script>

<template>
  <!--
    The picture area of a tile: a softly tinted backdrop in light mode and a plain black screen in dark mode,
    where the color comes from what is on it.
  -->
  <div :class="cn('@container relative flex flex-1 flex-col overflow-hidden rounded-[22px] dark:bg-black dark:bg-none', props.class)">
    <slot />
  </div>
</template>
