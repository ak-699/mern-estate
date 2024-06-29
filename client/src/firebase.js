// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-72cf3.firebaseapp.com",
  projectId: "mern-estate-72cf3",
  storageBucket: "mern-estate-72cf3.appspot.com",
  messagingSenderId: "28905240127",
  appId: "1:28905240127:web:59d51ddc9eb074fc5a6a8a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);