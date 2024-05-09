---
date: 2023-04-16 09:46:36
tags:
  - 测试
  - sss
  - asfskdfs
title: 好笑阿

modification time: 2050-05-75 08:43:38
---

## 1 s 阿斯蒂芬撒地方

sdafsafasfsdafsafasfsdafsafasfsdafsafasfsdafsafasfsdafsafasfsdafsafasfsdafsafasfsdafsafasfsdafsafasfsdafsafasfsdafsafasfsdafsafasfsdafsafasf

```vue
<!--
 * @Author: yosong
 * @Date: 2024-05-09 15:06:43
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-05-09 15:45:34
 * @FilePath: \blog\pages\blog\[...post].vue
-->
<template>
  <div class="py-10 prose">
    <ContentDoc :path="post">
      <template #default="{ doc }">
        <doc-render :article="doc" />
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
const post = 'blog/' + route.params.post[0]
</script>
```
