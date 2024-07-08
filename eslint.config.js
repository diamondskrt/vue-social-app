import globals from "globals";
import pluginJS from "@eslint/js";
import TSEslint from "typescript-eslint";
import EslintPluginVue from "eslint-plugin-vue";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import stylisticTs from "@stylistic/eslint-plugin-ts";

export default [
  eslintPluginPrettierRecommended,
  {
    files: ["**/*.{js,mjs,cjs,ts,vue}"],
    plugins: {
      "@stylistic/ts": stylisticTs,
    },
    rules: {
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
    },
  },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJS.configs.recommended,
  ...TSEslint.configs.recommended,
  ...EslintPluginVue.configs["flat/essential"],
];
