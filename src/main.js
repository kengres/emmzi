import Vue from 'vue'
import Vuetify from 'vuetify'
import VueResource from 'vue-resource'
import Notifications from 'vue-notifyjs'
import App from './App'
import router from './router'
import { store } from './store'

Vue.use(Vuetify)
Vue.use(VueResource)
Vue.use(Notifications)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
