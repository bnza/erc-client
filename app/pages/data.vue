<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useUiAppMode } from '~/stores/ui'
import { UiMode } from '~/composables'

definePageMeta({
  auth: false,
  layout: false,
})
defineOptions({ name: 'DataWrapper' })
const { mode } = storeToRefs(useUiAppMode())
</script>

<template>
  <NuxtLayout name="default">
    <template #app-bar-center>
      <ui-mode-switcher></ui-mode-switcher>
    </template>
    <KeepAlive>
      <lazy-app-map v-if="mode === UiMode.Map"></lazy-app-map>
    </KeepAlive>
    <KeepAlive>
      <NuxtPage v-if="mode === UiMode.Default" />
    </KeepAlive>
  </NuxtLayout>
</template>

<style scoped></style>
