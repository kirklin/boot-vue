import { presetDaisy } from "@ameinhardt/unocss-preset-daisy";
import { presetAttributify, presetIcons, presetWind4, transformerDirectives, transformerVariantGroup } from "unocss";
import presetChinese from "unocss-preset-chinese";
import presetEase from "unocss-preset-ease";
import { defineConfig } from "unocss/vite";

export default defineConfig({
  presets: [
    presetWind4(),
    presetAttributify(),
    presetChinese(),
    presetEase(),
    presetIcons({
      scale: 1.5,
    }),
    presetDaisy({
      base: true,
      themes: [
        "light",
        "dark",
        "cupcake",
        "bumblebee",
        "emerald",
        "corporate",
        "synthwave",
        "retro",
        "cyberpunk",
        "valentine",
        "halloween",
        "garden",
        "forest",
        "aqua",
        "lofi",
        "pastel",
        "fantasy",
        "wireframe",
        "black",
        "luxury",
        "dracula",
        "cmyk",
        "autumn",
        "business",
        "acid",
        "lemonade",
        "night",
        "coffee",
        "winter",
        "dim",
        "nord",
        "sunset",
        "caramellatte",
        "abyss",
        "silk",
      ],
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
});
