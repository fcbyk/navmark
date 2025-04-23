<template>
  <div class="page-container min-h-screen w-full flex flex-col bg-white dark:bg-gray-900 transition-colors duration-200 overflow-x-hidden">
    <div class="p-4 text-center relative">
      <NuxtLink to="/" class="fixed left-4 top-4 text-gray-600 dark:text-gray-400 no-underline text-lg sm:text-xl transition-all duration-200 ease-in-out hover:text-gray-900 dark:hover:text-white hover:scale-110 z-10">← 返回</NuxtLink>
      <ClientOnly>
        <button 
          @click="toggleTheme"
          class="fixed right-4 top-4 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 z-10"
        >
          <span v-if="isDark" class="text-xl">☀️</span>
          <span v-else class="text-xl">🌙</span>
        </button>
      </ClientOnly>
      <h1 class="text-2xl sm:text-3xl md:text-4xl text-gray-700 dark:text-gray-300 m-0 font-medium mt-12">{{ category?.title }}</h1>
    </div>
    <div class="w-full max-w-3xl px-4 py-8 flex flex-wrap gap-4 justify-center items-center mx-auto">
      <TransitionGroup name="list">
        <a v-for="(item, index) in category?.items" 
           :key="index"
           :href="item.link"
           target="_blank"
           class="w-40 h-20 px-4 py-2 text-gray-600 dark:text-gray-400 no-underline transition-all duration-200 ease-in-out whitespace-nowrap hover:text-gray-900 dark:hover:text-white hover:scale-110 will-change-transform flex items-center justify-center text-center">
          <span class="text-base sm:text-lg md:text-xl font-medium will-change-text">{{ item.title }}</span>
        </a>
      </TransitionGroup>
    </div>
  </div>
</template>

<script setup>
import bookmarks from '~/data'
import { useTheme } from '~/composables/useTheme'

const route = useRoute()
const category = computed(() => {
  const id = Number(route.params.id)
  return bookmarks[id]
})

const { isDark, toggleTheme } = useTheme()
</script>

<style>
.will-change-text {
  will-change: font-size, color, transform;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease-in-out;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px) scale(0.9);
}

.list-move {
  transition: transform 0.3s ease-in-out;
}

.will-change-transform {
  transition: all 0.2s ease-in-out;
}
</style> 