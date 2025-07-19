<template>
  <p>count:{{ foo }}</p>
  <p>bar:{{ bar }}</p>
</template>
<script setup>
import { watchEffect, watch } from 'vue'
// propsで値を親から受け取る場合はdefinePropsの指定をする
const props = defineProps(['foo', 'bar'])
// 分割代入したとしても、リアクティブを損なわないようにvue.jsが変換してくれている
// const { foo } = defineProps(['foo']) or
// const foo = defineProps(['foo']).foo
// ↓
// props.foo
// -------
// watchする場合
watchEffect(() => {
  console.log('watchEffect:', props.foo)
})
// これではwatchできない
watch(props.foo, () => {
  console.log('watch:', props.foo)
})
// これでwatchできる
watch(() => props.foo, () => {
  console.log('watch:', props.foo)
})
// ✅ 補足：defineProps() 自体は reactive ではない
// defineProps() で取得する props オブジェクトは Vue によって内部的に reactive にラップされていますが、個々のプロパティは getter を通してアクセスしないと 追跡されません。
console.log(props.foo)
// propsは読み取り専用のため更新は不可
// props.foo = 'hi'
</script>
