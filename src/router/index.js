import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import CommunityView from '../views/CommunityView.vue'
import UpcomingeventsView from '../views/UpcomingeventsView.vue'
import EventView from '../views/EventView.vue'

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
    path: '/ContactView',
    name: 'ContactView',
    component: ContactView
  },
  {
    path: '/CommunityView',
    name: 'CommunityView',
    component: CommunityView
  },
  {
    path: '/UpcomingeventsView',
    name: 'UpcomingeventsView',
    component: UpcomingeventsView
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
    path: '/event/:id',  // id parameter to know which project we clicked
    name: 'EventView',
    component: EventView
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
