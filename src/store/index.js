import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    footer: {
      fixed: false
    }
  },
  getters: {
    fixedFooter (state) {
      return state.footer.fixed
    }
  },
  mutations: {
    toggleFooter (state) {
      state.footer.fixed = !state.footer.fixed
    }
  },
  actions: {
    toggleFooter ({ commit }) {
      commit('toggleFooter')
    }
  }
})
