<script setup lang="ts">
import { MonitorIcon, MoonIcon, SunIcon } from "@lucide/vue";
import { useI18n } from "vue-i18n";
import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { barButton } from "../barButton";

defineOptions({
  name: "ThemeChange",
});
const { t } = useI18n();
const { mode, changeMode } = useThemeSwitch();

const modes = [
  { value: "light", label: "Light", icon: SunIcon },
  { value: "dark", label: "Dark", icon: MoonIcon },
  { value: "auto", label: "System", icon: MonitorIcon },
] as const;
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="ghost" size="icon-sm" :class="barButton" :aria-label="t('Themes')">
        <SunIcon class="size-4 scale-100 rotate-0 transition-transform duration-300 dark:scale-0 dark:-rotate-90" />
        <MoonIcon class="absolute size-4 scale-0 rotate-90 transition-transform duration-300 dark:scale-100 dark:rotate-0" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" class="w-36">
      <DropdownMenuRadioGroup :model-value="mode">
        <DropdownMenuRadioItem
          v-for="item in modes"
          :key="item.value"
          :value="item.value"
          @click="changeMode(item.value, $event)"
        >
          <component :is="item.icon" />
          {{ t(item.label) }}
        </DropdownMenuRadioItem>
      </DropdownMenuRadioGroup>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
