<template>
  <div class="about"> 
    <h1>This is an admin page</h1>
    <h2 class="sub-header">Welcome {{ name }}</h2>
    <button class="button danger"  @click="logout">  <!-- v-if="user"  -->
      Logout
    </button>

    <ProjectCreate />
    <ProjectCreateTestimonials />
    <ProjectList />
    <TestimonialsList />

    

  </div>
</template>


<script>
// Stuff for Login (Auth)
import firebase from 'firebase'
import { ref, onBeforeMount } from 'vue'
import { /*useRoute,*/ useRouter } from 'vue-router'

import ProjectCreate from '@/components/ProjectCreate.vue'
import ProjectList from '@/components/ProjectList.vue'
import ProjectCreateTestimonials from '@/components/ProjectCreateTestimonials.vue'
import TestimonialsList from '@/components/TestimonialsList.vue'


export default {
  name: 'HomeSecView',
  components: {
 
    ProjectCreate,
    ProjectCreateTestimonials,
    ProjectList,
    TestimonialsList
   

  },
  setup() {
    const router = useRouter()
    //const route = useRoute()

    const name = ref("")
    
    onBeforeMount(() => {
      const user = firebase.auth().currentUser // checking for the user info and store it in 'user'
      //console.log("testUser: ", user.email)
      if (user) {
        name.value = user.email.split('@')[0] // check for @ and split it there. so stuff before the @ sign.
      }
      else {
        router.push('/login') 
      }
    });
    
    const logout = () => {
      firebase
      .auth()
      .signOut()
      .then(() => {
      // Sign-out successful.
      }).catch((error) => {
        console.log("err", error.message)
      // An error happened.
      });
    }

    return { name, logout }  
  }
}
</script>


