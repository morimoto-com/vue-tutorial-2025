<template>
  <h2>Blog</h2>
  <p>{{ $route }}</p>
  <p>id:{{ $route.params.id }}</p>
  <RouterLink
    :to="{
      name: 'blog',
      params: { id: Number($route.params.id) + 1, version: '1' },
    }"
    >Next</RouterLink
  >
</template>
<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
console.log(route)
</script>
<style></style>
