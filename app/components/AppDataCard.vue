<script setup lang="ts">
defineProps({
  title: String,
  code: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <v-card class="rounded-0 w-100 h-100">
    <v-toolbar density="compact">
      <template #title
        >{{ title }}
        <span v-if="code" class="font-weight-bold text-secondary pl-6"
          >{{ code }}
        </span>
      </template>
    </v-toolbar>
    <slot></slot>
  </v-card>
</template>
