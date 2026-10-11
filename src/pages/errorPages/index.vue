<script setup lang="ts">
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "~/components/ui/card";

defineOptions({
  name: "ErrorPage",
});
const router = useRouter();
const errorCode = ref<number>(404);
</script>

<template>
  <div class="flex flex-col items-center gap-20 px-4 py-20">
    <Card class="w-full max-w-96">
      <CardHeader>
        <CardTitle class="text-lg font-semibold">
          Error {{ errorCode }}!
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>We're sorry, something is not right, page not found!</p>
      </CardContent>
      <CardFooter class="justify-end">
        <Button @click="router.back()">
          Back !
        </Button>
      </CardFooter>
    </Card>
  </div>
</template>
