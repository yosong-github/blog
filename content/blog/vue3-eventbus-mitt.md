---
date: '2024-05-15 15:45:20'
tags:
  - nuxt
  - nuxt-content
  - aos
title: mitt小巧的、快速的事件总线库
---

<img src='/blog/mitt.png' width='100%'>

mitt 是一个小巧的、快速的事件总线库，作者是这样介绍它的：

> 🥊 Tiny 200 byte functional event emitter / pubsub.

## 前言

在 vue3 发布后，我们就不能像以前一样使用 vue2 的`$on`、`$emit`来监听和触发事件了，因为 vue3 已经移除了`$on`、`$emit`。

那么在项目如果遇见一些需要监听和触发事件的场景，我们可以如何处理呢？mitt 为我们提供了提供了基本的事件处理功能，其中包括事件的订阅、取消订阅和触发，还支持使用命名空间来提高项目的可控与拓展性。

## 简单使用

> mitt 的使用很简单，但是为了提高项目的稳定，在我们注册于触发一个事件时推荐使用 Map 来定义 key

### 安装

```bash
npm install mitt
```

### 注册与使用

```js
import mitt from 'mitt'

const emitter = mitt()

const FOO = 'foo'

// 订阅
emitter.on(FOO, () => {
  console.log('foo')
})

// 触发
emitter.emit(FOO)
```

## mitt 简单实现

```js
export default function yoMitt() {
  // 所有事件
  let all = new Map()

  return {
    /**
     * 订阅方法
     * @param {*} key  传递的事件key
     * @param {*} handler  事件处理函数
     */
    on(key: string, handler: Function) {
      const handlers = all.get(key) || []
      handlers.push(handler)
      // 添加对应的事件
      all.set(key, handlers)
    },
    /**
     * 发布方法
     * @param {*} key 发布给订阅者的key
     * @param {*} params  发布者的参数，告诉订阅者我发布了什么内容。
     */
    emit(key: string, params?: any) {
      const handlers = all.get(key)
      // 执行订阅者的事件
      if (handlers) {
        handlers.map((handler: Function) => {
          handler(params)
        })
      }
    },
    // ...
  }
}
```
