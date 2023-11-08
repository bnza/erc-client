<script setup lang="ts">
  definePageMeta({
    auth: {
      unauthenticatedOnly: true,
      navigateAuthenticatedTo: '/'
    }
  })
  const { signIn } = useAuth()
  const { isLoading } = useAppAuth()

  const email = ref('');
  const password = ref('');
  const isSubmitDisabled = computed(() => {
    return password.value.length === 0 || isLoading.value
  })
</script>

<template>
  <v-dialog
      :model-value="true"
      width="400px"
      :persistent="true"
  >
    <v-card variant="flat">
      <v-card-title class="bg-secondary">Login</v-card-title>
        <v-form
            class="pa-6"
            @submit.prevent
        >
          <v-text-field
              label="e-mail"
              v-model="email"
          />
          <v-text-field
              type="password"
              label="password"
              v-model="password"
          />
        </v-form>
      <v-card-actions>
        <NuxtLink to="/">
          <v-btn
              :disabled="isLoading"
              :flat="true"
          >cancel</v-btn>
        </NuxtLink>
        <v-spacer/>
        <v-btn
            :flat="true"
            color="secondary"
            :disabled="isSubmitDisabled"
            @click="signIn({ email, password }, {callbackUrl: $route.redirectedFrom?.fullPath || '/'})"
        >login</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>