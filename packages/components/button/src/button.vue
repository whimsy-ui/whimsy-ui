<script setup lang="ts">
import { buttonProps, buttonEmits } from './button';
import { useNamespace } from '@whimsy-ui/utils';
import useButton from './use-button';
const COMPONENT_NAME = 'WsButton';
defineOptions({
  name: COMPONENT_NAME
});
const props = defineProps(buttonProps);
const emits = defineEmits(buttonEmits);
const ns = useNamespace('button');
const { _size, _ref, handleClick } = useButton(props, emits);

defineExpose({
  /** @description button html element */
  ref: _ref,
  /** @description button size */
  size: _size
});
</script>
<template>
  <button :class="[ns.b(), ns.m('hover'), ns.em('text', 'hover'), ns.theme(type), ns.m(size), ns.m(variant), ns.is('square', square), ns.is('round', round)]" @click="handleClick">
    <i v-if="loading" class="i-carbon-circle-dash animate-spin mr-1"></i>

    <i v-if="icon" :class="[icon, 'p-3']"></i>
    <slot v-if="$slots.default"></slot>
  </button>
</template>
