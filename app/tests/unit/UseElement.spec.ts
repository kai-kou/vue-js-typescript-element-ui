import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import UseElement from '@/components/UseElement.vue';
import { Input } from 'element-ui';

describe('UseElement.vue', () => {
  it('コンポーネントが表示されるか', () => {
    const wrapper = shallowMount(UseElement, {});

    expect(wrapper.findAll(Input)).to.length(1);
  });
});
