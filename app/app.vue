<script setup lang="ts">
import { appName } from '~/constants'

import './app.css'

useHead({
  title: appName,
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <WelcomeDialog />
</template>
