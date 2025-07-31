// Vue Routerの設定
import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import HomeView from '../views/HomeView.vue'
const router = createRouter({
  // historyは必須。特に細かい設定不要であればブラウザのデフォルト機能を使用する
  // createWebHistory()を指定
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomeView,
    },
    {
      path: '/about',
      component: AboutView,
    },
  ],
})
export default router
