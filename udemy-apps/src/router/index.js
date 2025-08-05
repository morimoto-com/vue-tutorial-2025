// Vue Routerの設定
import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import Blog2View from '../views/Blog2View.vue'
import BlogView from '../views/BlogView.vue'
import HomeView from '../views/HomeView.vue'
import NotFound from '../views/NotFound.vue'
import ProfileLikeView from '../views/ProfileLikeView.vue'
import ProfilePostView from '../views/ProfilePostView.vue'
import ProfileView from '../views/ProfileView.vue'
import TransitionView from '../views/TransitionView.vue'
const router = createRouter({
  // historyは必須。特に細かい設定不要であればブラウザのデフォルト機能を使用する
  // createWebHistory()を指定
  history: createWebHistory(),
  routes: [
    // URLの詳細度が高いPathが採用される
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      alias: ['/me', '/test/test'],
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
      alias: ['/be/test/:id+'],
      name: 'blogPlus',
      component: Blog2View,
    },
    {
      // ?を指定で必須でなくなる
      path: '/blog/:id?',
      name: 'blogQues',
      component: Blog2View,
    },
    {
      // *で+と?どちらも適用
      path: '/blog/:id*',
      name: 'blogAster',
      component: Blog2View,
    },
    {
      // すべてのnot foundに対応
      path: '/:catchAll(.*)',
      name: 'notFound',
      props: true,
      component: NotFound,
    },
    {
      // リダイレクト
      path: '/redirect',
      name: 'redirect',
      redirect: '/',
    },
    // RouterLinkのネスト
    {
      path: '/:id',
      name: 'profile',
      component: ProfileView,
      children: [
        {
          // スラッシュなし・・・/:id/post
          // スラッシュ付き・・・/post
          // というURLになる
          path: 'post',
          name: 'post',
          component: ProfilePostView,
        },
        {
          path: 'like',
          component: ProfileLikeView,
        },
      ],
    },
    // 複数のRouterView
    {
      path: '/multiHome',
      name: 'multiHome',
      components: {
        default: HomeView,
        Sidebar: AboutView,
        Footer: Blog2View,
      },
    },
    {
      // ?を指定で必須でなくなる
      path: '/transition/:id',
      name: 'transition',
      component: TransitionView,
    },
  ],
})
export default router
