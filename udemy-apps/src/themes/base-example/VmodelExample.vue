<template lang="">
  <h1>v-modelの学習</h1>
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
  <h2>Radio</h2>
  <input id="male" v-model="radioGender" type="radio" value="male" />
  <label for="male">male</label>
  <input id="female" v-model="radioGender" type="radio" value="female" />
  <label for="female">male</label>
  <p>{{ radioGender }}</p>
  <h2>Select</h2>
  <select v-model="selected1">
    <option value="" disabled>Select one</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
  <p>{{ selected1 }}</p>
  <select v-model="selected2" multiple>
    <option value="" disabled>Select one</option>
    <option v-for="option in ['A', 'B', 'C']" :key="option">{{ option }}</option>
  </select>
  <p>{{ selected2 }}</p>
  <h1>v-model修飾子の学習</h1>
  <!-- lazy, trim, number -->
  <h2>lazy</h2>
  <input v-model.lazy="lazyInput" type="text" />
  <p>{{ lazyInput }}</p>
  <h2>trim</h2>
  <textarea v-model.trim="trimArea"></textarea>
  <p style="white-space: pre">{{ trimArea }}</p>
  <pre>{{ trimArea }}</pre>
  <h2>number</h2>
  <!-- どちらの指定でもnumber型にできる -->
  <input v-model.trim.number="numberInput" type="text" />
  <input v-model="numberInput" type="number" />
  <p>{{ numberInput }}</p>
  <p>{{ typeof numberInput }}</p>
</template>
<script setup>
import { ref } from 'vue'
const userInput = ref('')
const textAreaMessage = ref('')
const checked = ref(false)
const checkList = ref([])
const radioGender = ref('male')
const selected1 = ref('')
const selected2 = ref([])
// 修飾子
const lazyInput = ref('')
const trimArea = ref('')
const numberInput = ref('')
</script>
