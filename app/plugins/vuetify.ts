import { createVuetify, ThemeDefinition } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const darkTheme: ThemeDefinition = {
    dark: true,
    colors: {
        background: '#2d2d2d',
        surface: '#3b3b3b',
        primary: '#6200EE',
        'primary-darken-1': '#200173',
        secondary: '#da9603',
        'secondary-darken-1': '#693409',
        error: '#B00020',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
    },
}
export default defineNuxtPlugin(nuxtApp => {
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