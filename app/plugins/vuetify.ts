import { type ThemeDefinition } from 'vuetify'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const darkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    background: '#121212',
    surface: '#2F2F2F',
    primary: '#3F51B5',
    secondary: '#DA9603',
    error: '#9E122B',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  },
}
export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: false,
    components,
    directives,
    theme: {
      defaultTheme: 'darkTheme',
      themes: {
        darkTheme,
      },
    },
  })

  nuxtApp.vueApp.use(vuetify)
})
