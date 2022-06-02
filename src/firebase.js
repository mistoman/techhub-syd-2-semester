import firebase from 'firebase'
import { ref, onUnmounted } from 'vue' // 1: Will be used in our CRUD functions


const config = {
  apiKey: "AIzaSyBqDbLa5D4wWhy29M9-bIr9fhMeyqoYAHA",
  authDomain: "techhub-syd-6dff8.firebaseapp.com",
  databaseURL: "https://techhub-syd-6dff8-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "techhub-syd-6dff8",
  storageBucket: "gs://techhub-syd-6dff8.appspot.com",
  messagingSenderId: "64600200329",
  appId: "1:64600200329:web:a3d2cdd6ff678832432258"
}

const firebaseApp = firebase.initializeApp(config)

const storage = firebase.storage();

const storageRef = storage.ref();

//const imagesRef = storageRef.child('projects');

const testRef = storageRef.child('projects/test.png');

console.log(storageRef.bucket + '/' + testRef.fullPath);

storage.refFromURL('gs://' + storageRef.bucket + '/' + testRef.fullPath).getDownloadURL().then(url => {console.log(url)});


// Create a reference under which you want to list
var listRef = storageRef.child('projects');

/* function uploadimg(img) {
  ref.put(img).then((snapshot) => {
    console.log(snapshot);
    

  });
  
} */




// Find all the prefixes and items.
listRef.listAll()
  .then((res) => {
    res.prefixes.forEach((folderRef) => {
      // All the prefixes under listRef.
      // You may call listAll() recursively on them.
      console.log(folderRef);
    });
    res.items.forEach((itemRef) => {
      // All the items under listRef.
      console.log(itemRef);
    });
  }).catch((error) => {
    // Uh-oh, an error occurred!
    console.log(error);
  });






const db = firebaseApp.firestore()   // 1:  saving into a const variable
const projectCollection = db.collection('projects') // 1:  grab the collection from firestore
const eventCollection = db.collection('event')
// 2 : Make our CRUD functions and exporting them for use in other components

// create project by using the add prototype from firebase
// Add a project to the project collection
export const createProject = project => {
  return projectCollection.add(project)
}

export const createEvent = event => {
  return eventCollection.add(event)
}

// accept project id and return the documentation if it exist in the project collection
export const getProject = async id => {
  const project = await projectCollection.doc(id).get()
  // ternary : condition ? ifTrue : ifFalse
  return project.exists ? project.data() : null  // firebase exist method (like include/contains) 
  // Link: https://firebase.google.com/docs/reference/js/firebase.database.DataSnapshot#exists
}

export const getEvent = async id => {
  const project = await eventCollection.doc(id).get()
  // ternary : condition ? ifTrue : ifFalse
  return project.exists ? project.data() : null  // firebase exist method (like include/contains) 
  // Link: https://firebase.google.com/docs/reference/js/firebase.database.DataSnapshot#exists
}

// accepts project + id (through the v-for) and updates the correct project based in id
export const updateProject = (id, project) => {
  return projectCollection.doc(id).update(project)
}

export const updateevent = (id, event) => {
  return eventCollection.doc(id).update(event)
}

// accepts id => deletes
export const deleteProject = id => {
  return projectCollection.doc(id).delete()
}

// accepts id => deletes
export const deleteEvent = id => {
  return eventCollection.doc(id).delete()
}

// composition hook, that will return a ref to an array of projects from the database
// to do this we add a listener(onSnapshot) on projectCollections so 
// it updates whenever a change is detected

export const useLoadProjects = () => {

  const projects = ref([])
  const close = projectCollection.onSnapshot(snapshot => {

    //console.log(snapshot.data());

    projects.value = snapshot.docs.map(doc => (
      getImageUrl(doc.data().imgagefordb),
      {
      id: doc.id,

      imagePath: singleImageRefrence,

      ...doc.data(),

    }))

    console.log(projects.value)
  })
  // Creating this listener, will return us a clean-up function(onUnmounted, 
  // which we will call on the onUnmounted lifecycle(test with onUpdate)
  onUnmounted(close)
  return projects
}



export const useLoadProjectss = () => {
  const projects = ref([])
  const close = projectCollection.onSnapshot(snapshot => {
    projects.value = snapshot.docs.map(doc => ({
      id: doc.id, 
      ...doc.data()
    }))
  })
  // Creating this listener, will return us a clean-up function(onUnmounted, 
  // which we will call on the onUnmounted lifecycle(test with onUpdate)
  onUnmounted(close)
  return projects
}

let singleImageRefrence;

function getImageUrl(path) {

  return storage.refFromURL('gs://' + storageRef.bucket + '/' + path).getDownloadURL().then((url) => {
    singleImageRefrence = url;

    console.log(url)
    console.log(typeof url);
    return url;

      })
      
      

}

(async () => {  
  const result = await getImageUrl('projects/test.png')
  console.log(Object.entries(result))  
})()


export const useLoadEvents = () => {

  const events = ref([])
  const close = eventCollection.onSnapshot(snapshot => {

    //console.log(snapshot.data());

    events.value = snapshot.docs.map(doc => (
      getImageUrl(doc.data().imgagefordb),
      {
      id: doc.id,

      imagePath: singleImageRefrence,

      ...doc.data(),

    }))

    console.log(events.value)
  })
  // Creating this listener, will return us a clean-up function(onUnmounted, 
  // which we will call on the onUnmounted lifecycle(test with onUpdate)
  onUnmounted(close)
  return events
}

export const useLoadNewEvents = () => {
  console.log('NewEvents')

  // Create a reference under which you want to list
var listRef = storageRef.child('projects');

// Find all the prefixes and items.
listRef.listAll()
  .then((res) => {
    res.prefixes.forEach((folderRef) => {
      // All the prefixes under listRef.
      // You may call listAll() recursively on them.
      console.log(folderRef)
    });
    res.items.forEach((itemRef) => {
      // All the items under listRef.
      console.log(itemRef)
    });
  }).catch((error) => {
    // Uh-oh, an error occurred!
    console.log(error)
  });

  onUnmounted(close)
  return listRef.listAll()
  
}

export const storageRefefrence = storageRef;