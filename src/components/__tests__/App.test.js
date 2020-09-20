import { mount } from '@vue/test-utils'

import App from '../../App'

jest.mock('@/components/AppHeader')

describe('App Component', () => {
  it('renders', () => {
    const wrapper = mount(App, {
      stubs: ['router-link', 'router-view']
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
