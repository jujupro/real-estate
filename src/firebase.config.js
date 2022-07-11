import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "real-estate-app-ae0df.firebaseapp.com",
  projectId: "real-estate-app-ae0df",
  storageBucket: "real-estate-app-ae0df.appspot.com",
  messagingSenderId: "949483241166",
  appId: "1:949483241166:web:8e26beb464719adb651a9f",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
