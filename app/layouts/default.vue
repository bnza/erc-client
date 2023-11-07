<script setup lang="ts">

import AuthAppBarIcon from "../components/auth/AuthAppBarIcon.vue";
</script>

<template>
  <v-layout class="rounded rounded-md">

    <v-navigation-drawer
        :permanent="true"
        width="150"
    ></v-navigation-drawer>

    <v-app-bar
        color="primary"
        height="48"
        :flat="true"
    >
      <template v-slot:prepend>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title class="font-weight-bold">ERC MEDGREENREV project</v-app-bar-title>

      <v-spacer></v-spacer>

      <auth-app-bar-icon class="mr-6"></auth-app-bar-icon>
    </v-app-bar>

    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
      <slot>
        Main content
      </slot>
    </v-main>
  </v-layout>
</template>

<style scoped>

</style>