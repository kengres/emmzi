import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Contact from '@/views/Contact'
import Hiphop from '@/views/Hiphop'
import Poetry from '@/views/Poetry'
import Songs from '@/views/Songs'
import Admin from '@/views/AdminViews'
import Dashboard from '@/views/AdminViews/Dashboard'
import AdminPages from '@/views/AdminViews/Pages'
import AdminSongs from '@/views/AdminViews/Songs'

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
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      children: [
        {
          path: '/admin',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: '/admin/pages',
          name: 'AdminPages',
          component: AdminPages
        },
        {
          path: '/admin/songs',
          name: 'AdminSongs',
          component: AdminSongs
        }
      ]
    }
  ],
  mode: 'history'
})
