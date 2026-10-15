// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";
import {
  EmailAuthProvider,
  GoogleAuthProvider,
  connectAuthEmulator,
  getAuth,
} from "firebase/auth";
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

// `npm run dev:emulators` runs against the local Firebase emulators (see scripts/seed-emulators.mjs)
if (import.meta.env.VITE_USE_EMULATORS === "true") {
  connectAuthEmulator(auth, "http://127.0.0.1:9099", { disableWarnings: true });
  connectFirestoreEmulator(db, "127.0.0.1", 8080);
}

export { db, auth, googleProvider };
