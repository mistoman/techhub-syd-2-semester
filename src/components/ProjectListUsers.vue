<template>
  <div class="">
    <table class="">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Task</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="{ id, title, imgagefordb, description, date, location } in events" :key="id">
          <td>{{ title }}</td>
          <td>{{ imgagefordb }}</td>
          <td>{{ description }}</td>
          <td>{{ date }}</td>
          <td>{{ location }}</td>

        </tr>
      </tbody>
    </table>
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

</style>