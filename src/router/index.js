import {
  createRouter,
  createWebHistory
} from 'vue-router'
import HomeView from '../views/HomeView.vue'

//firebase stuff


/*eslint-disable no-unused-vars*/
import { firebase } from '@firebase/app'

import { initializeApp } from "firebase/app";

import {
  getDatabase,
  onValue,
  ref,
  set
} from "firebase/database";




// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqDbLa5D4wWhy29M9-bIr9fhMeyqoYAHA",
  authDomain: "techhub-syd-6dff8.firebaseapp.com",
  databaseURL: "https://techhub-syd-6dff8-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "techhub-syd-6dff8",
  storageBucket: "techhub-syd-6dff8.appspot.com",
  messagingSenderId: "64600200329",
  appId: "1:64600200329:web:a3d2cdd6ff678832432258"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase();






function writeUserData(userId, name, email, imageUrl) {
  const db = getDatabase();
  
  const reference = ref(db, 'users/' + userId);


  set(reference, {
    username: name,
    email: email,
    profile_picture: imageUrl

  });

}

writeUserData("ands", "awe", "myemail", "myimg");











const routes = [{
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router