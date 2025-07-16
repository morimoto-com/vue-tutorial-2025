<template lang="">
  <p>{{ score }}</p>
  <!-- 直接記述する場合はリアクティブ -->
  <p>{{ score > 3 ? 'Good' : 'Bad' }}</p>
  <p>{{ evaluation }}</p>
  <p>{{ evaluationRef }}</p>
  <p>{{ evaluationCmp }}</p>
  <p>{{ tmp() }}</p>
  <button @click="score++">+1</button>
  <button @click="score = 0">clear</button>
</template>
<script setup>
import { ref, computed } from 'vue'
const score = ref(0)
// これではリアクティブにはならない
const evaluation = score.value > 3 ? 'Good' : 'Bad'
// これでもリアクティブにはならない
const evaluationRef = ref(score.value > 3 ? 'Good' : 'Bad')
// これならリアクティブ
// - computedは読み取り専用なので値を更新することはできない
// - また副作用をもつ処理を含まないようにすること
// - 非同期処理も含まないようにする
const evaluationCmp = computed((value) => {
  // 引数には前回の結果が入る
  console.log(value)
  return score.value > 3 ? 'Good' : 'Bad'
})
// 関数呼び出しでもリアクティブエフェクトによってComputedと同様の結果が得られる
// ただし、関数呼び出しの場合は再レンダリングごとに呼び出されてしまうため、処理性能が悪くなる
// したがって、単純に処理をまとめたい場合はComputedを使用すべき
function tmp(){
  return score.value > 3 ? 'Good' : 'Bad'
}
</script>
