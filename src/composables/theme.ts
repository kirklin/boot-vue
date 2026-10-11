import type { BasicColorSchema } from "@vueuse/core";

function centerOf(element: Element) {
  const rect = element.getBoundingClientRect();
  return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
}

/**
 * The color mode the visitor picked: light, dark or the system's, stored by VueUse.
 * A change made with a click reveals the new theme in a circle growing from where the click happened.
 */
export function useThemeSwitch() {
  const { store, system, state } = useColorMode();

  async function changeMode(mode: BasicColorSchema, event: MouseEvent) {
    const nextState = mode === "auto" ? system.value : mode;
    if (nextState === state.value || document.startViewTransition === undefined) {
      store.value = mode;
      return;
    }

    // Controls picked with the keyboard are clicked without a pointer position
    const { x, y } = event.detail === 0 ? centerOf(event.currentTarget as Element) : { x: event.clientX, y: event.clientY };
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

  return { mode: store, changeMode };
}
