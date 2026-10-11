import kirklin from "@kirklin/eslint-config";

export default kirklin({
  formatters: true,
  typescript: true,
  pnpm: true,
  vue: {
    a11y: true,
  },
}, {
  rules: {
    // A label either wraps its control or names it with `for`; a label component may take its control from a slot
    "vue-a11y/label-has-for": ["error", { required: { some: ["nesting", "id"] }, allowChildren: true }],
  },
});
