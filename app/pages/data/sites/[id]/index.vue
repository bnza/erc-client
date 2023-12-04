<script setup lang="ts">
definePageMeta({
  auth: false,
})

const route = useRoute()

const id = routeParamIdToString(route.params.id)
const { resourceConfig, fetchItem } = useResourceSite()
const { item, error, code } = await fetchItem(id)
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
          :model-value="item.code"
          label="code"
        ></v-text-field>
        <v-text-field
          :readonly="true"
          variant="underlined"
          :model-value="item.name"
          label="name"
        ></v-text-field>
        <v-textarea
          :readonly="true"
          variant="underlined"
          label="description"
          v-model="item.description"
        ></v-textarea>
      </v-form>
    </template>
  </app-data-card>
</template>

<style scoped></style>
