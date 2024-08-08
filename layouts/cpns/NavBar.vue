<!--
 * @Author: yosong
 * @Date: 2024-05-09 11:48:24
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-08-08 16:04:39
 * @FilePath: \blog\layouts\cpns\NavBar.vue
-->
<template>
  <div class="flex-center nav">
    <template v-for="it in navList">
      <NuxtLink :to="it.path" class="mx-6 px-2 py-1 cursor-pointer">
        {{ it.name }}
      </NuxtLink>
    </template>
    <i
      class="i-grommet-icons-actions cursor-pointer"
      ref="themeRef"
      @click="changeBtn(changeTheme, $event)"
      id="btn"></i>
  </div>
</template>

<script setup lang="ts">
const navList = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Blog', path: '/blog' },
]

const themeRef = ref<HTMLElement>()

const cookie = useCookie('theme', {
  maxAge: 1000 * 60 * 24 * 30,
})

// 主题切换函数
const changeTheme = () => {
  document.querySelector('html')!.classList.toggle('dark')

  cookie.value = document.querySelector('html')!.classList.contains('dark')
    ? 'dark'
    : 'light'
}
const changeBtn = (func: any, $eve: any) => {
  const x = $eve.clientX
  const y = $eve.clientY
  // 计算鼠标点击位置距离视窗的最大圆半径
  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y)
  )
  document.documentElement.style.setProperty('--x', x + 'px')
  document.documentElement.style.setProperty('--y', y + 'px')
  document.documentElement.style.setProperty('--r', endRadius + 'px')
  // 判断浏览器是否支持document.startViewTransition
  if (document.startViewTransition) {
    // 如果支持就使用document.startViewTransition方法
    document.startViewTransition(() => {
      func.call() // 这里的函数是切换主题的函数，调用changeBtn函数时进行传入
    })
  } else {
    // 如果不支持，就使用最原始的方式，切换主题
    func.call()
  }
}
</script>
