---
date: '2024-08-30 17:05:12'
tags:
  - defineComponent
  - JSX
  - vite
title: 记录Vue3+JSX使用
---

为什么要学JSX呢？是sfc不香了吗？

> JSX 是 JavaScript 的一个类似 XML 的扩展。JSX 可以很好地描述UI 应该呈现出它应有交互的本质形式。JSX 可能会使人联想到模板语言，但它具有 JavaScript 的全部功能。

vue2到vue3最明显的区别便是加入了组合式api与hook的使用，但是在我们闲逛github时就会发现有不少的开源框架使用了vue3+jsx的模式开发项目。那么下面我们将简单讲一讲如何使用vue+jsx开发项目。

## 构建工具支持

vue本身不支持jsx，所有我们需要通过构建工具进行操作，我们以vite为例，来实现对jsx的支持：


1. 安装插件 @vitejs/plugin-vue-jsx

[快速链接：https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue-jsx](https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue-jsx)

``` bash
pnpm i @vitejs/plugin-vue-jsx -D
```
2. 配置vite插件
``` js
import vueJsx from '@vitejs/plugin-vue-jsx'

// 使用插件
plugins: [
  vue(),
  vueJsx(),
  ...
]

// 如果项目存在eslint，tsconfig之类的配置问题需要指定开启jsx，详情看文档。有些人就是不看文档！
// eslin为例
parserOptions: {
  ecmaFeatures: {
    jsx: true
  }
}
```
配置完成后我们的构建工具将会自动编译jsx语法，下面我们就可以开始开发了。


## defineComponent

> 在定义 Vue 组件时提供类型推导的辅助函数。我们可以使用它进行定于组件（jsx， h函数。。。）

### 属性

``` ts
// 选项语法
function defineComponent(
  component: ComponentOptions
): ComponentConstructor

// 函数语法 (需要 3.3+)
function defineComponent(
  setup: ComponentOptions['setup'],
  extraOptions?: ComponentOptions
): () => any

```

### 详细信息

第一个参数是一个组件选项对象。返回值将是该选项对象本身，因为该函数实际上在运行时没有任何操作，仅用于提供类型推导。

注意返回值的类型有一点特别：它会是一个构造函数类型，它的实例类型是根据选项推断出的组件实例类型。这是为了能让该返回值在 TSX 中用作标签时提供类型推导支持。

你可以像这样从 defineComponent() 的返回类型中提取出一个组件的实例类型 (与其选项中的 this 的类型等价)：

``` ts
const Foo = defineComponent(/* ... */)

type FooInstance = InstanceType<typeof Foo>
```


## jsx在vue使用简介

下面我们提供了几个常见的用等价的渲染函数 / JSX 语法，实现模板功能的案例：

> 在react中class需要写成className, 但是vue中不需要，可直接写class

### v-if

``` vue
<div>
  <div v-if="ok">yes</div>
  <span v-else>no</span>
</div>
```

to

```jsx
<div>{ok.value ? <div>yes</div> : <span>no</span>}</div>
```

### v-for

``` vue
<ul>
  <li v-for="{ id, text } in items" :key="id">
    {{ text }}
  </li>
</ul>
```

to

```jsx
<ul>
  {items.value.map(({ id, text }) => {
    return <li key={id}>{text}</li>
  })}
</ul>
```

### v-on

以 on 开头，并跟着大写字母的 props 会被当作事件监听器。比如，onClick 与模板中的 @click 等价。

``` vue
<button
  @click="(event) => {
    /* ... */
  }"
>
  Click Me
</button>
```

to

```jsx
<button
  onClick={(event) => {
    /* ... */
  }}
>
  Click Me
</button>
```

### 渲染插槽

```vue
<div>
  <slot></slot>
  <slot name="footer"></slot>
</div>
```

to

```jsx
// 默认插槽
<div>{slots.default()}</div>

// 具名插槽
<div>{slots.footer({ text: props.message })}</div>
```

### 传递插槽

``` jsx
// 默认插槽
<MyComponent>{() => 'hello'}</MyComponent>
<MyComponent>hello</MyComponent>

// 具名插槽
<MyComponent>{{
  default: () => 'default slot',
  foo: () => <div>foo</div>,
  bar: () => [<span>one</span>, <span>two</span>]
}}</MyComponent>

// 注意这种写法会报错
<MyComponent>
  hello  { /* 这里是默认插槽的内容 */ }
  {{
    foo: () => <div>foo</div>,
    bar: () => [<span>one</span>, <span>two</span>]
  }}
</MyComponent>

// 正确写法
<MyComponent v-slots={{
  foo: () => <div>foo</div>,
  bar: () => [<span>one</span>, <span>two</span>]
}}>
hello
</MyComponent>
```

## 结尾
网上有很多人在争论sfc和jsx两种写法的好处，我觉着各有好处，时间检验真理。