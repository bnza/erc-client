import { defineStore } from 'pinia'
import { UiMode } from '~/composables'
export const useUiAppNavigationDrawerStore = defineStore('uiAppNavigationDrawer', () => {
  const visible = ref(false)

  function toggleVisible() {
    visible.value = !visible.value
  }

  return { visible, toggleVisible }
})

export const useUiAppMode = defineStore('uiAppMode', () => {
  const mode: Ref<UiMode> = ref(UiMode.Default)

  const icon = computed(() =>
    mode.value === UiMode.Default ? 'mdi-list-box-outline' : 'mdi-earth',
  )

  function setMode(newMode: UiMode) {
    mode.value = newMode
    console.log('new mode', newMode)
  }

  function toggleMode() {
    const newMode = mode.value === UiMode.Default ? UiMode.Map : UiMode.Default
    setMode(newMode)
  }

  return { mode, icon, setMode, toggleMode }
})

export const useUiAppSnackbar = defineStore('uiAppSnackbar', () => {
  const vertical = ref(false)
  const multiline = ref(false)
  const visible = ref(false)
  const title = ref('')
  const text = ref('')
  const color = ref('info')
  const timeout = ref(5000)
  function reset() {
    visible.value = false
    vertical.value = false
    title.value = ''
    text.value = ''
    color.value = 'info'
    timeout.value = 5000
    multiline.value = false
  }

  function show({
    _text = '',
    _vertical = false,
    _title = '',
    _color = 'info',
    _timeout = 5000,
    _multiline = false,
  }) {
    if (timeout.value === -1) {
      if (_timeout === -1) {
        text.value += `\n${_text}`
      }
      return
    }
    multiline.value = _multiline
    vertical.value = _vertical
    text.value = _text
    title.value = _title
    color.value = _color
    timeout.value = _timeout
    visible.value = true
  }

  return {
    vertical,
    multiline,
    text,
    title,
    color,
    timeout,
    visible,
    show,
    reset,
  }
})

export const useUiApiFetchPending = defineStore('uiApiFetchPending', () => {
  const pending = ref(false)
  return { pending }
})
