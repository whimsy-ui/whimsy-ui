import type { ButtonEmits, ButtonProps } from './button';
import { SetupContext, ref, computed } from 'vue';
export default (props: ButtonProps, emit: SetupContext<ButtonEmits>['emit']) => {
  const _size = computed(() => props.size || '');
  const _ref = ref<HTMLButtonElement>();
  const handleClick = (evt: MouseEvent) => {
    emit('click', evt);
  };
  return {
    _size,
    _ref,
    handleClick
  };
};
