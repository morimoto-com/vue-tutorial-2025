<template>
  <h2>RouterViewのネスト</h2>
  <RouterLink :to="{ to: 'post', params: { id: 123 } }">Post</RouterLink>
  <RouterLink :to="{ path: '/1/like' }">Like</RouterLink>
  <p>RouterViewで表示されるエリア</p>
  <RouterView />
  <br />
  <br />
  <br />
  <br />
</template>
<script setup></script>
<style></style>
