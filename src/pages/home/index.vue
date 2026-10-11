<script setup lang="ts">
import BentoRow from "~/components/landing/BentoRow.vue";
import CallToAction from "~/components/landing/CallToAction.vue";
import AutoImportTile from "~/components/landing/tiles/AutoImportTile.vue";
import ComponentsTile from "~/components/landing/tiles/ComponentsTile.vue";
import DeployTile from "~/components/landing/tiles/DeployTile.vue";
import DevServerTile from "~/components/landing/tiles/DevServerTile.vue";
import I18nTile from "~/components/landing/tiles/I18nTile.vue";
import PwaTile from "~/components/landing/tiles/PwaTile.vue";
import StackTile from "~/components/landing/tiles/StackTile.vue";
import StateTile from "~/components/landing/tiles/StateTile.vue";
import ThemingTile from "~/components/landing/tiles/ThemingTile.vue";
import TypographyTile from "~/components/landing/tiles/TypographyTile.vue";
import Hero from "./components/Hero.vue";

defineOptions({
  name: "Home",
});
</script>

<template>
  <section id="features" class="pt-14 pb-24 sm:pt-20 sm:pb-32">
    <div class="container mx-auto px-4">
      <Hero />
      <div class="mt-12 flex flex-col gap-5 sm:mt-14">
        <BentoRow>
          <ComponentsTile />
          <DevServerTile />
        </BentoRow>
        <BentoRow even>
          <ThemingTile />
          <StateTile />
          <PwaTile />
        </BentoRow>
        <BentoRow>
          <I18nTile />
          <AutoImportTile />
        </BentoRow>
        <BentoRow>
          <TypographyTile />
          <DeployTile />
        </BentoRow>
        <BentoRow>
          <StackTile />
        </BentoRow>
      </div>
    </div>
  </section>
  <CallToAction />
</template>
