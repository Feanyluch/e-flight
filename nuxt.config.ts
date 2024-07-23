// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', "@nuxt/image"],
  css: ['@/assets/css/tailwind.css'],
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true }
})