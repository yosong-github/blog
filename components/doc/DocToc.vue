<!--
 * @Author: yosong
 * @Date: 2024-05-09 16:12:55
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-05-09 17:12:57
 * @FilePath: \blog\components\doc\DocToc.vue
-->
<script setup lang="ts">
import { useEventListener } from '@vueuse/core'

const props = defineProps(['toc'])
const currentId = ref()

console.log(props.toc.links)

onMounted(() => {
  function handleScroll() {
    const headings = document.querySelectorAll('h2, h3')
    for (let i = 0; i < headings.length; i++) {
      const top = headings[i].getBoundingClientRect().top
      if (top >= 0 && top <= 100) currentId.value = headings[i].id
    }
  }
  useEventListener(document, 'scroll', handleScroll)
})
</script>

<template>
  <div class="fixed top-14 right-8% w-250px hidden xl:block">
    <ul>
      <li
        v-for="(h2, h2Index) in props.toc.links"
        :key="h2Index"
        class="list-none relative">
        <span class="flex items-center">
          <a
            :href="`#${h2.id}`"
            :class="{ 'text-Accent': h2.id === currentId }">
            {{ h2.text }}</a
          >
        </span>
        <template v-if="h2.children && h2.children.length > 0">
          <ul v-for="(h3, h3Index) in h2.children" :key="h3Index">
            <li class="list-none relative flex items-center">
              <a
                :class="{ 'text-Accent': h3.id === currentId }"
                :href="`#${h3.id}`">
                {{ h3.text }}</a
              >
            </li>
          </ul>
        </template>
      </li>
    </ul>
  </div>
</template>
