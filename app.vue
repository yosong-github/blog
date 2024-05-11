<!--
 * @Author: yosong
 * @Date: 2024-05-09 11:21:46
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-05-11 15:27:52
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

  // 默认主题
  let theme = localStorage.getItem('theme')

  document.querySelector('html')!.setAttribute('class', theme || '')
})
</script>
