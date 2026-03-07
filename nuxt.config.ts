// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxt/eslint', '@nuxt/ui', '@nuxt/content', '@nuxt/image', '@nuxtjs/google-fonts'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
  content: {
    experimental: { sqliteConnector: 'native' },
  },
  googleFonts: {
    families: {
      Syne: [700],
      Outfit: [400, 700],
    },
  },
});
