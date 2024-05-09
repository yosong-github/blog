<!--
 * @Author: yosong
 * @Date: 2024-05-09 11:21:46
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-05-09 21:44:12
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

onMounted(() => {
  $aos().init({
    easing: 'ease-in-out-back',
    duration: 1000,
  })
})
</script>
