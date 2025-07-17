import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
// ★ここを追加でグローバル登録 ※保守性の観点からあまりおすすめはされない
import BaseIcon from './themes/component-example/BaseIcon.vue'
const app = createApp(App)
// ★ここを追加でグローバル登録
app.component('BaseIcon', BaseIcon)
app.mount('#app')
