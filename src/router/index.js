import Vue from 'vue'
import VueRouter from 'vue-router'
import Red from '../views/Red.vue'
import Green from '../views/Green.vue'
import Yellow from '../views/Yellow.vue'

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
    // component: () => import(/* webpackChunkName: "Green" */ '../views/Yellow.vue')
    component: Yellow,
  },
  {
    path: '/green',
    name: 'Green',
    // component: () => import(/* webpackChunkName: "Green" */ '../views/Green.vue')
    component: Green
  }
]

const router = new VueRouter({
  // routes
  routes: [
    {
      path: '/', redirect: '/green',
      component: Green,
    },
    {
      path: '/yellow',
      component: Yellow,
    },
    {
      path: '/red',
      component: Red,
    },
    {
      path: '/green',
      component: Green,
    },
  ]
})

export default router
