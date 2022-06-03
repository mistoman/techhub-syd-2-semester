<template>
    <footer class="footer">
        <div class="footer-info-grid">

            <router-link to="/"><img class="nav-logo inverted" src="fulllogopurple.ths.svg" alt=""></router-link>
            <div class="footer-info-grid-sec">
                <p class="underline-text">Company</p>
                <p>About Us</p>
                <p>Terms</p>
                <p>Privacy</p>
            </div>
            <div class="footer-info-grid-sec">
                <p class="underline-text">Sitemap</p>
                <router-link to="/"><p>Home</p></router-link>
                <router-link to="/UpcomingeventsView"> <p>Events</p> </router-link>
                <router-link :to="{ path: '/', hash: '#about-us-nav'}"><p>About us</p></router-link>
                <router-link to="/ContactView"><p>Startups</p></router-link>
                <router-link to="/ContactView"><p>Contact</p></router-link>
                <router-link to=""><p>TECHHUB INVEST</p></router-link>
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

    @media screen and (max-width: 640px) {

        .footer-info-grid {
            &>a {
                display: none;
            }

        }

        .footer-info-grid {
            flex-direction: column;
            gap: 25px;

            .footer-info-grid-sec {
                display: flex;
                flex-direction: column;
                gap: 10px;

                p {
                 font-size: 12px;
                }

                &.space-between {
                   justify-content: space-between;
                }

                .underline-text {
                margin-bottom: 0;
                }


        }
        }


        .footer-info-grid-sec {
            display: flex;
            flex-direction: column;
            gap: 5px;

            p {
                font-size: 12px;
            }

            &.space-between {
                justify-content: space-between;
            }

            .underline-text {
                margin-bottom: 0;
            }


        }


    }
</style>