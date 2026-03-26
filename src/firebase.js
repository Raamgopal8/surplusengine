import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDnN011iYG7LMD00D3oZYZvUuUBvG2rjeo",
  authDomain: "focus-mechanic-406414.firebaseapp.com",
  projectId: "focus-mechanic-406414",
  storageBucket: "focus-mechanic-406414.firebasestorage.app",
  messagingSenderId: "918789942847",
  appId: "1:918789942847:web:23241a870c8447bcb2928a",
  measurementId: "G-FP16WXHRPH"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app, "surplusengine");