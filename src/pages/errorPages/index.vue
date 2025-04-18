<script setup lang="ts">
defineOptions({
  name: "ErrorPage",
});
const router = useRouter();
const errorCode = ref<number>(404);
</script>

<template>
  <div class="bg-base-100 py-20 flex flex-col gap-20 items-center">
    <div class="bg-base-100 w-96 card">
      <div class="card-body">
        <h2 class="card-title">
          Error {{ errorCode }}!
        </h2>
        <p>We're sorry, something is not right, page not found!</p>
        <div class="justify-end card-actions">
          <button class="btn btn-primary" @click="router.back()">
            Back !
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
