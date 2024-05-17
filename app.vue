<template>
  <NuxtPage />

  <AuthOverlay v-if="isLoginOpen"/>

  <EditProfileOverlay v-if="isEditProfileOpen"/>
</template>

<script setup>
import { storeToRefs } from 'pinia';

const { $generalStore } = useNuxtApp()

const { isLoginOpen, isEditProfileOpen } = storeToRefs($generalStore)

onMounted(async () => {
  try {
    await $generalStore.hasSessionsExpired()
  }
  catch (error) {
    console.log(error)
  }
})
</script>