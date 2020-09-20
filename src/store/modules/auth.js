import qs from 'qs'

import api from '@/api/imgur'
import router from '@/router'

const state = {
  token: localStorage.getItem('imgur_token')
}

const getters = {
  isLoggedIn: state => !!state.token
}

const mutations = {
  setToken: (state, token) => {
    state.token = token
  }
}

const actions = {
  login: () => {
    api.login()
  },

  logout: ({ commit }) => {
    commit('setToken', null)
    localStorage.removeItem('imgur_token')
  },

  finalizeLogin: ({ commit }, hash) => {
    const { access_token } = qs.parse(hash.replace('#', ''))

    commit('setToken', access_token)
    localStorage.setItem('imgur_token', access_token)

    router.push('/')
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
