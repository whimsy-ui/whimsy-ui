<template>
  <div class="play-container">
    <ws-radio-group v-model="value1">
      <ws-radio name="一号选手" shape="square">radio1</ws-radio>
      <ws-radio name="二号选手">radio2</ws-radio>
      <ws-radio name="三号选手">radio3</ws-radio>
    </ws-radio-group>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const value1 = ref('');
// code here
</script>

<style lang="scss">
:root {
  background-color: #f7f8fa;
}
html,
body {
  width: 100vw;
  height: 100vh;
  margin: 0;
  #play {
    height: 100%;
    width: 100%;
  }
}
</style>
