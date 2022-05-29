<template>
   <footer class="footer">
       <div class="footer-info-grid">

           <img src="svgviewer-output.png" alt="">
           <div class="footer-info-grid-sec">
               <p class="footer-info-header">Company</p>
               <p>About Us</p>
               <p>Terms</p>
               <p>Privacy</p>
           </div>
            <div class="footer-info-grid-sec">
               <p>Home</p>
               <p>Events</p>
               <p>About us</p>
               <p>Startups</p>
               <p>Contact</p>
           </div>
            <div class="footer-info-grid-sec">
               <p>Contact & Adress</p>
               <p>Address: <br> Esbjerg, 6700, Denmark</p>
               <p>Phone: <br> +45 50 12 3451</p>
               <p>Mail: <br> info@techhubsyd.dk</p>
           </div>
            <div class="footer-info-grid-sec">
               <p>On Social</p>
               <p>Facebook</p>
               <p>Slack</p>
               <p>Linkedin</p>
           </div>
           <p>© TechHub Syd 2022</p>


       </div>
   </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
}
</script>

<style lang="scss">
    

.footer-info-grid {
    display: flex;
    justify-content: space-between;
    max-width: 1900px;

    margin: 0 auto;
    background: #6B38DB;

    p {
        color: white;
    }

}
 
</style>
