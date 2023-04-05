<template>
  <Checker v-bind="props" :ns="ns" :checked="checked" @toggle="onToggle">
    <template v-if="$slots.icon" #icon> <slot name="icon"></slot> </template>
    <template v-if="$slots.default" #default> <slot name="default"></slot> </template>
  </Checker>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { checkboxProps, checkboxEmits } from './checkbox';
import { useNamespace } from '@whimsy-ui/utils';
import Checker from './checker.vue';
defineOptions({
  name: 'WsCheckbox'
});
const props = defineProps(checkboxProps);
const emit = defineEmits(checkboxEmits);
const ns = useNamespace('checkbox');
const checked = computed(() => {
  return !!props.modelValue;
});
const onToggle = (newValue: boolean = !checked.value) => {
  console.log('onToggle', newValue);
  emit('update:modelValue', newValue);
};
</script>
<style scoped lang="scss"></style>
