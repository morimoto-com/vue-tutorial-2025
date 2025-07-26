<template lang="">
  <h2>Text</h2>
  <p>{{ userInput }}</p>
  <input type="text" v-model="userInput" />
  <button v-on:click="userInput = 'hi'">button</button>
  <h2>Textarea</h2>
  <textarea v-model="textAreaMessage"></textarea>
  <!-- 下記いずれかのpreを指定して改行やスペースを有効にする -->
  <p style="white-space: pre">{{ textAreaMessage }}</p>
  <pre>{{ textAreaMessage }}</pre>
  <h2>Checkbox</h2>
  <!-- idとforで紐づけることで文字を選択してもチェックが切り替わる -->
  <input
    id="checkbox1"
    v-model="checked"
    type="checkbox"
    true-value="checked"
    false-value="not checked"
  />
  <label for="checkbox1">{{ checked }}</label>
  <p>Fruits</p>
  <input v-model="checkList" id="Apple" type="checkbox" value="Apple" />
  <label for="Apple">Apple</label>
  <input v-model="checkList" id="Banana" type="checkbox" value="Banana" />
  <label for="Banana">Banana</label>
  <input v-model="checkList" id="Grape" type="checkbox" value="Grape" />
  <label for="Grape">Grape</label>
  <p>{{ checkList }}</p>
</template>
<script setup>
import { ref } from 'vue'
const userInput = ref('')
const textAreaMessage = ref('')
const checked = ref(false)
const checkList = ref([])
</script>
