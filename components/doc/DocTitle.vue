<!--
 * @Author: yosong
 * @Date: 2024-05-09 15:41:40
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-05-10 17:28:54
 * @FilePath: \blog\components\doc\DocTitle.vue
-->
<script setup lang="ts">
import Dayjs from 'dayjs'

const props = defineProps(['article'])
</script>

<template>
  <div class="mb-10">
    <h1 class="text-center font-size-26px font-weight-bold">
      {{ props.article.title }}
    </h1>
    <div class="mb-4 w-100%">
      <div class="flex-center w-100% justify-around">
        <span class="flex-center">
          <img
            src="../../assets/yosong.png"
            class="object-cover rounded-full w-40px h-40px mr-2"
            alt="yosong" />
          <span>yosong</span>
        </span>
        <span>{{
          Dayjs(props.article.date).format('YYYY-MM-DD HH:mm:ss')
        }}</span>
      </div>

      <br />

      <div class="op-70 flex gap-2 m-t-0.5em">
        <span v-for="tag in props.article.tags" :key="tag"> #{{ tag }} </span>
      </div>
    </div>
  </div>
</template>
