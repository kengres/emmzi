import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Contact from '@/views/Contact'
import Hiphop from '@/views/Hiphop'
import Poetry from '@/views/Poetry'
import Songs from '@/views/Songs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/songs',
      name: 'Songs',
      component: Songs
    },
    {
      path: '/hiphop',
      name: 'Hiphop',
      component: Hiphop
    },
    {
      path: '/poetry',
      name: 'Poetry',
      component: Poetry
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ],
  mode: 'history'
})
