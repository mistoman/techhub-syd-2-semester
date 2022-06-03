<template>
  <div class="admin-list">
    <table class="">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Image Path</th>
          <th scope="col">Description</th>
          <th scope="col">Date</th>
          <th scope="col">Location</th>
        </tr>
      </thead>
      <tbody>
        
        <tr v-for="{ id, title, imagePath, description, date, location } in events" :key="id">
          <td>{{ title }}</td>
          <td> <img v-bind:src="imagePath" alt="" /></td>
          <td>{{ description }}</td>
          <td>{{ date }}</td>
          <td>{{ location }}</td>
          
          
          <td>
            <!-- manually type action buttons -->
            <!-- :to will redirect the user to the edit URL with the id set to the project we are iterating -->
            <router-link :to="`/edit/${id}`">
              <button class="btn btn-primary btn-sm me-2">
                Edit
              </button>
            </router-link>
            <!-- use deleteProject and pass the id -->
            <button class="btn btn-danger btn-sm" @click="deleteEvent(id)">
              Delete
            </button>
             <!--  -->
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// useload hook + delete import 
import { useLoadEvents, deleteEvent } from '@/firebase.js'


  export default {
    setup() {
      const events = useLoadEvents()

      return { events, deleteEvent }
    },
    methods: {
      

    }


  }
</script>

<style lang="scss" scoped>

</style>