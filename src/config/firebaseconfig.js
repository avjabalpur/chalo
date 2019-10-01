import Firebase from 'firebase';

let config = {
    apiKey: "AIzaSyB1rFYVBrgvh5-hRqv_xpgekkqbtrH2tBY",
    authDomain: "chalo-f4f9d.firebaseapp.com",
    databaseURL: "https://chalo-f4f9d.firebaseio.com",
    projectId: "chalo-f4f9d",
    storageBucket: "",
    messagingSenderId: "919247220416",
    appId: "1:919247220416:web:1252b8cbf646c1efcb4725",
    measurementId: "G-2FT4G4Y5KL"

  };

  let app = Firebase.initializeApp(config);
  //Firebase.analytics();
  export const db = app.database();