
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
import {
  getFirestore, 
  collection, 
  setDoc,
  query, 
  where, 
  getDocs,
  doc, 
} from "firebase/firestore";

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


//send profile info to firestore
const db = getFirestore(app);

const dbRef = collection(db, "ProfileFormData");

let uid;
onAuthStateChanged(auth, (user) => { uid = user.uid; });

export const updateUser = (formValues) => {

  return setDoc(doc(dbRef, uid), {formValues});
}


// handle filtering for course page
export const filterUsers = async (filterYear, filterInterests, filterCourse) => { 
  let iList = [];
  let cList = [];
  let yList = [];
  let retList = [];

  if (filterCourse.length !== 0) {
    const c = query(dbRef, where("formValues.courses", "array-contains", filterCourse) );

    const querySnapshot = await getDocs(c);

    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      //console.log(doc.id, " => ", doc.data());
      cList.push(doc.id)
    });
  }
  if (filterInterests.length !== 0) {
    const i = query(dbRef, where('formValues.interests', "array-contains-any" , filterInterests) );

    const querySnapshot = await getDocs(i);

    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      //console.log(doc.id, " => ", doc.data());
      iList.push(doc.id)
    });
  }
  if (filterYear.length !== 0) {
    const y = query(dbRef, where('formValues.year', 'in' , filterYear) );

    const querySnapshot = await getDocs(y);

    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      //console.log(doc.id, " => ", doc.data());
      yList.push(doc.id)
    });
  }

  //filtering based of year AND interests if both non-empty

  if (filterYear.length !== 0 && filterInterests.length !== 0) {

    if (yList.length <= iList.length){
      for (let i = 0; i < yList.length; i++){
        let item = yList[i]
        if (iList.includes(item) && cList.includes(item)){
          retList.push(item);
        }
      }
    }
    else if (filterYear.length > filterInterests.length){
        for (let i = 0; i < iList.length; i++){
          let item = iList[i]
          if (yList.includes(item) && cList.includes(item)){
            retList.push(item);
          }
        }

    }
  }

  // course AND filtering based of year or interests if either empty
  if (filterYear.length === 0 && filterInterests.length !== 0) { retList.push(...iList);}
  else if (filterYear.length !== 0 && filterInterests.length === 0) {retList.push(...yList);}


  // Showing all users in course if filtering both empty (default)
  if (filterYear.length === 0 && filterInterests.length === 0) {retList.push(...cList);}

  console.log(retList);
}

