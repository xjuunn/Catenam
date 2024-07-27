// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
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
    "@pinia/nuxt",
    "@nuxtjs/i18n",
    "@vueuse/nuxt",
    "@hypernym/nuxt-anime",
    "@nuxt/eslint",
    "nuxt-icon",
    "@nuxt/content",
    "nuxt-lodash",
    "@nuxt/image"
  ]
})