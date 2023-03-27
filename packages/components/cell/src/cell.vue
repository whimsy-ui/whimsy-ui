<template>
  <tag :class="ns.b()">tag hello world</tag>
</template>

<script setup lang="ts">
import { useNamespace } from '@whimsy-ui/hooks';

const ns = useNamespace('cell');
</script>
<style scoped lang="less"></style>
