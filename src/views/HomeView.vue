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
          <a class="button" href=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path
                d="M94.12 315.1c0 25.9-21.16 47.06-47.06 47.06S0 341 0 315.1c0-25.9 21.16-47.06 47.06-47.06h47.06v47.06zm23.72 0c0-25.9 21.16-47.06 47.06-47.06s47.06 21.16 47.06 47.06v117.84c0 25.9-21.16 47.06-47.06 47.06s-47.06-21.16-47.06-47.06V315.1zm47.06-188.98c-25.9 0-47.06-21.16-47.06-47.06S139 32 164.9 32s47.06 21.16 47.06 47.06v47.06H164.9zm0 23.72c25.9 0 47.06 21.16 47.06 47.06s-21.16 47.06-47.06 47.06H47.06C21.16 243.96 0 222.8 0 196.9s21.16-47.06 47.06-47.06H164.9zm188.98 47.06c0-25.9 21.16-47.06 47.06-47.06 25.9 0 47.06 21.16 47.06 47.06s-21.16 47.06-47.06 47.06h-47.06V196.9zm-23.72 0c0 25.9-21.16 47.06-47.06 47.06-25.9 0-47.06-21.16-47.06-47.06V79.06c0-25.9 21.16-47.06 47.06-47.06 25.9 0 47.06 21.16 47.06 47.06V196.9zM283.1 385.88c25.9 0 47.06 21.16 47.06 47.06 0 25.9-21.16 47.06-47.06 47.06-25.9 0-47.06-21.16-47.06-47.06v-47.06h47.06zm0-23.72c-25.9 0-47.06-21.16-47.06-47.06 0-25.9 21.16-47.06 47.06-47.06h117.84c25.9 0 47.06 21.16 47.06 47.06 0 25.9-21.16 47.06-47.06 47.06H283.1z" />
            </svg> Sign Up To Next Event</a>
          <a class="button inverted" href="">Become a Member</a>
        </div>



      </div>
      <div class="hero-img">
        <img src="Group 60.png" alt="">

      </div>

    </div>

    <div id="users">

      <div v-for="(item, index) in items" v-bind:key="index">

        {{ index }}

      </div>

    </div>

    <div class="your-story-container">

      <div class="your-stoty-headline">
        <h2 class="main-text-color-purble">your story, our mission</h2>
      </div>

      <div class="your-story-top">
        <div class="your-story-top-img">
          <img src="Group-61.png" alt="">

        </div>
        <div class="your-story-top-text">
          <p>our mission</p>
          <h2>Establish a <span class="Become a Member"> proper<br>
            tech community</span></h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br> temporskfs Lorem ipsum dolor
            sit
            amet, consectetur adipiscing elit, sed do<br> eiusmod tempor incididunt ut labore et dolore magna
            aliqua.<br>
            <br>

            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br> temporskfs Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do<br> eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div class="hero-buttons">
            <a class="button" href=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                <path
                  d="M94.12 315.1c0 25.9-21.16 47.06-47.06 47.06S0 341 0 315.1c0-25.9 21.16-47.06 47.06-47.06h47.06v47.06zm23.72 0c0-25.9 21.16-47.06 47.06-47.06s47.06 21.16 47.06 47.06v117.84c0 25.9-21.16 47.06-47.06 47.06s-47.06-21.16-47.06-47.06V315.1zm47.06-188.98c-25.9 0-47.06-21.16-47.06-47.06S139 32 164.9 32s47.06 21.16 47.06 47.06v47.06H164.9zm0 23.72c25.9 0 47.06 21.16 47.06 47.06s-21.16 47.06-47.06 47.06H47.06C21.16 243.96 0 222.8 0 196.9s21.16-47.06 47.06-47.06H164.9zm188.98 47.06c0-25.9 21.16-47.06 47.06-47.06 25.9 0 47.06 21.16 47.06 47.06s-21.16 47.06-47.06 47.06h-47.06V196.9zm-23.72 0c0 25.9-21.16 47.06-47.06 47.06-25.9 0-47.06-21.16-47.06-47.06V79.06c0-25.9 21.16-47.06 47.06-47.06 25.9 0 47.06 21.16 47.06 47.06V196.9zM283.1 385.88c25.9 0 47.06 21.16 47.06 47.06 0 25.9-21.16 47.06-47.06 47.06-25.9 0-47.06-21.16-47.06-47.06v-47.06h47.06zm0-23.72c-25.9 0-47.06-21.16-47.06-47.06 0-25.9 21.16-47.06 47.06-47.06h117.84c25.9 0 47.06 21.16 47.06 47.06 0 25.9-21.16 47.06-47.06 47.06H283.1z" />
              </svg> Sign Up To Next Event</a>
            <a class="button inverted" href="">Become a Member</a>
          </div>

        </div>

      </div>

      <div class="your-story-top">

        <div class="your-story-top-text">
          <p>about us</p>
          <h2>we support <span class="main-text-color-purble"> tech <br> startups, students</span> <br> and <span class="main-text-color-purble"> investors </span></h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br> temporskfs Lorem ipsum dolor
            sit
            amet, consectetur adipiscing elit, sed do<br> eiusmod tempor incididunt ut labore et dolore magna
            aliqua.<br>
            <br>

            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br> temporskfs Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do<br> eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div class="hero-buttons">
            <a class="button" href=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                <path
                  d="M94.12 315.1c0 25.9-21.16 47.06-47.06 47.06S0 341 0 315.1c0-25.9 21.16-47.06 47.06-47.06h47.06v47.06zm23.72 0c0-25.9 21.16-47.06 47.06-47.06s47.06 21.16 47.06 47.06v117.84c0 25.9-21.16 47.06-47.06 47.06s-47.06-21.16-47.06-47.06V315.1zm47.06-188.98c-25.9 0-47.06-21.16-47.06-47.06S139 32 164.9 32s47.06 21.16 47.06 47.06v47.06H164.9zm0 23.72c25.9 0 47.06 21.16 47.06 47.06s-21.16 47.06-47.06 47.06H47.06C21.16 243.96 0 222.8 0 196.9s21.16-47.06 47.06-47.06H164.9zm188.98 47.06c0-25.9 21.16-47.06 47.06-47.06 25.9 0 47.06 21.16 47.06 47.06s-21.16 47.06-47.06 47.06h-47.06V196.9zm-23.72 0c0 25.9-21.16 47.06-47.06 47.06-25.9 0-47.06-21.16-47.06-47.06V79.06c0-25.9 21.16-47.06 47.06-47.06 25.9 0 47.06 21.16 47.06 47.06V196.9zM283.1 385.88c25.9 0 47.06 21.16 47.06 47.06 0 25.9-21.16 47.06-47.06 47.06-25.9 0-47.06-21.16-47.06-47.06v-47.06h47.06zm0-23.72c-25.9 0-47.06-21.16-47.06-47.06 0-25.9 21.16-47.06 47.06-47.06h117.84c25.9 0 47.06 21.16 47.06 47.06 0 25.9-21.16 47.06-47.06 47.06H283.1z" />
              </svg> Sign Up To Next Event</a>
            <a class="button inverted" href="">Become a Member</a>
          </div>

        </div>

        <div class="your-story-top-img">
          <img src="Group 97.png" alt="">

        </div>

      </div>
      <div class="membership-container">

        <div class="membership-img">

          <img src="features.png" alt="">

        </div>

        <div class="membership-text">

          <h2>Membership <span class="main-text-color-purble"> benefits</span></h2>
          <div class="memberships-benefits-items">
            <div class="memberships-benefits-item">
              <div class="memberships-benefits-item__checkmark">
                <img src="svgviewer-output.png" alt="">
              </div>

              <div class="memberships-benefits-item__info">
                <p>Inspirational talks</p>
                <p>We partner with inspirational leaders and tech entrepreneurs who haveither built own venture or
                  invested in startups.</p>
              </div>

            </div>

            <div class="memberships-benefits-item">
              <div class="memberships-benefits-item__checkmark">
                <img src="svgviewer-output.png" alt="">
              </div>

              <div class="memberships-benefits-item__info">
                <p>Investor pitches</p>
                <p>We gather tech startups and smart investors to match the two so we can help fuel the next generation
                  of tech startups in the region.</p>
              </div>

            </div>

            <div class="memberships-benefits-item">
              <div class="memberships-benefits-item__checkmark">
                <img src="svgviewer-output.png" alt="">
              </div>

              <div class="memberships-benefits-item__info">
                <p>Co-founder meetups</p>
                <p>We partner with inspirational leaders and tech entrepreneurs who haveither built own venture or
                  invested in startups.</p>
              </div>

            </div>

            <div class="memberships-benefits-item">
              <div class="memberships-benefits-item__checkmark">
                <img src="svgviewer-output.png" alt="">
              </div>

              <div class="memberships-benefits-item__info">
                <p>Startups pitch for student jobs</p>
                <p>We gather tech startups and smart investors to match the two so we can help fuel the next generation
                  of tech startups in the region.</p>
              </div>

            </div>

            <div class="memberships-benefits-item">
              <div class="memberships-benefits-item__checkmark">
                <img src="svgviewer-output.png" alt="">
              </div>

              <div class="memberships-benefits-item__info">
                <p>Startups pitch for student jobs</p>
                <p>We gather tech startups and smart investors to match the two so we can help fuel the next generation of tech startups in the region.</p>
              </div>

            </div>
          </div>
        </div>
        <div class="purple-box"></div>
      </div>
    </div>

    <div class="events-container">

      <h2>upcoming events</h2>

      <ProjectListUsers />

    </div>

    <div class="slack-container">

      <h2>join our slack channel</h2>

      <div class="active-members">
        <div class="active-members-text">
          
          <p class="active-member-headline">active community with <br> more than 100 members</p>

          <div class="active-members-checkmark">
            <div class="active-members-checkmark-img">
              <img src="svgviewer-output.png" alt="">
              <p>daily news</p>
            </div>

            <div class="active-members-checkmark-img">
              <img src="svgviewer-output.png" alt="">
              <p>helpful people</p>
            </div>

            <div class="active-members-checkmark-img">
              <img src="svgviewer-output.png" alt="">
              <p>be the first to notified about events</p>
            </div>
            
              
          </div>         

        </div>
        <div class="active-members-img">

          <img src="Slackclient.png" alt="">

        </div>

      </div>

      <div class="free-e-book">

        <div class="free-e-book-text">

          <p>free e-boox</p>
          <p>the guide on how <br>to build a startup</p>
          <p>This E-Book will help you how to start and maintain a succesfull startup from scratch.</p>

          <p>MAILCHIMP PLUGIN OR WHATEVER</p>

          <a href="">Download for free</a>

        </div>

        <div class="free-e-book-img">

          <img src="253.png" alt="">

        </div>

      </div>

    </div>


  </div>







</template>

<script>
  // @ is an alias to /src

  //import userdata from '@/main.js'

  import ProjectListUsers from '@/components/ProjectListUsers.vue'




  export default {
    name: 'HomeView',
    components: {
      ProjectListUsers

    }

    /* ,
     
    data() {
        return {
          items: userdata
        }
      } */





  }
</script>



<style lang="scss">
  .main-text-color-purble {
    color: #6B38DB;
  }


  .active-members {
    display: flex;
    justify-content: space-between;

    .active-member-headline {
      font-size: 44px;
      font-weight: bold;
      text-transform: uppercase;
      text-align: left;
    }

    .active-members-checkmark {
      display: flex;
      flex-direction: column;
      
      gap: 25px;

      .active-members-checkmark-img {
        display: flex;
        align-items: center;

        img {
          margin-right: 20px;
        }

        

      }

      p {
        font-weight: bold;
      }
      
    }
  }

  .membership-text {
    padding-top: 140px;

    h2 {
      padding-bottom: 50px ;
    }

  }

  .purple-box {
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    background-color: #6B38DB;
    height: 334px;
  }

  .membership-container {
    padding-top: 140px;
    padding-bottom: 140px;
    position: relative;

    .membership-img {
      display: flex;
      flex-direction: column;
      justify-content: center;
      
    }
    

    .memberships-benefits-items {
      display: flex;
      flex-direction: column;
      text-align: left;
      gap: 30px;

      .memberships-benefits-item {
        display: flex;
        gap: 10px;

        &__checkmark {
          width: 29px;
        }

        &__info {
          width: calc(90% - 29px);
          display: flex;
          flex-direction: column;
          justify-content: space-between;



          p {
            margin: 0;


            &:first-of-type {
              font-weight: bold;
              margin-bottom: 15px;
            }
          }
        }
      }
    }

  }


  a {
    text-decoration: none;
  }

  p {
    font-size: 23px;
  }

  h2 {
    margin: 0;
    font-size: 60px;
    text-transform: uppercase;
    text-align: left;
  }

  span {
    color: #6B38DB
  }

  #toplevel-container {
    max-width: 1900px;
    margin: 0 auto;
  }

  .hero-container {
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

  .hero-text h2 {
    margin: 0;

    text-transform: uppercase;
    text-align: left;
  }

  .hero-text p {


    text-align: left;

  }

  .hero-text a {
    font-size: 23px;
  }

  .hero-img img {
    width: 90%;
  }

  .hero-buttons {
    display: flex;
    gap: 15px;
  }

  .hero-buttons svg {
    width: 34px;
    margin-right: 10px;
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



  .your-stoty-headline h2 {
    text-align: center;
    padding-top: 80px;
    background-color: #F8F8F8;

  }

  .your-story-container {
    margin-top: 110px;
  }



  .your-story-top {

    padding-top: 80px;
    padding-bottom: 60px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    text-align: left;
    background-color: #F8F8F8;

  }

  .your-story-top-text {

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    width: 44%;

  }

    .your-story-top-img {
    width: 44%;
    

  }

  .your-story-top-img img {
    width: 100%;

  }

  .membership-container {
    display: flex;
  }

  .checkmark {
    display: flex;
    text-align: left;
  }


  .checkmark img {

    width: 5%;

  }
</style>