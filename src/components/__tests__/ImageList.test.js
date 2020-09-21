import { createLocalVue, mount } from '@vue/test-utils'
import Vuex from 'vuex'

import ImageList from '../ImageList'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('ImageList Component', () => {
  let store, getters, actions, wrapper

  beforeEach(() => {
    getters = {
      allImages: () => [
        { link: 'test-1', id: 1 },
        { link: 'test-2', id: 2 }
      ],
      isLoggedIn: () => true
    }

    actions = {
      fetchImages: jest.fn()
    }

    store = new Vuex.Store({
      getters,
      actions
    })

    wrapper = mount(ImageList, {
      store,
      localVue,
      stubs: ['router-link']
    })
  })

  it('renders', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  it('renders with warning when user is logged out', () => {
    
    getters = {
      ...getters,
      isLoggedIn: () => false
    }

    store = new Vuex.Store({
      getters,
      actions
    })

    wrapper = mount(ImageList, {
      store,
      localVue,
      stubs: ['router-link']
    })

    expect(wrapper.html()).toContain('h2')
  })

  it('calls Vuex method "fetchImages" when created', () => {
    expect(actions.fetchImages).toHaveBeenCalled()
  })

  it('renders with two images', () => {
    const images = wrapper.findAll('img')
    expect(images.length).toBe(2)
  })
})
