"use client"
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBJGWa62OLaGPqKs81M6cLjN_qN9TAPqE",
  authDomain: "sync-home-d0b58.firebaseapp.com",
  projectId: "sync-home-d0b58",
  storageBucket: "sync-home-d0b58.appspot.com",
  messagingSenderId: "508460639735",
  appId: "1:508460639735:web:dc558b6921d0bf61cbfaf2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;