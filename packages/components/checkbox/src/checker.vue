<template>
  <div :class="[ns.b(), disabled && ns.m('disabled'), labelDisabled && ns.m('label-disabled')]" @click="onclick">
    <div :class="[ns.e('icon'), ns.em('icon', shape), checked && ns.em('icon', 'checked')]">
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
import { useSlots } from 'vue';
import { checkerProps, checkerEmits } from './checker';
defineProps(checkerProps);
const emit = defineEmits(checkerEmits);
const slots = useSlots();
console.log(slots);

const onclick = (evt: MouseEvent) => {
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
