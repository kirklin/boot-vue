import type { Component } from "vue";
import IconEslint from "~icons/simple-icons/eslint";
import IconPinia from "~icons/simple-icons/pinia";
import IconPnpm from "~icons/simple-icons/pnpm";
import IconShadcn from "~icons/simple-icons/shadcnui";
import IconTailwind from "~icons/simple-icons/tailwindcss";
import IconTypeScript from "~icons/simple-icons/typescript";
import IconVite from "~icons/simple-icons/vite";
import IconVitest from "~icons/simple-icons/vitest";
import IconVue from "~icons/simple-icons/vuedotjs";
import IconVueUse from "~icons/simple-icons/vueuse";

export interface StackApp {
  name: string;
  icon: Component;
  // Gradient stops and glyph color of the icon surface.
  surface: string;
}

export const STACK: StackApp[] = [
  { name: "Vue", icon: IconVue, surface: "from-[#3d5568] to-[#1c2731] text-[#42b883]" },
  { name: "Vite", icon: IconVite, surface: "from-[#a065ff] to-[#5b35e0] text-[#ffd43b]" },
  { name: "TypeScript", icon: IconTypeScript, surface: "from-[#5aa0f5] to-[#2159c4] text-white" },
  { name: "Tailwind CSS", icon: IconTailwind, surface: "from-[#67e3ff] to-[#0b93d6] text-white" },
  { name: "shadcn-vue", icon: IconShadcn, surface: "from-white to-[#dcdce2] text-black" },
  { name: "Pinia", icon: IconPinia, surface: "from-[#ffe58f] to-[#f2bf1f] text-[#4a3500]" },
  { name: "VueUse", icon: IconVueUse, surface: "from-[#5fd3a6] to-[#21946b] text-white" },
  { name: "Vitest", icon: IconVitest, surface: "from-[#c3e86a] to-[#6f9a1d] text-white" },
  { name: "pnpm", icon: IconPnpm, surface: "from-[#ffb85c] to-[#f2850f] text-white" },
  { name: "ESLint", icon: IconEslint, surface: "from-[#8a84ff] to-[#4b32c3] text-white" },
];
