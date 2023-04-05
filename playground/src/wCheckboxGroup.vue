<template>
  <div class="play-container">
    <ws-checkbox-group v-model="value1" :max="2">
      <ws-checkbox name="一号选手">checkbox1</ws-checkbox>
      <ws-checkbox name="二号选手">checkbox2</ws-checkbox>
      <ws-checkbox name="三号选手">checkbox3</ws-checkbox>
    </ws-checkbox-group>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const value1 = ref([]);
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
