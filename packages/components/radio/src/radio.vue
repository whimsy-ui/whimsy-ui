<template>
  <Checker :ns="ns" :checked="checked" :shape="shape" @toggle="toggle">
    <template v-if="$slots.icon" #icon> <slot name="icon"></slot> </template>
    <template v-if="$slots.default" #default> <slot name="default"></slot> </template>
  </Checker>
</template>

<script setup lang="ts">
import { inject, computed } from 'vue';
import { useNamespace } from '@whimsy-ui/utils';
import Checker from '../../checkbox/src/checker.vue';
import { radioGroupContextKey } from '../../utils';
import { radioProps, radioEmits } from './radio';
const ns = useNamespace('radio');
defineOptions({
  name: 'WsRadio'
});
const props = defineProps(radioProps);
const emit = defineEmits(radioEmits);

const radioGroup = inject(radioGroupContextKey, undefined);
const bindGroup = computed(() => !!radioGroup);

const checked = computed(() => {
  const value = radioGroup ? radioGroup.modelValue?.value : props.modelValue;
  return value === props.name;
});
const toggle = () => {
  if (bindGroup.value) {
    radioGroup?.changeEvent(props.name);
  } else {
    emit('update:modelValue', props.name);
  }
};
</script>
