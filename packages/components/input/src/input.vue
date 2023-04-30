<template>
  <WsCell :class="[ns.b()]" :title-class="[ns.e('label'), required && ns.m('required'), labelAlign && ns.em('label', labelAlign)]">
    <template #title>
      <slot v-if="$slots.label" name="label"></slot>
      <label v-else :id="id + 'label'" :for="inputId" :style="{ width: addUnit(labelWidth) }">{{ label }}</label>
    </template>
    <template #content>
      <div :class="[ns.e('body')]">
        <textarea
          v-if="type === 'textarea'"
          :id="inputId"
          ref="inputRef"
          v-bind="$attrs"
          :class="[ns.e('content')]"
          :placeholder="placeholder"
          @blur="onblur"
          @focus="onfocus"
          @input="oninput"
          @click="onclick"
          @change="endComposing"
          @keypress="onkeypress"
          @compositionend="endComposing"
          @compositionstart="startComposing"
        ></textarea>
        <input
          v-else
          :id="inputId"
          ref="inputRef"
          v-bind="$attrs"
          :type="type"
          :class="[ns.e('content')]"
          :placeholder="placeholder"
          @blur="onblur"
          @focus="onfocus"
          @input="oninput"
          @click="onclick"
          @change="endComposing"
          @keypress="onkeypress"
          @compositionend="endComposing"
          @compositionstart="startComposing"
        />
      </div>
      <div v-if="showWordLimit && maxLength" :class="[ns.e('word-limit')]">
        <span :class="[ns.em('word-limit', 'num')]">{{ wordCount }}</span
        >/<span>{{ maxLength }}</span>
      </div>
    </template>
  </WsCell>
</template>

<script setup lang="ts">
import { useNamespace, addUnit } from '@whimsy-ui/utils';
import { inputProps, inputEmits } from './input';
import { WsCell } from '../../cell';
import useInput from './use-input';
defineOptions({
  name: 'WsInput'
});
const ns = useNamespace('input');
const props = defineProps(inputProps);
const emits = defineEmits(inputEmits);
const { inputId, id, inputRef, blur, focus, onblur, onfocus, oninput, onclick, startComposing, endComposing, onkeypress, wordCount } = useInput(props, emits);
defineExpose({ inputRef, blur, focus });
</script>
