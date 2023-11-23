<script setup lang="ts">
defineProps({
  title: String,
  code: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <v-card class="rounded-0 w-100 h-100">
    <v-toolbar density="compact">
      <template #prepend>
        <slot name="toolbar-prepend"></slot>
      </template>
      <template #title
        >{{ title }}
        <span v-if="code" class="font-weight-bold text-secondary pl-6">{{ code }} </span>
      </template>
      <template #append>
        <slot name="toolbar-append"></slot>
      </template>
    </v-toolbar>
    <slot></slot>
  </v-card>
</template>
