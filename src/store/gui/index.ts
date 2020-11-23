import tooltips from './toolTips'
import snackbar from './snackbar'

const store = {

  namespaced: true,

  modules: {
    tooltips,
    snackbar
  },

  state: () => ({
    modalLoading: false
  }),

  mutations: {
    modalLoading (state, value) {
      state.modalLoading = value
    }
  },

  actions: {
    modalLoading (context, value) {
      context.commit('modalLoading', value)
      return Promise.resolve()
    }
  },

  getters: {
    modalLoading: state => {
      return state.modalLoading
    }
  }

}

export default store
