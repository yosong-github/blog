---
date: '2024-05-23 10:41:12'
tags:
  - 组件
  - 函数式
title: 封装函数式弹窗组件
---

> 在项目开发中我们通常会遇见很多弹窗的场景 比如登录弹窗、注册弹窗、提示弹窗、确认弹窗等等。如果每个页面都去手动导入弹窗组件，在点击按钮后弹出弹窗，这样的操作是很无礼的。

## 函数式弹窗

通过字面意思我们就能清楚的知道，函数式弹窗就是通过函数调用达到创建弹窗的效果

其实做过开发的同志们肯定也知道在市面上的许多组件库中也提供了函数式弹窗的实现，比如 element-plus、ant-design-vue 等等。下面我们就以 element-plus 的 MessageBox 为例，来看看组件库是如何封装函数式弹窗组件的。

### element-plus 的 MessageBox 主要实现

通过源码其实我们很容易就能知道，他们实现函数弹窗的方式简单说就是封装 messageBox 函数，然后调用 render 方法来实现弹窗。
<img src='/blog/functionPop/element-plus.png' width='100%'/>

## 简单封装自己的函数式弹窗组件

> 其实在 vue3 中向我们暴露了许多类似 render 的方法：createVNode、h、render、createApp 等等，这些方法其实都是函数式组件的实现方式，我们也可以通过这些方法来封装自己的函数式弹窗组件。

### 封装思路

1. 使用组件+createApp 的方式实现
2. 封装一个弹窗组件
3. 封装一个函数式弹窗方法

### 封装步骤

1. 创建弹窗组件

```vue
<template>
  <div class="yo-pop">弹窗内容</div>
</template>

<script setup lang="ts"></script>
```

2. 封装弹窗函数

```ts
import { createApp, type App, type Component } from 'vue'
import YoPop from './YoPop.vue'

let pop: App
let div: HTMLElement

export default function (cpn?: Component, props?: any) {
  // 创建dom并插入到body中
  div = document.createElement('div')
  div.setAttribute('id', 'yo-pop--')
  document.body.appendChild(div)

  // 创建组件
  pop = createApp(cpn || YoPop, props)
  pop.mount(div)

  return {
    onHandleClose() {
      pop.unmount()
      div.remove()
    },
  }
}
```

3. 使用方法

- 自定义组件 YoPopVue

```vue
<template>
  <div class="yo-pop">
    <div>{{ props.msg }}</div>
    <button @click="props.close()">关闭</button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  msg: string
  close: any
}>()
</script>
```

- 使用

```ts
import yoPop from '~/components/yo/yoPop'
import YoPopVue from '~/components/yo/yoPop/YoPop.vue'
onMounted(() => {
  const { onHandleClose } = yoPop(YoPopVue, {
    msg: '弹窗组件',
    close: () => {
      onHandleClose()
    },
  })

  // setTimeout(() => {
  //   onHandleClose()
  // }, 2000)
})
```
