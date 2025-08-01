<template>
  <h3>Blog</h3>
  <RouterLink :to="{ name: 'home' }">Home</RouterLink><br />
  <RouterLink :to="{ name: 'blog', params: { id: 1, version: 'new' } }">Blog(New) </RouterLink
  ><br />
  <RouterLink :to="{ name: 'blog', params: { id: 3, version: 'foo' } }">Blog(Foo) </RouterLink
  ><br />
  <RouterLink :to="{ name: 'blogPlus', params: { id: '1/2/3' } }">BlogPlus </RouterLink><br />
  <RouterLink :to="{ name: 'blogQues' }">BlogQues </RouterLink><br />
  <RouterLink :to="{ name: 'blogAster' }">BlogAster </RouterLink><br />
  <RouterView />
</template>
<script setup></script>
<style></style>
