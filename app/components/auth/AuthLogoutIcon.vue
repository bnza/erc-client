<script setup lang="ts">
const isOpen = ref(false);
</script>

<template>
  <v-tooltip text="logout">
    <template v-slot:activator="{ props }">
      <v-icon class="mr-6" v-bind="props" @click="isOpen = true">
        mdi-logout
      </v-icon>
    </template>
  </v-tooltip>
  <auth-logout-confirmation-dialog
    v-model:is-open="isOpen"
  ></auth-logout-confirmation-dialog>
</template>
