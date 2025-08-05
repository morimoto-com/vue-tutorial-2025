<template>
  <div>
    <h2>TransitonView</h2>
    <p>{{ $route }}</p>
    <p>id:{{ $route.params.id }}</p>
    <RouterLink
      :to="{
        name: 'transition',
        params: { id: Number($route.params.id) + 1 },
      }"
      >Next</RouterLink
    >
  </div>
</template>
<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
console.log(route)
</script>
<style></style>
