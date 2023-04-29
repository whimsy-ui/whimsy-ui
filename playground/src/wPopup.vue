<template>
  <div class="play-container">
    <ws-button @click="open1">上面下来</ws-button>
    <ws-button @click="open2">右边过来</ws-button>
    <ws-button @click="open3">下面上来</ws-button>
    <ws-button @click="open4">左边过来</ws-button>
    <ws-popup v-model:show="value1" position="top" :style="{ height: '30%' }">123</ws-popup>
    <ws-popup v-model:show="value2" position="right" :style="{ width: '30%' }">123</ws-popup>
    <ws-popup v-model:show="value3" position="bottom" :style="{ height: '30%' }">123</ws-popup>
    <ws-popup v-model:show="value4" position="left" :style="{ width: '30%' }">123</ws-popup>

    <ws-button @click="open5">关闭蒙层失焦</ws-button>
    <ws-popup v-model:show="value5" position="bottom" :blur="false" :style="{ height: '30%' }">123</ws-popup>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
const value1 = ref(false);
const value2 = ref(false);
const value3 = ref(false);
const value4 = ref(false);
const value5 = ref(false);
const open1 = () => {
  value1.value = true;
};
const open2 = () => {
  value2.value = true;
};
const open3 = () => {
  value3.value = true;
};
const open4 = () => {
  value4.value = true;
};
const open5 = () => {
  value5.value = true;
};
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
