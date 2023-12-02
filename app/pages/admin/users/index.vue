<script setup lang="ts">
definePageMeta({
  middleware: ['acl'],
  requiredRole: Role.Admin,
})
const { resourceConfig } = useResourceUser()
</script>

<template>
  <app-data-card :title="resourceConfig.labels[ResourceLabelNumber.Plural]">
    <template #default>
      <data-collection-table-user></data-collection-table-user>
    </template>
  </app-data-card>
</template>

<style scoped></style>
