// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoAwWjInUN4PQayaKmiNqvGMB5N6Sc4TM",
  authDomain: "quotes-project-65e6d.firebaseapp.com",
  projectId: "quotes-project-65e6d",
  storageBucket: "quotes-project-65e6d.firebasestorage.app",
  messagingSenderId: "871659712323",
  appId: "1:871659712323:web:c3c84706d19e9bb6ab89f6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth
