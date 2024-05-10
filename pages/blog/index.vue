<!--
 * @Author: yosong
 * @Date: 2024-05-09 11:47:28
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-05-10 11:09:48
 * @FilePath: \blog\pages\blog\index.vue
-->
<template>
  <div class="py-10">
    <template v-for="it in posts">
      <NuxtLink
        :to="it._file.slice(0, -3)"
        class="flex justify-between items-start my-2 py-2 cursor-pointer">
        <span class="flex-1">{{ it.title }}</span>
        <span class="w-100px font-size-12px ml-5 color-gray-500">{{
          Dayjs(it.date).format('YYYY-MM-DD')
        }}</span>
      </NuxtLink>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Dayjs from 'dayjs'
import { getIncludedYearPosts } from '../../utils'

const posts = ref([] as any)

getIncludedYearPosts('blog').then((res) => {
  posts.value = res
})

useHead({
  title: 'yosong - blog',
  meta: [
    { name: 'description', content: 'yosong blog list' },
    { name: 'keywords', content: 'yosong blog' },
  ],
})
</script>
