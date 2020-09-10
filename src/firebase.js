import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBJ582eO5D7GCIWXaUXDxtae85xcB9P5hM",
  authDomain: "challenge-d9e7c.firebaseapp.com",
  databaseURL: "https://challenge-d9e7c.firebaseio.com",
  projectId: "challenge-d9e7c",
  storageBucket: "challenge-d9e7c.appspot.com",
  messagingSenderId: "944490049506",
  appId: "1:944490049506:web:b6d6e724ea79aa422d93bb",
  measurementId: "G-GSDLZKE52W",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
