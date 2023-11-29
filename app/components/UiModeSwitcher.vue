<script setup lang="ts">
import { useUiAppMode } from '~/stores/ui'
import { UiMode } from '~/composables'
import { storeToRefs } from 'pinia'

const { toggleMode } = useUiAppMode()
const { mode, icon } = storeToRefs(useUiAppMode())
const text = computed(() => (mode.value === UiMode.Default ? 'set Map mode' : 'set default mode'))
</script>

<template>
  <v-tooltip :text="text">
    <template v-slot:activator="{ props }">
      <v-btn class="mr-6" :icon="icon" v-bind="props" @click="toggleMode"></v-btn>
    </template>
  </v-tooltip>
</template>

<style scoped></style>
