<template>
  <WsCell :class="[ns.b()]" :title-class="[ns.e('label'), required && ns.m('required'), labelAlign && ns.em('label', labelAlign)]">
    <template #title> title </template>
    <template #content>
      <input type="text" v-bind="$attrs" />
    </template>
  </WsCell>
</template>

<script setup lang="ts" name="">
import { useNamespace } from '@whimsy-ui/utils';
import { inputProps, inputEmits } from './input';
import { WsCell } from '../../cell';
const props = defineProps(inputProps);
const emits = defineEmits(inputEmits);
defineOptions({
  name: 'WsInput'
});
const ns = useNamespace('input');

defineExpose({});
</script>
