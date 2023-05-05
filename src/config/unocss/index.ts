import { defineConfig, presetAttributify, presetIcons, presetUno, transformerDirectives, transformerVariantGroup } from "unocss";
import { presetDaisy } from "unocss-preset-daisy";
import presetChinese from "unocss-preset-chinese";

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetChinese(),
    presetIcons({
      scale: 1.5,
      warn: true,
    }),
    presetDaisy(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  theme: {
  },
});
