<!--
 * @Author: yosong 2404559603@qq.com
 * @Date: 2024-10-12 11:07:22
 * @LastEditors: yosong 2404559603@qq.com
 * @LastEditTime: 2024-10-12 16:23:15
 * @FilePath: \pages\[blogType]\[...post].vue
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
    <!-- <div style="height: 400px; border: 1px solid #ccc; border-radius: 6px">
      <ClientOnly>
        <VueFlow :nodes="nodes" :edges="edges">
          <Background />
        </VueFlow>
      </ClientOnly>
    </div> -->
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
