<!--
 * @Author: yosong
 * @Date: 2024-05-09 15:06:43
 * @LastEditors: yosong 2404559603@qq.com
 * @LastEditTime: 2024-10-17 14:17:56
 * @FilePath: \pages\[blogType]\[...post].vue
-->
<template>
  <div class="pb-10 prose m-x-auto content">
    <ContentDoc :path="post">
      <template #default="{ doc }">
        <doc-render :article="doc" />

        <doc-toc :toc="doc.body!.toc" />
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
import { useRoute } from "vue-router";
import useImgPre from "@/hooks/useImgPre";

const route = useRoute();
const post = route.params.blogType + "/" + route.params.post[0];
const comment = ref<HTMLDivElement>();

useImgPre();

onMounted(() => {});
</script>

<style>
.content img {
  cursor: pointer;
}
</style>
