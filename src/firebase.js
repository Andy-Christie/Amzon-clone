// import firebase from "firebase";
// import 'firebase/auth';
// import 'firebase/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/database";
import "firebase/compat/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBrXEZMONcphW13fnjg-evFtPCtXrxYPXw",
    authDomain: "challenge-7813f.firebaseapp.com",
    projectId: "challenge-7813f",
    storageBucket: "challenge-7813f.appspot.com",
    messagingSenderId: "918679479817",
    appId: "1:918679479817:web:1e94968cbc3f07dd29fad8",
    measurementId: "G-PRL0CWFNXC"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
// const auth = getAuth(firebaseApp);

export { db, auth };