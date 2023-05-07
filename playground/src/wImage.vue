<template>
  <div class="play-container">
    <ws-image round width="200" fit="contain" height="200" src="https://docs.hgyn23.cn/static/d26bc5b2221a603c6fadd6539a06fb5f" />
    <ws-image width="200" fit="contain" height="200"> </ws-image>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
const value1 = ref(false);
watch(value1, (n) => {
  console.log(n);
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
