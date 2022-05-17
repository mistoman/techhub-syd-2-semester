<template>
<div id="toplevel-container">

  <div class="hero-container">
    <img class="hero-gradiant" src="Group 63.jpg" alt="">

    <div class="hero-text">


    <h2>
      No.1 Growing <br>
      tech community <br>
      <span> in southern denmark </span> 
    </h2>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br>
      tempor incididunt ut labore et dolore magna aliqua. 
    </p>

    <div class="hero-buttons">
      <a class="button" href=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M94.12 315.1c0 25.9-21.16 47.06-47.06 47.06S0 341 0 315.1c0-25.9 21.16-47.06 47.06-47.06h47.06v47.06zm23.72 0c0-25.9 21.16-47.06 47.06-47.06s47.06 21.16 47.06 47.06v117.84c0 25.9-21.16 47.06-47.06 47.06s-47.06-21.16-47.06-47.06V315.1zm47.06-188.98c-25.9 0-47.06-21.16-47.06-47.06S139 32 164.9 32s47.06 21.16 47.06 47.06v47.06H164.9zm0 23.72c25.9 0 47.06 21.16 47.06 47.06s-21.16 47.06-47.06 47.06H47.06C21.16 243.96 0 222.8 0 196.9s21.16-47.06 47.06-47.06H164.9zm188.98 47.06c0-25.9 21.16-47.06 47.06-47.06 25.9 0 47.06 21.16 47.06 47.06s-21.16 47.06-47.06 47.06h-47.06V196.9zm-23.72 0c0 25.9-21.16 47.06-47.06 47.06-25.9 0-47.06-21.16-47.06-47.06V79.06c0-25.9 21.16-47.06 47.06-47.06 25.9 0 47.06 21.16 47.06 47.06V196.9zM283.1 385.88c25.9 0 47.06 21.16 47.06 47.06 0 25.9-21.16 47.06-47.06 47.06-25.9 0-47.06-21.16-47.06-47.06v-47.06h47.06zm0-23.72c-25.9 0-47.06-21.16-47.06-47.06 0-25.9 21.16-47.06 47.06-47.06h117.84c25.9 0 47.06 21.16 47.06 47.06 0 25.9-21.16 47.06-47.06 47.06H283.1z"/></svg> Connect to Slack</a>
      <a class="button inverted" href="">Upcoming Events</a>
    </div>



  </div>
  <div class="hero-img">
    <img src="Group 60.jpg" alt="">

  </div>

  </div>

  




  

  <div id="users">

    <div v-for="(item, index) in items" v-bind:key = "index">
      
      {{ index }}
      
    </div>




  </div>
</div>






  
</template>

<script>



// @ is an alias to /src

//import userdata from '@/main.js'


export default {
  name: 'HomeView',
  components: {}
  /* ,
   
  data() {
      return {
        items: userdata
      }
    } */


  
}
</script>

<style>

a {
  text-decoration: none;
}

span {
  color:#6B38DB
}

.hero-container{
  display: flex;
  justify-content: center;
  align-items: center;
 
}

.hero-gradiant {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  
}

.hero-text {
  display: flex;
  flex-direction: column;
}

.hero-text h2{
  margin: 0;
  font-size: 89px;
  text-transform: uppercase;
  text-align: left;
}

.hero-text p{

  font-size: 29px;
  text-align: left;

}

.hero-text a {
  font-size: 23px;
}

.hero-buttons {
  display: flex;
  gap: 15px;
}

.button {
  display: flex;
  border-radius: 50px;
  background: #6B38DB;
  padding: 20px 20px;
  color: white;
  fill: white;
  font-weight: bold;

  align-items: center;
  justify-content: center;
}

.button.inverted {

  border: 5px solid #6B38DB;
  background: none;
  color: black;
 
}

.hero-text svg {
  width: 34px;
  margin-right: 10px;
}


</style>
  

