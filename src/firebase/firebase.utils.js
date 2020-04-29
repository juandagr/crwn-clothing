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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
