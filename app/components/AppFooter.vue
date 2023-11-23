<script setup lang="ts">
import { useUiApiFetchPending } from '~/stores/ui'
import { storeToRefs } from 'pinia'

const { pending } = storeToRefs(useUiApiFetchPending())
</script>

<template>
  <v-footer :app="true">
    <v-progress-linear
      height="1"
      :active="pending"
      :indeterminate="true"
      :absolute="true"
      bottom
      color="secondary"
    ></v-progress-linear
    >&copy; {{ new Date().getFullYear() }}</v-footer
  >
</template>

<style scoped></style>
