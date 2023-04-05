import { InjectionKey, ToRefs, ReactiveEffect } from 'vue';
import { CheckboxGroupProps } from '@whimsy-ui/components';
export type CheckboxGroupContext = {
  changeEvent: (...args: any) => any;
} & ToRefs<CheckboxGroupProps>;

export const checkboxGroupContextKey: InjectionKey<CheckboxGroupContext> = Symbol('checkboxGroupContextKey');
