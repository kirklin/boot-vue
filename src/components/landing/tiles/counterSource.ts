export interface Token {
  text: string;
  class?: string;
  // Where an auto-imported name comes from.
  from?: string;
}

const tag = "text-[#ad3da4] dark:text-[#ff7ab2]";
const keyword = "text-[#ad3da4] dark:text-[#ff7ab2] font-medium";
const string = "text-[#c41a16] dark:text-[#fc6a5d]";
const number = "text-[#1c00cf] dark:text-[#d9c97c]";

// A component that uses Vue, the router, i18n, VueUse, a UI component and an icon without one import line.
// Kept out of the single-file component, where the closing script tag in the sample would end its script block.
export const COUNTER_SOURCE: Token[][] = [
  [{ text: "<script", class: tag }, { text: " setup lang=" }, { text: "\"ts\"", class: string }, { text: ">", class: tag }],
  [{ text: "const", class: keyword }, { text: " count = " }, { text: "ref", from: "vue" }, { text: "(" }, { text: "0", class: number }, { text: ");" }],
  [{ text: "const", class: keyword }, { text: " router = " }, { text: "useRouter", from: "vue-router" }, { text: "();" }],
  [{ text: "const", class: keyword }, { text: " { t } = " }, { text: "useI18n", from: "vue-i18n" }, { text: "();" }],
  [{ text: "const", class: keyword }, { text: " isDark = " }, { text: "useDark", from: "@vueuse/core" }, { text: "();" }],
  [{ text: "</script>", class: tag }],
  [],
  [{ text: "<template>", class: tag }],
  [{ text: "  <", class: tag }, { text: "Button", from: "src/components/ui/button" }, { text: " @click=" }, { text: "\"count++\"", class: string }, { text: ">", class: tag }],
  [{ text: "    <", class: tag }, { text: "IMdiGithub", from: "@iconify-json/mdi" }, { text: " />", class: tag }, { text: " {{ t(" }, { text: "\"Themes\"", class: string }, { text: ") }}" }],
  [{ text: "  </", class: tag }, { text: "Button", from: "src/components/ui/button" }, { text: ">", class: tag }],
  [{ text: "</template>", class: tag }],
];
