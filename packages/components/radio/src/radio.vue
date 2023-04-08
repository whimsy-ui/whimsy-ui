<template>
  <Checker :ns="ns" :checked="checked" :shape="shape" @toggle="toggle"></Checker>
</template>

<script setup lang="ts">
import { inject, computed } from 'vue';
import { useNamespace } from '@whimsy-ui/utils';
import Checker from '../../checkbox/src/checker.vue';
import { radioGroupContextKey } from '@whimsy-ui/components';
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
