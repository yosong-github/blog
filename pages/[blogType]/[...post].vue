<!--
 * @Author: yosong
 * @Date: 2024-05-09 15:06:43
 * @LastEditors: yosong 2404559603@qq.com
 * @LastEditTime: 2024-10-11 17:32:07
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
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

// import {
//   type WalineInstance,
//   type WalineInitOptions,
//   init,
// } from '@waline/client'

// import '@waline/client/style'

const route = useRoute();
const post = route.params.blogType + "/" + route.params.post[0];

const comment = ref<HTMLDivElement>();
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

onMounted(() => {
  let imgs = document.querySelectorAll("img");

  // 14，预览图片前页面滚动距离初始值
  let lastPositon = 0;
  imgs.forEach((pic) => {
    pic.addEventListener("click", function () {
      // 15，计算预览图片前页面滚动距离
      lastPositon = window.scrollY;
      // 1，克隆元素
      const pic2 = pic.cloneNode() as HTMLImageElement;
      // 2，计算原图距离窗口left，top的距离
      let picToTop = pic.getBoundingClientRect().y;
      let picToLeft = pic.getBoundingClientRect().x;
      // 11，计算原图宽度
      let picWidth = pic.width;
      let picHeight = pic.height;
      let aspectRatio = picWidth / picHeight;

      // 3，设置克隆图片初始位置
      pic2.style.position = "absolute";
      pic2.style.left = `${picToLeft}px`;
      pic2.style.top = `${picToTop}px`;
      pic2.style.width = `${picWidth}px`;
      pic2.style.height = `${picHeight}px`;
      // 4，创建蒙层
      const mask = document.createElement("div");
      mask.classList.add("mask");
      // 5，将元素添加到body中
      mask.appendChild(pic2);
      document.body.appendChild(mask);
      // 6，使用setTimeout是为了触发`transition`，产生动画
      // 7，隐藏原图片
      pic.style.visibility = "hidden";
      setTimeout(() => {
        // 8，设置预览图片展示宽度以及位置
        pic2.style.position = "absolute";
        pic2.style.transition = "all .5s";
        if (picHeight > picWidth) {
          pic2.style.height = "100%";
          pic2.style.width = window.innerHeight * aspectRatio + "px";
          pic2.style.transform = "translateX(-50%)";
          pic2.style.left = "50%";
          pic2.style.top = `0`;
        } else {
          pic2.style.width = "100%";
          pic2.style.height = window.innerWidth * (picHeight / picWidth) + "px";
          pic2.style.transform = "translateY(-50%)";
          pic2.style.top = "50%";
          pic2.style.left = `0`;
        }
      }, 0);
      // 9，点击蒙层关闭预览
      mask.addEventListener("click", function () {
        // 10，预览图回到原图位置
        pic2.style.width = `${picWidth}px`;
        pic2.style.height = `${picHeight}px`;
        pic2.style.left = `${picToLeft}px`;
        pic2.style.top = `${picToTop}px`;
        pic2.style.transform = "";
        // 12，显示原图
        setTimeout(() => {
          pic.style.visibility = "visible";
          // 13，删除蒙层以及预览图
          this.remove();
        }, 500);
      });
    });
  });
});
</script>
