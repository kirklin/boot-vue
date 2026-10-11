<script setup lang="ts">
import { cn } from "~/lib/utils";

// Share the width equally instead of using the three-column track.
const props = defineProps<{ even?: boolean }>();
</script>

<template>
  <!-- A lone tile spans the full width, and on tablets an odd last tile fills its line. -->
  <div
    :class="cn(
      'grid gap-5 md:grid-cols-2 md:max-lg:[&>:last-child:nth-child(odd)]:col-span-2',
      props.even
        ? 'lg:grid-flow-col lg:grid-cols-none lg:auto-cols-fr'
        : 'lg:grid-cols-3 lg:[&>:only-child]:col-span-full',
    )"
  >
    <slot />
  </div>
</template>
