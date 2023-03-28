<template>
  <tag :class="[ns.b(), isClick ? ns.m('clickable') : '']" @click="handleClick">
    <div :class="[ns.e('title')]">
      <slot v-if="$slots.title" name="title"></slot>
      <span v-else-if="isDef(title)">
        {{ title }}
      </span>
    </div>
    <div :class="[ns.e('content')]">
      <slot v-if="$slots.content" name="content"></slot>
      <span v-else-if="isDef(content)">
        {{ content }}
      </span>
    </div>
  </tag>
</template>

<script setup lang="ts">
import { useNamespace } from '@whimsy-ui/hooks';
import { cellProps, cellEmits } from './cell';
import { isDef } from '@whimsy-ui/utils';
import { computed } from 'vue';
// import type { Router } from 'vue-router';
const ns = useNamespace('cell');
// const _this = getCurrentInstance();
const props = defineProps(cellProps);
const emit = defineEmits(cellEmits);
// const router = _this?.appContext.config.globalProperties.$router as Router;
const isClick = computed(() => props.clickable ?? props.isLink);

const handleClick = (evt: MouseEvent) => {
  // if(router){}
  emit('click', evt);
};
</script>
<style scoped lang="less"></style>
