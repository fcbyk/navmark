<script setup lang="ts">
import { computed } from 'vue'
import { withBase } from 'vitepress'
import { slugify } from '@mdit-vue/shared'

import { NavLink } from '../types'

const props = defineProps<{
  icon?: NavLink['icon']
  title?: NavLink['title']
  link: NavLink['link']
  desc?: string
}>()

const formatTitle = computed(() => {
  if (!props.title) {
    return ''
  }
  return slugify(props.title)
})

const defaultIcon = `<svg t="1744705461770" class="icon" viewBox="0 0 2767 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="22906" width="200" height="200"><path d="M2336.753702 861.865986l0.482023-186.941408 68.799481 0.973315A482.847773 482.847773 0 0 1 2530.619553 421.464026l-190.491691-3.401968-0.926967-73.31381-208.799288 0.926967v72.841057h-41.379801L2276.139339 0q-165.991957 83.510445-278.090061 100.511018l-285.783886 579.270866 417.607844 1.455338-1.928091 254.915889a472.382317 472.382317 0 0 1 208.808557-74.287125z m-1074.354601-582.135194a149.97397 149.97397 0 0 0-113.089958 49.277559 174.640558 174.640558 0 0 0 0.241011 237.924586 154.580995 154.580995 0 0 0 226.124298 0.241012 176.253481 176.253481 0 0 0 0-238.406609 150.075936 150.075936 0 0 0-113.238273-49.082896z m292.513665-82.500051q88.061853 93.225058 88.061853 250.549875 0 160.216954-104.395009 270.210842a485.508167 485.508167 0 0 1-240.316161 142.99391q-135.921152 33.02783-85.883481 2.187641t-33.194683-43.947499q-136.152894-18.446641-216.743394-115.314678T881.879201 447.724998a417.135091 417.135091 0 0 1 22.66434-140.073964 358.152189 358.152189 0 0 1 78.60679-127.717495q101.2804-107.064673 259.077971-135.948961t98.629275-4.375284q-59.177565 24.527543 35.604797 42.482892 90.453427 21.8208 178.487471 115.045858zM624.441962 861.958683l0.482023-186.941409 68.799481 0.973315a482.847773 482.847773 0 0 1 124.612156-254.433866l-190.519501-3.401968-0.926967-73.31381-208.799287 0.926967v72.841057h-41.379801L563.864677 0q-165.991957 83.510445-278.090061 100.511018L0 679.781884l417.607844 1.455338-1.928091 254.915889a472.382317 472.382317 0 0 1 208.799288-74.287125z" fill="#F48029" p-id="22907"></path></svg>`

const svg = computed(() => {
  if (typeof props.icon === 'object') return props.icon.svg
  return ''
})
</script>

<template>
  <a v-if="props.link" class="nav-link" :href="props.link" target="_blank" rel="noreferrer">
    <article class="box">
      <div class="icon-wrapper">
        <div v-if="svg" class="icon" v-html="svg"></div>
        <div v-else-if="props.icon && typeof props.icon === 'string'" class="icon">
          <img
            :src="withBase(props.icon)"
            :alt="props.title"
            @error="(e) => { if ((e.target as HTMLImageElement)?.parentElement) { (e.target as HTMLImageElement).parentElement!.innerHTML = defaultIcon } }"
          />
        </div>
      </div>
      <h5 v-if="props.title" :id="formatTitle" class="title">{{ props.title }}</h5>
      <div v-if="props.desc" class="desc">{{ props.desc }}</div>
    </article>
  </a>
</template>

<style lang="scss" scoped>
.nav-link {
  --nav-icon-box-size: 32px;
  --nav-icon-size: 20px;
  --nav-box-gap: 8px;
  --nav-title-size: 12px;

  display: block;
  width: calc(25% - 6px);
  height: 100%;
  border-radius: 8px;
  background-color: var(--vp-c-bg-soft-up);
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0);

  .box {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: var(--nav-box-gap);
    height: 100%;
    color: var(--vp-c-text-1);
  }

  .icon-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 4px;
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--nav-icon-box-size);
    height: var(--nav-icon-box-size);
    font-size: var(--nav-icon-size);
    background-color: var(--vp-c-bg-soft);
    transition: all 0.3s ease;
    
    :deep(svg) {
      width: var(--nav-icon-size);
      height: var(--nav-icon-size);
      fill: currentColor;
    }
    
    :deep(img) {
      width: var(--nav-icon-size);
      height: var(--nav-icon-size);
      // object-fit: cover;
    }
  }

  .title {
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 100%;
    font-size: var(--nav-title-size);
    font-weight: 500;
    margin: 0;
    color: var(--vp-c-text-1);
  }

  .desc {
    display: none;
    position: absolute;
    bottom: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    width: max-content;
    max-width: 300px;
    padding: 8px 12px;
    background-color: var(--vp-c-bg-soft-down);
    border: none;
    border-radius: 6px;
    font-size: 12px;
    color: var(--vp-c-text-1);
    z-index: 1;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    white-space: normal;
    text-align: left;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }

  &:hover {
    transform: translateY(-3px);
    border-color: var(--vp-c-brand);
    background-color: var(--vp-c-bg-soft-up);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border: 1px solid var(--vp-c-brand);

    .desc {
      display: block;
    }
  }
}

@media (min-width: 640px) {
  .nav-link {
    width: 110px;
    --nav-icon-box-size: 44px;
    --nav-icon-size: 26px;
    --nav-box-gap: 12px;
    --nav-title-size: 14px;
    
    .icon-wrapper {
      margin-bottom: 8px;
    }
  }
}
</style>