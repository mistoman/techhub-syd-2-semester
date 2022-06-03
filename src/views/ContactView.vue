<template>
    <div>
        <div class="contact-us-container">

            <div class="contact-info">

                <p>contact us</p>
                <h2>get <span class="main-text-color-purble">in touch</span> <br> with <span
                        class="main-text-color-purble">us</span></h2>


                <div class="contact-info-line">
                    <img src="Group 70.png" alt="">
                    <p class="contact-info-h-text">Address</p>
                    <p class="contact-info-p-text">Esbjerg, 6700, Denmark</p>

                </div>

                <div class="contact-info-line">

                    <img src="Group 72.png" alt="">
                    <p class="contact-info-h-text">Phone</p>
                    <p class="contact-info-p-text">+45 23 2732 81</p>

                </div>

                <div class="contact-info-line">

                    <img src="Group 74.png" alt="">
                    <p class="contact-info-h-text">Mail</p>
                    <p class="contact-info-p-text">info@techhubsyd.dk</p>

                </div>

            </div>

            <div class="massage-section">

                <div class="mailchimp-signup-live">

                    <div id="mc_embed_signup">
                        <form
                            action="https://easv365.us18.list-manage.com/subscribe/post?u=787760298993bd85ff4f9f50d&amp;id=550ddb1f5f"
                            method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form"
                            class="validate" target="_blank" novalidate>
                            <div id="mc_embed_signup_scroll">
                                <p class="mailchimp-info-header h-text-font">send us a <span
                                        class="main-text-color-purble"> message </span></p>
                                <p class="mailchimp-info-text">We will do our best to answer you in 2 business days. In
                                    the meantime <br> feel free to join our slack channel and facebook group</p>
                                <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
                                <div class="mc-field-group">
                                    <label for="mce-EMAIL">
                                    </label>
                                    <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL"
                                        placeholder="Email*">
                                </div>
                                <div class="mc-field-group">
                                    <label for="mce-FNAME"> </label>
                                    <input type="text" value="" name="FNAME" class="" id="mce-FNAME"
                                        placeholder="FIRST NAME">

                                </div>

                                <div id="mce-responses" class="clear foot">
                                    <div class="response" id="mce-error-response" style="display:none"></div>
                                    <div class="response" id="mce-success-response" style="display:none"></div>
                                </div>

                                <div class="tell-us-about-box">
                                    <textarea id="tell-us-about-box-in" type="text">HOW CAN WE HELP YOU?</textarea>
                                </div>
                                <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                                <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text"
                                        name="b_787760298993bd85ff4f9f50d_550ddb1f5f" tabindex="-1" value=""></div>
                                <div class="optionalParent">
                                    <div class="clear foot">
                                        <input type="submit" value="Send Message" name="subscribe"
                                            id="mc-embedded-subscribe" class="button">
                                        <p class="brandingLogo"><a href="http://eepurl.com/h2-zIn"
                                                title="Mailchimp - email marketing made easy and fun"><img
                                                    src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg"></a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>


                </div>



            </div>

            

        </div>



    </div>
</template>

<script>
    export default {


    }
</script>

<style lang="scss">
    .contact-us-container {
        padding-top: 100px;
        display: flex;
        justify-content: space-between;
        max-width: 1900px;

        
        margin: 0 auto;
        position: relative;

        .massage-section {
            padding-bottom: 100px;
        }


        .contact-info {
            display: flex;
            flex-direction: column;
            align-items: flex-start;

            
            h2 {
                padding-bottom: 20px ;
            }

            .contact-info-line {
                display: flex;
                justify-content: space-between;
                align-items: center;

                gap: 20px;


                .contact-info-h-text {
                    font-size: 19;
                    font-weight: bold;
                }

                .contact-info-p-text {
                    font-size: 17px;

                }

                img {
                    width: 41px;

                }
            }



        }

    }

    @media screen and (max-width: 640px) {
        
        .contact-us-container {
            flex-direction: column;
            padding: 10px;
            padding-top: 0;
            box-sizing: border-box;
        }

        .mailchimp-signup-live .tell-us-about-box textarea#tell-us-about-box-in {

            width: 100%;
            box-sizing: border-box;

        }

        div.mailchimp-signup-live {
            margin-top: 20px;
            width: initial;
        }
    }


</style>