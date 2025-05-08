// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyAOuO4aqGplem-HXOGvy46TAfF8dXXveEc",
  authDomain: "netflixbysaurabh.firebaseapp.com",
  projectId: "netflixbysaurabh",
  storageBucket: "netflixbysaurabh.firebasestorage.app",
  messagingSenderId: "350090831811",
  appId: "1:350090831811:web:7a9e86d89c53986eb9bf76",
  measurementId: "G-93F96HG5KJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()