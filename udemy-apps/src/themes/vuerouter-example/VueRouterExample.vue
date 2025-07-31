<template>
  <h1>Vue Router</h1>
  <p>aタグ指定ではリロードされてしまう</p>
  <a href="/">Home</a>
  <a href="/about">About</a>
  <p>RouterLinkタグ指定ではリロードされずに最小限の更新</p>
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/about">About</RouterLink>
  <br />
  <p>RouterViewで表示されるエリア</p>
  <RouterView />
  <br />
  <p>サイトリンクを貼り付けたいときはaタグでOK</p>
  <a href="https://v3.router.vuejs.org/ja/">公式Vue Router</a>
  <br />
  <br />
  <br />
</template>
<script setup></script>
<style></style>
