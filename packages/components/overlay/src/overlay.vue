<template>
  <Transition name="ws-fade" appear>
    <div v-show="show" :class="[ns.b()]" :style="customStyle">
      <slot></slot>
    </div>
  </Transition>
</template>

<script setup lang="ts" name="">
import { useNamespace } from '@whimsy-ui/utils';
import { overlayBarProps, overlayBarEmits } from './overlay';
import useOverlay from './use-overlay';
const ns = useNamespace('overlay');
defineOptions({
  name: 'WsOverlay'
});
const props = defineProps(overlayBarProps);
const emits = defineEmits(overlayBarEmits);
const { customStyle } = useOverlay(props, emits);

// export variables and methods
defineExpose({});
</script>
