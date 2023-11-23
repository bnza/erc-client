<script setup lang="ts">
definePageMeta({
  auth: false,
})
const { hasRoleAdmin } = useAppAuth()
const { resourceConfig } = useResourceSite()
</script>

<template>
  <app-data-card :title="resourceConfig.labels[ResourceLabelNumber.Plural]">
    <template #toolbar-append>
      <navigation-resource-item-create
        v-if="hasRoleAdmin"
        :path="`${resourceConfig.appPath}/create`"
      ></navigation-resource-item-create>
    </template>
    <template #default>
      <data-collection-table-site></data-collection-table-site>
    </template>
  </app-data-card>
</template>

<style scoped></style>
