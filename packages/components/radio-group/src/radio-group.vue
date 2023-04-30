<template>
  <div :class="[ns.b(), ns.m(direction)]">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { provide, toRefs } from 'vue';
import { radioGroupProps, radioGroupEmits } from './radio-group';
import { useNamespace } from '@whimsy-ui/utils';
import { radioGroupContextKey } from '../../utils';
defineOptions({
  name: 'WsRadioGroup'
});
const props = defineProps(radioGroupProps);
const emit = defineEmits(radioGroupEmits);
const ns = useNamespace('checkbox-group');
const changeEvent = (newValue: any) => {
  emit('update:modelValue', newValue);
};
provide(radioGroupContextKey, {
  ...toRefs(props),
  changeEvent
});
</script>
