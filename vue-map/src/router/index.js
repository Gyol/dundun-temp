import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import Profile from "../views/Profile.vue";
import { authGuard } from "../auth/authGuard";
import ExternalApiView from "../views/ExternalApi.vue";

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
      beforeEnter: authGuard
    },
    {
      path: "/external-api",
      name: "external-api",
      component: ExternalApiView,
      beforeEnter: authGuard
    }
  ]
})

export default router
