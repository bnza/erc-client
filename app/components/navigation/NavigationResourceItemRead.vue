<script setup lang="ts">
import type { PropType } from "vue";
import type { Resource } from "~/composables";

defineProps({
  resource: Object as PropType<Resource>,
  itemId: String | Number,
});
</script>

<template>
  <v-btn icon nuxt :to="`${resource.appPath}/${itemId}`">
    <v-icon color="primary">mdi-arrow-right-thick</v-icon>
    <v-tooltip activator="parent" location="bottom">View item</v-tooltip>
  </v-btn>
</template>

<style scoped></style>
