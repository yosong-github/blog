<!--
 * @Author: yosong
 * @Date: 2024-05-09 15:06:43
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-05-14 12:31:59
 * @FilePath: \blog\pages\[blogType]\[...post].vue
-->
<template>
  <div class="pb-10 prose">
    <ContentDoc :path="post">
      <template #default="{ doc }">
        <doc-render :article="doc" />

        <doc-toc :toc="doc.body.toc" />
      </template>

      <template #not-found>
        <h1>Document not found</h1>
      </template>
      <template #empty>
        <h1>Document is empty</h1>
      </template>
    </ContentDoc>
    <div class="content" ref="comment"></div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

// import {
//   type WalineInstance,
//   type WalineInitOptions,
//   init,
// } from '@waline/client'

// import '@waline/client/style'

const route = useRoute()
const post = route.params.blogType + '/' + route.params.post[0]

const comment = ref<HTMLDivElement>()
// const waline = ref<WalineInstance | null>()

// onMounted(() => {
//   waline.value = init({
//     el: comment.value,
//     serverURL: 'https://comment.felixwliu.cn/',
//     path: 'yosong/' + post,
//     dark: 'html.dark',
//     requiredMeta: ['nick'],
//     login: 'enable',
//     wordLimit: 0,
//     pageSize: 10,
//     lang: 'zh-CN',
//     comment: true,
//     pageview: true,
//     commentCount: true,
//     secureDomains: ['https://blog-3dq.pages.dev'],
//   } as WalineInitOptions)
// })

// onBeforeUnmount(() => {
//   waline.value?.destroy()
// })
</script>
