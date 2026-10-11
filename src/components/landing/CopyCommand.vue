<script setup lang="ts">
import { CheckIcon, CopyIcon } from "@lucide/vue";
import { useI18n } from "vue-i18n";

const props = defineProps<{ command: string }>();
const { t } = useI18n();
const { copy, copied } = useClipboard({ copiedDuring: 2000, legacy: true });
</script>

<template>
  <button
    type="button"
    :aria-label="`${t('home.copy.label')}: ${props.command}`"
    class="group bg-background/70 text-muted-foreground hover:border-foreground/20 hover:text-foreground focus-visible:ring-ring/50 inline-flex h-11 max-w-full items-center gap-3 rounded-full border pr-1.5 pl-5 font-mono text-[13px] shadow-xs backdrop-blur transition-colors focus-visible:ring-[3px] focus-visible:outline-none"
    @click="copy(props.command)"
  >
    <span class="text-muted-foreground/60 select-none">$</span>
    <span class="truncate">{{ props.command }}</span>
    <span class="bg-muted text-foreground group-hover:bg-accent flex size-8 shrink-0 items-center justify-center rounded-full transition-colors">
      <CheckIcon v-if="copied" class="size-3.5" />
      <CopyIcon v-else class="size-3.5" />
    </span>
  </button>
  <span aria-live="polite" class="sr-only">{{ copied ? t("home.copy.copied") : "" }}</span>
</template>
