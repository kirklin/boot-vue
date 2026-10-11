<script setup lang="ts">
import type { BasicColorSchema } from "@vueuse/core";
import { useI18n } from "vue-i18n";
import { cn } from "~/lib/utils";
import { glass, selectedRing } from "../glass";

const { t } = useI18n();
const { mode, changeMode } = useThemeSwitch();

const appearances: { value: BasicColorSchema; label: string }[] = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
  { value: "auto", label: "System" },
];

// A desktop with one window, painted in the light or the dark palette.
function desktop(dark: boolean) {
  return {
    wallpaper: dark ? "bg-[linear-gradient(160deg,#1f4a3c,#0a1512)]" : "bg-[linear-gradient(160deg,#cdeedd,#eef8f2)]",
    window: dark ? "bg-[#1c1c1e]" : "bg-white",
    sidebar: dark ? "bg-[#2c2c2e]/70" : "bg-[#f2f2f7]",
    line: dark ? "bg-[#3a3a3c]" : "bg-[#e5e5ea]",
  };
}
</script>

<template>
  <!-- An appearance chooser with a desktop thumbnail per theme, wired to the site theme. -->
  <div :class="cn(glass, 'w-full max-w-[24rem] rounded-[22px] p-4 pb-3.5')">
    <p class="px-0.5 text-[13px] font-semibold">
      {{ t("home.features.theming.appearance") }}
    </p>
    <div role="radiogroup" :aria-label="t('home.features.theming.appearance')" class="mt-3.5 grid grid-cols-3 gap-3.5">
      <button
        v-for="appearance in appearances"
        :key="appearance.value"
        type="button"
        role="radio"
        :aria-checked="mode === appearance.value"
        class="group flex flex-col items-center gap-2.5 outline-none"
        @click="changeMode(appearance.value, $event)"
      >
        <span
          :class="cn(
            'group-focus-visible:ring-ring relative block aspect-[4/3] w-full overflow-hidden rounded-[12px] shadow-[0_1px_2px_rgb(0_0_0/0.1),0_8px_20px_-8px_rgb(0_0_0/0.3)] transition duration-300 group-focus-visible:ring-2',
            mode === appearance.value ? selectedRing : 'group-hover:-translate-y-0.5',
          )"
        >
          <span
            v-for="dark in appearance.value === 'auto' ? [false, true] : [appearance.value === 'dark']"
            :key="String(dark)"
            :class="cn('absolute inset-0', desktop(dark).wallpaper, appearance.value === 'auto' && dark && '[clip-path:polygon(62%_0,100%_0,100%_100%,38%_100%)]')"
          >
            <span :class="cn('absolute top-[24%] right-[-12%] bottom-[-12%] left-[14%] overflow-hidden rounded-tl-[7px] shadow-[0_4px_12px_rgb(0_0_0/0.25)]', desktop(dark).window)">
              <span class="flex gap-[3px] p-[6px]">
                <span class="size-[5px] rounded-full bg-[#ff5f57]" />
                <span class="size-[5px] rounded-full bg-[#febc2e]" />
                <span class="size-[5px] rounded-full bg-[#28c840]" />
              </span>
              <span :class="cn('absolute top-0 bottom-0 left-0 w-[30%]', desktop(dark).sidebar)" />
              <span :class="cn('absolute top-[38%] left-[38%] h-[7%] w-[40%] rounded-full', desktop(dark).line)" />
              <span :class="cn('absolute top-[56%] left-[38%] h-[7%] w-[28%] rounded-full', desktop(dark).line)" />
            </span>
          </span>
        </span>
        <span :class="cn('text-[13px] font-medium transition-colors', mode === appearance.value ? 'text-foreground' : 'text-muted-foreground')">
          {{ t(appearance.label) }}
        </span>
      </button>
    </div>
  </div>
</template>
