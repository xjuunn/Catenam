// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  ssr: false,
  eslint: {
    checker: {
      lintOnStart: false
    },
    config: {
      
    }
  },
  routeRules: {
    '/': { prerender: true }
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    "@vueuse/nuxt",
    "@hypernym/nuxt-anime",
    "@nuxt/eslint",
    "nuxt-icon",
    "@nuxt/content",
    "nuxt-lodash",
    "@nuxt/image",
    "@nuxtjs/color-mode",
  ]
})