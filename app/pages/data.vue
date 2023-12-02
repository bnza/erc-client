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
    <Suspense>
      <KeepAlive>
        <NuxtPage v-if="mode === UiMode.Default" />
      </KeepAlive>
      <template #fallback>
        <v-progress-circular indeterminate :size="128" :width="12"></v-progress-circular>
      </template>
    </Suspense>
  </NuxtLayout>
</template>

<style scoped></style>
