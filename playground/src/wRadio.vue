<template>
  <div class="play-container">
    <ws-radio v-model="value1" name="val1">radio</ws-radio>
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
