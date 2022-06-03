<template>

  <div class="card admin-form">
    <!-- using @submit as a click function - add prevent to stop from refreshing page -->
    <h2>Edit Testimonial</h2>
    <form @submit.prevent="update">    
      <div class="form-group">
        <label>Name</label>
        <input 
          type="text" 
          v-model="form.name" 
          class="form-control" 
          required 
        />
      </div>

      <div class="form-group">
        <label>Job Title</label>
        <input id="imagename"
          type="text"
          class="form-control"
          v-model="form.jobtitle"
          required
        />
      </div>

      <div class="form-group">
        <label>Company</label>
        <input 
          type="text"
          class="form-control"
          v-model="form.company"
          required
        />
      </div>

      <div class="form-group">
        <label>Quote</label>
        <input 
          type="text"
          class="form-control"
          v-model="form.quote"
          required
        />
      </div>

      <div class="form-group">
        <label>Website</label>
        <input 
          type="text"
          class="form-control"
          v-model="form.website"
          required
        />
      </div>
      
      
      <br>
      <button type="submit" class="button btn-success">
        Edit Testimonial
      </button>
    </form>
  </div>

</template>

<script>
import { reactive, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getProject, updateProject } from '@/firebase.js'

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
      name: '', 
      jobtitle: '', 
      company: '', 
      quote: '',
      website: ''
    })
    // show information about the current(click) project in the edit form
    // add an onMounted life-hook that will get the user, based on router id 
    // pull the project from firebase and then assign the values to the fields
    onMounted(async () => {
      const project = await getProject(projectId.value)
      form.name = project.name
      form.jobtitle = project.jobtitle
      form.company = project.company
      form.quote = project.quote
      form.website = project.website
    })

    const update = async () => {
      // once user clicks submit, redirect them to home page or '/'
      await updateProject(projectId.value, {...form})
      router.push('/admin')
      // after create - empty input field
      form.name = '',
      form.jobtitle = '',
      form.company = '',
      form.quote = '',
      form.website = ''
    }

    return { form, update }
  }
}
</script>

<style lang="scss" scoped>

</style>