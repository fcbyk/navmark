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
  <h3 v-if="title" :id="formatTitle" tabindex="-1">
    {{ title }}
    <a class="header-anchor" :href="`#${formatTitle}`" aria-hidden="true"></a>
  </h3>
  <div class="nav-links">
    <NavLinkItem
      v-for="{ icon, title, desc, link } in items"
      :key="link"
      :icon="icon"
      :title="title"
      :desc="desc"
      :link="link"
    />
  </div>
</template>

<style lang="scss" scoped>
.nav-links {
  --nav-gap: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  grid-row-gap: var(--nav-gap);
  grid-column-gap: var(--nav-gap);
  grid-auto-flow: row dense;
  justify-content: center;
  margin-top: var(--nav-gap);
}

@each $media, $size in (500px: 140px, 640px: 155px, 768px: 175px, 960px: 200px, 1440px: 240px) {
  @media (min-width: $media) {
    .nav-links {
      grid-template-columns: repeat(auto-fill, minmax($size, 1fr));
    }
  }
}

@media (min-width: 960px) {
  .nav-links {
    --nav-gap: 20px;
  }
}

h3 {
  font-size: 1.3rem;
  padding: 0.5rem 1rem;
  margin: 1rem 0;
  margin-bottom: 1rem;
  position: relative;
  overflow: hidden;
}

h3::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 4px;
  background: #4285f4;
}
</style>