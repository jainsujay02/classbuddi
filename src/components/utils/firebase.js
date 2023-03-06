// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  getAdditionalUserInfo,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkmXKsDwp8JdwkhpIYD5E2Cx2FvPJM0OY",
  authDomain: "classbuddi.firebaseapp.com",
  projectId: "classbuddi",
  storageBucket: "classbuddi.appspot.com",
  messagingSenderId: "798341561371",
  appId: "1:798341561371:web:4d22880a6654d214290cbe",
  measurementId: "G-LNSL3DCK6W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Google Auth Implementation
const provider = new GoogleAuthProvider();

export const auth = getAuth();
export default app;

export let newUser = null;
export let userDetails = null;

export const signInWithGoogle = () =>
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      // The signed-in user info.
      userDetails = result.user;
      
      // IdP data available using getAdditionalUserInfo(result)
      newUser = getAdditionalUserInfo(result).isNewUser;
      
      console.log(newUser);
      console.log(userDetails);
    })
    .catch((error) => {
      // Handle Errors here.
      // const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      // The email of the user's account used.
      // const email = error.customData.email;
      // The AuthCredential type that was used.
      // const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });

// Handle user sign in state

export const userSignInStatus = () =>
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      return true;
      // ...
    } else {
      // User is signed out
      // ...
      return false;
    }
  });

export const signOutOfApp = () =>
  signOut(auth)
    .then(() => {
      console.log("Sign-out successful.");
    })
    .catch((error) => {
      // An error happened.
      console.log(error);
    });

export const authListener = () => {
  onAuthStateChanged((user) => {
    if (user) {
      return true;
    } else {
      return false;
    }
  });
};
