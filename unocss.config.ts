import { presetDaisy } from "unocss-preset-daisy";
import { presetAttributify, presetIcons, presetUno, transformerDirectives, transformerVariantGroup } from "unocss";
import { defineConfig } from "unocss/vite";
import presetChinese from "unocss-preset-chinese";
import presetEase from "unocss-preset-ease";

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetChinese(),
    presetEase(),
    presetIcons({
      scale: 1.5,
    }),
    presetDaisy({
      themes: true,
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
});
