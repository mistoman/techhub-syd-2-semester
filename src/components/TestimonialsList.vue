<template>
  <div class="admin-list">
    <table class="">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Job Title</th>
          <th scope="col">Company</th>
          <th scope="col">Quote</th>
          <th scope="col">Website</th>
        </tr>
      </thead>
      <tbody>
        
        <tr v-for="{ id, name, jobtitle, company, quote, website } in testimonials" :key="id">
          <td>{{ name }}</td>
          <td> {{ jobtitle }} </td>
          <td>{{ company }}</td>
          <td>{{ quote }}</td>
          <td>{{ website }}</td>
          
          
          <td>
            <!-- manually type action buttons -->
            <!-- :to will redirect the user to the edit URL with the id set to the project we are iterating -->
            <router-link :to="`/edittestimonials/${id}`">
              <button class="btn btn-primary btn-sm me-2">
                Edit
              </button>
            </router-link>
            <!-- use deleteProject and pass the id -->
            <button class="btn btn-danger btn-sm" @click="deleteProject(id)">
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
import { useLoadProjects, deleteProject } from '@/firebase.js'


  export default {
      name:'TestimonialsList',
    setup() {
      const testimonials = useLoadProjects()

      return { testimonials, deleteProject }
    },
    methods: {
      

    }


  }
</script>

<style lang="scss">

    .admin-list {

        margin-top: 50px;
        
        table {
            border-collapse: collapse;

            tr {
                
                &:nth-child(even) {
                    background: #dcdcdc66;
                }

                td {
                    padding: 10px;


                }
            }

        }
    }

</style>