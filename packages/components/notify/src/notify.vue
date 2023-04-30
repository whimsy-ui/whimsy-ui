<template>
  <WsPopup :class="[ns.b(), ns.m(type)]" :style="{ background, color }" :show="show" :overlay="false" :z-index="zIndex" :position="position" @update:show="$emit('update:show')">
    <slot v-if="$slots.default"></slot>
    <span v-else>{{ message }}</span>
  </WsPopup>
</template>

<script setup lang="ts">
import { WsPopup } from '../../popup';
import { notifyProps, notifyEmits } from './notify';
import useNotify from './use-notify';
import { useNamespace } from '@whimsy-ui/utils';
defineOptions({
  name: 'WsNotify'
});
const ns = useNamespace('notify');
const props = defineProps(notifyProps);
const emits = defineEmits(notifyEmits);
const a = useNotify(props, emits);
// export variables and methods
defineExpose({});
</script>
