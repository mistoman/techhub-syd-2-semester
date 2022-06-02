<template>
  <div class="card">
    <!-- using @submit as a click function - add prevent to stop from refreshing page -->
    <form @submit.prevent="onSubmit">    
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
      <p class="info-text-upload">You can upload images to the firebase storage bucket, but it will not load Dynamically  you need to put the link in the &nbsp;<span>"IMG Link for picture"</span>&nbsp;input field to work </p>

      <div class="form-group">
        <input id="image" ref="file"
        v-on:change="handleFileUpload()"  
        type="file">
      </div>

      
      <br>
      <button type="submit" class="btn btn-success">
        Add Event
      </button>
    </form>
  </div>
</template>

<script>
import {  reactive } from 'vue'
import { createEvent } from '@/firebase.js' // maybe this make error


import {} from '@/firebase.js' // all from firebase.js file
import {storageRefefrence} from '@/firebase.js' // all from firebase.js file



  export default {
   setup() {
     const form = reactive({
       title: '', 
       imgagefordb: '', 
       description: '', 
       date: '',
       location: ''
     })

     const onSubmit = async () => {

       // spread operator to add field + invoking our createProject function from firebase.js
       await createEvent({ ...form }) 
       // after create - empty input field
       form.title = ''
       form.imgagefordb = ''
       form.description = ''
       form.date = ''
       form.location = ''
       //this.handleFormFileUpload(document.querySelector('#image').files[0])
       console.log(document.querySelector('#image').files[0])
            if (document.querySelector('#image').files.length > 0) {
              var mountainImagesRef = storageRefefrence.child('projects/' +  document.querySelector('#image').files[0].name);
              mountainImagesRef.put(document.querySelector('#image').files[0]).then((snapshot) => {console.log(snapshot);});

            }
             


      



     }

     return { form, onSubmit }
   },



    methods: {
            handleFormFileUpload(image) {
      console.log(image);

      var mountainImagesRef = storageRefefrence.child('projects/' + image.name);

      mountainImagesRef.put(image).then((snapshot) => {
      console.log(snapshot);
    

  });


      },
      handleFileUpload() {

        document.querySelector('#imagename').value = 'projects/' + window.event.target.files[0].name;

        var event; // The custom event that will be created

        event = document.createEvent("HTMLEvents");
        event.initEvent("input", true, true);
        event.eventName = "input";
        document.querySelector('#imagename').dispatchEvent(event);
        console.log('uploaded')
        


     // console.log(window.event.target.files[0]);
      //var mountainImagesRef = storageRefefrence.child('projects/' + window.event.target.files[0].name);
     // mountainImagesRef.put(window.event.target.files[0]).then((snapshot) => {
     // console.log(snapshot);
    

  //});


      }
  }
  }
</script>

<style lang="scss">

.card {
  display: flex;
  justify-content: center;
  align-content: center;

  .info-text-upload {
      text-align: center;
      display: flex;
      justify-content: center;
      align-content: center;
      font-size: 20px;
      width: 100%;

      span {
      text-decoration: underline;
      color: red;
    }
  }

  .form-group {
    display: flex;
    flex-direction: column;
    align-items: center;

    label {
      font-size: 23px;
    }



    input {
      margin-bottom: 20px;
    }



    
  }

  .btn {
    margin-top: 20px;
    margin-bottom: 50px;
  }
}

</style>