import firebase from "firebase/app";
import "firebase/database";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAweYhoZXRbNSzA7H8fFYQfikbjYG5hlU8",
  authDomain: "dacade-challenge.firebaseapp.com",
  databaseURL:
    "https://dacade-challenge-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "dacade-challenge",
  storageBucket: "dacade-challenge.appspot.com",
  messagingSenderId: "310610460015",
  appId: "1:310610460015:web:774096df02c8660f28fc9a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
