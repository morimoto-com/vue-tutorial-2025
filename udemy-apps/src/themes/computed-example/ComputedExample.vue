<template lang="">
  <p>{{ score }}</p>
  <!-- 直接記述する場合はリアクティブ -->
  <p>{{ score > 3 ? 'Good' : 'Bad' }}</p>
  <p>{{ evaluation }}</p>
  <p>{{ evaluationRef }}</p>
  <p>{{ evaluationCmp }}</p>
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
const evaluationCmp = computed(() => {
  return score.value > 3 ? 'Good' : 'Bad'
})
</script>
