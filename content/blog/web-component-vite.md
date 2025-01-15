---
date: "2024-11-21 11:48:00"
tags:
  - Web Components
  - vite
title: 基于 Web Components + vite 实现轻量化架子，适用于物联网设备、嵌入式设备等小内存web项目。
---

## 前言

一直以来我们都是使用 vue 或 react 脚手架进行项目开发，但是也存在老旧的项目与小内存设备需要 web 管理页面，本人有幸见识过一些纯 js 开发的项目，当我接手时我直接一脸懵：这个文件是什么，这个方法哪儿来的。。。

后面也开始了重构，但是项目要求就是产物必须小。经过一小会儿的调研，我发现了 Web Components API。心想这不就是我的梦中情人吗？ 能够分模块，体积小。

说干就干，直接建立了文件夹开始项目。

## 第一版

技术最终使用了：Web Components + gulp + vscode 的 Live Server。这些东西已经实现了分模块与热更新。但是项目整体依旧给人一种原始项目的感觉。经过了这一套项目的沉淀，我觉得 pass 这种方式。

![image.png](/blog/webComp1.webp)

## 船新版本

作为一个主 vue 副 react 的选手，我决不能委屈我再继续这样的模式进行项目开发。
经过痛定思痛以及亲手尝试后，我找到了最新的开发模式：

> vite + Web Components + pnpm

当我真正使用这一套开发后，我犹如井底之蛙跳出了水井一般，让我们看看这一套的优点：

- 热更新
- 分模块
- 技术新
- 插件多

### 效果预览

[项目地址：https://github.com/yosong-github/yo-web-components-template](https://github.com/yosong-github/yo-web-components-template)

![image.png](/blog/webComp2.webp)

### 项目初始化

> 创建空白项目与 vite 基础不做讲解，直接展示基本代码。

vite 默认项目更目录的 index.html 为入口。

index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style></style>
  </head>
  <script type="module" src="./src/main.js"></script>

  <body>
    <app-component style="height: 100%"></app-component>
  </body>
</html>
```

`app-component` 为自定义的组件。./src/main.js 为项目主入口。

#### 自定义组件

App.html

```html
<!DOCTYPE html>
<template>
  <style>
    #app {
      height: 100vh;
      width: 100vw;
      background-color: var(--theme-bg-color);
    }
  </style>
  <div id="app">yosong</div>
</template>
```

main.js

```js
// 主入口
import html from "./App.html?raw";

export class App extends HTMLElement {
  constructor() {
    super();
  }
  init() {}
  connectedCallback() {}
}

customElements.define("app-component", App);
```

> import html from './App.html?raw' ?raw 是 vite 导入文件原内容功能。

上面代码的 app-component 便是我们自定义的组件，同时我们已经再 index.html 文件中引入改 js 文件与改自定义组件，然后通过 vite 运行灵魂内容就完成了。如果有跟着尝试的小伙伴相信已经发现了最终效果了（）。那么我们继续来看组件的封装与使用。

## 更多内容见代码厂库

[项目地址：https://github.com/yosong-github/yo-web-components-template](https://github.com/yosong-github/yo-web-components-template)

已实现：

- 热更新
- 打包
- 多语言
- 路由
- 组件封装
- 自定义事件，类似 vue 的效果@click @change @input
