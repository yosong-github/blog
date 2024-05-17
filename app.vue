<!--
 * @Author: yosong
 * @Date: 2024-05-09 11:21:46
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-05-17 10:44:43
 * @FilePath: \blog\app.vue
-->
<template>
  <NuxtLayout>
    <NuxtLoadingIndicator color="#3f51b5" />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const { $aos } = useNuxtApp()

const cookie = useCookie('theme', {
  maxAge: 1000 * 60 * 24 * 30,
})

useHead(() => {
  return {
    htmlAttrs: {
      class: cookie.value == 'dark' ? 'dark' : 'light',
    },
  }
})

onMounted(() => {
  $aos().init({
    easing: 'ease-in-out-back',
    duration: 1000,
  })
})
</script>
