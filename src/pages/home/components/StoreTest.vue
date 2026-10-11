<script setup lang="ts">
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "~/components/ui/card";
import appStore from "~/store";
</script>

<template>
  <div class="flex flex-col items-center gap-20 py-20">
    <Card class="w-72 text-center">
      <CardHeader>
        <CardTitle class="text-xl tracking-wide uppercase">
          Counter:
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p class="text-4xl font-bold tabular-nums">
          {{ appStore.counter.count }}
        </p>
      </CardContent>
      <CardFooter class="justify-center">
        <Button type="button" @click="appStore.counter.increment()">
          increment
        </Button>
      </CardFooter>
    </Card>
  </div>
</template>
