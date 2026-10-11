import type { Ref } from "vue";

/**
 * Steps through animation frames while the element is on screen; `durations[i]` is how long frame i stays, in milliseconds.
 * The last frame is the finished state: it shows before the element first scrolls into view, between runs,
 * and to visitors who prefer reduced motion.
 */
export function useTimeline(target: Ref<HTMLElement | null | undefined>, durations: readonly number[]) {
  const frame = ref(durations.length - 1);
  const visible = useElementVisibility(target);
  const motion = usePreferredReducedMotion();

  watchEffect((onCleanup) => {
    if (!visible.value || motion.value === "reduce") {
      return;
    }
    const timer = setTimeout(() => {
      frame.value = (frame.value + 1) % durations.length;
    }, durations[frame.value]);
    onCleanup(() => clearTimeout(timer));
  });

  return frame;
}
