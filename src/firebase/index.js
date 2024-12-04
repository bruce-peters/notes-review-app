// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { EmailAuthProvider, GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhhVW3UXGOe3qHk67VEAc-T3Up1yn_dfU",
  authDomain: "note-reviewer.firebaseapp.com",
  projectId: "note-reviewer",
  storageBucket: "note-reviewer.firebasestorage.app",
  messagingSenderId: "351388938954",
  appId: "1:351388938954:web:910ae59264dd989502fa33",
  measurementId: "G-GF028TZW5Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

export { db, auth, googleProvider };
