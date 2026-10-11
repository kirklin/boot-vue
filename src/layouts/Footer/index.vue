<script setup lang="ts">
import avatar from "~/assets/avatar.jpg";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";

defineOptions({
  name: "LayoutFooter",
});
</script>

<template>
  <footer class="bg-background/90 sticky bottom-0 border-t backdrop-blur">
    <div class="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-3">
      <a
        href="https://github.com/kirklin"
        target="_blank"
        rel="nofollow"
        class="flex items-center gap-3 hover:opacity-90"
      >
        <Avatar class="size-12">
          <AvatarImage :src="avatar" alt="Kirk Lin" />
          <AvatarFallback>KL</AvatarFallback>
        </Avatar>
        <div>
          <p class="text-muted-foreground text-xs">Created by</p>
          <h2 class="text-lg font-bold">Kirk Lin</h2>
        </div>
      </a>
      <a
        href="https://github.com/kirklin/boot-vue"
        target="_blank"
        rel="nofollow"
        class="bg-muted text-muted-foreground flex flex-col items-center gap-1 rounded-lg px-4 py-2 text-xs"
      >
        <h3 class="font-bold">BootVue™</h3>
        <p class="tracking-tight">All Rights Reserved.</p>
      </a>
    </div>
  </footer>
</template>
