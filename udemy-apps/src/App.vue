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
import AnimationExample from './themes/animation-example/AnimationExample.vue'
import AnimationExtExample from './themes/animation-example/AnimationExtExample.vue'
import ModeExample from './themes/animation-example/ModeExample.vue'
import TransitionComponentExample from './themes/animation-example/TransitionComponentExample.vue'
import TransitionGroupExample from './themes/animation-example/TransitionGroupExample.vue'
import ClassExample from './themes/base-example/ClassExample.vue'
import StyleExample from './themes/base-example/StyleExample.vue'
import TemplateExample from './themes/base-example/TemplateExample.vue'
import VmodelExample from './themes/base-example/VmodelExample.vue'
import VonEtcExample from './themes/base-example/VonEtcExample.vue'
import VonExample from './themes/base-example/VonExample.vue'
import ComponentExample from './themes/component-example/ComponentExample.vue'
import DynamicComponentExample from './themes/component-example/DynamicComponentExample.vue'
import ComposableExample from './themes/composable-example/ComposableExample.vue'
import ComputedExample from './themes/computed-example/ComputedExample.vue'
import DefineModelExample from './themes/definemodel-example/DefineModelExample.vue'
import EmitExample from './themes/emit-example/EmitExample.vue'
import DomAccessExample from './themes/mount-example/DomAccessExample.vue'
import MountExample from './themes/mount-example/MountExample.vue'
import PropsExample from './themes/props-example/PropsExample.vue'
import VforEtcExample from './themes/rendering-example/VforEtcExample.vue'
import VforExample from './themes/rendering-example/VforExample.vue'
import VifExample from './themes/rendering-example/VifExample.vue'
import VshowExample from './themes/rendering-example/VshowExample.vue'
import ReactiveExample from './themes/script-example/ReactiveExample.vue'
import ScriptExample from './themes/script-example/ScriptExample.vue'
import SlotExample from './themes/slot-example/SlotExample.vue'
import VueRouterExample from './themes/vuerouter-example/VueRouterExample.vue'
import WatchExample from './themes/watch-example/WatchExample.vue'
import ParamExample from './themes/vuerouter-example/ParamExample.vue'

export default {
  data() {
    return {
      currentTheme: 'script',
      componentsMap: {
        script: markRaw(ScriptExample),
        reactive: markRaw(ReactiveExample),
        template: markRaw(TemplateExample),
        von: markRaw(VonExample),
        vonEtc: markRaw(VonEtcExample),
        vmodel: markRaw(VmodelExample),
        computed: markRaw(ComputedExample),
        watch: markRaw(WatchExample),
        class: markRaw(ClassExample),
        style: markRaw(StyleExample),
        vif: markRaw(VifExample),
        vshow: markRaw(VshowExample),
        vfor: markRaw(VforExample),
        vforEtc: markRaw(VforEtcExample),
        component: markRaw(ComponentExample),
        props: markRaw(PropsExample),
        emit: markRaw(EmitExample),
        mount: markRaw(MountExample),
        domaccess: markRaw(DomAccessExample),
        slot: markRaw(SlotExample),
        dynamic: markRaw(DynamicComponentExample),
        defineModel: markRaw(DefineModelExample),
        composable: markRaw(ComposableExample),
        animation: markRaw(AnimationExample),
        transition: markRaw(TransitionComponentExample),
        mode: markRaw(ModeExample),
        animationExt: markRaw(AnimationExtExample),
        transitionGroup: markRaw(TransitionGroupExample),
        vueRouter: markRaw(VueRouterExample),
        vueRouterParam: markRaw(ParamExample),
      },
    }
  },
}
</script>
