<script setup lang="ts"></script>

<template>
  <app-bar>
    <template #center>
      <slot name="app-bar-center"></slot>
    </template>
  </app-bar>
  <app-navigation-drawer></app-navigation-drawer>
  <v-main class="d-flex align-center justify-center">
    <slot></slot>
  </v-main>
  <app-footer></app-footer>
  <app-snackbar></app-snackbar>
</template>

<style scoped></style>
