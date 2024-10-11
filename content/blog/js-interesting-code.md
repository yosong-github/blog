---
date: "2024-10-11 10:11:12"
tags:
  - js
  - FormData
title: 优雅 太优雅
---

> 水群看见的代码，记录一下

```js
// 如果没见过这个我肯定这样写了
// const formData = new FormData();
// formData.append("file", file);
// formData.append("name", name);
// formData.append("age", age);
// formData.append("email", email);

let obj = {
  a: 1,
  b: 2,
  c: 3,
};
const formData = Object.entries(obj).reduce(
  (pre, [key, value]) => (pre.append(key, value), pre),
  new FormData()
);

// pre.append(key, value), pre
// 先执行pre.append(key, value)再返回pre
// 类似 undefined, 1 得到的结果是 1

console.log(formData);
```
