// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/scss/app.scss"],
  modules: ["@nuxtjs/i18n", "@nuxt/image", 'nuxt-icons'],
  i18n: {
    vueI18n: "./i18n/i18n.config.ts",
    locales: ["en", "de"],
    defaultLocale: "en"
  },
  app: {
    head: {
      title: 'ClashAlytics',
      meta: [
        { name: 'description', content: 'Clash smart, not hard' }
      ],
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  nitro: {
    preset: 'node-server'
  }
})