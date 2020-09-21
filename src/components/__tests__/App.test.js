import { shallowMount } from '@vue/test-utils'

import App from '../../App'

describe('App Component', () => {
  it('renders', () => {
    const wrapper = shallowMount(App, {
      stubs: ['router-link', 'router-view']
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
