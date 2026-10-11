<script setup lang="ts">
import type { StackApp } from "./stack";
import AppIcon from "./AppIcon.vue";

const props = defineProps<{ apps: StackApp[] }>();

const ICON = 52;
const GAP = 6;
// How much larger the icon right under the pointer gets, and how far the effect reaches.
const GROWTH = 0.75;
const REACH = 160;

const list = useTemplateRef<HTMLUListElement>("list");

// Every icon grows with its closeness to the pointer, and the one under the pointer shows its name.
function magnify(pointerX: number | null) {
  const element = list.value;
  if (!element) {
    return;
  }
  const items = [...element.children] as HTMLElement[];
  const { left, width } = element.getBoundingClientRect();
  // Distances are measured on the resting layout; the dock grows around its center.
  const restingLeft = left + width / 2 - (items.length * (ICON + GAP) - GAP) / 2;
  let active = -1;
  let nearest = ICON / 2 + GAP;
  items.forEach((item, index) => {
    const distance = pointerX === null ? REACH : Math.abs(pointerX - (restingLeft + index * (ICON + GAP) + ICON / 2));
    const closeness = Math.cos((Math.min(distance / REACH, 1) * Math.PI) / 2);
    item.style.setProperty("--size", `${ICON * (1 + GROWTH * closeness)}px`);
    if (distance < nearest) {
      nearest = distance;
      active = index;
    }
  });
  items.forEach((item, index) => item.toggleAttribute("data-active", index === active));
}
</script>

<template>
  <div class="relative" @pointermove="magnify($event.clientX)" @pointerleave="magnify(null)">
    <div class="absolute inset-x-0 bottom-0 h-[71px] rounded-[22px] bg-white/45 shadow-[0_18px_40px_-22px_rgb(0_0_0/0.45)] backdrop-blur-2xl backdrop-saturate-150 dark:bg-white/[0.09]" />
    <ul ref="list" class="relative flex items-end gap-1.5 px-2 pt-2 pb-[11px]">
      <li
        v-for="app in props.apps"
        :key="app.name"
        class="group/app relative size-[var(--size,52px)] shrink-0 transition-[width,height] duration-100 ease-out"
      >
        <AppIcon :icon="app.icon" :surface="app.surface" class="size-full" />
        <span class="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 rounded-lg bg-white/90 px-2.5 py-1 text-xs font-medium whitespace-nowrap text-zinc-900 opacity-0 shadow-lg backdrop-blur transition-opacity group-data-active/app:opacity-100 dark:bg-zinc-800/90 dark:text-white">
          {{ app.name }}
        </span>
        <span class="bg-foreground/45 absolute -bottom-[7px] left-1/2 size-1 -translate-x-1/2 rounded-full" />
      </li>
    </ul>
  </div>
</template>
