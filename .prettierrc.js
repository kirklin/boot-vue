module.exports = {
  tabWidth: 2,
  printWidth: 100,
  //使用双引号
  singleQuote: false,
  //句末加分号
  semi: true,
  bracketSpacing: true,
  overrides: [
    {
      files: "*.json",
      options: {
        printWidth: 200,
      },
    },
  ],
  arrowParens: "always",
  plugins: [require("prettier-plugin-tailwindcss")],
};
