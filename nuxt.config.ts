// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  compatibilityDate: '2024-11-01',

  nitro: {
    static: true
  },

  devtools: { enabled: true },

  css: [
    '~/assets/css/tailwind.css',
    '~/assets/css/transitions.css'
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // 应用配置
  app: {
    baseURL: '/',
    head: {
      title: 'NAVMARK',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  },

  // 构建配置
  build: {
    transpile: ['vue-router']
  },

  router: {
    options: {
      hashMode: true
    }
  }
})
