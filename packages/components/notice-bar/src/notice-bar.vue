<template>
  <div v-show="stats.show" :class="[ns.b()]">
    <slot v-if="$slots.leftIcon" name="left-icon"></slot>
    <div ref="wrapper" :class="[ns.e('wrap')]">
      <div ref="content" :class="[ns.e('content')]" :style="contentStyle">
        <slot v-if="$slots.default"></slot>
        <template v-else>{{ text }}</template>
      </div>
    </div>
    <slot v-if="$slots.rightIcon" name="right-icon"></slot>
    <i v-else-if="mode" :class="['i-carbon:close', ns.e('right-icon')]" @click.stop="rightIconClick"></i>
  </div>
</template>

<script setup lang="ts" name="">
import { useNamespace } from '@whimsy-ui/utils';
import { noticeBarProps, noticeBarEmits } from './notice-bar';
import useNoticeBar from './use-notice-bar';
const props = defineProps(noticeBarProps);
const emits = defineEmits(noticeBarEmits);
defineOptions({
  name: 'WsNoticeBar'
});

const { stats, rightIconClick, init, wrapper, content, contentStyle } = useNoticeBar(props, emits);
const ns = useNamespace('notice-bar');

defineExpose({ init });
</script>
<style lang="scss" scoped></style>
