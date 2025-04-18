<script setup lang="ts">
import Avatar from "~/assets/avatar.jpg";

defineOptions({
  name: "LayoutFooter",
});
</script>

<template>
  <footer
    class="bg-base-200 text-base-content border-base-100 px-4 pt-2 border-t opacity-90 bottom-0 sticky footer footer-center"
  >
    <div class="flex flex-row gap-6 max-w-6xl w-full items-center justify-between">
      <a
        href="https://github.com/kirklin"
        target="_blank"
        rel="nofollow"
        class="inline-flex items-center justify-center hover:opacity-90"
      ><div class="mr-3 avatar">
         <div class="p-px bg-neutral h-14 w-14 mask mask-squircle">
           <img
             width="54"
             height="54"
             :src="Avatar"
             alt="Kirk Lin"
             class="mask mask-squircle"
           >
         </div>
       </div>
        <div class="text-left">
          <p class="text-base-content text-xs text-opacity-50">Created by</p>
          <h2 class="text-base-content text-lg font-bold">Kirk Lin</h2>
        </div>
      </a>
      <div class="text-left flex flex-col gap-4 items-center sm:flex-row">
        <div class="pb-4 flex gap-4">
          <a
            href="https://github.com/kirklin/boot-vue"
            target="_blank"
            rel="nofollow"
            class="bg-base-100 rounded flex flex-col w-[130px] items-center"
          >
            <h3 class="text-base-content/50 text-xs font-bold p-2">BootVue™</h3>
            <p class="text-base-content/50 text-xs tracking-tighter px-1.5 py-2">
              All Rights Reserved.
            </p>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
