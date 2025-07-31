<template>
  <h3>Blog</h3>
  <RouterLink :to="{ name: 'home' }">Home</RouterLink>
  <RouterLink :to="{ name: 'blog', params: { id: 1, version: 'new' } }">New Blog </RouterLink>
  <RouterLink :to="{ name: 'blog', params: { id: 3, version: 'foo' } }">Foo Blog </RouterLink>
  <RouterView />
</template>
<script setup></script>
<style></style>
