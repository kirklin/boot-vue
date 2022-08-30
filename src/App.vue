<script setup lang="ts">
import { logLabeled } from "./utils/logger";
import Navbar from "./components/layout/Navbar/index.vue";
import Footer from "./components/layout/Footer/index.vue";
logLabeled("I'm ready!  ⸜(๑'ᵕ'๑)⸝⋆*", "log", "", "color: #66ccff");
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
