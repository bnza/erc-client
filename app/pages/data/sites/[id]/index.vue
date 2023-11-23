<script setup lang="ts">
import { useResourceSite } from "~/composables/resources/useResourceSite";

definePageMeta({
  auth: false,
});

const route = useRoute();

const { resourceConfig, fetchItem } = useResourceSite();
const { item, error } = await fetchItem(route.params.id);
const code = computed(() => item.value?.code || "");
</script>

<template>
  <p v-if="error">
    <v-alert
      color="error"
      icon="$error"
      :title="error.statusMessage"
      text="Requested resource could not be found"
    ></v-alert>
  </p>
  <app-data-card v-else :title="resourceConfig.labels[0]" :code="code">
    <template #default>
      <v-form v-if="item" @submit.prevent class="pa-6">
        <v-text-field
          :readonly="true"
          variant="underlined"
          :model-value="item.code"
          label="code"
        ></v-text-field>
        <v-text-field
          :readonly="true"
          variant="underlined"
          :model-value="item.name"
          label="name"
        ></v-text-field>
      </v-form>
    </template>
  </app-data-card>
</template>

<style scoped></style>
