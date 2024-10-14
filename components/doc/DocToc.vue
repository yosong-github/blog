<!--
 * @Author: yosong
 * @Date: 2024-05-09 16:12:55
 * @LastEditors: yosong 2404559603@qq.com
 * @LastEditTime: 2024-10-14 17:39:27
 * @FilePath: \components\doc\DocToc.vue
-->
<script setup lang="ts">
import { useEventListener } from "@vueuse/core";

const props = defineProps(["toc"]);
const currentId = ref();
const offset = 100;

const toTitle = (id: string) => {
  let titleElement = document.querySelector("#" + id);
  let contentElement = document.querySelector("html");

  if (top && contentElement && titleElement) {
    let top =
      titleElement.getBoundingClientRect().top +
      contentElement.scrollTop -
      offset;
    window.scrollTo({ top: top, behavior: "smooth" });
  }
  // 添加锚点值
  history.pushState(null, "null", "#" + id);
  currentId.value = id;
};

function handleScroll() {
  const headings = document.querySelectorAll("h2, h3");
  for (let i = 0; i < headings.length; i++) {
    const top = headings[i].getBoundingClientRect().top;

    if (top >= 0 && top <= offset + 20) {
      currentId.value = headings[i].id;
    }
  }
}

onMounted(() => {
  useEventListener(document, "scroll", handleScroll);

  window.addEventListener("DOMContentLoaded", function () {
    let hash = window.location.hash;
    if (hash) {
      let target = document.querySelector(hash) as HTMLElement;
      if (target) {
        window.scrollTo({
          top: target.offsetTop - offset,
          behavior: "smooth",
        });
      }
    }
  });
});
</script>

<template>
  <div
    class="fixed top-32 lg:left-80% xl:left-75% w-260px hidden lg:block overflow-x-hidden max-h-60% border-s"
  >
    <ul>
      <li
        v-for="(h2, h2Index) in props.toc.links"
        :key="h2Index"
        class="list-none relative line-height-loose"
      >
        <span
          :class="{
            'text-Accent': h2.id === currentId,
          }"
          class="cursor-pointer"
          @click="
            (e) => {
              e.preventDefault();
              toTitle(h2.id);
            }
          "
        >
          {{ h2.text }}</span
        >
        <template v-if="h2.children && h2.children.length > 0">
          <ul class="m-0">
            <li
              v-for="(h3, h3Index) in h2.children"
              :key="h3Index"
              class="list-none relative flex items-center line-height-loose"
            >
              <span
                :class="{
                  'text-Accent': h3.id === currentId,
                }"
                class="cursor-pointer"
                @click="
                  (e) => {
                    e.preventDefault();
                    toTitle(h3.id);
                  }
                "
              >
                {{ h3.text }}</span
              >
            </li>
          </ul>
        </template>
      </li>
    </ul>
  </div>
</template>
