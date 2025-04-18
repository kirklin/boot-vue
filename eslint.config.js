import kirklin from "@kirklin/eslint-config";

export default kirklin({
  unocss: true,
  formatters: true,
  typescript: true,
  pnpm: true,
  vue: {
    a11y: true,
  },
});
