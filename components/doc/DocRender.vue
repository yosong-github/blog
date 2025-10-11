<!--
 * @Author: yosong
 * @Date: 2024-05-09 15:41:40
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-05-09 16:13:47
 * @FilePath: \blog\components\doc\DocRender.vue
-->
<script setup lang="ts">
const props = defineProps(['article'])

import bg from '@/assets/body.jpg'
</script>

<template>
  <DocTitle :article="props.article" />
  <ContentRenderer
    style="word-wrap: break-word; font-size: 16px; padding: 12px"
    :style="{
      'background-image': 'url(' + bg + ')'
    }"
    :value="props.article"
  />
</template>
