<template>
   <footer class="footer">
       <div class="footer-info-grid">

            <a href="/">
                <img class="nav-logo" src="fulllogopurple.ths.svg" alt="">
            </a>
           <div class="footer-info-grid-sec">
               <p class="underline-text">Company</p>
               <p>About Us</p>
               <p>Terms</p>
               <p>Privacy</p>
           </div>
            <div class="footer-info-grid-sec">
               <p class="underline-text">Home</p>
               <p>Events</p>
               <p>About us</p>
               <p>Startups</p>
               <p>Contact</p>
           </div>
            <div class="footer-info-grid-sec">
               <p class="underline-text">Contact & Adress</p>
               <p>Address: <br> Esbjerg, 6700, Denmark</p>
               <p>Phone: <br> +45 50 12 3451</p>
               <p>Mail: <br> info@techhubsyd.dk</p>
           </div>
            <div class="footer-info-grid-sec">
                

                <p class="underline-text">On Social</p>
                <p>Facebook</p>
                <p>Slack</p>
               
                <p>Linkedin</p>

                

                <p style="flex-grow: 1;"></p>
                <p>© TechHub Syd 2022</p>
               

               
           </div>

           


       </div>
   </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
}
</script>

<style lang="scss">

footer {
    padding: 20px;
    background: #6B38DB;
}
    

.footer-info-grid {
    display: flex;
    justify-content: space-between;
    max-width: 1900px;

    margin: 0 auto;

    .footer-info-grid-sec {
        display: flex;
        flex-direction: column;
        gap: 15px;
        
        &.space-between {
            justify-content: space-between;
        }
    }
    

    p {
        color: white;
        text-align: left;
        margin: 0;


        &.underline-text {
            padding-bottom: 6px;
            margin-bottom: 5px;
            border-bottom: 3px solid white;
            font-weight: bold;

        }
    }

}
 
</style>
