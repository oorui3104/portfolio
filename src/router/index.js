import Vue from 'vue'
import VueRouter from 'vue-router'
import JankenApp from '../views/JankenApp.vue'
import CatApp from '../views/CatApp.vue'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/JankenApp',
    name: 'JankenApp',
    component: JankenApp
  },
  {
    path: '/catApp',
    name: 'cat',
    component: CatApp
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
