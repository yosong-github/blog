<template>
  <div class="fixed top-0 left-1/2 w-full z-50 transition-all duration-500 w-auto transform -translate-x-1/2">
    <div class="glass-nav flex items-center justify-center px-6 py-3 mx-4 my-3 rounded-xl backdrop-blur-xl border border-white/20 shadow-lg transition-all duration-500" :class="{'dark-glass': isDark}">
      <div class="flex items-center space-x-6">
        <template v-for="it in navList" :key="it.path">
          <NuxtLink
            :to="it.path"
            class="px-4 py-2 rounded-lg font-medium hover:text-[#3f51b5] transition-all duration-300 relative overflow-hidden group dark:text-gray-200"
            :class="{'active': isActive(it.path)}"
          >
            <span class="relative z-10">{{ it.name }}</span>
            <span class="absolute inset-0 bg-white/20 dark:bg-black/20 scale-x-0 origin-left transform transition-transform duration-300 group-hover:scale-x-100 rounded-lg"></span>
          </NuxtLink>
        </template>
        <i
          class="i-grommet-icons-actions cursor-pointer text-gray-800 dark:text-gray-200"
          ref="themeRef"
          @click="toggleTheme"
          id="btn"></i>
      </div>
    </div>
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
  { name: 'Blog', path: '/blog' },
]

const cookie = useCookie('theme', {
  maxAge: 1000 * 60 * 60 * 24 * 30,
})

// 计算属性：当前是否为暗色主题
const isDark = computed(() => {
  return cookie.value === 'dark' || (cookie.value === undefined && window?.matchMedia?.('(prefers-color-scheme: dark)').matches)
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

<style scoped>
.glass-nav {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.18);
  transition: all 0.3s ease;
}

.dark-glass {
  background: rgba(25, 25, 25, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
}


.active span:first-child {
  @apply font-semibold;
}

/* 悬停效果增强 */
.group:hover span:last-child {
  @apply scale-x-100;
}

/* 滚动时导航栏样式变化 */
.scrolled .glass-nav {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.dark .scrolled .glass-nav {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}
</style>
