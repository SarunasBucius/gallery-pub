import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/gallery/:id',
    name: 'gallery',
    component: () =>
      import(/* webpackChunkName: "main" */ '../views/Gallery.vue')
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: () =>
      import(/* webpackChunkName: "contacts" */ '../views/Contacts.vue')
  },
  {
    path: '/partners',
    name: 'partners',
    component: () =>
      import(/* webpackChunkName: "partners" */ '../views/Partners.vue')
  },
  {
    path: '/prices',
    name: 'prices',
    component: () =>
      import(/* webpackChunkName: "prices" */ '../views/Prices.vue')
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: () =>
      import(/* webpackChunkName: "calendar" */ '../views/ScheduleCalendar.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
