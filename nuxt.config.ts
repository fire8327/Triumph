// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@nuxtjs/google-fonts",
    "nuxt-swiper"
  ],
  googleFonts: {
    families: {
      'Comfortaa': true,
      'PT Sans': true
    }
  }
})