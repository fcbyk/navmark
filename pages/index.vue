<template>
  <div class="page-container min-h-screen w-full flex justify-center items-center bg-white dark:bg-gray-900 transition-colors duration-200 overflow-x-hidden">
    <ClientOnly>
      <button 
        @click="toggleTheme"
        class="fixed right-4 top-4 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 z-10"
      >
        <span v-if="isDark" class="text-xl">☀️</span>
        <span v-else class="text-xl">🌙</span>
      </button>
    </ClientOnly>
    <div class="w-full max-w-3xl px-4 py-8 flex flex-wrap gap-4 justify-center items-center">
      <TransitionGroup name="list">
        <NuxtLink 
          v-for="(category, index) in bookmarks" 
          :key="index"
          :to="`/category/${index}`"
          class="w-32 h-12 px-4 py-2 text-gray-600 dark:text-gray-400 no-underline text-base sm:text-lg md:text-xl whitespace-nowrap transition-all duration-200 ease-in-out hover:text-gray-900 dark:hover:text-white hover:scale-110 will-change-transform flex items-center justify-center">
          {{ category.title }}
        </NuxtLink>
      </TransitionGroup>
    </div>
  </div>
</template>

<script setup>
import bookmarks from '~/data'
import { useTheme } from '~/composables/useTheme'

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