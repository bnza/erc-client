<script setup lang="ts">
import { useResourceSiteValidation } from '~/composables/validation/useResourceSiteValidation'

definePageMeta({
  middleware: ['acl'],
  requiredRole: Role.Admin,
})

const route = useRoute()
const router = useRouter()

const id = routeParamIdToInt(route.params.id)

const { resourceConfig, fetchItem, patchItem } = useResourceSite()
const { item, error, code } = await fetchItem(id)
const { state, v$ } = useResourceSiteValidation(item)

async function submit() {
  const valid = await v$.value.$validate()

  if (valid && item.value !== null) {
    const { pending, error } = await patchItem(id, {}, item.value, state)
    if (!error?.value) {
      await router.replace(`${resourceConfig.appPath}/${id}`)
    }
  }
}
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
    <template #toolbar-append>
      <v-btn icon class="mx-4" :disabled="v$.$invalid" @click="submit()">
        <v-icon color="success">mdi-send</v-icon>
        <v-tooltip activator="parent" location="bottom">Submit</v-tooltip>
      </v-btn>
    </template>
    <template #default>
      <v-form v-if="state" @submit.prevent class="pa-6">
        <v-text-field
          required
          v-model="state.code"
          :error-messages="v$.code.$errors.map((e) => e.$message)"
          label="code"
          @input="v$.code.$touch"
          @blur="v$.code.$touch"
        ></v-text-field>
        <v-text-field
          required
          v-model="state.name"
          :error-messages="v$.name.$errors.map((e) => e.$message)"
          label="name"
          @input="v$.name.$touch"
          @blur="v$.name.$touch"
        ></v-text-field>
        <v-textarea label="description" v-model="state.description"></v-textarea>
      </v-form>
    </template>
  </app-data-card>
</template>
