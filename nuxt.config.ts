// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@unocss/nuxt',
  ],
  devtools: { enabled: false },
  eslint: {
    config: {
      standalone: false,
    },
  },
  compatibilityDate: '2024-04-03',
})
