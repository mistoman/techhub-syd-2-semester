<template>
   <nav class="nav" id="home">
       <div class="left-side">
         <router-link active-link="inverted" to="/"><img class="nav-logo" src="fulllogopurple.ths.svg" alt=""></router-link>
         <div onclick="document.querySelector('.right-side').classList.toggle('show');" class="hamburger-menu">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"/></svg>
         </div>
       </div>
       <div class="right-side">
            <router-link onclick="document.querySelector('.right-side').classList.toggle('show');" to="/UpcomingeventsView">EVENTS</router-link>
            <router-link onclick="document.querySelector('.right-side').classList.toggle('show');" to="/CommunityView">STARTUPS</router-link> 
            <router-link onclick="document.querySelector('.right-side').classList.toggle('show');" :to="{ path: '/', hash: '#about-us-nav'}">ABOUT US</router-link>
            <router-link onclick="document.querySelector('.right-side').classList.toggle('show');" to="/ContactView">CONTACT</router-link>
            <router-link onclick="document.querySelector('.right-side').classList.toggle('show');" to="">TECHHUB INVEST</router-link>
            <router-link onclick="document.querySelector('.right-side').classList.toggle('show');" class="button-nav" :to="{ path: '/CommunityView', hash: '#comunnity-signup'}"><span> Become a Memeber </span></router-link>
       </div>

       


     
    

  </nav>

  
</template>

<script>
//import { onBeforeUpdate, onUpdated } from 'vue'


export default {
  name: 'NavigationComponent',



/*   setup() {
      const pathname = window.location.pathname;

      onBeforeUpdate(() => {

        console.log("beforeUpdate: " + pathname);
      });

      onUpdated(() => {
        console.log("updated() val: " + pathname);
      });

      return {
        pathname
      }; 
    } */
  }







</script>

<style lang="scss">

.hamburger-menu {
  display: none;

}

.router-link-active.router-link-exact-active {

  .nav-logo {
  
  
    filter: brightness(0) invert(1);
    
  }
  
}
  

.nav-logo {
  
  width: 100%;

  &.inverted {
    filter: brightness(0) invert(1);
  }
}
.nav {
    display: flex;
    justify-content: space-between;
    max-width: 1900px;
    margin: 0 auto;
    
        
}


.right-side {

    display: flex;
    gap: 25px;
    padding-top: 20px;
    align-items: center;

    
}

.button-nav {
  
  border-radius: 50px;
  background: #6B38DB;
  padding: 10px 20px;
  color: white;
  fill: white;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    color: white;
    line-height: 14px;
  }
}

a {
    color: #121E49
}

@media screen and (max-width: 640px) {
  body {
    margin: 0;
    margin-top: 96px;
    
  }

  .router-link-active.router-link-exact-active {

    .nav-logo {
      filter: none;
    }
  
  }
  .nav {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    padding: 0;
    pointer-events: none;
    
    
    
    

    .left-side {
      display: flex;
      justify-content: space-between;
      
      align-items: center;
      background: white;
      padding: 20px;
      position: relative;
      pointer-events: all;

      text-align: left;

      .nav-logo {
        filter: initial;
        max-width: 60%;


      }
      

      .hamburger-menu {
        display: block;
        fill: #6B38DB;
        width: 35px;
        
      }
    }

    .right-side {
      position: relative;
      left: 100%;
      transition: left .3s ease;
      padding: 25px;
      font-size: 18px;
      
      display: flex;
      flex-direction: column;
      gap: 25px;
      background: white;
      border-bottom: 1px solid gainsboro;
      
      border-top: 1px solid gainsboro;
      right: -200%;
      pointer-events: all;
      &.show {
        left: 0;
        right: 0;


      }

    }
  }
}




  
</style>
