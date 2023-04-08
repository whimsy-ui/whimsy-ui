import { InjectionKey, ToRefs, ReactiveEffect } from 'vue';
import { RadioGroupProps } from '@whimsy-ui/components';
export type RadioGroupContext = {
  changeEvent: (...args: any) => any;
} & ToRefs<RadioGroupProps>;

export const radioGroupContextKey: InjectionKey<RadioGroupContext> = Symbol('radioGroupContextKey');
