import Vue from 'vue'
import VueRouter from 'vue-router'
import BookView from '../views/BookView.vue'
import BookInfo from '../views/BookInfo.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/books',
    name: 'BookView',
    component: BookView
  },
  {
    path: '/books/:id',
    name: 'BookInfo',
    component: BookInfo
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
