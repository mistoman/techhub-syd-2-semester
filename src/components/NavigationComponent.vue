<template>
   <nav class="nav" id="home">
       <div class="left-side">
         <a href="/">
         <img class="nav-logo" src="fulllogopurple.ths.svg" alt="">
         </a>
       </div>
       <div class="right-side">

            <a href="/homeview">EVENTS</a> 
            <a href="/CommunityView">STARTUPS</a> 
            <a href="">ABOUT US</a> 
            <a href="/ContactView">CONTACT</a>
            <a href="">TECHHUB INVEST</a>
            <a class="button-nav" href=""><span> Become a Memeber </span></a>

       </div>
     
    

  </nav>
</template>

<script>
export default {
  name: 'NavigationComponent',
}
</script>

<style lang="scss">
  

.nav-logo {

  filter: brightness(0) invert(1);
  
  width: 100%;
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


  
</style>
