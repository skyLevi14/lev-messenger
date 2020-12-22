import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDtimDd1uIijsE_CCoVXWj96RiisFILZlc",
    authDomain: "fb-messenger-8a1f5.firebaseapp.com",
    projectId: "fb-messenger-8a1f5",
    storageBucket: "fb-messenger-8a1f5.appspot.com",
    messagingSenderId: "681358612140",
    appId: "1:681358612140:web:eb490d0bdbef25d3b7b109",
    measurementId: "G-77PPXZWRBV"
  });

  const db = firebaseApp.firestore();

  export default db;