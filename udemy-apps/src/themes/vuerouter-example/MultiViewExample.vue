<template>
  <h2>RouterViewのネスト</h2>
  <RouterLink :to="{ name: 'multiHome' }">multiHome</RouterLink>
  <p>RouterViewで表示されるエリア</p>
  <RouterView />
  <RouterView name="Sidebar" />
  <RouterView name="Footer" />
  <br />
  <br />
  <br />
  <br />
</template>
<script setup></script>
<style></style>
