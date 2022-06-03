<template>
  <div class="card card-body mt-4 admin-form">
    <!-- using @submit as a click function - add prevent to stop from refreshing page -->
    <h2>Create New Testimonial</h2>
    <form @submit.prevent="onSubmit">    
      <div class="form-group">
        <label>name</label>
        <input 
          type="text" 
          v-model="form.name" 
          class="form-control" 
          required 
        />
      </div>

      <div class="form-group mt-3">
        <label>jobtitle</label>
        <input
          type="text"
          class="form-control"
          v-model="form.jobtitle"
          required
        />
      </div>

      <div class="form-group mt-3">
        <label>company</label>
        <input 
          type="text"
          class="form-control"
          v-model="form.company"
          required
        />
      </div>

      <div class="form-group mt-3">
        <label>quote</label>
        <input 
          type="text"
          class="form-control"
          v-model="form.quote"
          required
        />
      </div>

      <div class="form-group mt-3">
        <label>website</label>
        <input 
          type="text"
          class="form-control"
          v-model="form.website"
          required
        />
      </div>


      

      <button type="submit" class="button btn-success mt-3">
        Add Testimonial
      </button>
    </form>
  </div>
</template>

<script>
import {  reactive } from 'vue'
import { createProject } from '@/firebase.js' // maybe this make error


import {} from '@/firebase.js' // all from firebase.js file



  export default {
   setup() {
     const form = reactive({
       name: '', 
       jobtitle: '', 
       company: '', 
       quote: '',
       website: ''
     })

     const onSubmit = async () => {

       // spread operator to add field + invoking our createProject function from firebase.js
       await createProject({ ...form }) 
       // after create - empty input field
       form.name = ''
       form.jobtitle = ''
       form.company = ''
       form.quote = ''
       form.website = ''

      
     }

     return { form, onSubmit }
   },

  }
</script>

<style lang="scss" scoped>

</style>