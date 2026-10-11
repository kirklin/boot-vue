<script setup lang="ts">
import { Button } from "~/components/ui/button";

const router = useRouter();

function testStore() {
  router.push({
    name: "StoreTest",
  });
}
</script>

<template>
  <div class="-mt-16 flex min-h-screen items-center justify-center px-4">
    <div class="max-w-md text-center">
      <h1 class="mb-5 text-5xl font-bold">
        Boot Vue
      </h1>
      <p class="mb-5">
        Mocking up web app with Boot Vue <sup>(speed)</sup>
      </p>
      <Button size="lg" @click="testStore">
        Test Store
      </Button>
    </div>
  </div>
</template>
