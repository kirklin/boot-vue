<script setup lang="ts">
const router = useRouter();

function testStore() {
  router.push({
    name: "StoreTest",
  });
}
</script>

<template>
  <div class="bg-base-100/90 text-base-content mt-[-4rem] min-h-screen hero">
    <div
      class="place-items-center"
    />
    <div class="text-center hero-content">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold mb-5">
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
