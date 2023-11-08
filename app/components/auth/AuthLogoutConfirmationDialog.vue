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
      :persistent="true"
  >
    <v-card variant="flat">
      <v-card-title class="bg-secondary">Logout</v-card-title>
      <v-card-text>
        Are you sure you want to logout
      </v-card-text>
      <v-card-actions>
        <v-btn @click="$emit('update:isOpen',false)">Cancel</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="secondary" @click="signOut({callbackUrl: '/'})">Logout</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>