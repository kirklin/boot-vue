<script setup lang="ts">
import Footer from "./Footer/index.vue";
import Navbar from "./Navbar/index.vue";

defineOptions({
  name: "Layout",
});
</script>

<template>
  <!-- Tiles sit on a gray page in light mode and on the black page in dark mode; the site bar takes the same color. -->
  <div class="bg-muted dark:bg-background flex min-h-screen flex-col antialiased [--page-surface:var(--muted)] dark:[--page-surface:var(--background)]">
    <Navbar />
    <main class="flex flex-1 flex-col">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>
