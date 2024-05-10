<!--
 * @Author: yosong
 * @Date: 2024-05-09 11:47:28
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-05-10 16:39:42
 * @FilePath: \blog\pages\[blog]\index.vue
-->
<template>
  <div class="py-10">
    <template v-for="(_, key, index) in posts">
      <span>
        <span
          @click="typeCheck(key)"
          class="cursor-pointer font-size-26px font-weight-bold"
          :class="{
            'color-#000': key === activeIndex,
            'color-#aaa': key !== activeIndex,
          }">
          {{ key }}
        </span>
        <span class="mr-6">({{ _.length }})</span>
      </span>
    </template>
    <div class="mt-10">
      <template v-for="it in posts[activeIndex]">
        <NuxtLink
          :to="it._file!.slice(0, -3)"
          class="flex justify-between items-start my-2 py-2 cursor-pointer">
          <span class="flex-1">{{ it.title }}</span>
          <span class="w-100px font-size-12px ml-5 color-gray-500">{{
            Dayjs(it.date).format('YYYY-MM-DD')
          }}</span>
        </NuxtLink>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Dayjs from 'dayjs'
import { getPosts } from '../../utils'
import type { ParsedContent } from '@nuxt/content/types'

// 当前激活的分类
const activeIndex = ref<string | number>('')

// 所有文章
const posts = ref<{
  [key: string]: ParsedContent[]
}>({})

const typeCheck = (key: string | number) => {
  activeIndex.value = key
  sessionStorage.setItem('activeIndex', String(key))
}

onMounted(() => {
  // 获取所有文章
  getPosts('/').then((res) => {
    posts.value = res
    if (sessionStorage.getItem('activeIndex') === null) {
      activeIndex.value = Object.keys(res)[0]
    } else {
      activeIndex.value = sessionStorage.getItem('activeIndex')!
    }
  })
})

useHead({
  title: 'yosong - blog',
  meta: [
    { name: 'description', content: 'yosong blog list' },
    { name: 'keywords', content: 'yosong blog' },
  ],
})
</script>
