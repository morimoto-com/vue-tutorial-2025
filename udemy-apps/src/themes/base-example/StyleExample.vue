<template lang="">
  <!-- 直接指定する方法 -->
  <div :style="'color: red; background: blue'">Hello</div>
  <!-- オブジェクトとして指定して、リアクティブにする方法 -->
  <div :style="{ color: 'red', 'background-color': 'blue' }">Hello</div>
  <!-- プロパティ名のハイフンは省略してケバブケースからキャメルケースに変換可能。シングルクォーテーション不要になる -->
  <div :style="{ color: 'red', backgroundColor: 'blue' }">Hello</div>
</template>
<script setup></script>
<style lang=""></style>
