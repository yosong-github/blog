<template>
  <div class="flex items-center space-x-6 justify-center p-4">
    <template v-for="it in navList" :key="it.path">
      <NuxtLink
        :to="it.path"
        class="px-4 py-2 rounded-lg font-medium hover:text-[#3f51b5] transition-all duration-300 relative overflow-hidden group dark:text-gray-200"
        :class="{ active: isActive(it.path) }"
      >
        <span class="relative z-10">{{ it.name }}</span>
        <span
          class="absolute inset-0 bg-white/20 dark:bg-black/20 scale-x-0 origin-left transform transition-transform duration-300 group-hover:scale-x-100 rounded-lg"
        ></span>
      </NuxtLink>
    </template>
    <i
      class="i-grommet-icons-actions cursor-pointer text-gray-800 dark:text-gray-200"
      ref="themeRef"
      @click="toggleTheme"
      id="btn"
    ></i>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const themeToggle = ref<HTMLElement | null>(null)

const navList = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Blog', path: '/blog' }
]

const cookie = useCookie('theme', {
  maxAge: 1000 * 60 * 60 * 24 * 30
})

// 计算属性：当前是否为暗色主题
const isDark = computed(() => {
  return (
    cookie.value === 'dark' ||
    (cookie.value === undefined && window?.matchMedia?.('(prefers-color-scheme: dark)').matches)
  )
})

// 计算属性：判断当前路由是否激活
const isActive = (path: string) => {
  return route.path === path
}

// 初始化主题
onMounted(() => {
  document.documentElement.classList.toggle('dark', isDark.value)
})

// 切换主题函数
const toggleTheme = () => {
  document.documentElement.classList.toggle('dark')
  cookie.value = document.documentElement.classList.contains('dark') ? 'dark' : 'light'
}
</script>

<style scoped></style>
