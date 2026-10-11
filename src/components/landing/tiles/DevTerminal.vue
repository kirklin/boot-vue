<script setup lang="ts">
import { version } from "vite/package.json";

interface Segment {
  text: string;
  class?: string;
}

const COMMAND = "pnpm dev";

// The dev server's ANSI styles, in colors for the light and the dark theme.
const dim = "text-[#8e8e93]";
const bold = "font-semibold text-[#1d1d1f] dark:text-white";
const cyan = "text-[#0e7a92] dark:text-[#5ccbe3]";
const green = "text-[#248a3d] dark:text-[#32d74b]";
const yellow = "text-[#a05a00] dark:text-[#ffd60a]";

const target = useTemplateRef<HTMLElement>("terminal");

// Frames: the prompt, the command typed out, then the output; each frame after the typing shows a few more lines.
const TYPED = COMMAND.length;
const SHOWN = [1, 3, 5, 6, 7, 8, 10, 11];
const DURATIONS = [800, ...Array.from(COMMAND, (_, index) => (index === TYPED - 1 ? 450 : 75)), 350, 450, 300, 120, 120, 120, 1800, 6000];
const frame = useTimeline(target, DURATIONS);

// The hmr update line carries the time it appears at, like in a real terminal.
const updatedAt = shallowRef(new Date());
watch(frame, (value) => {
  if (value === DURATIONS.length - 1) {
    updatedAt.value = new Date();
  }
});
const time = useDateFormat(updatedAt, "h:mm:ss A");

// What `vite` prints on this template's dev server, line by line.
const output = computed<Segment[][]>(() => [
  [{ text: "$ vite", class: dim }],
  [{ text: "  ➜ MCP:      ", class: cyan }, { text: "Mcp server is running at ", class: dim }, { text: "http://localhost:8888/__mcp/sse", class: green }],
  [],
  [{ text: "  " }, { text: "VITE", class: `${green} font-bold` }, { text: ` v${version}`, class: green }, { text: "  ready in ", class: dim }, { text: "589", class: bold }, { text: " ms", class: dim }],
  [],
  [{ text: "  ➜  ", class: green }, { text: "Local", class: bold }, { text: ":   " }, { text: "http://localhost:", class: cyan }, { text: "8888", class: `${cyan} font-bold` }, { text: "/", class: cyan }],
  [{ text: "  ➜  ", class: green }, { text: "Inspect", class: bold }, { text: ": " }, { text: "http://localhost:", class: green }, { text: "8888", class: `${green} font-bold` }, { text: "/__inspect/", class: green }],
  [{ text: "  ➜  ", class: green }, { text: "Vue DevTools", class: bold }, { text: ": " }, { text: "Open ", class: green }, { text: "http://localhost:8888/__devtools__/", class: cyan }, { text: " as a separate window", class: green }],
  [{ text: "  ➜  ", class: green }, { text: "Vue DevTools", class: bold }, { text: ": " }, { text: "Press ", class: green }, { text: "Option(⌥)", class: yellow }, { text: "+", class: dim }, { text: "Shift(⇧)", class: yellow }, { text: "+", class: dim }, { text: "D", class: yellow }, { text: " in App to toggle the Vue DevTools", class: green }],
  [],
  [{ text: time.value, class: dim }, { text: " [vite]", class: `${cyan} font-bold` }, { text: " (client)", class: dim }, { text: " hmr update ", class: green }, { text: "/src/pages/home/index.vue", class: dim }],
]);

const typed = computed(() => COMMAND.slice(0, Math.min(frame.value, TYPED)));
const lines = computed(() => output.value.slice(0, frame.value <= TYPED ? 0 : SHOWN[frame.value - TYPED - 1]));
</script>

<template>
  <!-- Replays the dev server starting up in a Terminal window, cropped by the tile's edge. -->
  <div
    ref="terminal"
    aria-hidden="true"
    class="absolute top-5 bottom-5 left-5 -right-[60%] flex flex-col overflow-hidden rounded-[14px] bg-white/90 shadow-[0_1px_2px_rgb(0_0_0/0.06),0_30px_60px_-24px_rgb(15_23_42/0.35)] ring-1 ring-black/[0.08] backdrop-blur-xl dark:bg-[#141416]/90 dark:shadow-[0_30px_60px_-24px_rgb(0_0_0/0.8)] dark:ring-white/10"
  >
    <div class="relative flex h-10 shrink-0 items-center gap-2 px-4">
      <span class="size-3 rounded-full bg-[#ff5f57]" />
      <span class="size-3 rounded-full bg-[#febc2e]" />
      <span class="size-3 rounded-full bg-[#28c840]" />
      <span class="text-muted-foreground absolute inset-x-0 text-center text-xs font-medium">my-app — zsh</span>
    </div>
    <div class="flex-1 overflow-hidden px-4 pt-1 pb-4 font-mono text-[12px]/[19px] whitespace-pre">
      <p>
        <span :class="dim">my-app % </span><span :class="bold">{{ typed }}</span><span
          v-if="frame <= TYPED"
          class="animate-caret-blink inline-block h-[14px] w-[7px] bg-current align-[-3px] opacity-60 motion-reduce:animate-none"
        />
      </p>
      <p v-for="(line, index) in lines" :key="index" class="min-h-[19px]">
        <span v-for="(segment, part) in line" :key="part" :class="segment.class">{{ segment.text }}</span>
      </p>
    </div>
  </div>
</template>
