import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAOSmEjjjPlxqutboZA_jU2kQc2wAl6rI4",
  authDomain: "crown-db-1c969.firebaseapp.com",
  databaseURL: "https://crown-db-1c969.firebaseio.com",
  projectId: "crown-db-1c969",
  storageBucket: "crown-db-1c969.appspot.com",
  messagingSenderId: "187960770900",
  appId: "1:187960770900:web:c027184b9f0fd782fc88c1",
  measurementId: "G-S2HHL61XMB",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const singInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
