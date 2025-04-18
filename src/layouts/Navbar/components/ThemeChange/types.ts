import type { BasicColorSchema } from "@vueuse/core";

export declare type CustomTheme = "cupcake" | "bumblebee" | "emerald" | "corporate" | "synthwave"
  | "retro" | "cyberpunk" | "valentine" | "halloween" | "garden" | "forest" | "aqua" |
  "lofi" | "pastel" | "fantasy" | "wireframe" | "black" | "luxury" | "dracula" | "cmyk" |
  "autumn" | "business" | "acid" | "lemonade" | "night" | "coffee" | "winter" | "dim" |
  "nord" | "sunset" | "caramellatte" | "abyss" | "silk" | BasicColorSchema;
export interface ThemeList {
  name: string;
  id: CustomTheme;
}
