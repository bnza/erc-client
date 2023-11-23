<script setup lang="ts">
import { Role } from '~/composables/useAppAuth'
import NavigationResourceCollectionList from '~/components/navigation/NavigationResourceCollectionList.vue'
import type { SiteResourceItem } from '~/composables'
type Mutable<Type> = {
  -readonly [Key in keyof Type]: Type[Key]
}
definePageMeta({
  middleware: ['acl'],
  requiredRole: Role.Admin,
})

const { resourceConfig } = useResourceSite()

const defaultItem: Readonly<SiteResourceItem> = {
  code: '',
  name: '',
}

const modelItem: Ref<Mutable<Record<string, any>>> = ref(structuredClone(defaultItem))
</script>

<template>
  <app-data-card :title="resourceConfig.labels[ResourceLabelNumber.Singular]" code="">
    <template #toolbar-prepend>
      <navigation-resource-collection-list
        :path="resourceConfig.appPath"
      ></navigation-resource-collection-list>
    </template>
    <template #default>
      <v-form @submit.prevent class="pa-6">
        <v-text-field variant="underlined" v-model="modelItem.code" label="code"></v-text-field>
        <v-text-field variant="underlined" v-model="modelItem.name" label="name"></v-text-field>
      </v-form>
    </template>
  </app-data-card>
</template>

<style scoped></style>
