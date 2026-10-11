<script setup lang="ts">
import { useI18n } from "vue-i18n";
import SiteLink from "~/layouts/components/SiteLink.vue";
import { EXPLORE, GET_STARTED, RESOURCES } from "~/layouts/siteLinks";
import { cn } from "~/lib/utils";

defineOptions({
  name: "SiteMenu",
});

const props = defineProps<{
  open: boolean;
  // The bar's own links, repeated here for small screens where the bar hides them.
  navItems: { href: string; label: string }[];
}>();
const emit = defineEmits<{ navigate: [] }>();
const { t } = useI18n();

const bigLink = "text-2xl font-semibold tracking-tight transition-colors hover:text-foreground/60";
const smallLink = "text-[13px] font-medium text-foreground/80 transition-colors hover:text-foreground";

const smallColumns = computed(() => [
  { title: t("siteMenu.getStarted"), links: GET_STARTED, delay: "delay-100" },
  { title: t("siteMenu.resources"), links: RESOURCES, delay: "delay-150" },
]);

// Columns fade in one after another as the card unfolds.
function column(delay: string) {
  return cn("transition duration-300 ease-out", props.open ? ["translate-y-0 opacity-100", delay] : "-translate-y-1.5 opacity-0");
}
</script>

<template>
  <!-- The large card that unfolds under the site bar. -->
  <div class="container mx-auto flex flex-col gap-10 px-4 pt-6 pb-12 md:flex-row md:gap-16 md:pt-9 md:pb-14">
    <ul :class="cn('space-y-1 md:hidden', column('delay-50'))">
      <li v-for="item in props.navItems" :key="item.href">
        <SiteLink :href="item.href" :class="bigLink" @click="emit('navigate')">
          {{ item.label }}
        </SiteLink>
      </li>
    </ul>
    <div :class="column('delay-75')">
      <p class="text-muted-foreground text-xs">
        {{ t("siteMenu.explore") }}
      </p>
      <ul class="mt-3 space-y-1">
        <li v-for="link in EXPLORE" :key="link.key">
          <SiteLink :href="link.href" :class="bigLink" @click="emit('navigate')">
            {{ t(`links.${link.key}`) }}
          </SiteLink>
        </li>
      </ul>
      <SiteLink href="/home#features" :class="cn('mt-5 inline-block', smallLink)" @click="emit('navigate')">
        {{ t("siteMenu.allFeatures") }}
      </SiteLink>
    </div>
    <div v-for="group in smallColumns" :key="group.title" :class="column(group.delay)">
      <p class="text-muted-foreground text-xs">
        {{ group.title }}
      </p>
      <ul class="mt-3 space-y-2.5">
        <li v-for="link in group.links" :key="link.key">
          <SiteLink :href="link.href" :class="smallLink" @click="emit('navigate')">
            {{ t(`links.${link.key}`) }}
          </SiteLink>
        </li>
      </ul>
    </div>
  </div>
</template>
