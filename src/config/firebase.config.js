"use client"
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6cK3nJ_ujeMZ5Ho6_W5ar1u20jvI0Ffw",
  authDomain: "sync-home-eeafb.firebaseapp.com",
  projectId: "sync-home-eeafb",
  storageBucket: "sync-home-eeafb.appspot.com",
  messagingSenderId: "41445542816",
  appId: "1:41445542816:web:8b63dd3be635956a5632c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;