<script setup lang="ts">
import { logger } from "@kirklin/logger";
import { TooltipProvider } from "~/components/ui/tooltip";

logger.info("I'm ready!  ⸜(๑'ᵕ'๑)⸝⋆*");
</script>

<template>
  <TooltipProvider>
    <RouterView />
  </TooltipProvider>
</template>
