import { useState } from '#app'
import { useHead } from '#app'

export function useTheme() {
  const isDark = useState('theme', () => false)

  const toggleTheme = () => {
    isDark.value = !isDark.value
    if (process.client) {
      localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
      document.documentElement.classList.toggle('dark', isDark.value)
    }
  }

  // 在客户端初始化时从 localStorage 获取主题
  if (process.client) {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      isDark.value = savedTheme === 'dark'
      document.documentElement.classList.toggle('dark', isDark.value)
    }
  }

  // 使用 useHead 设置主题类
  useHead({
    htmlAttrs: {
      class: isDark.value ? 'dark' : ''
    }
  })

  return {
    isDark,
    toggleTheme
  }
} 