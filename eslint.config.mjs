import { createConfigForNuxt } from "@nuxt/eslint-config/flat";

export default createConfigForNuxt({})
  .prepend()
  .override("nuxt/rules", {
    rules: {
      "vue/html-self-closing": "off",
      "prefer-const":'off'
    },
  });
