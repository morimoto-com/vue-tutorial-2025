<template>
  <CountUp />
  <!-- ケバブケースで呼び出しすることも可能 -->
  <Count-Up />
  <CountUp />
  <!-- idを付与することで、子コンポーネントの最上位タグに付与される -->
  <!-- 子コンポーネントにもidが付与されている場合は、親コンポーネントのidが付与される -->
  <!-- スタイルはどちらも適用される -->
  <BaseButton id="base-button" />
  <BaseButton v-if="true" id="base-button" />
  <!-- v-showは子コンポーネントの最上位タグが１つのものでないと動作しない（display属性が付与されるため） -->
  <BaseButton v-show="true" id="base-button" />
</template>
<script setup>
// vue.jsではパスカルケースでコンポーネントを命名することを推奨されている
// また、コンポーネント名は2単語以上にすることが求められる
import BaseButton from './BaseButton.vue'
import CountUp from './CountUp.vue'
</script>
<!-- scopedを指定することでこのコンポーネントにのみスタイルを適用することを限定する。
指定がなければ子コンポーネントでも使用できてしまい可読性が下がる -->
<style scoped>
.red {
  color: red;
}
</style>
<style>
/* body {
  background-color: rgb(65, 65, 38);
} */
</style>
