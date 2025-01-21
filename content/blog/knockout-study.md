---
date: "2025-01-20 16:05:45"
tags:
  - js
  - knockout
  - 原生
title: knockout 常用语法
---

## 长夜漫漫，无心睡眠

![alt text](/blog/knockout/start.png)

在前面我有写过一篇[《基于 Web Components + vite 实现轻量化架子，适用于物联网设备、嵌入式设备等小内存 web 项目。》](/blog/web-component-vite)，他的优点是基于原生，组件化，体积小等，但是他的确定也是显而易见的

![alt text](/blog/knockout/webpontents.png)

浏览器兼容一般，那有什么办法能实现兼容性好，同时开发便捷的库吗？答案就是 **[knockout](https://github.com/knockout/knockout)**。

![alt text](/blog/knockout/info.png)

上图可见，knockout 是一个体积小、无依赖并且兼容所有主流浏览器的一个前端框架。下面来介绍一下 knockout 的基础用法吧！

## 基础用法

knockout 是一个 **MVVM** 模式的 js 库，由微软在 2010 年推出的。

它的学习路线可以主要一下几个部分：

- 基础
- 数据监控
- 事件绑定
- 组件

### 基础

1. 激活 ko 对象

```js
// 绑定的数据，用于与视图绑定
const vm = {};

ko.applyBindings(vm, dom);
```
