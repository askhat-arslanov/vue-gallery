import api from '@/api/imgur'
import router from '@/router'

const state = {
  images: []
}

const getters = {
  allImages: state => {
    return state.images
  }
}

const mutations = {
  setImages: (state, images) => {
    state.images = images
  }
}

const actions = {
  async fetchImages({ rootState, commit }) {
    const { token } = rootState.auth
    const response = await api.fetchImages(token)
    commit('setImages', response.data.data)
  },

  async uploadImages({ rootState }, images) {
    // Get the access token
    const { token } = rootState.auth
    
    // Call API module to do the upload
    await api.uploadImages({ images, token })

    // Redirect user to ImageList component
    router.push('/')
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
