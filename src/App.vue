<template>
  <div class="font-chinese antialiased">
    <Navbar />
    <RouterView />
    <Footer />
  </div>
</template>
<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>
