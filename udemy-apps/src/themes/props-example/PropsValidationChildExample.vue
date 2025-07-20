<template>
  <p>count:{{ fooCount }}</p>
</template>
<script setup>
defineProps({
  fooCount: {
    type: Number,
    // タイプには以下のような指定が可能
    // type: [Number, String, Boolean, Array, Object, Function, Symbol, Date, CustomClass],
    // required: true,
    // defaultを指定しなければ'undefined'が設定される
    default: 0,
    // デフォルトにオブジェクトまたは配列を指定したい場合は、functionでデフォルト定義する
    // default: function() {
    //   return {}
    // },
    validator: function (value) {
      // ↓省略して記載もできる
      // valudator(value) {
      return value === 0 || value === 1
    },
  },
  bar: {
    type: String,
    default: 'test',
  },
})
</script>
