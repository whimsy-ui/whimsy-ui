<template>
  <div class="play-container">
    <ws-notice-bar :show="true" mode="close" text="一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十" />
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
