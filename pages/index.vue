<!--
 * @Author: yosong
 * @Date: 2024-05-09 11:29:43
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-05-10 14:04:49
 * @FilePath: \blog\pages\index.vue
-->
<template>
  <div class="md:w-400px text-center m-auto md:mt-20 mb-10">
    <img
      data-aos="fade-down"
      src="/assets/yosong.png"
      alt="yosong"
      class="object-cover rounded-full w-102px h-102px m-auto" />
    <h1 data-aos="fade-down" class="font-size-26px text-center my-8">yosong</h1>
    <p data-aos="fade-down" class="color-#555 my-6">
      I'm yosong and I'm a front-end developer
    </p>
    <div class="flex-center">
      <img
        class="mx-1 cursor-pointer"
        data-aos="fade-right"
        src="../assets/javascript.png" />
      <img
        class="mx-1 cursor-pointer"
        data-aos="fade-right"
        src="../assets/typescript.png" />
      <img
        class="mx-1 cursor-pointer"
        data-aos="fade-up"
        src="../assets/vue.png" />
      <img
        class="mx-1 cursor-pointer"
        data-aos="fade-up"
        src="../assets/react.png" />
      <img
        class="mx-1 cursor-pointer"
        data-aos="fade-left"
        src="../assets/uniapp.png" />
      <img
        class="mx-1 cursor-pointer"
        data-aos="fade-left"
        src="../assets/python.png" />
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'yosong',
  meta: [
    { name: 'description', content: 'yosong' },
    { name: 'keywords', content: 'yosong' },
  ],
})
</script>
