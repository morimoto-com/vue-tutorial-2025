<!-- Computed -->
<template lang="">
  <p>{{ count1 }}</p>
  <p>{{ count2 }}</p>
  <p>{{ count3 }}</p>
  <p>{{ count4 }}</p>
  <p>{{ count5 }}</p>
  <p>{{ countMulti1 }}</p>
  <p>{{ countMulti2 }}</p>
  <button @click="count1++">count1 +1</button>
  <button @click="count2++">count2 +1</button>
  <button @click="count3++">count3 +1</button>
  <button @click="count4++">count4 +1</button>
  <button @click="count5++">count5 +1</button>
  <button @click="countMulti1++">countMulti1 +1</button>
  <button @click="countMulti2++">countMulti2 +1</button>
</template>
<script setup>
import { ref, watchEffect, watch } from 'vue'
const count1 = ref(0)
const count2 = ref(0)
const count3 = ref(0)
const count4 = ref(0)
const count5 = ref(0)
const countMulti1 = ref(0)
const countMulti2 = ref(0)
// watch:引数を２つとる。引数に指定された
// watchEffect:Computedとほとんど同じ動き
watchEffect(() => {
  console.log('watchEffect')
  console.log(count1.value, count2.value, count3.value)
  setTimeout(() => {
    console.log('after 1 second')
  }, 1000)
})
// 第一引数にはリアクティブオブジェクトを直接指定する。この場合はcount1.valueとはしない
watch(count1, () => {
  console.log('watch')
  console.log(count1.value, count2.value, count3.value)
})
// watch:引数には新しいvalueと古いvalueを持たせることもできる
watch(count4, (newValue, oldValue) => {
  console.log('watch')
  console.log('newValue: ', newValue, '  oldValue:', oldValue)
})
// 第一引数には関数を指定することもできる。この書き方はwatchEffectとまったく同じ動作をする
watch(() => {
  console.log('watch first argument')
  return count5.value
})
// 第一引数は複数の監視対象を指定することができる
watch(
  [countMulti1, countMulti2],
  (newValue, oldValue) => {
    console.log('watch multi')
    console.log('newValue:', newValue, '  oldValue', oldValue)
  },
  // 第三引数に下記を指定することで、watchEffect同様に初期表示時も第二引数の関数が実行される
  {
    immediate: true,
  },
)
</script>
<style lang=""></style>
