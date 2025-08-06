// Vue Routerの設定
import { createRouter, createWebHistory } from 'vue-router'
// import AboutView from '../views/AboutView.vue'
import Blog2View from '../views/Blog2View.vue'
import BlogView from '../views/BlogView.vue'
import HomeView from '../views/HomeView.vue'
import NotFound from '../views/NotFound.vue'
import ProfileLikeView from '../views/ProfileLikeView.vue'
import ProfilePostView from '../views/ProfilePostView.vue'
import ProfileView from '../views/ProfileView.vue'
import TransitionView from '../views/TransitionView.vue'
// 遅延読み込みの設定(すべて遅延読み込みにすることも推奨されている)
const AboutView = () => import('../views/AboutView.vue')
const router = createRouter({
  // historyは必須。特に細かい設定不要であればブラウザのデフォルト機能を使用する
  // createWebHistory()を指定
  history: createWebHistory(),
  routes: [
    // URLの詳細度が高いPathが採用される
    {
      path: '/',
      name: 'home',
      // metaプロパティ:$routeオブジェクトに追加できる任意の値
      meta: { hello: 'hello' },
      component: HomeView,
      // 遷移時にのみ実行されるメソッド
      beforeEnter() {
        console.log('beforeEnter')
        // returnを指定すればリダイレクトも指定できる
      },
    },
    {
      path: '/about',
      alias: ['/me', '/test/test'],
      name: 'about',
      // ログインしているかのチェックをmetaを使うサンプル
      meta: { requireAuth: true },
      component: AboutView,
      // beforeEnterを関数で定義することも可能
      beforeEnter: [foo, bar],
      // パラメータやクエリ、ハッシュが変更されたときに実行したい場合は
      // - onBeforeRouteUpdateをコンポーネントに指定
      // ページを離れるときに実行したい場合は
      // - onBeforeRouteLeaveをコンポーネントに指定
      // -----------------------> udemy-apps\src\views\BlogView.vue
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
    // 開発用に下記はコメント化
    // return {
    //   top: 0,
    //   left: 0,
    //   behavior: 'smooth',
    // }
  },
})
// ナビゲーションガード
// beforeEach: ナビゲーションが開始される直前
router.beforeEach((to, from) => {
  // asyncとawaitを使ってページ移動前に処理を実行させることができる
  // async(to,from) => {
  // await new Promise((resolve) => setTimeout(resolve, 2000))
  console.log(to, from)
  console.log('beforeEach')
  // 遷移のルールを指定することができる
  // if(to.name === 'home') return false
  //
  // meta情報でログインチェックをする方法
  // if (to.meta.requireAuth && !isLogin) {
  //   return '/'
  // }
})
// beforeResolve: beforeRouteEnter や beforeEnter がすべて解決した後、
// ナビゲーションが確定する直前
router.beforeResolve(() => {})
// afterEach: ナビゲーション完了直後
router.afterEach(() => {})
function foo() {
  console.log('foo function')
}
function bar() {
  console.log('foo function')
}
export default router
