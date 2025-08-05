<template>
  <h2>スクロールの振る舞い</h2>
  <p>udemy-apps\src\router\index.jsでscrollBehaviorを指定することで</p>
  <p>ページ移動時のスクロールの振る舞いを指定できる</p>
  <RouterView />
  <p style="margin-top: 3000px">bottom</p>
  <RouterLink :to="{ name: 'home' }">Home</RouterLink>|
  <RouterLink :to="{ name: 'about' }">About</RouterLink>|
  <RouterLink :to="{ name: 'about', hash: '#about' }">About + #about</RouterLink>
</template>
<script setup></script>
<style></style>
