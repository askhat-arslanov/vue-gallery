import { mount } from '@vue/test-utils'

import TestComponent from '../TestComponent'

describe('TestComponent Component', () => {
  it('renders', () => {
    const wrapper = mount(TestComponent)
    expect(wrapper.vm).toBeTruthy()
  })
})
