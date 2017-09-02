import Vue from 'vue'
import Vuex from 'vuex'
import menu from '../components/Admin/menu'
import Headers from '../views/AdminViews/headers'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    menu,
    userHeaders: Headers.userHeaders,
    postHeaders: Headers.postHeaders,
    typeHeaders: Headers.typeHeaders,
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
    },
    userHeaders (state) {
      return state.userHeaders
    },
    postHeaders (state) {
      return state.postHeaders
    },
    typeHeaders (state) {
      return state.typeHeaders
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
