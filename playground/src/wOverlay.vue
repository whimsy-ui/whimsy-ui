<template>
  <div class="play-container">
    <ws-button @click="show = !show">展示简单遮罩</ws-button>
    <ws-button @click="show1 = !show1">展示内容遮罩</ws-button>
    <div class="container">
      <ws-overlay :show="show" @click="show = false"></ws-overlay>
      <ws-overlay :show="show1" @click="show1 = false">
        <div class="wrapper">
          <div class="block" @click.stop /></div
      ></ws-overlay>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
const show = ref(false);
const show1 = ref(false);
watch(show, (n) => {
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
  .container {
    height: 50vh;
  }
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 120px;
  height: 120px;
  background-color: #fff;
}
</style>
