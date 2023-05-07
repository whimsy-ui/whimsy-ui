<template>
  <div :class="[ns.b(), ns.is('round', round)]" :style="style">
    <img v-if="src && !states.error" ref="imgRef" :class="[ns.e('img')]" :src="src" :alt="alt" :style="imgStyle" v-bind="$attrs" @load="onload" @error="onerror" />
    <template v-if="states.loading && showLoading">
      <slot v-if="$slots.loading" name="loading"></slot>
      <div v-if="!$slots.loading" :class="[ns.e('loading')]">
        <i :class="[ns.e('loading-icon')]"></i>
      </div>
    </template>
    <template v-if="states.error && showError">
      <slot v-if="$slots.error" name="error"></slot>
      <div v-if="!$slots.error" :class="[ns.e('error')]" :error-img-url="src">
        <i :class="[ns.e('error-icon')]"></i>
      </div>
    </template>
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

const { style, imgStyle, imgRef, onload, onerror, states } = useImage(props, emits);
const ns = useNamespace('image');

defineExpose({});
</script>
