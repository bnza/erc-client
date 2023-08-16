<script setup lang="ts">
  defineProps({
    isOpen: Boolean
  })
  const { signOut } = useAuth()
</script>

<template>
  <v-dialog
      :model-value="isOpen"
      width="400px"
      persistent
  >
    <v-card>
      <v-card-title>Confirm logout</v-card-title>
      <v-card-text>
        Are you sure you want to logout
      </v-card-text>
      <v-card-actions>
        <v-btn @click="$emit('update:isOpen',false)">Cancel</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="signOut({callbackUrl: '/'})">Logout</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>