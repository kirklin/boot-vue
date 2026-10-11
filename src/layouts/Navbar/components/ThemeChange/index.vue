<script setup lang="ts">
import type { BasicColorSchema } from "@vueuse/core";
import { ChevronDownIcon, MonitorIcon, MoonIcon, SunIcon } from "@lucide/vue";
import { useI18n } from "vue-i18n";
import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

defineOptions({
  name: "ThemeChange",
});
const { t } = useI18n();
const { store, system, state } = useColorMode();

const modes = [
  { value: "light", label: "Light", icon: SunIcon },
  { value: "dark", label: "Dark", icon: MoonIcon },
  { value: "auto", label: "System", icon: MonitorIcon },
] as const;

function centerOf(element: HTMLElement) {
  const rect = element.getBoundingClientRect();
  return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
}

async function changeMode(event: MouseEvent, mode: BasicColorSchema) {
  const nextState = mode === "auto" ? system.value : mode;
  if (nextState === state.value || document.startViewTransition === undefined) {
    store.value = mode;
    return;
  }

  // Items picked with the keyboard are clicked without a pointer position
  const { x, y } = event.detail === 0 ? centerOf(event.currentTarget as HTMLElement) : { x: event.clientX, y: event.clientY };
  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y),
  );
  const transition = document.startViewTransition(async () => {
    store.value = mode;
    await nextTick();
  });
  await transition.ready;
  document.documentElement.animate(
    {
      clipPath: [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ],
    },
    {
      duration: 500,
      easing: "ease-in",
      pseudoElement: "::view-transition-new(root)",
    },
  );
}
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="ghost" size="sm" :aria-label="t('Themes')">
        <SunIcon class="dark:hidden" />
        <MoonIcon class="hidden dark:block" />
        <span class="hidden md:inline">{{ t("Themes") }}</span>
        <ChevronDownIcon class="hidden opacity-60 sm:block" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" class="w-40">
      <DropdownMenuLabel>{{ t("Themes") }}</DropdownMenuLabel>
      <DropdownMenuRadioGroup :model-value="store">
        <DropdownMenuRadioItem
          v-for="mode in modes"
          :key="mode.value"
          :value="mode.value"
          @click="changeMode($event, mode.value)"
        >
          <component :is="mode.icon" />
          {{ t(mode.label) }}
        </DropdownMenuRadioItem>
      </DropdownMenuRadioGroup>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
