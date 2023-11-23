import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Work+Sans&display=swap',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Orbitron:wght@900&display=swap',
        },
      ],
    },
    baseURL: '/app',
  },
  appConfig: {
    apiBaseUrl: process.env.API_BASE_URL || 'http://localhost:8000/api',
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
      nuxt.hooks.hook('vite:extendConfig', (config) =>
        // @ts-ignore
        config.plugins.push(vuetify()),
      )
    },
  ],
  auth: {
    provider: {
      type: 'local',
      endpoints: {
        getSession: { path: '/users/me' },
      },
    },
    session: {
      // Whether to refresh the session every time the browser window is refocused.
      enableRefreshOnWindowFocus: true,

      // Whether to refresh the session every `X` milliseconds. Set this to `false` to turn it off. The session will only be refreshed if a session already exists.
      enableRefreshPeriodically: false,
    },
    globalAppMiddleware: true,
    baseURL: process.env.API_BASE_URL || 'http://localhost:8000/',
  },
  devtools: { enabled: true },
})
