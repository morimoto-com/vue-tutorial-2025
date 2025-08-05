<template>
  <p>不正URLのcatch</p>
  <RouterLink :to="{ path: '/test/notFound' }">Not Found</RouterLink><br />
  <p>リダイレクト</p>
  <RouterLink :to="{ name: 'redirect' }">Redirect</RouterLink><br />
  <p>/aboutのalias</p>
  <RouterLink :to="{ path: '/me' }">/me -> /about</RouterLink><br />
  <RouterLink :to="{ path: '/test/test' }">/test/test -> /about</RouterLink><br />
  <p>/blog/:id+のalias</p>
  <RouterLink :to="{ path: '/be/test/123', param: { version: '1' } }"
    >/blog/:id+-> /be/test/:id+</RouterLink
  ><br />
  <p>RouterViewで表示されるエリア</p>
  <RouterView />
  <br />
  <br />
  <br />
  <br />
</template>
<script setup></script>
<style></style>
