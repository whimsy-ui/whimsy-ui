<template>
  <div :class="[ns.b(), ns.m(direction)]">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { provide, toRefs } from 'vue';
import { checkboxGroupProps, checkboxGroupEmits } from './checkbox-group';
import { useNamespace } from '@whimsy-ui/utils';
import { checkboxGroupContextKey } from '../../utils';
defineOptions({
  name: 'WsCheckboxGroup'
});
const props = defineProps(checkboxGroupProps);
const emit = defineEmits(checkboxGroupEmits);
const ns = useNamespace('checkbox-group');
const changeEvent = (newValue: any[]) => {
  emit('update:modelValue', newValue);
};
provide(checkboxGroupContextKey, {
  ...toRefs(props),
  changeEvent
});
</script>
