<template>
  <div>
    <h1>Vue 学習テーマ一覧（✖ Typescript ✖ Router ✖ Pinia）</h1>
    <ul>
      <li @click="currentTheme = 'script'">script</li>
      <li @click="currentTheme = 'reactive'">reactive</li>
      <li @click="currentTheme = 'props'">Props</li>
      <li @click="currentTheme = 'emit'">Emit</li>
      <li @click="currentTheme = 'slot'">Slot</li>
    </ul>

    <component :is="currentComponent" />
  </div>
</template>

<script>
import ScriptExample from './themes/script-example/ScriptExample.vue'
import ReactiveExample from './themes/script-example/ReactiveExample.vue'
import PropsExample from './themes/props-example/PropsExample.vue'
import EmitExample from './themes/emit-example/EmitExample.vue'
import SlotExample from './themes/slot-example/SlotExample.vue'

export default {
  components: {
    ScriptExample,
    ReactiveExample,
    PropsExample,
    EmitExample,
    SlotExample,
  },
  data() {
    return {
      currentTheme: 'script',
    }
  },
  computed: {
    currentComponent() {
      switch (this.currentTheme) {
        case 'reactive':
          return 'ReactiveExample'
        case 'props':
          return 'PropsExample'
        case 'emit':
          return 'EmitExample'
        case 'slot':
          return 'SlotExample'
        default:
          return 'ScriptExample'
      }
    },
  },
}
</script>
