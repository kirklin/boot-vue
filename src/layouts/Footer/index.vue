<script setup lang="ts">
import { useI18n } from "vue-i18n";
import avatar from "~/assets/avatar.jpg";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { SiteConstant } from "~/constant/siteConstant";
import SiteLink from "~/layouts/components/SiteLink.vue";
import { EXPLORE, GET_STARTED, RESOURCES } from "~/layouts/siteLinks";

defineOptions({
  name: "LayoutFooter",
});
const { t } = useI18n();
const year = new Date().getFullYear();

const groups = computed(() => [
  { title: t("siteMenu.explore"), links: EXPLORE },
  { title: t("siteMenu.getStarted"), links: GET_STARTED },
  { title: t("siteMenu.resources"), links: RESOURCES },
]);
</script>

<template>
  <footer class="border-border/60 border-t text-[13px]">
    <div class="container mx-auto px-4 pt-12 pb-10">
      <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
        <div>
          <RouterLink to="/home" class="inline-flex items-center gap-2 transition-opacity hover:opacity-70">
            <img src="/pwa-192x192.png" alt="" width="22" height="22" class="size-[22px] rounded-full">
            <span class="text-[15px] font-semibold tracking-tight">Boot Vue</span>
          </RouterLink>
          <p class="text-muted-foreground mt-3 max-w-xs leading-5">
            {{ t("footer.description") }}
          </p>
        </div>
        <div v-for="group in groups" :key="group.title">
          <p class="font-semibold">
            {{ group.title }}
          </p>
          <ul class="mt-3 space-y-2">
            <li v-for="link in group.links" :key="link.key">
              <SiteLink :href="link.href" class="text-muted-foreground hover:text-foreground transition-colors">
                {{ t(`links.${link.key}`) }}
              </SiteLink>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-border/60 text-muted-foreground mt-10 flex flex-col gap-4 border-t pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p>
          Copyright © 2023-{{ year }} Kirk Lin. {{ t("footer.license") }}
        </p>
        <a
          :href="SiteConstant.AUTHOR_URL"
          target="_blank"
          rel="noreferrer"
          class="hover:text-foreground flex items-center gap-2 transition-colors"
        >
          <Avatar class="size-6">
            <AvatarImage :src="avatar" alt="" />
            <AvatarFallback>KL</AvatarFallback>
          </Avatar>
          {{ t("footer.madeBy", { name: "Kirk Lin" }) }}
        </a>
      </div>
    </div>
  </footer>
</template>
