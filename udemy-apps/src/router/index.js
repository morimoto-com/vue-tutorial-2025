// Vue Routerの設定
import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import BlogView from '../views/BlogView.vue'
import HomeView from '../views/HomeView.vue'
import NotFound from '../views/NotFound.vue'
const router = createRouter({
  // historyは必須。特に細かい設定不要であればブラウザのデフォルト機能を使用する
  // createWebHistory()を指定
  history: createWebHistory(),
  routes: [
    // URLの詳細度が高いPathが採用される
    {
      // すべてのnot foundに対応
      path: '/:catchAll(.*)',
      name: 'notFound',
      component: NotFound,
    },
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      // 括弧で正規表現指定も可能
      path: '/blog/:id([^/]+)/archive/:version',
      name: 'blog',
      component: BlogView,
    },
    {
      // +を指定でスラッシュを含めた複数パラメータを使用可能
      path: '/blog/:id+',
      name: 'blogPlus',
      component: BlogView,
    },
    {
      // ?を指定で必須でなくなる
      path: '/blog/:id?',
      name: 'blogQues',
      component: BlogView,
    },
    {
      // *で+と?どちらも適用
      path: '/blog/:id*',
      name: 'blogAster',
      component: BlogView,
    },
  ],
})
export default router
