<template>
  <Transition name="ws-fade" appear>
    <div v-show="show" :class="[ns.b(), ns.is('blur', blur)]" :style="customStyle">
      <slot></slot>
    </div>
  </Transition>
</template>

<script setup lang="ts" name="">
import { useNamespace } from '@whimsy-ui/utils';
import { overlayProps, overlayEmits } from './overlay';
import useOverlay from './use-overlay';
const ns = useNamespace('overlay');
defineOptions({
  name: 'WsOverlay'
});
const props = defineProps(overlayProps);
const emits = defineEmits(overlayEmits);
const { customStyle } = useOverlay(props, emits);

// export variables and methods
defineExpose({});
</script>
