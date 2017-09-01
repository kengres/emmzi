import Vue from 'vue'
import Vuex from 'vuex'
import menu from '../components/Admin/menu'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    menu,
    footer: {
      fixed: false
    }
  },
  getters: {
    menu (state) {
      return state.menu
    },
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
