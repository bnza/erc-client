<script setup lang="ts">
import {
  fetchCollection,
  useSiteResource,
} from "~/composables/resources/useSiteResource";

definePageMeta({
  auth: false,
});

const { items, paginationOption, totalItems, pending } =
  await fetchCollection();

const { headers } = useSiteResource();
</script>

<template>
  <v-data-table-server
    :items-per-page.sync="paginationOption.itemsPerPage"
    :headers="headers"
    :items-length="totalItems"
    :items="items"
    :page.sync="paginationOption.page"
    :loading="pending"
    :sortBy.sync="paginationOption.sortBy"
    density="compact"
    @update:options="Object.assign(paginationOption, $event)"
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
