<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { cn } from "~/lib/utils";
import BentoTile from "../BentoTile.vue";
import { glass } from "../glass";
import Scene from "../Scene.vue";
import Segmented from "../Segmented.vue";

type Stack = "boot" | "latin";

const { t } = useI18n();
const stack = ref<Stack>("boot");

// The same sentence with and without the punctuation font in front of the system UI font.
const LATIN_FIRST = "-apple-system, BlinkMacSystemFont, \"Segoe UI\", \"PingFang SC\", \"Microsoft YaHei\", sans-serif";
const PUNCTUATION = new Set(["“", "”", "—", "…"]);
const SENTENCE = "“你好，Vue！”她笑着说——“明天见……”";

// The sentence in runs, so neighboring punctuation marks are highlighted as one piece.
const runs = Array.from(SENTENCE).reduce<{ text: string; punctuation: boolean }[]>((result, character) => {
  const punctuation = PUNCTUATION.has(character);
  const last = result.at(-1);
  if (last?.punctuation === punctuation) {
    last.text += character;
  } else {
    result.push({ text: character, punctuation });
  }
  return result;
}, []);
</script>

<template>
  <BentoTile
    id="typography"
    :eyebrow="t('home.features.typography.eyebrow')"
    :title="t('home.features.typography.title')"
    :description="t('home.features.typography.description')"
    wide
  >
    <Scene class="items-center justify-center gap-8 bg-[linear-gradient(180deg,#f3f0fa,#f9f8fc)] p-6 @xl:p-8">
      <Segmented
        v-model="stack"
        :label="t('home.features.typography.label')"
        :options="[{ value: 'boot', label: t('home.features.typography.boot') }, { value: 'latin', label: t('home.features.typography.latin') }]"
      />
      <p
        lang="zh-CN"
        class="text-center text-2xl/tight font-semibold @md:text-3xl/tight @xl:text-[2.6rem]/tight"
        :style="stack === 'latin' ? { fontFamily: LATIN_FIRST } : undefined"
      >
        <span
          v-for="(run, index) in runs"
          :key="index"
          :class="cn(run.punctuation && 'bg-vue/15 rounded-[4px] text-[#0f6e4c] dark:text-[#5fe0a8]')"
        >{{ run.text }}</span>
      </p>
      <p :class="cn(glass, 'text-muted-foreground max-w-full truncate rounded-full px-4 py-1.5 font-mono text-[12px]')">
        font-family: {{ stack === "boot" ? "\"Punctuation Chinese\", -apple-system, …" : "-apple-system, …" }}
      </p>
    </Scene>
  </BentoTile>
</template>
