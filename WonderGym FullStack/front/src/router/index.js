import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Iniciogym.vue'

Vue.use(VueRouter)

const routeGuard = (to, from, next) => {
  let isAuthenticated = false;
  if (sessionStorage.getItem("username")) {
    isAuthenticated = true;
  }

  if (isAuthenticated) {
    next();
  } else {
    next("/");
  }
};

const routes = [
  {
    path: '/',
    name: 'Iniciogym',
    component: Home
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('../views/products/List.vue'),
    beforeEnter: routeGuard
  },
  {
    path: '/products/new',
    name: 'New Product',
    component: () => import('../views/products/New.vue'),
    beforeEnter: routeGuard
  },
  {
    path: '/products/:code',
    name: 'Edit Product',
    component: () => import('../views/products/New.vue'),
    beforeEnter: routeGuard
  },
  {
    path: '/trainers',
    name: 'Trainers',
    component: () => import('../views/trainers/List2.vue'),
    beforeEnter: routeGuard
  },
  {
    path: '/trainers/new',
    name: 'New Trainer',
    component: () => import('../views/trainers/New2.vue'),
    beforeEnter: routeGuard
  },
  {
    path: '/trainers/:code',
    name: 'Edit Trainer',
    component: () => import('../views/trainers/New2.vue'),
    beforeEnter: routeGuard
  },

  {
    path: '/servicios',
    name: 'Servicios',
    component: () => import('../views/Servicios.vue')
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: () => import('../views/Contacto.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
