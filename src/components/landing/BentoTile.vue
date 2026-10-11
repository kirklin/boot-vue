<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "~/lib/utils";

const props = defineProps<{
  // Anchor the site menu links scroll to.
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  // Span two of the three columns in a regular row.
  wide?: boolean;
  // Extra classes for the scene area, such as a taller minimum height.
  visualClass?: HTMLAttributes["class"];
}>();
</script>

<template>
  <!-- Copy on top and the scene below; a tile alone in its row lays the two out side by side. -->
  <article
    :id="props.id"
    :class="cn(
      'reveal group/tile bg-background dark:bg-card flex flex-col overflow-hidden rounded-[28px]',
      'lg:only:flex-row lg:only:items-center',
      props.wide && 'lg:col-span-2',
    )"
  >
    <div class="px-8 pt-9 pb-7 sm:px-10 sm:pt-10 lg:group-only/tile:w-2/5 lg:group-only/tile:shrink-0 lg:group-only/tile:py-14 lg:group-only/tile:pr-4 lg:group-only/tile:pl-14">
      <p class="text-muted-foreground text-[15px] font-semibold">
        {{ props.eyebrow }}
      </p>
      <h3 class="mt-2 text-2xl/[1.15] font-semibold tracking-[-0.02em] text-balance sm:text-[1.75rem]/[1.15] [&:lang(zh)]:tracking-normal">
        {{ props.title }}
      </h3>
      <p class="text-muted-foreground mt-3 max-w-md text-[15px]/6 text-pretty">
        {{ props.description }}
      </p>
    </div>
    <div :class="cn('flex min-h-80 flex-1 flex-col p-2 pt-0 lg:group-only/tile:self-stretch lg:group-only/tile:pt-2', props.visualClass)">
      <slot />
    </div>
  </article>
</template>
