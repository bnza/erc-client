<script setup lang="ts">
defineProps({
  itemId: String | Number,
})
</script>

<template>
  <v-btn icon>
    <v-icon color="error">mdi-close-thick</v-icon>
    <v-tooltip activator="parent" location="bottom">Delete item</v-tooltip>
  </v-btn>
</template>

<style scoped></style>
