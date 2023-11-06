<script setup lang="ts">
const router = useRouter();

function testStore() {
  router.push({
    name: "StoreTest",
  });
}
</script>

<template>
  <div class="mt-[-4rem] min-h-screen text-primary-content hero">
    <!--  <div class="hero min-h-screen from-primary to-secondary" style="background-image: url(https://img.js.design/assets/Resources/background/home-bg-2.png);"> -->
    <div
      class="place-items-center from-primary to-base-100 bg-gradient-to-bl hero-overlay"
    />
    <div class="text-center hero-content">
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold">
          Boot Vue
        </h1>
        <p class="mb-5">
          Mocking up web app with Boot Vue <sup>(speed)</sup>
        </p>
        <button class="btn btn-primary" @click="testStore">
          Test Store
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
