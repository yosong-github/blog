---
date: "2025-02-27 11:34:20"
tags:
  - Vite less
title: Vite插件实现html文件的style直接写less语法（兼容低版本浏览器）
---

## 使用场景

在一些需要兼容低版本浏览器的项目时，我们常常需要在 HTML 文件中直接编写样式。传统的做法是直接写 CSS，但这样会失去 LESS 提供的变量、嵌套等便利功能。通过这个插件，我们可以在 HTML 文件中直接使用 LESS 语法，同时还能兼容低版本浏览器。

## 安装和使用

1. 安装插件依赖：

```bash
npm install less
```

2. 在 vite.config.js 中引入插件：

```js
import vitePluginCompileLessInTemplate from "./plugins/vite-plugin-compile-less-in-template";

export default defineConfig({
  plugins: [vitePluginCompileLessInTemplate()],
});
```

3. 在 HTML 文件中使用 LESS 语法：

```html
<style lang="less">
  @color: red;
  .box {
    color: @color;
    &:hover {
      color: darken(@color, 10%);
    }
  }
</style>
```

## 实现原理

1. 通过 Vite 的 transform 钩子拦截 HTML 文件
2. 使用正则表达式提取 `<style>` 标签中的 LESS 代码
3. 调用 less.js 的 render 方法将 LESS 编译为 CSS
4. 将编译后的 CSS 替换回原文件
5. 处理换行符等特殊字符以保证兼容性

## 兼容性处理

为了兼容低版本浏览器，插件做了以下处理：

1. 将编译后的 CSS 中的换行符替换为 `\n`
2. 保留原始的 `<style>` 标签结构
3. 确保生成的 CSS 是标准的 CSS 语法

## 示例

```html
<!DOCTYPE html>
<html>
  <head>
    <style lang="less">
      @primary-color: #1890ff;
      body {
        background-color: @primary-color;
        .container {
          color: lighten(@primary-color, 20%);
        }
      }
    </style>
  </head>
  <body>
    <div class="container">Hello World</div>
  </body>
</html>
```

编译后的效果：

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      body {
        background-color: #1890ff;
      }
      body .container {
        color: #66b1ff;
      }
    </style>
  </head>
  <body>
    <div class="container">Hello World</div>
  </body>
</html>
```

### 完整代码

```js
import less from "less";

const vitePluginCompileLessInTemplate = () => {
  return {
    name: "compile-less-in-template",
    // code 代码，id 文件路径
    async transform(code, id) {
      // 拿到需要编译的html文件
      if (id.endsWith(".html?raw")) {
        // if (id.endsWith('login/index.html?raw')) {
        // 通过正则获取到style中的字符串
        let style = code.match(/<style[^>]*>([\s\S]*?)<\/style>/g);
        if (style) {
          let lessCode = style[0]
            .match(/<style[^>]*>([\s\S]*?)<\/style>/g)[0]
            .replace(/<style[^>]*>|<\/style>/g, "");
          lessCode = lessCode.replace(/\\n/g, "\n");
          lessCode = lessCode.replace(/\\r/g, "\r");
          let css = await handlerLess(lessCode);
          code = code.replace(
            /<style([\s\S]*?)>([\s\S]*?)<\/style>/gi,
            `<style>${css}</style>`
          );
        }
      }

      return {
        code,
        map: null,
      };
    },
  };
};

// 编译less
const handlerLess = async (code) => {
  const { css: cssCode } = await less.render(code);
  return cssCode.replace(/\r?\n|\r/g, "\\n"); // 将换行符替换为\n
};

export default vitePluginCompileLessInTemplate;
```
