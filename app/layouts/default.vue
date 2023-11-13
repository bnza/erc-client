<script setup lang="ts"></script>

<template>
  <v-layout class="rounded rounded-md">
    <app-bar></app-bar>

    <app-navigation-drawer></app-navigation-drawer>

    <v-main
      class="d-flex align-center justify-center"
      style="min-height: 300px"
    >
      <slot> Main content </slot>
    </v-main>
  </v-layout>
</template>

<style scoped></style>
