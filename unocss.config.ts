import { presetAttributify, presetIcons, presetUno, transformerDirectives, transformerVariantGroup } from "unocss";
import presetChinese from "unocss-preset-chinese";
import { presetDaisy } from "unocss-preset-daisy";
import presetEase from "unocss-preset-ease";
import { defineConfig } from "unocss/vite";

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
