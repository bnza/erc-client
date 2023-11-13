<script setup lang="ts">
const { getSession, status } = useAuth();
const AuthLogoutIcon = resolveComponent("AuthLogoutIcon");
const AuthLoginIcon = resolveComponent("AuthLoginIcon");
const authComponent = computed(() =>
  status.value === "authenticated" ? AuthLogoutIcon : AuthLoginIcon,
);
</script>

<template>
  <component :is="authComponent"></component>
</template>
