<script setup lang="ts">
import NavigationResourceCollectionList from '~/components/navigation/NavigationResourceCollectionList.vue'

definePageMeta({
  middleware: ['acl'],
  requiredRole: Role.Admin,
})

const route = useRoute()
const id = routeParamIdToString(route.params.id)
const { resourceConfig, fetchItem } = useResourceUser()
const { item, error } = await fetchItem(id)
const code = computed(() => item.value?.email || '')
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
  <app-data-card v-else :title="resourceConfig.labels[ResourceLabelNumber.Singular]" :code="code">
    <template #toolbar-prepend>
      <navigation-resource-collection-list
        :path="resourceConfig.appPath"
      ></navigation-resource-collection-list>
    </template>
    <template #default>
      <v-form v-if="item" @submit.prevent class="pa-6">
        <v-text-field
          :readonly="true"
          variant="underlined"
          :model-value="item.email"
          label="email"
        ></v-text-field>
        <v-text-field
          :readonly="true"
          variant="underlined"
          :model-value="item.roles"
          label="roles"
        ></v-text-field>
      </v-form>
    </template>
  </app-data-card>
</template>

<style scoped></style>
