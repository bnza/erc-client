import vuetify from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      link: [
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Work+Sans&display=swap'}
      ]
    },
  },
  css: [
    // 'vuetify/lib/styles/main.sass',
    '@/assets/scss/variables.scss',
    '@mdi/font/css/materialdesignicons.min.css',
  ],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
  modules: [
    '@pinia/nuxt',
    '@sidebase/nuxt-auth',
    async (options, nuxt) => {
      // @ts-ignore
      nuxt.hooks.hook('vite:extendConfig', config => config.plugins.push(
          vuetify()
      ))
    },
  ],
  auth: {
    provider: {
      type: 'local',
      endpoints: {
        getSession: { path: '/users/me' }
      },
    },
    globalAppMiddleware: true,
    baseURL: 'http://localhost:8000/',
  },
  devtools: { enabled: true }
})
