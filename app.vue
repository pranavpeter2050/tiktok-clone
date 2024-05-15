<template>
  <NuxtPage />

  <AuthOverlay v-if="isLoginOpen"/>
</template>

<script setuo>
import { storeToRefs } from 'pinia';

const { $generalStore } = useNuxtApp()

const { isLoginOpen } = storeToRefs($generalStore)
</script>