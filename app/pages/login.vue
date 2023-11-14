<script setup lang="ts">
import { useLoginRedirectStore } from "~/stores/loginRedirect";
import { storeToRefs } from "pinia";
import { useUiAppSnackbar } from "~/stores/ui";

definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: "/",
  },
});
const { signIn } = useAuth();
const { redirectUrl } = storeToRefs(useLoginRedirectStore());
const uiSnackbarStore = useUiAppSnackbar();

const email = ref("");
const password = ref("");
const loginFailed = ref(false);
const isLoading = ref(false);
const loginFailedText = computed(() =>
  loginFailed.value ? "Login failed!" : "",
);
const isSubmitDisabled = computed(() => {
  return password.value.length === 0 || isLoading.value;
});

const signInAndFeedback = async ({
  email,
  password,
}: Record<string, string>) => {
  isLoading.value = true;
  loginFailed.value = false;
  try {
    await signIn({ email, password }, { callbackUrl: redirectUrl.value });
    uiSnackbarStore.show({
      _text: `User ${email} successfully logged in`,
      _color: "success",
      _timeout: 5000,
    });
  } catch (e) {
    loginFailed.value = true;
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <v-dialog :model-value="true" width="400px" :persistent="true">
    <v-card variant="flat">
      <v-progress-linear
        color="primary"
        :active="isLoading"
        :indeterminate="true"
      ></v-progress-linear>
      <v-card-title class="bg-secondary">Login</v-card-title>
      <v-card-text
        >Enter your credentials
        <span v-if="loginFailed" class="text-error font-weight-bold">{{
          loginFailedText
        }}</span></v-card-text
      >
      <v-form class="px-6" @submit.prevent>
        <v-text-field label="e-mail" v-model="email" />
        <v-text-field type="password" label="password" v-model="password" />
      </v-form>
      <v-card-actions>
        <NuxtLink to="/">
          <v-btn :disabled="isLoading" :flat="true">cancel</v-btn>
        </NuxtLink>
        <v-spacer />
        <v-btn
          :flat="true"
          color="secondary"
          :disabled="isSubmitDisabled"
          @click="signInAndFeedback({ email, password })"
          >login</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
