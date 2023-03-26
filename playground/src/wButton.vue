<template>
  <div class="play-container">
    <ws-button round>ws-button</ws-button>
    <ws-button icon="i-carbon:checkmark" class="text-1">Icon</ws-button>
    <ws-button loading>Icon</ws-button>
  </div>
</template>

<script setup lang="ts">
// code here
</script>

<style lang="scss">
html,
body {
  width: 100vw;
  height: 100vh;
  margin: 0;
  #play {
    height: 100%;
    width: 100%;
    .play-container {
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
