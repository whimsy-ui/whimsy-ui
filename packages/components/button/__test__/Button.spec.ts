/** @format */

import { WsButton } from '..';
import { shallowMount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
// 测试分组
describe('button组件插槽测试', () => {
  // mount
  test('mount  @vue/test-utils', () => {
    // @vue/test-utils
    const wrapper = shallowMount(WsButton, {
      slots: {
        default: 'Button'
      }
    });

    // 断言
    expect(wrapper.text()).toBe('Button');
  });
});
describe('button组件颜色测试', () => {
  test('default', () => {
    const wrapper = shallowMount(WsButton, {
      slots: {
        default: 'Button'
      }
    });
    console.log(wrapper.classes());

    expect(
      wrapper
        .classes()
        .map((v) => v.replace('\n', ''))
        .includes('bg-white-500')
    ).toBe(true);
  });
  test('red', () => {
    // @ts-ignore
    const wrapper = shallowMount(WsButton, {
      slots: {
        default: 'Button'
      },
      props: {
        color: 'red'
      }
    });
    expect(
      wrapper
        .classes()
        .map((v) => v.replace('\n', ''))
        .includes('bg-red-500')
    ).toBe(true);
  });
});
