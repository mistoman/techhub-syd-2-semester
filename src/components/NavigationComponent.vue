<template>
   <nav class="nav" id="home">
       <div class="left-side">

           <a href="#home">LOGO</a>

       </div>
       <div class="right-side">

            <a href="">EVENTS</a> 
            <a href="">STARTUPS</a> 
            <a href="">ABOUT US</a> 
            <a href="">CONTACT</a>
            <a class="button-nav" href="">Become a Memeber</a>

       </div>
     
    

  </nav>
</template>

<script>
export default {
  name: 'NavigationComponent',
}
</script>

<style>
.nav {
    display: flex;
    justify-content: space-between;
    
    
    
}


.right-side {

    display: flex;
    gap: 25px;
    padding-top: 20px;

    
}

.button-nav {
  
  border-radius: 50px;
  background: #6B38DB;
  padding: 0px 20px;
  color: white;
  fill: white;
  font-weight: bold;


}

a {
    color: #121E49
}


  
</style>
