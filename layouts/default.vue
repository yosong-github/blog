<!--
 * @Author: yosong
 * @Date: 2024-05-09 11:48:19
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-05-09 13:34:38
 * @FilePath: \blog\layouts\default.vue
-->
<script lang="ts" setup>
import NavBar from './cpns/NavBar.vue'
import Footer from './cpns/Footer.vue'
</script>

<template>
  <header class="p-2em">
    <NavBar />
  </header>
  <main class="flex-1 md:w-555px md:m-auto mx-2">
    <slot />
  </main>
  <Footer class="md:w-555px md:m-auto mx-2"></Footer>
</template>
