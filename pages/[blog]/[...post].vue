<!--
 * @Author: yosong
 * @Date: 2024-05-09 15:06:43
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-05-10 16:16:11
 * @FilePath: \blog\pages\[blog]\[...post].vue
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
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const post = route.params.blog + '/' + route.params.post[0]
</script>
