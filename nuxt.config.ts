// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/scss/app.scss"],
  modules: ["@nuxtjs/i18n", "@nuxt/image"],
  i18n: {
    vueI18n: "./i18n/i18n.config.ts",
    locales: ["en", "de"],
    defaultLocale: "en"
  }
})