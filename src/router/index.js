import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'

import HomeSecView from '../views/HomeSecView.vue'

// for editing (CRUD)
import Edit from '../views/EditView.vue'

// For login stuff
import Login from '../views/LoginView.vue'
import Register from '../views/RegisterView.vue'

// route guarding
//import firebase from 'firebase'
//import 'firebase/firestore'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: Home
  },
  {
    path: '/HomeSecView',
    name: 'HomeSecView',
    component: HomeSecView
  },
  {
    path: '/edit/:id',  // id parameter to know which project we clicked
    name: 'EditView',
    component: Edit
  },
  {
    path: '/login',
    name: 'LoginView',
    component: Login
  },
  {
    path: '/register',
    name: 'RegisterView', 
    component: Register
  },
  {
    path: '/admin',
    name: 'AdminView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AdminView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
  
})
export default router
