<template>
  <div class="events-container">
      
        <div class="event-item">
          <img v-bind:src="selectedEvent.image" alt="" />
          <div class="event-item-info">
            <p class="event-title h-text-font">{{ selectedEvent.title }}</p>
            <p class="event-desc">{{ selectedEvent.desc }}</p>
            <div class="event-item-lower-section">


                
                <p class="event-date">{{ selectedEvent.date }}</p>
                
                <p class="event-location">{{ selectedEvent.location }}</p>

            </div>

            
            

            <a class="main-text-color-purble" href="">Become a member</a>
            
          </div>

        </div>


  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'
import { getEvent } from '@/firebase.js'

export default {
  setup() {

    
    // grab the user ID from the URL by calling the useRoute hook + using the computed 
    // to store the route.param.id
    const route = useRoute()
    // Sometimes we need state that depends on other state - in Vue this is 
    // handled with component computed properties.
    const projectId = computed(() => route.params.id)
    const selectedEvent = reactive({
        date: '',
        location: '',
        image: '',
        title: '',
        desc: ''
        
    });


    // show information about the current(click) project in the edit form
    // add an onMounted life-hook that will get the user, based on router id 
    // pull the project from firebase and then assign the values to the fields
    onMounted(async () => {
        console.log(projectId.value)
      const project = await getEvent(projectId.value)

      
      console.log(project)
        selectedEvent.date = project.date;
        selectedEvent.location = project.location;
        selectedEvent.image = project.imgagefordb;
        selectedEvent.title = project.title;
        selectedEvent.desc = project.description;
        
    })



    return { selectedEvent }
  }
}
</script>

<style lang="scss" scoped>

    .events-container {
        padding: 50px 50px;
        max-width: 1900px;
        display: flex;
        justify-content: center;
        margin: 0 auto;

        .event-item {
            display: flex;

            a {
                justify-content: flex-start;
                display: flex;
                
                padding: 50px 20px;
            }

            img {
                width: 100%;
            }

            .event-title {
                color: #6B38DB;
                font-size: 34px;
            }

            .event-desc {
                
                width: 80%;

            }

            .event-item-lower-section {
                display: flex;
                justify-content: flex-start;
                

                p {
                    padding: 0;
                    font-size: 14px;
                }
                


                .event-date {
                    font-size: 14px;
                    padding-left:20px;
                    

                }

                .event-location {
                    font-size: 14px;
                    padding-left:20px;
                }

            }





            p {
                text-align: left;
                padding: 25px;
            }
        }
    }

    @media screen and (max-width: 640px) {

        .events-container {
            padding: 20px;

            .event-item {
            display: flex;
            align-items: center;
            flex-direction: column;
            width: 100%;

                .event-desc {
                    box-sizing: border-box;
                    width: 100%;   
                }

                p {
                    margin: 0;
                }
            }

        } 
            
    }

    

</style>