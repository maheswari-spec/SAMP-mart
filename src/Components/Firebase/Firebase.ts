// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIuX8VGhTHi8r33LfJ3bt9jlECrq6pv28",
  authDomain: "samp-mart.firebaseapp.com",
  projectId: "samp-mart",
  storageBucket: "samp-mart.firebasestorage.app",
  messagingSenderId: "882746613956",
  appId: "1:882746613956:web:05e996c1db588b3f416991",
  measurementId: "G-KZHT5V0W20",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
