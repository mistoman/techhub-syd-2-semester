import { db } from './db'

/* export default {
  data() {
    return {
      documents: [],
    }
  },

  firebase: {
    documents: db.ref('documents'),
  },
} */

let testvalue = 

db.ref('users').once('value', snapshot => {
  testvalue = snapshot.val()
  // do something with documents

  console.log("database");
  
});



export const dbvalue = testvalue;