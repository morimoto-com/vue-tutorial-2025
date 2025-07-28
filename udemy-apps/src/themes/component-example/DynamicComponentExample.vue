<template>
  <h1>Dynamic Components</h1>
  <button @click="currentComp = CompA">A</button>
  <button @click="currentComp = CompB">B</button>
  <button @click="currentComp = DynamicCompC">C</button>
  <!-- 切り替えの度にmountとunmountが発生している -->
  <!-- リアクティブ情報を保持するにはkeepAlive属性の付与が必要 -->
  <!-- <keep-alive include="['CompA','CompB']"> 配列でも指定可能 -->
  <!-- <keep-alive max="2">  最新2コのコンポーネントまでしか保持されない -->
  <!-- includeまたはexclude属性で対象を限定できる -->
  <keep-alive include="CompB,DynamicCompC">
    <component :is="currentComp" />
  </keep-alive>
  <!-- vueで表現できない範囲のhtmlを編集したい場合や、モーダル画面で使用 -->
  <button @click="isShow = true">Open Modal</button>
  <!-- disabledは端末ごとにteleportの方法を切り替える場合などに使用 -->
  <teleport to="body" :disabled="false">
    <dialog v-if="isShow" open>
      <h2>Teleport</h2>
      <p>This is Modal!</p>
      <button @click="isShow = false">Close</button>
    </dialog>
  </teleport>
  <!-- deferを用いると親コンポーネントの DOM がすべてレンダリングされた後に、teleport 先に要素が移動される。-->
  <teleport to="body" defer><p>A</p></teleport>
</template>
<script setup>
import { ref, shallowRef, defineAsyncComponent } from 'vue'
// 遅延読み込み設定をすることで実際にコンポーネントが読み込まれるまでダウンロードしなくなる
const CompA = defineAsyncComponent(() =>
  import('./dynamic-components/DynamicCompA.vue').catch((err) => {
    console.error('Component load failed:', err)
    // 明示的に失敗させる（これをしないと undefined になる）
    return Promise.reject(err)
  }),
)
// import CompA from './dynamic-components/DynamicCompA.vue'
import Baseloader from './dynamic-components/Baseloader.vue'
import ErrorComp from './dynamic-components/ErrorComp.vue'
const CompB = defineAsyncComponent({
  loader: () =>
    import('./dynamic-components/DynamicCompB.vue').catch((err) => {
      console.error('Component load failed:', err)
      return Promise.reject(err)
    }),
  // ローディング中のコンポーネントを指定
  loadingComponent: Baseloader,
  // ローディングコンポーネントの表示遅延を指定（デフォルト：200m）
  delay: 200,
  // ローディング失敗時のコンポーネントを指定
  errorComponent: ErrorComp,
  timeout: 2000,
})
// import CompB from './dynamic-components/DynamicCompB.vue'
import DynamicCompC from './dynamic-components/DynamicCompC.vue'
// 先頭のデータだけをリアクティブにする場合はshallowRefを利用する
const currentComp = shallowRef(CompA)
const isShow = ref(false)
</script>
<style></style>
