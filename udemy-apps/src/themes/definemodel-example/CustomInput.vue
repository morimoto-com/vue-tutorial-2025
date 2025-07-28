<template lang="">
  <h2>CustomInput</h2>
  <!-- 子コンポーネントのフォームを親コンポーネントに渡したいときに使用 -->
  <!-- フォーム以外の受け渡しはpropsとemitを使用すること -->
  <input v-model="model" type="text" />
  <p>model:{{ model }}</p>
  <p>modifiers:{{ modifiers }}</p>
  <p>titleName:{{ titleName }}</p>
  <button @click="model = 'hi'">hi</button>
  <button @click="titleName = 'hi title'">hi title</button>
</template>
<script setup>
// const model = defineModel()
const [model, modifiers] = defineModel({
  type: String,
  default: 'default',
  get(value) {
    return value
  },
  set(value) {
    if (modifiers.uppercase) return value.toUpperCase()
  },
})
const titleName = defineModel('titleName', {
  type: String,
  default: 'default',
})
model.value
</script>
<style lang=""></style>
