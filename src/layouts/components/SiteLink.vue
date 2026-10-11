<script setup lang="ts">
import type { RouteLocationRaw } from "vue-router";

const props = defineProps<{
  // A path inside the app, or the address of another site.
  href: string;
}>();

// Forced, so a link to the section already in the address still scrolls back to it.
const to = computed<RouteLocationRaw>(() => {
  const [path, hash] = props.href.split("#");
  return { path, hash: hash ? `#${hash}` : "", force: true };
});
</script>

<template>
  <a v-if="props.href.startsWith('http')" :href="props.href" target="_blank" rel="noreferrer">
    <slot />
  </a>
  <RouterLink v-else :to="to">
    <slot />
  </RouterLink>
</template>
