<template>
  <div :class="ns.b()" @click="clickHandler">
    <div :class="[ns.e('dot'), ns.is('checked', checked)]"></div>
  </div>
</template>

<script setup lang="ts">
import { useNamespace } from '@whimsy-ui/utils';
import { switchEmits, switchProps } from './switch';
import { computed } from 'vue';
const ns = useNamespace('switch');
defineOptions({
  name: 'WsSwitch'
});
const checked = computed(() => props.activeValue === props.modelValue);
const props = defineProps(switchProps);
const emit = defineEmits(switchEmits);
const clickHandler = () => {
  if (!props.disabled && !props.loading) {
    const value = checked.value ? props.inactiveValue : props.activeValue;
    emit('change', value);
    emit('update:modelValue', value);
  }
};
</script>
