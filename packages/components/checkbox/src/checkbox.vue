<template>
  <Checker v-bind="props" :ns="ns" :checked="checked" :disabled="isDisabled" @toggle="onToggle">
    <template v-if="$slots.icon" #icon> <slot name="icon"></slot> </template>
    <template v-if="$slots.default" #default> <slot name="default"></slot> </template>
  </Checker>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue';
import { checkboxProps, checkboxEmits } from './checkbox';
import { useNamespace, isArray } from '@whimsy-ui/utils';
import { checkboxGroupContextKey } from '@whimsy-ui/components';
import Checker from './checker.vue';
defineOptions({
  name: 'WsCheckbox'
});
const ns = useNamespace('checkbox');
const props = defineProps(checkboxProps);
const emit = defineEmits(checkboxEmits);
// 第二个参数为默认值
const checkboxGroup = inject(checkboxGroupContextKey, undefined);
const hasParent = computed(() => !!checkboxGroup);
const modelValue = computed(() => (hasParent.value ? checkboxGroup?.modelValue?.value : props.modelValue));
const checked = computed(() => {
  if (hasParent.value) {
    if (isArray(modelValue.value)) {
      return (modelValue.value as any[]).includes(props.name);
    } else {
      return modelValue.value === props.name;
    }
  }
  return !!props.modelValue;
});
const isDisabled = computed(() => {
  if (!hasParent.value) {
    return props.disabled;
  }
  const { disabled, max } = checkboxGroup!;

  if (disabled.value) return true;
  if (max?.value && max.value > 0 && isArray(modelValue.value)) {
    if (modelValue.value.length === max.value) {
      return !modelValue.value.includes(props.name);
    }
  }
  return false;
});
const onToggle = (newValue: boolean = !checked.value) => {
  if (hasParent.value && isArray(modelValue.value)) {
    const arr = [...modelValue.value];
    arr.includes(props.name) ? arr.splice(arr.indexOf(props.name), 1) : arr.push(props.name);
    checkboxGroup?.changeEvent(arr);
    return emit('update:modelValue', newValue);
  }
  emit('update:modelValue', newValue);
};
</script>
