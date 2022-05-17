<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>



  <h1>new</h1>

  <div id="users">

    <div v-for="(item, index) in items" v-bind:key = "index">
      
      {{ index }}
      
    </div>




  </div>





  <h1>new</h1>
</template>

<script>



// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
//import userdata from '@/main.js'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }/* ,
   
  data() {
      return {
        items: userdata
      }
    } */


  
}
</script>
