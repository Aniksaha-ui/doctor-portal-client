// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGOfW6yKJVY03KifdImSAF3PiwaZdGMUc",
  authDomain: "doctors-portal-4efd5.firebaseapp.com",
  projectId: "doctors-portal-4efd5",
  storageBucket: "doctors-portal-4efd5.appspot.com",
  messagingSenderId: "948364483342",
  appId: "1:948364483342:web:3cf8a39528c763da60d55f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
