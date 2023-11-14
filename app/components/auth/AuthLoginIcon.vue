<script setup lang="ts">
import { useLoginRedirectStore } from "~/stores/loginRedirect";

const route = useRoute();
const { setPreviousPath } = useLoginRedirectStore();
/*onMounted(() => {
  console.log(route.fullPath);
});*/
watch(
  () => route.fullPath,
  () => {
    setPreviousPath(route);
  },
  { immediate: true },
);
</script>

<template>
  <v-tooltip text="login">
    <template v-slot:activator="{ props }">
      <NuxtLink to="/login">
        <v-icon class="mr-6" v-bind="props"> mdi-login </v-icon>
      </NuxtLink>
    </template>
  </v-tooltip>
</template>
