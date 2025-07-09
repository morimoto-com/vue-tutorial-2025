<template>
  <div>
    <h2>Emit Example</h2>
    <ChildComponent @increment="count++" />
    <p>Count: {{ count }}</p>
  </div>
</template>

<script>
import ChildComponent from './EmitExampleChild.vue';

export default {
  components: {
    ChildComponent
  },
  data() {
    return {
      count: 0
    };
  }
};
</script>
