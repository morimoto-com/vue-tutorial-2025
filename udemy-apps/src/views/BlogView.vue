<template>
  <h2>Blog</h2>
  <p>{{ $route }}</p>
  <p>id:{{ $route.params.id }}</p>
  <p>ver:{{ $route.params.version }}</p>
  <RouterLink
    :to="{
      name: 'blog',
      params: { id: Number($route.params.id) + 1 },
    }"
    >Next</RouterLink
  >
</template>
<script setup>
import { onBeforeRouteLeave, onBeforeRouteUpdate, useRoute } from 'vue-router'
const route = useRoute()
// ページのパラメータやクエリなどが更新されるときに実行される
onBeforeRouteUpdate(() => {
  console.log('onBeforeRouteUpdate')
})
// ページを離れるときに実行される
onBeforeRouteLeave(() => {
  console.log('onBeforeRouteLeave')
  return window.confirm('本当にこのページを離れますか？')
})
console.log(route)
</script>
<style></style>
