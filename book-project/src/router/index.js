import Vue from 'vue'
import VueRouter from 'vue-router'
import Navigation from '../views/Navigation.vue'
import Information from '../views/Information.vue'
import BookView from '../views/BookView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Navigation',
    component: Navigation
  },
  {
    path: '/Information',
    name: 'Information',
    component: Information
  },
  {
    path: '/books/:id',
    name: 'BookView',
    component: BookView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
