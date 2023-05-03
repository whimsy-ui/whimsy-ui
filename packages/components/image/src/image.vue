<template>
  <div :class="[ns.b(), ns.is('round', round)]" :style="style">
    <img v-if="src" ref="imgRef" :src="src" :alt="alt" :style="imgStyle" v-bind="$attrs" />
  </div>
</template>

<script setup lang="ts">
import { useNamespace } from '@whimsy-ui/utils';
import { imageProps, imageEmits } from './image';
import useImage from './use-image';
const props = defineProps(imageProps);
const emits = defineEmits(imageEmits);
defineOptions({
  name: 'WsImage'
});

const { style, imgStyle, imgRef } = useImage(props, emits);
const ns = useNamespace('image');

defineExpose({});
</script>
