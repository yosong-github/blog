<!--
 * @Author: yosong
 * @Date: 2024-05-09 11:48:19
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-05-10 10:59:54
 * @FilePath: \blog\layouts\default.vue
-->
<script lang="ts" setup>
import NavBar from './cpns/NavBar.vue'
import Footer from './cpns/Footer.vue'
</script>

<template>
  <header
    sticky
    top-0
    border-black
    bg-white
    backdrop-blur-xl
    backdrop-saturate-150
    dark:border-white
    border-op-50
    dark:text-white
    z-50
    dark:bg-black
    bg-op-70
  >
    <NavBar />
  </header>
  <main class="flex-1 md:w-555px md:m-auto mx-2 pt-16">
    <slot />
  </main>
  <Footer class="md:w-555px md:m-auto mx-1"></Footer>
</template>
