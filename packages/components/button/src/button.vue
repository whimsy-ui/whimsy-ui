<template>
  <button :class="[ns.b(), ns.m(_size), ns.is('plain', plain), ns.is('round', round)]" @click="handleClick">
    <i v-if="props.icon" :class="[`i-ic-baseline-${props.icon} p-3`]"></i>
    <slot v-if="$slots.default"></slot>
  </button>
  <el-button>你好</el-button>
</template>
<script setup lang="ts" name="WsButton">
import { buttonProps, buttonEmits } from './button';
import { useNamespace } from '@whimsy-ui/hooks';
import useButton from './use-button';
import { ElButton } from 'element-plus';
const props = defineProps(buttonProps);
const emits = defineEmits(buttonEmits);
const ns = useNamespace('button');
const { _size, _color, _ref, handleClick } = useButton(props, emits);

defineExpose({
  /** @description button html element */
  ref: _ref,
  /** @description button size */
  size: _size,
  /** @description button color */
  color: _color
});
</script>
