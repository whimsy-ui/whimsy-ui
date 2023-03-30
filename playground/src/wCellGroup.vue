<template>
  <div class="play-container">
    <ws-cell-group class="mt-10">
      <ws-cell content="content props" />
      <ws-cell title="title" content="content props" />
      <ws-cell title="title" content="clickable cell" clickable />
    </ws-cell-group>
    <ws-cell-group class="mt-10" title="你好标题">
      <ws-cell content="content props" />
      <ws-cell title="title" content="content props" />
      <ws-cell title="title" content="clickable cell" clickable />
    </ws-cell-group>

    <ws-cell-group class="mt-10" inset>
      <ws-cell content="content props" />
      <ws-cell title="title" content="content props" />
    </ws-cell-group>
  </div>
</template>

<script setup lang="ts">
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
