<script setup lang="ts">
const router = useRouter();
const errorCode = ref<number>(404);
</script>

<template>
  <div class="flex flex-col items-center gap-20 bg-base-100 py-20">
    <div class="card w-96 bg-base-100">
      <div class="card-body">
        <h2 class="card-title">
          Error {{ errorCode }}!
        </h2>
        <p>We're sorry, something is not right, page not found!</p>
        <div class="card-actions justify-end">
          <button class="btn-primary btn" @click="router.back()">
            Back !
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
