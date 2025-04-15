<script setup>
import NavLinkGroup from './NavLinkGroup.vue'
import NAV_DATA from '../bookmarks/'
</script>

<template>
    <div class="nav-container">
        <NavLinkGroup v-for="{ title, items } in NAV_DATA" :title="title" :items="items" />
    </div>
</template>

<style scoped>
.nav-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    width: 100%;
}

@media (min-width: 640px) {
    .nav-container {
        gap: 1rem;
    }
}
</style>
