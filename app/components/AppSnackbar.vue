<script setup lang="ts">
import { useUiAppSnackbar } from "~/stores/ui";
import { storeToRefs } from "pinia";

const uiStore = useUiAppSnackbar();
const { vertical, multiline, text, title, color, timeout, visible } =
  storeToRefs(uiStore);
</script>

<template>
  <v-snackbar
    v-model="visible"
    :multi-line="multiline"
    :vertical="vertical"
    :timeout="timeout"
    :color="color"
    location="top"
    data-testid="app-snackbar"
  >
    {{ text }}

    <div v-if="vertical && title" class="text-subtitle-1 pb-2">
      {{ title }}
    </div>

    <template v-slot:actions v-if="timeout === -1">
      <v-btn
        icon="mdi-close-circle-outline"
        variant="text"
        @click="uiStore.$patch({ visible: false })"
      ></v-btn>
    </template>
  </v-snackbar>
</template>

<style scoped></style>
