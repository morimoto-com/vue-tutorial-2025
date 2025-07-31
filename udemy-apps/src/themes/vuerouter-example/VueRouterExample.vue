<template>
  <h1>Vue Router</h1>
  <p>aタグ指定ではリロードされてしまう</p>
  <a href="/">Home</a>
  <a href="/about">About</a>
  <p>RouterLinkタグ指定ではリロードされずに最小限の更新</p>
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/about">About</RouterLink>
  <RouterLink :to="'/about'">About</RouterLink>
  <RouterLink :to="{ path: '/about', query: { lang: 'ja' }, hash: '#title' }">About</RouterLink>
  <p>pushは遷移前のページを履歴に残す</p>
  <button @click="toAboutPush">toAboutPush</button>
  <p>replaceは遷移前のページを履歴に残さない</p>
  <button @click="toAboutReplace">toAboutReplace</button>
  <RouterLink :to="'/about'" replace>About(replace)</RouterLink>
  <p>goは指定ページ分ブラウザバック</p>
  <button @click="toHistoryGo">toHistoryGo</button>
  <p>importのuseRouterを使用せずに$routerでtemplateで直接指定する方法</p>
  <button @click="$router.push({ path: '/about' })">$router about</button>
  <p>VueRouter(udemy-apps\src\router\index.js)で指定したname属性を使用する方法</p>
  <RouterLink :to="{ name: 'home' }">Home</RouterLink>
  <RouterLink :to="{ name: 'about' }">About</RouterLink>
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
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
function toAboutPush() {
  console.log('toAbout')
  router.push({ path: '/about' })
}
function toAboutReplace() {
  console.log('toAbout')
  router.replace({ path: '/about' })
}
function toHistoryGo() {
  console.log('toHistoryGo')
  // ページ履歴2つ分ブラウザバック
  router.go(-2)
}
</script>
<style></style>
