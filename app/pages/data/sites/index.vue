<script setup lang="ts">
import { VDataTableServer } from "vuetify/labs/components";
import {
  fetchCollection,
  useSiteResource,
} from "~/composables/resources/useSiteResource";

definePageMeta({
  auth: false,
});

const { items, itemsPerPage, totalItems, pending, sortBy, page } =
  await fetchCollection();

const { headers } = useSiteResource();
</script>

<template>
  <v-data-table-server
    v-model:items-per-page="itemsPerPage"
    :headers="headers"
    :items-length="totalItems"
    :items="items"
    :page="page"
    :loading="pending"
    :sortBy="sortBy"
    density="compact"
    @update:sortBy="sortBy = $event"
  >
    <template #[`item.public`]="{ item }">
      <v-checkbox-btn
        :inline="true"
        :readonly="true"
        :model-value="item.public"
      ></v-checkbox-btn>
    </template>
  </v-data-table-server>
</template>

<style scoped></style>
