<script setup lang="ts">
import { FileJsonIcon } from "@lucide/vue";
import { useI18n } from "vue-i18n";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import BentoTile from "../BentoTile.vue";
import { glass } from "../glass";
import Scene from "../Scene.vue";
import Segmented from "../Segmented.vue";

type Language = "en" | "zh";

const { t, locale } = useI18n();
// The preview starts in the language the page is not shown in.
const preview = ref<Language>(locale.value === "zh" ? "en" : "zh");

function sample(key: string) {
  return t(`home.features.i18n.sample.${key}`, {}, { locale: preview.value });
}
</script>

<template>
  <BentoTile
    id="i18n"
    eyebrow="vue-i18n"
    :title="t('home.features.i18n.title')"
    :description="t('home.features.i18n.description')"
    wide
  >
    <Scene class="items-center justify-center gap-6 bg-[linear-gradient(180deg,#fdf1e7,#fbf7f3)] p-6 @xl:p-8">
      <Segmented
        v-model="preview"
        :label="t('home.features.i18n.language')"
        :options="[{ value: 'en', label: 'English' }, { value: 'zh', label: '中文' }]"
      />
      <div
        :key="preview"
        :lang="preview === 'zh' ? 'zh-CN' : 'en'"
        :class="cn(glass, 'animate-in fade-in slide-in-from-bottom-2 flex w-full max-w-md items-center gap-4 rounded-[22px] p-5 duration-500')"
      >
        <span class="bg-vue flex size-12 shrink-0 items-center justify-center rounded-full text-lg font-semibold text-white">K</span>
        <div class="min-w-0 flex-1">
          <p class="truncate text-[17px] font-semibold">
            {{ sample("title") }}
          </p>
          <p class="text-muted-foreground mt-0.5 text-[13px]">
            {{ sample("body") }}
          </p>
        </div>
        <Button size="sm" class="shrink-0 rounded-full">
          {{ sample("action") }}
        </Button>
      </div>
      <p :class="cn(glass, 'text-muted-foreground flex items-center gap-1.5 rounded-full px-4 py-1.5 font-mono text-[12px]')">
        <FileJsonIcon class="size-3.5" />
        src/locales/<span class="text-foreground font-medium">{{ preview }}.json</span>
      </p>
    </Scene>
  </BentoTile>
</template>
