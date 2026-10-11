<script setup lang="ts">
import { ChevronLeftIcon } from "@lucide/vue";
import { useI18n } from "vue-i18n";

defineOptions({
  name: "ErrorPage",
});
const { t } = useI18n();
const router = useRouter();
const errorCode = ref<number>(404);
// Opened straight from an address, the page has nothing to go back to
const canGoBack = Boolean(router.options.history.state.back);
</script>

<template>
  <section class="container mx-auto flex flex-1 flex-col items-center justify-center px-4 py-24 text-center sm:py-32">
    <p class="text-foreground/10 text-[8rem]/none font-semibold tracking-tighter select-none sm:text-[10rem]/none" aria-hidden="true">
      {{ errorCode }}
    </p>
    <h1 class="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl [&:lang(zh)]:tracking-normal">
      {{ t("error.title") }}
    </h1>
    <p class="text-muted-foreground mt-3 max-w-md text-[17px]/7 text-pretty">
      {{ t("error.description") }}
    </p>
    <div class="mt-10 flex flex-col items-center gap-5 sm:flex-row sm:gap-8">
      <RouterLink
        to="/home"
        class="bg-brand text-brand-foreground hover:bg-brand/90 focus-visible:ring-brand/30 inline-flex h-12 items-center justify-center rounded-full px-7 text-[17px] font-medium transition-colors focus-visible:ring-4 focus-visible:outline-none"
      >
        {{ t("error.home") }}
      </RouterLink>
      <button
        v-if="canGoBack"
        type="button"
        class="group text-link inline-flex items-center gap-0.5 text-[17px] underline-offset-4 hover:underline"
        @click="router.back()"
      >
        <ChevronLeftIcon class="size-4 transition-transform group-hover:-translate-x-0.5" />
        {{ t("error.back") }}
      </button>
    </div>
  </section>
</template>
