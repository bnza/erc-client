<script setup lang="ts">
const { resourceConfig, headers, fetchCollection } = useResourceSite()
const { items, paginationOption, totalItems, pending } = await fetchCollection()
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
    <template #[`item.id`]="{ item }">
      <navigation-resource-item
        :resource="resourceConfig"
        :item-id="item.id"
      ></navigation-resource-item>
    </template>
    <template #[`item.public`]="{ item }">
      <v-checkbox-btn :inline="true" :readonly="true" :model-value="item.public"></v-checkbox-btn>
    </template>
  </v-data-table-server>
</template>

<style scoped></style>
