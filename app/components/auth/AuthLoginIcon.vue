<template>
  <v-tooltip text="Login">
    <template v-slot:activator="{ props }">
      <NuxtLink
          to="/login"
      >
        <v-icon
            v-bind="props"
        >
          mdi-login
        </v-icon>
      </NuxtLink>
    </template>
  </v-tooltip>
</template>