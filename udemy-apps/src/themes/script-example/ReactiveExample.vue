<script setup>
import { ref, reactive } from 'vue'
const title = 'リアクティブなデータの定義方法'
let price = ref(9.99) //リアクティブなデータを定義
console.log(price.value)
function increment() {
  // リアクティブなデータは.valueで取得
  price.value += 1
  console.log(price.value)
}
//リアクティブなオブジェクト javascriptのgetterやsetterを用いてリアクティブを実現
const info = ref({
  students: 1000,
  rating: 4,
})
console.log(info)
//リアクティブなオブジェクト javascriptのproxyを用いてリアクティブを実現
//ref関数は内部的にreactiveを使用している
const instructor = reactive({
  name: 'shinji',
  age: 35,
  sns: {
    twitter: '@__test__',
    youtube: '@test',
  },
  email: ref('test@gmail.com'),
})
instructor.bio = 'hello' //オブジェクトにbioを追加可能

console.log(instructor)
console.log(instructor.email) // reactiveオブジェクトの場合は、refオブジェクトを保持している場合は内部的に.valueを自動的に付与される

const items = reactive([ref(1), ref(2), 3])
items.reverse()
console.log(items[0].value) // reactiveオブジェクトでも配列はvalue指定が必要

const courseInfo = {
  sections: ref(10),
  language: ref('Japanese'),
}
</script>
<template>
  <h1>Title: {{ title }}</h1>
  <label
    >Vue 3でリアクティブオブジェクトを扱う際には、基本的に`ref`を使用するべきです。
    理由は、`ref`はプリミティブ値にも対応しており、`reactive`よりも一貫性があり扱いやすいためです。
    複雑なオブジェクトであっても、必要に応じて`ref`と組み合わせることで柔軟に対応できます。</label
  >
  <!-- リアクティブでもhtml上は.valueは不要 -->
  <h2>Price: {{ price - 1 }}</h2>
  <button @click="increment">button</button>
  <h2>students: {{ info.students }}</h2>
  <h2>age: {{ instructor.age }}</h2>
  <h2>email: {{ instructor.email }}</h2>
  <h2>items: {{ items[0] }}</h2>
  <!-- courseInfoがオブジェクト、sectionsがrefの場合は、自動でvalueはつかない -->
  <h2>courseInfo.sections: {{ courseInfo.sections.value + 1 }}</h2>
  <!-- courseInfoがオブジェクト、sectionsがrefの場合は、自動でvalueはつかないが、+1などをしなければ表示は可能だが非推奨 -->
  <h2>courseInfo.sections: {{ courseInfo.sections }}</h2>
</template>
