<script setup lang="ts">

import AuthAppBarIcon from "../components/auth/AuthAppBarIcon.vue";
</script>

<template>
  <v-layout class="rounded rounded-md">
<!--    <v-system-bar color="primary-darken-1">-->
<!--      <span>ERC</span>-->
<!--      <v-icon color="info" icon="mdi-alert" size="x-large"></v-icon>-->
<!--    </v-system-bar>-->

<!--    <v-navigation-drawer-->
<!--        color="grey-darken-2"-->
<!--        permanent-->
<!--        width="72"-->
<!--    ></v-navigation-drawer>-->

    <v-navigation-drawer
        color="grey-darken-1"
        permanent
        width="150"
    ></v-navigation-drawer>

    <v-app-bar
        color="primary"
        height="48"
        flat
    >
      <template v-slot:prepend>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title>ERC project</v-app-bar-title>

      <v-spacer></v-spacer>

      <auth-app-bar-icon></auth-app-bar-icon>
    </v-app-bar>

<!--    <v-navigation-drawer-->
<!--        color="grey-lighten-1"-->
<!--        location="right"-->
<!--        permanent-->
<!--        width="150"-->
<!--    ></v-navigation-drawer>-->

<!--    <v-app-bar-->
<!--        color="grey-lighten-2"-->
<!--        flat-->
<!--        height="48"-->
<!--        location="bottom"-->
<!--    ></v-app-bar>-->

    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
      <slot>
        Main content
      </slot>
    </v-main>
  </v-layout>
</template>

<style scoped>

</style>