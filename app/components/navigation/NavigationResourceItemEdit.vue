<script setup lang="ts">
defineProps({
  itemId: String | Number,
})
</script>

<template>
  <v-btn icon>
    <v-icon color="success">mdi-pencil</v-icon>
    <v-tooltip activator="parent" location="bottom">Edit item</v-tooltip>
  </v-btn>
</template>

<style scoped></style>
