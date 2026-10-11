<script setup lang="ts">
import { Button } from "~/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "~/components/ui/tooltip";
import LocalesChange from "./components/LocalesChange/index.vue";
import ThemeChange from "./components/ThemeChange/index.vue";

defineOptions({
  name: "Navbar",
});
</script>

<template>
  <header class="bg-background/80 sticky top-0 z-30 w-full backdrop-blur">
    <nav class="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
      <RouterLink
        to="/"
        aria-label="Homepage"
        class="text-2xl font-semibold tracking-tight md:text-3xl"
      >
        <span class="text-emerald-500">Boot</span><span>Vue</span>
      </RouterLink>
      <div class="flex items-center gap-1">
        <ThemeChange />
        <LocalesChange />
        <Tooltip>
          <TooltipTrigger as-child>
            <Button
              as="a"
              href="https://github.com/kirklin/boot-vue"
              target="_blank"
              rel="nofollow"
              variant="ghost"
              size="icon"
              aria-label="GitHub"
            >
              <IMdiGithub />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="bottom">
            GitHub
          </TooltipContent>
        </Tooltip>
      </div>
    </nav>
  </header>
</template>
