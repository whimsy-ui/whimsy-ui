<template>
  <div class="play-container">
    <button @click="show = !show">Toggle</button>
    <Transition name="ws-fade">
      <p v-if="show">hello</p>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
const show = ref(false);
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
}
</style>
