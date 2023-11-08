import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUiAppNavigationDrawerStore = defineStore('uiAppNavigationDrawer', () => {
    const visible = ref(false)

    function toggleVisible() {
        visible.value = !visible.value
    }

    return { visible, toggleVisible }
})