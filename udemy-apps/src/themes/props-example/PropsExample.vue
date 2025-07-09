<template>
  <div>
    <h2>Props Example</h2>
    <ChildComponent message="Hello from parent!" />
  </div>
</template>

<script>
import ChildComponent from './PropsExampleChild.vue';

export default {
  components: {
    ChildComponent
  }
};
</script>
