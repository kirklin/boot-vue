<script setup lang="ts">
import { ArrowUpRightIcon } from "@lucide/vue";
import { useI18n } from "vue-i18n";
import IconDocker from "~icons/simple-icons/docker";
import IconNetlify from "~icons/simple-icons/netlify";
import IconVercel from "~icons/simple-icons/vercel";
import { SiteConstant } from "~/constant/siteConstant";
import { cn } from "~/lib/utils";
import BentoTile from "../BentoTile.vue";
import { glass } from "../glass";
import Scene from "../Scene.vue";

const { t } = useI18n();

const targets = computed(() => [
  { name: "Netlify", icon: IconNetlify, hint: t("home.features.deploy.netlify"), href: SiteConstant.NETLIFY_DEPLOY_URL, surface: "bg-[#05bdba] text-white" },
  { name: "Vercel", icon: IconVercel, hint: t("home.features.deploy.vercel"), href: SiteConstant.VERCEL_DEPLOY_URL, surface: "bg-black text-white dark:bg-white dark:text-black" },
  { name: "Docker", icon: IconDocker, hint: t("home.features.deploy.docker"), href: SiteConstant.DOCKER_GUIDE_URL, surface: "bg-[#1d63ed] text-white" },
]);
</script>

<template>
  <BentoTile
    id="deploy"
    :eyebrow="t('home.features.deploy.eyebrow')"
    :title="t('home.features.deploy.title')"
    :description="t('home.features.deploy.description')"
  >
    <Scene class="justify-center gap-3 bg-[linear-gradient(180deg,#e8f6f6,#f4fafa)] p-6">
      <a
        v-for="target in targets"
        :key="target.name"
        :href="target.href"
        target="_blank"
        rel="noreferrer"
        :class="cn(glass, 'group flex items-center gap-4 rounded-[18px] p-3.5 pr-5 transition-transform hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none')"
      >
        <span :class="cn('flex size-11 shrink-0 items-center justify-center rounded-[12px] [&_svg]:size-5', target.surface)">
          <component :is="target.icon" />
        </span>
        <span class="min-w-0 flex-1">
          <span class="block text-[15px] font-semibold">{{ target.name }}</span>
          <span class="text-muted-foreground block truncate text-[13px]">{{ target.hint }}</span>
        </span>
        <ArrowUpRightIcon class="text-muted-foreground size-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
    </Scene>
  </BentoTile>
</template>
