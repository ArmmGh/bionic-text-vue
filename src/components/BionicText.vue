<template>
  <span class="bionic-text" v-html="getTransformedContent" />
</template>

<script>
import transformToBionic from './transformer';
export default {
  props: {
    content: {
      type: String,
      required: true
    }
  },
  computed: {
    getTransformedContent() {
      return transformToBionic(this.content);
    }
  }
}
</script>
<style>
span.bionic-text {
  font-size: 18px;
  line-height: 1.4;
  letter-spacing: 0.35px;
  color: rgb(28, 28, 30);
}
</style>