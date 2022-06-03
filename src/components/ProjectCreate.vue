<template>
  <div class="card admin-form">
    <!-- using @submit as a click function - add prevent to stop from refreshing page -->
    <h2>Create New Event</h2>
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
      

      <div class="form-group">
        <label for="image">Image</label>

        <input id="image" ref="file"

        v-on:change="handleFileUpload()"  
        type="file">
        <p class="info-text-upload">You can upload images to the firebase storage bucket, but it will not load Dynamically  you need to put the link in the &nbsp;<span>"IMG Link for picture"</span>&nbsp;input field to work </p>
      </div>



      
      <br>
      <button type="submit" class="button btn-success">
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

.card.admin-form {

  box-shadow: 0 0 10px gainsboro;
  margin: 0 auto;
  padding: 50px;
  max-width: 300px;
  margin-top: 25px;


    .button {
      width: 100%;
    }



  .form-group {



    input {
      border: 1px solid gainsboro;

      padding: 10px;
      width: 100%;
      appearance: none;
      box-sizing: border-box;
    }

    p {
      font-size: 12px;
      text-align: left;
      margin-top: 0;
    }
    label {
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
    text-align: left;
    width: 100%;
    
    }

  }



}

.sub-header {
  text-align: center;
  font-size: 24px;
  margin-bottom: 15px;
}

.card {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;

  text-align: center;
  margin-top: 50px;

  h2 {
    text-align: center;
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 25px;
  }

  .info-text-upload {
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
      margin-bottom: 15px;
    }

  }

}

</style>