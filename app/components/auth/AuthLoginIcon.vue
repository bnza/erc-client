<template>
  <v-tooltip text="login">
    <template v-slot:activator="{ props }">
      <NuxtLink to="/login">
        <v-icon class="mr-6" v-bind="props"> mdi-login </v-icon>
      </NuxtLink>
    </template>
  </v-tooltip>
</template>
