<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { Tooltip, TooltipContent, TooltipTrigger } from "~/components/ui/tooltip";
import BentoTile from "../BentoTile.vue";
import Scene from "../Scene.vue";
import { COUNTER_SOURCE } from "./counterSource";

const { t } = useI18n();
const muted = "text-[#8e8e93]";
</script>

<template>
  <BentoTile
    id="auto-imports"
    :eyebrow="t('home.features.autoImport.eyebrow')"
    :title="t('home.features.autoImport.title')"
    :description="t('home.features.autoImport.description')"
  >
    <Scene class="bg-[linear-gradient(180deg,#eef1f8,#f6f7fb)]">
      <div class="absolute top-5 bottom-5 left-5 -right-[40%] flex flex-col overflow-hidden rounded-[14px] bg-white/90 shadow-[0_1px_2px_rgb(0_0_0/0.06),0_30px_60px_-24px_rgb(15_23_42/0.35)] ring-1 ring-black/[0.08] backdrop-blur-xl dark:bg-[#141416]/90 dark:shadow-[0_30px_60px_-24px_rgb(0_0_0/0.8)] dark:ring-white/10">
        <div class="relative flex h-10 shrink-0 items-center gap-2 px-4">
          <span class="size-3 rounded-full bg-[#ff5f57]" />
          <span class="size-3 rounded-full bg-[#febc2e]" />
          <span class="size-3 rounded-full bg-[#28c840]" />
          <span class="text-muted-foreground absolute inset-x-0 text-center text-xs font-medium">Counter.vue</span>
        </div>
        <div class="flex-1 overflow-hidden px-4 pt-1 pb-4 font-mono text-[12px]/[21px] whitespace-pre">
          <p v-for="(line, index) in COUNTER_SOURCE" :key="index" class="flex min-h-[21px]">
            <span :class="muted" class="w-6 shrink-0 text-right select-none">{{ index + 1 }}</span>
            <span class="pl-4">
              <template v-for="(token, part) in line" :key="part">
                <Tooltip v-if="token.from">
                  <TooltipTrigger as-child>
                    <span
                      tabindex="0"
                      class="bg-vue/15 decoration-vue/70 rounded-[4px] px-0.5 text-[#0f6e4c] underline decoration-dotted underline-offset-4 outline-none focus-visible:ring-2 focus-visible:ring-ring dark:text-[#5fe0a8]"
                    >{{ token.text }}</span>
                  </TooltipTrigger>
                  <TooltipContent side="top">
                    {{ t("home.features.autoImport.from") }} <span class="font-mono">{{ token.from }}</span>
                  </TooltipContent>
                </Tooltip>
                <span v-else :class="token.class">{{ token.text }}</span>
              </template>
            </span>
          </p>
        </div>
      </div>
    </Scene>
  </BentoTile>
</template>
