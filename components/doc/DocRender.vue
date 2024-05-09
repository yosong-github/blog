<!--
 * @Author: yosong
 * @Date: 2024-05-09 15:41:40
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-05-09 16:13:47
 * @FilePath: \blog\components\doc\DocRender.vue
-->
<script setup lang="ts">
const props = defineProps(['article'])
</script>

<template>
  <DocTitle :article="props.article" />
  <ContentRenderer style="word-wrap: break-word" :value="props.article" />
</template>
