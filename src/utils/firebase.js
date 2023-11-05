// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-a658c.firebaseapp.com",
  projectId: "blog-a658c",
  storageBucket: "blog-a658c.appspot.com",
  messagingSenderId: "229860592365",
  appId: "1:229860592365:web:17da34282dd8acadaddae4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);