<template>
  <div>
    <div id="nav">
      <router-link to="/homesecview">Home</router-link> |
      <router-link to="/admin">Admin</router-link> |
      <router-link to="/ContactView">Contact</router-link>

      
    </div>

    <NavigationComponent />

    <router-view/>

    <FooterComponent/>


  </div>




</template>

<script>


import NavigationComponent from '@/components/NavigationComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'



import firebase from 'firebase' // firebase general stuff
import {} from '@/firebase.js' // all from firebase.js file

import { onBeforeMount} from 'vue' // lifecycle hook
import { useRouter, useRoute } from 'vue-router' // able to use methods from vue-router (replace etc)




export default {
  name: 'App',
  components : {
    NavigationComponent,
    FooterComponent
    
  },

  setup() {
    const router = useRouter(); // just declaring them
    const route = useRoute();

    onBeforeMount(() => { // 
      firebase.auth().onAuthStateChanged((user) => {
        if (!user) { // dont have a user - not logged in)
          router.replace('/login') // send them to this place
        }
        else if (route.path == '/login' || route.path == '/register') { // if logged in on this page, send us to home
          router.replace('/'); // test: go to frontpage, should redirect
        }
      })
    })
  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

}
  

</style>