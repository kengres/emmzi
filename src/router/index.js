import Vue from 'vue'
import Router from 'vue-router'
import App from '@/components/App'
import Admin from '@/components/Admin'
import Home from '@/views/Home'
import Contact from '@/views/Contact'
import Hiphop from '@/views/Hiphop'
import Poetry from '@/views/Poetry'
import Songs from '@/views/Songs'
import Dashboard from '@/views/AdminViews/Dashboard'
import CrudForm from '@/views/AdminViews/Pages/CrudForm'
import CrudGrid from '@/views/AdminViews/Pages/CrudGrid'
import Login from '@/views/AdminViews/Pages/Login'
import Error from '@/views/AdminViews/Pages/Error'
import Settings from '@/views/AdminViews/Pages/Settings'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: App,
      children: [
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
      ]
    },
    {
      exact: true,
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      exact: true,
      path: '/error',
      name: 'Error',
      component: Error
    },
    {
      path: '/admin',
      component: Admin,
      children: [
        {
          exact: true,
          path: '/admin',
          name: 'Admin',
          component: Dashboard
        },
        {
          exact: true,
          path: '/admin/crud/:resource',
          name: 'grid',
          component: CrudGrid
        },
        {
          exact: true,
          path: '/admin/crud/:resource/:id/edit',
          name: 'edit',
          component: CrudForm
        },
        {
          exact: true,
          path: '/admin/crud/:resource/create',
          name: 'create',
          component: CrudForm
        },
        {
          exact: true,
          path: '/admin/crud/:resource/:id/action',
          name: 'action',
          component: CrudForm
        },
        {
          exact: true,
          path: '/admin/crud/:resource/:action',
          name: 'indexAction',
          component: CrudForm
        },
        {
          exact: true,
          path: '/admin/settings',
          name: 'Settings',
          component: Settings
        }
      ]
    }
  ],
  mode: 'history'
})
