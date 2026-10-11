<script setup lang="ts" generic="T extends string">
import type { HTMLAttributes } from "vue";
import { cn } from "~/lib/utils";
import { glass } from "./glass";

const props = defineProps<{
  label: string;
  options: { value: T; label: string }[];
  class?: HTMLAttributes["class"];
}>();
const model = defineModel<T>({ required: true });
</script>

<template>
  <!-- A glass segmented control: one choice out of a few. -->
  <div role="radiogroup" :aria-label="props.label" :class="cn(glass, 'inline-flex rounded-full p-1', props.class)">
    <button
      v-for="option in props.options"
      :key="option.value"
      type="button"
      role="radio"
      :aria-checked="option.value === model"
      :class="cn(
        'flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[13px] font-medium whitespace-nowrap transition-colors duration-200',
        option.value === model
          ? 'bg-white text-zinc-900 shadow-[0_1px_3px_rgb(0_0_0/0.12)] dark:bg-white/20 dark:text-white'
          : 'text-foreground/60 hover:text-foreground',
      )"
      @click="model = option.value"
    >
      {{ option.label }}
    </button>
  </div>
</template>
