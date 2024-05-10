<!--
 * @Author: yosong
 * @Date: 2024-05-09 11:48:24
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-05-10 10:57:25
 * @FilePath: \blog\layouts\cpns\NavBar.vue
-->
<template>
  <div class="flex-center nav">
    <template v-for="it in navList">
      <NuxtLink :to="it.path" class="mx-6 px-2 py-1 cursor-pointer">
        {{ it.name }}
      </NuxtLink>
    </template>
  </div>
</template>

<script setup lang="ts">
const navList = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Blog', path: '/blog' },
]
</script>
