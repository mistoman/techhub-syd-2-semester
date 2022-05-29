<template>
  <div class="events-container">
        <div class="event-item" v-for="{ id, title, imgagefordb, description, date, location } in events" :key="id">
          <img v-bind:src="imgagefordb" alt="" />
          <div class="event-item-info">
            <p>{{ date }}</p>
            <p>{{ location }}</p>
            <p>{{ title }}</p>
            <p>{{ description }}</p>
            <a class="main-text-color-purble" href="">Read More</a>
          </div>

          
          

        </div>


  </div>
</template>

<script>
// useload hook + delete import 
import { useLoadEvents } from '@/firebase.js'

  export default {
    name:'ProjectListUsers',
    setup() {
      const events = useLoadEvents()

      return { events }
    } 
  }
</script>

<style lang="scss" scoped>

.events-container {
  display: flex;
  justify-content: space-between;
}

.event-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background: white;
  box-shadow: 0 0 40px lightgray;
  width: calc(50% - 40px);
  
  
  img {
    width: 100%;
  }

  .event-item-info {
    text-align: left;
    padding: 15px;

  }
}

</style>