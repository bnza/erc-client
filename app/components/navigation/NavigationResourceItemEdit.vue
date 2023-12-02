<script setup lang="ts">
import type { PropType } from 'vue'
import type { ApiResourceConfig } from '~/composables'

defineProps({
  resource: Object as PropType<ApiResourceConfig>,
  itemId: String | Number,
})
</script>

<template>
  <v-btn icon nuxt :to="`${resource.appPath}/${itemId}/edit`">
    <v-icon color="success">mdi-pencil</v-icon>
    <v-tooltip activator="parent" location="bottom">Edit item</v-tooltip>
  </v-btn>
</template>

<style scoped></style>
