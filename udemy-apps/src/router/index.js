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
  scrollBehavior(to, from, savedPosition) {
    console.log(to, from, savedPosition)
    // 2秒間待ってスクロールさせる方法。（transitionなどのアニメーションを待ってスクロールさせたい場合などに使用する）
    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     if (savedPosition) {
    //       // savedPositionはブラウザバック等で移動時のポジションを保存している
    //       return resolve(savedPosition)
    //     }
    //     if (to.hash) {
    //       return resolve({
    //         // #XXXXなどのクラスターまで移動
    //         el: to.hash,
    //         // 余白
    //         top: 20,
    //         behavior: 'smooth', // スクロールがスムーズになる
    //         // behavior: 'instant' // スクロールが瞬間的になる
    //       })
    //     }
    //     return resolve({
    //       top: 0,
    //       left: 0,
    //       behavior: 'smooth',
    //     })
    //   }, 2000)
    // })
    if (savedPosition) {
      // savedPositionはブラウザバック等で移動時のポジションを保存している
      return savedPosition
    }
    if (to.hash) {
      return {
        // #XXXXなどのクラスターまで移動
        el: to.hash,
        // 余白
        top: 20,
        behavior: 'smooth', // スクロールがスムーズになる
        // behavior: 'instant' // スクロールが瞬間的になる
      }
    }
    return {
      top: 0,
      left: 0,
      behavior: 'smooth',
    }
  },
})
// ナビゲーションガード
router.beforeEach((to,from) => {
  // asyncとawaitを使ってページ移動前に処理を実行させることができる
  // async(to,from) => {
  // await new Promise((resolve) => setTimeout(resolve, 2000))
  console.log(to, from)
  console.log('beforeEach')
  // 遷移のルールを指定することができる
  // if(to.name === 'home') return false
})
export default router
