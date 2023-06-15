<script setup lang="ts">
import Navbar from "./Navbar/index.vue";
import Footer from "./Footer/index.vue";

defineOptions({
  name: "Layout",
});
</script>

<template>
  <div class="font-chinese antialiased">
    <div class="min-h-screen">
      <Navbar />
      <RouterView />
    </div>
    <Footer />
  </div>
</template>

<style scoped>

</style>
