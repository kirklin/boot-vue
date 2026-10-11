<script setup lang="ts">
import { ChevronDownIcon } from "@lucide/vue";
import { useI18n } from "vue-i18n";
import { Button } from "~/components/ui/button";
import { SiteConstant } from "~/constant/siteConstant";
import { cn } from "~/lib/utils";
import { barButton } from "./components/barButton";
import LocalesChange from "./components/LocalesChange/index.vue";
import SiteMenu from "./components/SiteMenu/index.vue";
import ThemeChange from "./components/ThemeChange/index.vue";

defineOptions({
  name: "Navbar",
});
const { t } = useI18n();
const route = useRoute();
const open = ref(false);
let timer: ReturnType<typeof setTimeout> | undefined;
let pointerType = "";

const navItems = computed(() => [
  { href: "/home", label: t("nav.home") },
  { href: "/StoreTest", label: t("nav.store") },
]);

// A short delay keeps the card from flickering while the pointer crosses the bar.
function hover(event: PointerEvent, next: boolean) {
  if (event.pointerType !== "mouse") {
    return;
  }
  clearTimeout(timer);
  timer = setTimeout(() => {
    open.value = next;
  }, next ? 80 : 180);
}

function close() {
  clearTimeout(timer);
  open.value = false;
}

function rememberPointer(event: PointerEvent) {
  pointerType = event.pointerType;
}

function toggle(event: MouseEvent) {
  clearTimeout(timer);
  // A mouse has already opened it by hovering; keyboard and touch toggle it.
  const byMouse = event.detail > 0 && pointerType === "mouse";
  open.value = byMouse || !open.value;
}

onKeyStroke("Escape", close);
onBeforeUnmount(() => clearTimeout(timer));
</script>

<template>
  <!--
    The site bar: translucent and borderless, tinted with the page color underneath (set as `--page-surface`).
    The menu unfolds from the same surface as one large card while the page behind blurs.
  -->
  <header class="sticky top-0 z-50 h-12 w-full" @pointerleave="hover($event, false)">
    <div
      aria-hidden="true"
      :class="cn(
        'fixed inset-0 -z-10 bg-[color-mix(in_oklab,var(--page-surface,var(--background))_40%,transparent)] transition-[opacity,backdrop-filter] duration-300 dark:bg-black/50',
        open ? 'opacity-100 backdrop-blur-xl' : 'pointer-events-none opacity-0',
      )"
      @click="close"
      @pointerenter="hover($event, false)"
    />

    <div
      :class="cn(
        'absolute inset-x-0 top-0 backdrop-blur-xl backdrop-saturate-150 transition-colors duration-300',
        // Nearly opaque while open so the card reads clean over the page.
        open
          ? 'bg-[color-mix(in_oklab,var(--page-surface,var(--background))_97%,transparent)]'
          : 'bg-[color-mix(in_oklab,var(--page-surface,var(--background))_80%,transparent)]',
      )"
    >
      <!-- Three columns keep the links centered whatever the width of the logo and the controls. -->
      <div class="container mx-auto grid h-12 grid-cols-[1fr_auto_1fr] items-center px-4">
        <RouterLink to="/home" class="flex items-center gap-2 justify-self-start transition-opacity hover:opacity-70" @click="close">
          <img src="/pwa-192x192.png" alt="" width="22" height="22" class="size-[22px] rounded-full">
          <span class="text-[15px] font-semibold tracking-tight">Boot Vue</span>
        </RouterLink>

        <nav class="col-start-2 hidden items-center gap-8 md:flex">
          <RouterLink
            :to="navItems[0].href"
            :class="cn('hover:text-foreground text-[13px] transition-colors', route.path === navItems[0].href ? 'text-foreground' : 'text-foreground/60')"
            @click="close"
            @pointerenter="hover($event, false)"
          >
            {{ navItems[0].label }}
          </RouterLink>
          <button
            type="button"
            :aria-expanded="open"
            aria-controls="site-menu"
            :class="cn('hover:text-foreground flex items-center gap-1 text-[13px] transition-colors', open ? 'text-foreground' : 'text-foreground/60')"
            @pointerdown="rememberPointer"
            @pointerenter="hover($event, true)"
            @click="toggle"
          >
            {{ t("nav.features") }}
            <ChevronDownIcon :class="cn('size-3 transition-transform duration-300', open && 'rotate-180')" />
          </button>
          <RouterLink
            v-for="item in navItems.slice(1)"
            :key="item.href"
            :to="item.href"
            :class="cn('hover:text-foreground text-[13px] transition-colors', route.path === item.href ? 'text-foreground' : 'text-foreground/60')"
            @click="close"
            @pointerenter="hover($event, false)"
          >
            {{ item.label }}
          </RouterLink>
        </nav>

        <div class="col-start-3 flex items-center gap-0.5 justify-self-end">
          <LocalesChange />
          <ThemeChange />
          <Button
            as="a"
            :href="SiteConstant.REPOSITORY_URL"
            target="_blank"
            rel="noreferrer"
            variant="ghost"
            size="icon-sm"
            :class="barButton"
            aria-label="GitHub"
          >
            <IMdiGithub class="size-[18px]" />
          </Button>
          <button
            type="button"
            :aria-expanded="open"
            aria-controls="site-menu"
            :aria-label="open ? t('nav.closeMenu') : t('nav.openMenu')"
            class="relative ml-1 flex size-8 items-center justify-center md:hidden"
            @click="open = !open"
          >
            <span :class="cn('bg-foreground absolute h-[1.5px] w-4 rounded-full transition-transform duration-300', open ? 'rotate-45' : '-translate-y-[3.5px]')" />
            <span :class="cn('bg-foreground absolute h-[1.5px] w-4 rounded-full transition-transform duration-300', open ? '-rotate-45' : 'translate-y-[3.5px]')" />
          </button>
        </div>
      </div>

      <div
        id="site-menu"
        :inert="!open"
        :class="cn('grid transition-[grid-template-rows] duration-300 ease-out', open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]')"
      >
        <div class="min-h-0 overflow-hidden">
          <div class="max-h-[calc(100dvh-3rem)] overflow-y-auto">
            <SiteMenu :open="open" :nav-items="navItems" @navigate="close" />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
