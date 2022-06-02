<template>
  <div class="events-container">
        <div class="event-item" v-for="{ id, name, jobtitle, company, quote, website } in events" :key="id">

          <div class="event-item-info">
            <img src="Path616.png" alt="">
            <p class="p-padding"><span class="p-text-bold"> {{ name }} </span></p>
            <p>{{ jobtitle }}</p>
            <p >{{ company }}</p>
            <p class="p-padding">{{ website }}</p>
            <p class="p-padding">{{ quote }}</p>
            
            
          </div>

        </div>


  </div>
</template>

<script>
// useload hook + delete import 
import { useLoadProjects } from '@/firebase.js'

  export default {
    name:'ProjectListUsers',
    setup() {
      const events = useLoadProjects()

      return { events }
    } 
  }
</script>

<style lang="scss" scoped>

.events-container {
  display: flex;
  justify-content: space-evenly;
  
}

.p-padding {
    padding-bottom: 20px;
    
}

.event-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background: white;
  box-shadow: 0 0 40px lightgray;
  width: calc(50% - 80px);
  position: relative;

  p {
      margin: 0;
  }
  
  
  img {
    width: 10%;
    position: absolute;
    top: 35px;
    right: 35px;
  }

  .event-item-info {
    text-align: left;
    padding: 15px;

  }


}

</style>