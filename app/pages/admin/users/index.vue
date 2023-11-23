<script setup lang="ts">
import { Role } from '~/composables/useAppAuth'

definePageMeta({
  middleware: ['acl'],
  requiredRole: Role.Admin,
})
</script>

<template>
  <p>users</p>
</template>

<style scoped></style>
