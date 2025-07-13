<template>
  <div>
    <h1>Vue 学習テーマ一覧（✖ Typescript ✖ Router ✖ Pinia）</h1>
    <ul>
      <li v-for="(component, key) in componentsMap" :key="key" @click="currentTheme = key">
        {{ key }}
      </li>
    </ul>
    <component :is="componentsMap[currentTheme]" />
  </div>
</template>

<script>
import { markRaw } from 'vue'
import ScriptExample from './themes/script-example/ScriptExample.vue'
import ReactiveExample from './themes/script-example/ReactiveExample.vue'
import TemplateExample from './themes/base-example/TemplateExample.vue'
import VonExample from './themes/base-example/VonExample.vue'
import PropsExample from './themes/props-example/PropsExample.vue'
import EmitExample from './themes/emit-example/EmitExample.vue'
import SlotExample from './themes/slot-example/SlotExample.vue'

export default {
  data() {
    return {
      currentTheme: 'script',
      componentsMap: {
        script: markRaw(ScriptExample),
        reactive: markRaw(ReactiveExample),
        template: markRaw(TemplateExample),
        von: markRaw(VonExample),
        props: markRaw(PropsExample),
        emit: markRaw(EmitExample),
        slot: markRaw(SlotExample),
      },
    }
  },
}
</script>
