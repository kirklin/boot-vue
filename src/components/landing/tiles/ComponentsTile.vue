<script setup lang="ts">
import { CheckIcon } from "@lucide/vue";
import { useI18n } from "vue-i18n";
import { Button } from "~/components/ui/button";
import { Label } from "~/components/ui/label";
import { Slider } from "~/components/ui/slider";
import { Switch } from "~/components/ui/switch";
import { cn } from "~/lib/utils";
import BentoTile from "../BentoTile.vue";
import { glass } from "../glass";
import Scene from "../Scene.vue";

const { t } = useI18n();

const push = ref(true);
const digest = ref(false);
const volume = ref([60]);
const saved = ref(false);
const { start: clearSaved } = useTimeoutFn(() => {
  saved.value = false;
}, 2000, { immediate: false });

function reset() {
  push.value = true;
  digest.value = false;
  volume.value = [60];
  saved.value = false;
}

function save() {
  saved.value = true;
  clearSaved();
}
</script>

<template>
  <BentoTile
    id="components"
    eyebrow="shadcn-vue"
    :title="t('home.features.components.title')"
    :description="t('home.features.components.description')"
    wide
  >
    <Scene class="items-center justify-center bg-[linear-gradient(180deg,#eaf5ef,#f6faf8)] p-6 sm:p-10">
      <div :class="cn(glass, 'w-full max-w-md rounded-[22px] p-6')">
        <p class="text-[15px] font-semibold">
          {{ t("home.features.components.card.title") }}
        </p>
        <p class="text-muted-foreground mt-1 text-[13px]">
          {{ t("home.features.components.card.description") }}
        </p>
        <div class="mt-6 space-y-5">
          <div class="flex items-center justify-between gap-4">
            <Label for="tile-push">{{ t("home.features.components.card.push") }}</Label>
            <Switch id="tile-push" v-model="push" />
          </div>
          <div class="flex items-center justify-between gap-4">
            <Label for="tile-digest">{{ t("home.features.components.card.digest") }}</Label>
            <Switch id="tile-digest" v-model="digest" />
          </div>
          <div class="space-y-3">
            <div class="flex items-center justify-between gap-4">
              <Label for="tile-volume">{{ t("home.features.components.card.volume") }}</Label>
              <span class="text-muted-foreground text-[13px] tabular-nums">{{ volume[0] }}%</span>
            </div>
            <Slider id="tile-volume" v-model="volume" :max="100" :step="1" :aria-label="t('home.features.components.card.volume')" />
          </div>
        </div>
        <div class="mt-7 flex justify-end gap-2">
          <Button variant="outline" @click="reset">
            {{ t("home.features.components.card.reset") }}
          </Button>
          <Button class="min-w-20" @click="save">
            <CheckIcon v-if="saved" />
            {{ saved ? t("home.features.components.card.saved") : t("home.features.components.card.save") }}
          </Button>
        </div>
      </div>
    </Scene>
  </BentoTile>
</template>
