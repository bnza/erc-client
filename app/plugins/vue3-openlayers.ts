import Openlayers from 'vue3-openlayers'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Openlayers)
})
