// Initialize Firebase
import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAhAsxrc0TI3dNYScDZuNADWJYyNS5WekA",
  authDomain: "nicepods.firebaseapp.com",
  databaseURL: "https://nicepods.firebaseio.com",
  projectId: "nicepods",
  storageBucket: "nicepods.appspot.com",
  messagingSenderId: "988329437978",
  appId: "1:988329437978:web:119e06aa16c1f455869aa3",
  measurementId: "G-802XC8419L",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
}

const db = firebase.firestore();
const auth = firebase.auth();

export {
  db,
  auth
};


