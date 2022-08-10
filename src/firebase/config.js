// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0IvOjxEeV3XRSXz1-ZN0afO9rhDI-rIA",
  authDomain: "mi-ecommerce-bossio.firebaseapp.com",
  projectId: "mi-ecommerce-bossio",
  storageBucket: "mi-ecommerce-bossio.appspot.com",
  messagingSenderId: "306322345319",
  appId: "1:306322345319:web:19807ca8a2ab007dbaf3c2",
  measurementId: "G-PKV003RSHN"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const analytics = getAnalytics(app);