import Firebase from 'firebase';

let config = {
    apiKey: "AIzaSyDzGGgqeZUQJDv6j_lPoEB3TFmclu59nrE",
    authDomain: "chalo-70033.firebaseapp.com",
    databaseURL: "https://chalo-70033.firebaseio.com",
    projectId: "chalo-70033",
    storageBucket: "",
    messagingSenderId: "244819691454",
    appId: "1:244819691454:web:9395ecb07422ba89851bef",
    measurementId: "G-JQN9S17Z5Z"
  };

  let app = Firebase.initializeApp(config);
  //Firebase.analytics();
  export const db = app.database();