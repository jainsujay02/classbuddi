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
  setDoc,
  doc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

import { getStorage } from "firebase/storage";

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

// Export storage
export const storage = getStorage(app);

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

      //console.log(newUser);
      //console.log(userDetails);
    })
    .catch((error) => {
      // Handle Errors here.
      // const errorCode = error.code;
      const errorMessage = error.message;
      //console.log(errorMessage);
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
      //console.log("Sign-out successful.");
    })
    .catch((error) => {
      // An error happened.
      //console.log(error);
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

// Create a custom Student class to be stored in the firebase db
class Student {
  constructor(
    name,
    major,
    pronouns,
    year,
    courses,
    interests,
    instagram,
    discord,
    reddit,
    intro,
    imgUrl
  ) {
    this.name = name;
    this.major = major;
    this.pronouns = pronouns;
    this.year = year;
    this.courses = courses;
    this.interests = interests;
    this.instagram = instagram;
    this.discord = discord;
    this.reddit = reddit;
    this.intro = intro;
    this.imgUrl = imgUrl;
  }
  toString() {
    return (
      this.name +
      ", " +
      this.major +
      ", " +
      this.pronouns +
      ", " +
      this.year +
      ", " +
      this.courses +
      ", " +
      this.interests +
      ", " +
      this.instagram +
      ", " +
      this.discord +
      ", " +
      this.reddit +
      ", " +
      this.intro
    );
  }
}

// Firestore data converter
const studentConverter = {
  toFirestore: (student) => {
    return {
      name: student.name,
      major: student.major,
      pronouns: student.pronouns,
      year: student.year,
      courses: student.courses,
      interests: student.interests,
      instagram: student.instagram,
      discord: student.discord,
      reddit: student.reddit,
      intro: student.intro,
      imgUrl: student.imgUrl
    };
  },
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options);
    return new Student(
      data.name,
      data.major,
      data.pronouns,
      data.year,
      data.courses,
      data.interests,
      data.instagram,
      data.discord,
      data.reddit,
      data.intro,
      data.imgUrl
    );
  },
};

const db = getFirestore(app);

let uid;
onAuthStateChanged(auth, (user) => {
  if (user) {
    uid = user.uid;
  }
  else {
    //console.log("Error USER LOGGED OUT");
  }
});

//send profile info to firestore
export const updateUser = (formValues) => {
  const ref = doc(db, "ProfileFormData", uid).withConverter(studentConverter);
  return setDoc(
    ref,
    new Student(
      formValues.name,
      formValues.major,
      formValues.pronouns,
      formValues.year,
      formValues.courses,
      formValues.interests,
      formValues.instagram,
      formValues.discord,
      formValues.reddit,
      formValues.intro,
      formValues.imgUrl
    )
  );
};

// get the user info
export const getUserData = async () => {
  const docRef = doc(db, "ProfileFormData", uid).withConverter(
    studentConverter
  );
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const student = docSnap.data();
    console.log("returning to dashboard");
    return student;
  } else {
    // doc.data() will be undefined in this case
    //console.log("No such document!");
  }
};

// get list of other students in the student class
export const getStudentsInClass = async (studentCourse) => {
  const q = query(
    collection(db, "ProfileFormData"),
    where("courses", "array-contains", studentCourse)
  ).withConverter(studentConverter);
  const querySnapshot = await getDocs(q);
  //console.log("query complete");
  // console.log(querySnapshot);
  var arr = []
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    // console.log(doc.data());
    const data = doc.data();
    arr.push(data);
    // console.log(data);
  });
  // return (new Student(data.name, data.major, data.pronouns, data.year, data.courses, data.interests, data.instagram, data.discord, data.reddit, data.intro));
  return arr;
};

// get user from name
export const getUserDataFromName = async (id) => {
  const q = query(
    collection(db, "ProfileFormData"),
    where("name", "==", id)
  ).withConverter(studentConverter);
  const querySnapshot = await getDocs(q);
  console.log("query complete");
  var arr = []
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    // console.log(doc.data());
    const data = doc.data();
    arr.push(data);
    //console.log("Other Student", data);
  });
  return arr;
};

const dbRef = collection(db, "ProfileFormData");
export const filterUsers = async (filterYear, filterInterests, filterCourse, studentsInCourse) => {
  let iList = [];
  let cList = [];
  let yList = [];
  let retList = [];
  // console.log("students in course", studentsInCourse);
  if (studentsInCourse.length === 0) {
    // console.log("no students in this course, returning early");
    alert("Cannot filter students in an empty class");
    return;
  }
  if (filterCourse.length !== 0) {
    const c = query(dbRef, where("courses", "array-contains", filterCourse) );

    const querySnapshot = await getDocs(c);

    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      //console.log(doc.id, " => ", doc.data());
      cList.push(doc.id)
    });
  }
  if (filterInterests.length !== 0) {
    const i = query(dbRef, where('interests', "array-contains-any" , filterInterests) );

    const querySnapshot = await getDocs(i);

    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      //console.log(doc.id, " => ", doc.data());
      if (cList.includes(doc.id)){
        iList.push(doc.id);
      }
    });
  }
  if (filterYear.length !== 0) {
    const y = query(dbRef, where('year', 'in' , filterYear) );

    const querySnapshot = await getDocs(y);

    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      //console.log(doc.id, " => ", doc.data());
      if (cList.includes(doc.id)){
        yList.push(doc.id);
      }
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

  //console.log(retList);

  const a = []
  for (let item of retList) {
    if (item !== uid){
      const docRef = doc(dbRef, item).withConverter(studentConverter);
      const docSnap = await getDoc(docRef);
      a.push(docSnap.data());
    }


  };

  //console.log(a);
  return a;
}