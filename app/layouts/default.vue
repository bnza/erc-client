<script setup lang="ts">
import AppFooter from "~/components/AppFooter.vue";
</script>

<template>
  <app-bar></app-bar>
  <app-navigation-drawer></app-navigation-drawer>
  <v-main class="d-flex align-center justify-center">
    <slot></slot>
  </v-main>
  <app-footer></app-footer>
  <app-snackbar></app-snackbar>
</template>

<style scoped></style>
