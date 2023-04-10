import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBvIdTMvKxrgwJb4wJwAZ7jtqrnZYHnka4",
  authDomain: "dietapp-c34ce.firebaseapp.com",
  projectId: "dietapp-c34ce",
  storageBucket: "dietapp-c34ce.appspot.com",
  messagingSenderId: "488916970553",
  appId: "1:488916970553:web:625f8a2ff547330b3971e8",
  measurementId: "G-QVKL3PR0HV",
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
