<template>
  <div class="play-container">
    <ws-input v-model="value1" label="标签" />
    <ws-input v-model="value1" label-align="left" label="标签" />
    <ws-input v-model="value1" label-align="right" label="标签" />
    <ws-input v-model="value1" required label="标签" />
    <ws-input v-model="value1" label="标签" placeholder="请输入一些内容" type="textarea" />
    <ws-input v-model="value1" label="标签" placeholder="请输入一些内容" show-word-limit max-length="10" />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
const value1 = ref('');
watch(value1, (n) => {
  // console.log(n);
});
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
}
#play {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.play-container {
  width: 100%;
}
</style>
