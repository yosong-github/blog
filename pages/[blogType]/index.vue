<!--
 * @Author: yosong
 * @Date: 2024-05-09 11:47:28
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-06-21 15:01:07
 * @FilePath: \blog\pages\[blogType]\index.vue
-->
<template>
  <div class="py-10" v-if="!loading">
    <template v-for="(_, key, index) in posts">
      <span>
        <span
          @click="typeCheck(key)"
          class="cursor-pointer font-size-26px font-weight-bold"
          :class="{
            'color-type': key !== activeIndex,
          }"
        >
          <span>{{ String(key).trim() }}</span>
          <span class="mr-6 font-size-16px">({{ _.length }})</span>
        </span>
      </span>
    </template>
    <div class="mt-10">
      <template v-for="it in posts[activeIndex]">
        <NuxtLink
          :to="'/' + it._file!.slice(0, -3)"
          class="flex justify-between items-start my-2 py-2 cursor-pointer light:hover:bg-light dark:hover:bg-dark p-4 rounded"
        >
          <span class="flex-1">{{ it.title }}</span>
          <span class="w-100px font-size-12px ml-5 color-#aaa">{{
            Dayjs(it.date).format("YYYY-MM-DD")
          }}</span>
        </NuxtLink>
      </template>
    </div>
  </div>
  <div py-10 v-else>
    <div light:bg-light dark:bg-dark h-10 w-30></div>
    <div mt-10>
      <div
        class="flex justify-between items-start my-2 py-2 cursor-pointer light:bg-light dark:bg-dark p-4 rounded h-20"
      >
        <span flex-1 light:bg-light-1 dark:bg-dark-1 h-100%></span>
        <span
          class="w-100px font-size-12px ml-5 color-#aaa light:bg-light-1 dark:bg-dark-1 h-100%>"
        ></span>
      </div>
      <div
        class="flex justify-between items-start my-2 py-2 cursor-pointer light:bg-light dark:bg-dark p-4 rounded h-20"
      >
        <span flex-1 light:bg-light-1 dark:bg-dark-1 h-100%></span>
        <span
          class="w-100px font-size-12px ml-5 color-#aaa light:bg-light-1 dark:bg-dark-1 h-100%>"
        ></span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Dayjs from "dayjs";
import { getPosts } from "../../utils";
import type { ParsedContent } from "@nuxt/content";

const loading = ref(true);

// 当前激活的分类
const activeIndex = ref<string | number>("");

// 所有文章
const posts = ref<{
  [key: string]: ParsedContent[];
}>({});

const typeCheck = (key: string | number) => {
  activeIndex.value = key;
  sessionStorage.setItem("activeIndex", String(key));
};

onMounted(() => {
  // 获取所有文章
  getPosts("/")
    .then((res) => {
      posts.value = res;
      if (sessionStorage.getItem("activeIndex") === null) {
        activeIndex.value = Object.keys(res)[0];
      } else {
        activeIndex.value = sessionStorage.getItem("activeIndex")!;
      }
    })
    .finally(() => (loading.value = false));
});

useHead({
  title: "yosong - blog",
  meta: [
    { name: "description", content: "yosong blog list" },
    { name: "keywords", content: "yosong blog" },
  ],
});
</script>
