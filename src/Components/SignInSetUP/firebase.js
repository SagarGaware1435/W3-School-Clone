// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB2TPBlP-ESPAkuJb1tRwyuRHk1uQZCWSs",
  authDomain: "authentication-sys-f6933.firebaseapp.com",
  databaseURL: "https://authentication-sys-f6933-default-rtdb.firebaseio.com",
  projectId: "authentication-sys-f6933",
  storageBucket: "authentication-sys-f6933.appspot.com",
  messagingSenderId: "459487564866",
  appId: "1:459487564866:web:b81bb4c685c2871e55c9db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
