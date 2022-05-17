
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


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

//import Vue from 'vue'
import { rtdbPlugin } from 'vuefire'

//Vue.use(rtdbPlugin)

// Get a RTDB instance

//import 'firebase/database'

/*  const db = firebase
  .initializeApp({ databaseURL: 'MY PROJECT URL' })
  .database() */ 






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

const dbb = getDatabase();

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

writeUserData("asdjkands", "awe", "myemail", "myimg");


let users;
const usersRef= ref(db,'users');
onValue(usersRef, (snapshot) =>  {
    const data = snapshot.val();
    console.log(data);
    users = data;
})
console.log(usersRef);
/* db.ref('users').once('value', snapshot => {
    const testvalue = snapshot.val()
    // do something with documents
  
    console.log("database");
    
  }); */


  




createApp(App, {
    data() {
        return {
          items: users
        }
      }
}).use(router).mount('#app')


