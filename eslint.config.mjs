import { createConfigForNuxt } from "@nuxt/eslint-config/flat";

export default createConfigForNuxt({
  dirs:{},

})
  .prepend()
  .override("nuxt/rules", {
    rules: {
      "vue/html-self-closing": "off",
      "prefer-const":'off',
      "@typescript-eslint/no-explicit-any": ["off"]
    }
  })
  
  ;
