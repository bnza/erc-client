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
    >&copy; {{ new Date().getFullYear() }}
    <p class="title font-weight-bold px-6">ERC MEDGREENREV project</p>
  </v-footer>
</template>

<style scoped lang="sass">
footer
  background: rgb(var(--v-theme-on-surface-variant))
.title
  font-family: 'Orbitron', 'Work Sans', Arial, sans-serif !important
  font-weight: 900
</style>
