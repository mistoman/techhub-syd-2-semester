<template>

  <div class="card admin-form">
    <!-- using @submit as a click function - add prevent to stop from refreshing page -->
    <h2>Edit Event</h2>
    <form @submit.prevent="update">    
      <div class="form-group">
        <label>Title</label>
        <input 
          type="text" 
          v-model="form.title" 
          class="form-control" 
          required 
        />
      </div>

      <div class="form-group">
        <label>IMG Link for picture</label>
        <input id="imagename"
          type="text"
          class="form-control"
          v-model="form.imgagefordb"
          required
        />
      </div>

      <div class="form-group">
        <label>Description</label>
        <input 
          type="text"
          class="form-control"
          v-model="form.description"
          required
        />
      </div>

      <div class="form-group">
        <label>Date</label>
        <input 
          type="text"
          class="form-control"
          v-model="form.date"
          required
        />
      </div>

      <div class="form-group">
        <label>Location of Event</label>
        <input 
          type="text"
          class="form-control"
          v-model="form.location"
          required
        />
      </div>
      

      <div class="form-group">
        <label for="image">Image</label>

        <input id="image" ref="file"

        v-on:change="handleFileUpload()"  
        type="file">
        <p class="info-text-upload">You can upload images to the firebase storage bucket, but it will not load Dynamically  you need to put the link in the &nbsp;<span>"IMG Link for picture"</span>&nbsp;input field to work </p>
      </div>



      
      <br>
      <button type="submit" class="button btn-success">
        Edit Event
      </button>
    </form>
  </div>


  <!-- <div class="card card-body mt-4">
    <h3>Edit users</h3>
    <form @submit.prevent="update">

      <div class="form-group">
        <label>Name</label>
        <input v-model="form.name" class="form-control" required />
      </div>

      <div class="form-group mt-3">
        <label>Task</label>
        <input
          v-model="form.task"
          class="form-control"
          type="text"
          required
        />
      </div>

      <button type="submit" class="btn btn-primary  mt-3">
        Update
      </button>
    </form>
  </div> -->
</template>

<script>
import { reactive, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getEvent, updateEvent } from '@/firebase.js'

export default {
  setup() {

    const router = useRouter()
    // grab the user ID from the URL by calling the useRoute hook + using the computed 
    // to store the route.param.id
    const route = useRoute()
    // Sometimes we need state that depends on other state - in Vue this is 
    // handled with component computed properties.
    const projectId = computed(() => route.params.id)

    const form = reactive({
      title: '', 
      imgagefordb: '', 
      description: '', 
      date: '',
      location: ''
    })
    // show information about the current(click) project in the edit form
    // add an onMounted life-hook that will get the user, based on router id 
    // pull the project from firebase and then assign the values to the fields
    onMounted(async () => {
      const project = await getEvent(projectId.value)
      form.title = project.title
      form.imgagefordb = project.imgagefordb
      form.description = project.description
      form.date = project.date
      form.location = project.location
    })

    const update = async () => {
      // once user clicks submit, redirect them to home page or '/'
      await updateEvent(projectId.value, {...form})
      router.push('/admin')
      // after create - empty input field
      form.title = '',
      form.imgagefordb = '',
      form.description = '',
      form.date = '',
      form.location = ''
    }

    return { form, update }
  }
}
</script>

<style lang="scss" scoped>

</style>