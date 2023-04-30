import { InputProps, InputEmits } from './input';
import { getStringLength } from './utils';
import { type SetupContext, computed, ref, watch } from 'vue';
import { useId } from '@whimsy-ui/hooks';
import { isDef } from '@whimsy-ui/utils';
export default (props: InputProps, emit: SetupContext<InputEmits>['emit']) => {
  const inputRef = ref<HTMLInputElement>();
  const focused = ref(false);
  const modelValue = computed(() => String(props.modelValue) ?? '');
  const wordCount = computed(() => getStringLength(modelValue.value));
  const id = useId();
  const inputId = computed(() => props.id || `${id}-input`);
  const blur = () => inputRef.value?.blur();
  const focus = () => inputRef.value?.focus();
  // 该函数触发时机：input元素value改变后，且在emit更新modelValue之前
  const limitValue = (value: string) => {
    const { maxLength } = props;

    if (isDef(maxLength) && getStringLength(value) > +maxLength) {
      if (modelValue.value && getStringLength(modelValue.value) === +maxLength) {
        return modelValue.value;
      }
      return [...value].slice(0, +maxLength).join('');
    }
    return value;
  };
  const updateValue = (value: string) => {
    value = limitValue(value);
    inputRef!.value!.value = value;
    if (value !== props.modelValue) {
      emit('update:modelValue', value);
    }
  };
  watch(
    () => props.modelValue,
    () => {
      updateValue(modelValue.value);
    }
  );
  const onblur = (event: FocusEvent) => {
    focused.value = false;
    emit('blur', event);
  };
  const onfocus = (event: FocusEvent) => {
    focused.value = true;
    emit('focus', event);
  };
  const oninput = (event: Event) => {
    // skip update value when composing
    if (!(event.target as any).composing) {
      updateValue((event.target as HTMLInputElement).value);
    }
  };
  const onclick = (event: MouseEvent) => {
    emit('click', event);
  };
  const startComposing = (event: Event) => {
    (event.target as any).composing = true;
  };
  const endComposing = (event: Event) => {
    if ((event.target as any).composing) {
      (event.target as any).composing = false;
      // 派发一个input事件 触发oninput
      (event.target as any).dispatchEvent(new Event('input'));
    }
  };
  const onkeypress = (event: KeyboardEvent) => {
    const ENTER_CODE = 13;
    if (event.key && event.key === 'Enter') {
      event.preventDefault();
      if (props.type === 'search') {
        blur();
      }
    } else if (event.keyCode === ENTER_CODE) {
      event.preventDefault();
      if (props.type === 'search') {
        blur();
      }
    }
    emit('keypress', event);
  };

  return {
    id,
    inputId,
    inputRef,
    onblur,
    onfocus,
    oninput,
    onclick,
    startComposing,
    endComposing,
    onkeypress,
    blur,
    focus,
    wordCount
  };
};
