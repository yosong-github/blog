---
date: "2025-02-06 16:16:20"
tags:
  - TS
title: 常用的 TS 的特性或者能⼒
---

## 1. Utility Types（⼯具类型）：

- `Partial<T>`: 将类型 T 的所有属性变为可选。
- `Required<T>`: 将类型 T 的所有属性变为必选。
- `Readonly<T>`: 将类型 T 的所有属性变为只读。
- `Record<K, T>`: 创建⼀个具有指定键类型 K 和值类型 T 的新对象类型。
- `Pick<T, K>`: 从类型 T 中选择指定属性 K 形成新类型。
- `Omit<T, K>`: 从类型 T 中排除指定属性 K 形成新类型。
- `Exclude<T, U>`: 从类型 T 中排除可以赋值给类型 U 的类型。
- `Extract<T, U>`: 从类型 T 中提取可以赋值给类型 U 的类型。
- `NonNullable<T>`: 从类型 T 中排除 null 和 undefined 类型。
- `ReturnType<T>`: 获取函数类型 T 的返回类型。
- `Parameters<T>`: 获取函数类型 T 的参数类型组成的元组类型。

## 2. 条件判定类型：

- Conditional Types（条件类型）: 根据类型关系进⾏条件判断⽣成不同的类型。
- Distribute Conditional Types（分布式条件类型）: 分发条件类型，允许条件类型在联合类型上进⾏分发。

## 3. Mapped Types（映射类型）：

- 根据已有类型创建新类型，通过映射类型可以⽣成新的类型结构。

## 4. Template Literal Types（模板⽂字类型）：

- 使⽤字符串模板创建新类型。

## 5. 类型推断关键字：

- keyof 关键字：关键字允许在泛型条件类型中推断类型变量。
- instanceof：运算符⽤于检查对象是否是特定类的实例。
- in：⽤于检查对象是否具有特定属性。
- type guards：类型守卫是⾃定义的函数或条件语句，⽤于在代码块内缩⼩变量的类型范围。
- as：⽤于类型断⾔，允许将⼀个变量断⾔为特定的类型。
