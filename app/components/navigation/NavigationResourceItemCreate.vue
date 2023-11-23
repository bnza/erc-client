<script setup lang="ts">
defineProps({
  path: String,
})
</script>

<template>
  <v-tooltip location="bottom" text="create new resource">
    <template v-slot:activator="{ props }">
      <NuxtLink :to="path">
        <v-icon class="mx-3" v-bind="props"> mdi-playlist-plus </v-icon>
      </NuxtLink>
    </template>
  </v-tooltip>
</template>

<style scoped></style>
