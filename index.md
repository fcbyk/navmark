---
layout: doc
layoutClass: bookmarks
sidebar: false
outline: [2, 3]
---

<script setup>
import NavLinkGroup from './.vitepress/components/NavLinkGroup.vue'
import NAV_DATA from './.vitepress/model/bookmark'
</script>




<NavLinkGroup v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>

----------


该页面参考自 [**掘金文章**](https://juejin.cn/post/7204860462239498296)