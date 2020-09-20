import { createLocalVue, mount } from '@vue/test-utils'
import Vuex from 'vuex'

import * as paths from '@/constants/paths'
import AppHeader from '../AppHeader'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('AppHeader Component', () => {
  let store
  let getters
  let actions
  let wrapper

  beforeEach(() => {
    getters = {
      isLoggedIn: () => false
    }

    actions = {
      login: jest.fn(),
      logout: jest.fn()
    }

    store = new Vuex.Store({
      getters,
      actions
    })

    wrapper = mount(AppHeader, {
      store,
      localVue,
      stubs: ['router-link']
    })
  })

  it('renders', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  it('renders with "Login" button when user is not logged in', () => {
    const loginButton = wrapper.find('#login-btn')
    expect(loginButton.element).toBeTruthy()
  })

  it('does not render with "Logout" button when user is not logged in', () => {
    const logoutButton = wrapper.find('#logout-btn')
    expect(logoutButton.element).toBeFalsy()
  })

  it('calls Vuex action "login" when "Login" button pressed', () => {
    const input = wrapper.find('#login-btn')
    input.trigger('click')
    expect(actions.login).toHaveBeenCalled()
  })
})
