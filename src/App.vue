<template>
  <div>
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
        
        if (!user && route.path.includes('/admin')) { // dont have a user - not logged in)
          router.replace('/login') // send them to this place
        }
        else if (user && (route.path == '/login' || route.path == '/register')) { // if logged in on this page, send us to home
          router.replace('/'); // test: go to frontpage, should redirect
        }
      })
    })
  
  }
  
}
</script>

<style lang="scss">

@font-face {
  font-family: Integral-Cf-Heavy;
  src: url('@/assets/Integral-Cf-Heavy.otf');
}

html {
  scroll-behavior: smooth;
}



h1,h2,h3,h4 {
  font-family: Integral-Cf-Heavy;
  color: #150F37;
}

.h-text-font {
  font-family: Integral-Cf-Heavy;
  color: #150F37;
}

p {
  font-family: sofia-pro, sans-serif;
  font-weight: 400;
  font-style: normal;
}

.p-text-bold {
  font-family: sofia-pro, sans-serif;
  font-weight: 700;
  font-style: normal;
  color: #150F37;
}
  


#app {
  font-family: sofia-pro, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

}
  

</style>