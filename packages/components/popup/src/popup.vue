<template>
  <WsOverlay :show="show" :z-index="customZIndex" :blur="blur" @click="overlayClick">
    <slot name="overlay-content"></slot>
  </WsOverlay>
  <Transition :name="transitionName" appear v-bind="$attrs">
    <div v-show="show" :class="[ns.b(), ns.m(position)]" :style="style"></div>
  </Transition>
</template>

<script setup lang="ts">
import { WsOverlay } from '@whimsy-ui/components';
import { popupProps, popupEmits } from './popup';
import usePopup from './use-popup';
import { useNamespace } from '@whimsy-ui/utils';
defineOptions({
  name: 'WsPopup'
});
const ns = useNamespace('popup');
const props = defineProps(popupProps);
const emits = defineEmits(popupEmits);
const { overlayClick, close, open, opened, style, customZIndex, transitionName } = usePopup(props, emits);
// export variables and methods
defineExpose({});
</script>
<style lang="scss" scoped></style>
