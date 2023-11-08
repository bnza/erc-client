<script setup lang="ts">
import { useUiAppNavigationDrawerStore } from "~/stores/ui";

const {isAuthenticated, userIdentifier } = useAppAuth()

const uiStore = useUiAppNavigationDrawerStore()

</script>

<template>
  <v-app-bar
      color="primary"
      height="48"
      :flat="true"
  >
    <template v-slot:prepend>
      <v-app-bar-nav-icon @click.stop="uiStore.toggleVisible()"></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title class="font-weight-bold">ERC MEDGREENREV project</v-app-bar-title>

    <v-spacer></v-spacer>

    <p v-if="isAuthenticated" class="mr-6">{{userIdentifier}}</p>
    <auth-app-bar-icon></auth-app-bar-icon>
  </v-app-bar>
</template>

<style scoped>

</style>