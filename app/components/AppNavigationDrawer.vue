<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useUiAppNavigationDrawerStore } from "~/stores/ui";

  const uiStore = useUiAppNavigationDrawerStore()

  const { visible } = storeToRefs(uiStore)

</script>

<template>
  <v-navigation-drawer
      :model-value="visible"
      :permanent="true"
      width="150"
  ></v-navigation-drawer>
</template>

<style scoped>

</style>