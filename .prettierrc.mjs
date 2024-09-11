/** @type {import("prettier").Config} */
export default {
  arrowParens: "always",
  bracketSpacing: true,
  embeddedLanguageFormatting: "auto",
  endOfLine: "lf",
  htmlWhitespaceSensitivity: "css",
  insertPragma: false,
  printWidth: 2048,
  quoteProps: "as-needed",
  requirePragma: false,
  semi: true,
  singleAttributePerLine: false,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  useTabs: false,
  vueIndentScriptAndStyle: false,
  jsxSingleQuote: false,
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
