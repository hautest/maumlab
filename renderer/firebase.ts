import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBu2rDVRiyhsugpLWAsrDWrhoVZmiM4WEo",
  authDomain: "test-firebase-d594b.firebaseapp.com",
  projectId: "test-firebase-d594b",
  storageBucket: "test-firebase-d594b.appspot.com",
  messagingSenderId: "379321634435",
  appId: "1:379321634435:web:9c344fc026c961c06095b6",
  measurementId: "G-LEG7MYXHN8",
};

initializeApp(firebaseConfig);

export const dbService = getFirestore();
export const authService = getAuth();
