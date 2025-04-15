<script setup lang="ts">
import { computed } from 'vue'
import { slugify } from '@mdit-vue/shared'

import NavLinkItem from './NavLinkItem.vue'
import type { NavLink } from '../types'

const props = defineProps<{
  title: string
  items: NavLink[]
}>()

const formatTitle = computed(() => {
  return slugify(props.title)
})
</script>

<template>
  <div class="nav-group">
    <h3 v-if="props.title" :id="formatTitle" tabindex="-1">
      {{ props.title }}
      <a class="header-anchor" :href="`#${formatTitle}`" aria-hidden="true"></a>
    </h3>
    <div class="nav-links">
      <NavLinkItem
        v-for="{ icon, title, link, desc } in props.items"
        :key="link"
        :icon="icon"
        :title="title"
        :link="link"
        :desc="desc"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.nav-group {
  margin-bottom: 0;
  padding: 1rem;
  border-radius: 0px;
  background-color: var(--vp-c-bg-alt);
  width: 100%;
  position: relative;
  flex: auto;
}

.nav-links {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 0.8rem;
  width: 100%;
}

@media (min-width: 640px) {
  .nav-group {
    padding: 1.5rem;
    border-radius: 12px;
    width: calc(50% - 0.75rem);
  }
  
  .nav-links {
    gap: 12px;
  }
}

h3 {
  font-size: 0.8rem;
  padding: 0 0.25rem;
  margin: 0;
  position: relative;
  overflow: hidden;
  color: var(--vp-c-text-2);
  font-weight: 400;
  display: inline-block;
  background-color: var(--vp-c-bg-soft-up);
  border-radius: 4px;
}
</style>