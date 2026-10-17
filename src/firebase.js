// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: "realestate-e8563.firebaseapp.com",
//   projectId: "realestate-e8563",
//   storageBucket: "realestate-e8563.appspot.com",
//   messagingSenderId: "809769800451",
//   appId: "1:809769800451:web:d348f53e46f81522bbcf36"
// };

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "inspiration-website.firebaseapp.com",
  projectId: "inspiration-website",
  storageBucket: "inspiration-website.firebasestorage.app",
  messagingSenderId: "49673430347",
  appId: "1:49673430347:web:ef03ab5ce20e9e2de1f4ce",
  measurementId: "G-239L46LQTM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);