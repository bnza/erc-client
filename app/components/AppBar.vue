<script setup lang="ts">
import { useUiAppNavigationDrawerStore } from '~/stores/ui'

const { isAuthenticated, userIdentifier } = useAppAuth()

const uiStore = useUiAppNavigationDrawerStore()
const tab = ref(null)
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

    <slot name="center"></slot>

    <p v-if="isAuthenticated" class="mr-6">{{ userIdentifier }}</p>
    <template #append>
      <auth-app-bar-icon></auth-app-bar-icon>
    </template>
  </v-app-bar>
</template>
