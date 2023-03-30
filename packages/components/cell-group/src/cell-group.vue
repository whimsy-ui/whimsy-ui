<template>
  <div>
    <div v-if="title || $slots.title" :class="[title && ns.e('title')]">
      <slot name="title">{{ title }}</slot>
    </div>
    <div :class="[ns.b(), inset && ns.m('inset'), border && inset && ns.e('top-bottom-hairline')]">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useNamespace } from '@whimsy-ui/utils';
import { cellGroupProps } from './cell-group';
defineProps(cellGroupProps);
defineOptions({
  name: 'WsCellGroup'
});
const ns = useNamespace('cell-group');
</script>
