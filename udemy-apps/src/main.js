import 'animate.css'
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import './assets/main.css'
import router from './router'
// ★ここを追加でグローバル登録 ※保守性の観点からあまりおすすめはされない
import BaseIcon from './themes/component-example/BaseIcon.vue'
const app = createApp(App)
const pinia = createPinia()
// ★ここを追加でグローバル登録
app.component('BaseIcon', BaseIcon)
// Vue Routerの設定
app.use(router)
// Piniaの設定
app.use(pinia)
// メイン画面をマウント
app.mount('#app')
