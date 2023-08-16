<script setup lang="ts">
  definePageMeta({
    auth: {
      unauthenticatedOnly: true,
      navigateAuthenticatedTo: '/'
    }
  })
  const { signIn } = useAuth()
  const email = ref('');
  const password = ref('');
  const isSubmitDisabled = computed(() => {
    return password.value.length === 0
  })
</script>

<template>
  <v-card>
    <v-card-title>Login</v-card-title>
    <v-sheet
      width="300"
      class="mx-auto"
    >
      <v-form @submit.prevent>
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
    </v-sheet>
    <v-card-actions>
      <NuxtLink to="/">
        <v-btn>cancel</v-btn>
      </NuxtLink>
      <v-spacer/>
      <v-btn
          color="primary"
          :disabled="isSubmitDisabled"
          @click="signIn({ email, password }, {callbackUrl: '/'})"
      >login</v-btn>
    </v-card-actions>
  </v-card>
</template>