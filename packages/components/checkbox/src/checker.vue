<template>
  <div :class="[ns.b(), disabled && ns.m('disabled'), labelDisabled && ns.m('label-disabled')]" @click.stop="onclick">
    <div :class="[ns.e('icon'), ns.em('icon', shape), checked && ns.em('icon', 'checked'), disabled && ns.em('icon', 'disabled')]">
      <slot name="icon"></slot>
      <transition name="fade">
        <i v-if="!$slots.icon && checked" class="i-carbon-checkmark"></i>
      </transition>
    </div>
    <span v-if="$slots.default" :class="[ns.e('label'), disabled && ns.em('label', 'disabled')]">
      <slot name="default"></slot>
    </span>
  </div>
</template>

<script setup lang="ts">
import { checkerProps, checkerEmits } from './checker';
const props = defineProps(checkerProps);
const emit = defineEmits(checkerEmits);

const onclick = (evt: MouseEvent) => {
  if (props.disabled) return;
  emit('toggle');
};
</script>
<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
