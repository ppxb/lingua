<script setup lang="ts">
import { appName } from '~/constants'

import 'floating-vue/dist/style.css'
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
