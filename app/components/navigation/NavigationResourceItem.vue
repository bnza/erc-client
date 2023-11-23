<script setup lang="ts">
import type { PropType } from 'vue'
import type { ResourceConfig } from '~/composables'

defineProps({
  resource: Object as PropType<ResourceConfig>,
  itemId: String | Number,
})
</script>

<template>
  <v-btn-group>
    <navigation-resource-item-read
      :resource="resource"
      :item-id="itemId"
    ></navigation-resource-item-read>
    <navigation-resource-item-edit :item-id="itemId"></navigation-resource-item-edit>
    <navigation-resource-item-delete :item-id="itemId"></navigation-resource-item-delete>
  </v-btn-group>
</template>

<style scoped></style>
