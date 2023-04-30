<template>
  <div class="play-container">
    <ws-button @click="open1">来吧展示</ws-button>
    <ws-button type="danger" @click="open2">来吧展示</ws-button>
    <ws-button type="success" @click="open3">来吧展示</ws-button>
    <ws-button type="info" @click="open4">来吧展示</ws-button>
    <ws-button @click="open6">函数调用</ws-button>
    <ws-button type="warning" @click="open5">来吧展示</ws-button>
    <ws-notify v-model:show="value1">这里这里</ws-notify>
    <ws-notify v-model:show="value2" type="danger">这里这里</ws-notify>
    <ws-notify v-model:show="value3" type="success">这里这里</ws-notify>
    <ws-notify v-model:show="value4" type="info">这里这里</ws-notify>
    <ws-notify v-model:show="value5" type="warning">这里这里</ws-notify>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { showNotify } from 'whimsy-ui';
const value1 = ref(false);
const value2 = ref(false);
const value3 = ref(false);
const value4 = ref(false);
const value5 = ref(false);
const onclose = () => {
  console.log('close');
};
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
const open6 = () => {
  showNotify({
    message: '这是函数调用的notify组件',
    duration: 1000
  });
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
