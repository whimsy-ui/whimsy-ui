<template>
  <div :class="[ns.b()]">123</div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, watch, onMounted, onUnmounted } from 'vue';
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
<style lang="scss" scoped></style>
