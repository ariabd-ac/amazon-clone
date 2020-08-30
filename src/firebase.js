import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCrt9aOKqFjF30mkgIKmR9Rf80UzMHhBa4",
  authDomain: "clone-768f1.firebaseapp.com",
  databaseURL: "https://clone-768f1.firebaseio.com",
  projectId: "clone-768f1",
  storageBucket: "clone-768f1.appspot.com",
  messagingSenderId: "297204800632",
  appId: "1:297204800632:web:419dbfe4bdbe0e14d2618d",
  measurementId: "G-48QY8Y2668",
});

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
