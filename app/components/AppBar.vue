<script setup lang="ts">
import { useUiAppNavigationDrawerStore } from '~/stores/ui'

const { isAuthenticated, userIdentifier } = useAppAuth()

const uiStore = useUiAppNavigationDrawerStore()
</script>

<template>
  <v-app-bar color="primary" height="48" :flat="true">
    <template #prepend>
      <v-tooltip location="bottom" text="toggle navigation">
        <template v-slot:activator="{ props }">
          <v-app-bar-nav-icon
            v-bind="props"
            @click.stop="uiStore.toggleVisible()"
            data-testid="app-bar-nav-icon"
          ></v-app-bar-nav-icon>
        </template>
      </v-tooltip>
    </template>

    <v-app-bar-title class="title font-weight-bold">ERC MEDGREENREV project</v-app-bar-title>

    <v-spacer></v-spacer>

    <p v-if="isAuthenticated" class="mr-6">{{ userIdentifier }}</p>
    <auth-app-bar-icon></auth-app-bar-icon>
  </v-app-bar>
</template>

<style scoped lang="sass">
.title
  font-family: 'Orbitron', 'Work Sans', Arial, sans-serif !important
  font-weight: 900
</style>
