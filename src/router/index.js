import Vue from 'vue'
import VueRouter from 'vue-router'
import Red from '../views/Red.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/red',
    name: 'Red',
    component: Red
  },
  {
    path: '/yellow',
    name: 'Yellow',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Yellow.vue')
  },
  {
    path: '/green',
    name: 'Green',
    component: () => import(/* webpackChunkName: "about" */ '../views/Green.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
