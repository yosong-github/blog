---
date: "2025-01-21 14:45:49"
tags:
  - Pormise
  - async
  - 重复请求
title: 避免重复请求的异步函数
---

```ts
export function asyncOnce(cb: (...args: any[]) => Promise<any>) {
  const map: Record<string, Promise<any> | null> = {};

  return (...args: any[]) => {
    const key = JSON.stringify(args);

    return (map[key] ??= new Promise((resolve, reject) => {
      cb(...args)
        .then(resolve)
        .catch(reject)
        .finally(() => (map[key] = null));
    }));
  };
}
```
