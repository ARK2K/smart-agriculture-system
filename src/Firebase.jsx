// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGjlPMlYDRKsAwX0d6a2Qbo9WPtZmM8ps",
  authDomain: "smart-agriculture-bbfd9.firebaseapp.com",
  databaseURL:
    "https://smart-agriculture-bbfd9-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "smart-agriculture-bbfd9",
  storageBucket: "smart-agriculture-bbfd9.appspot.com",
  messagingSenderId: "213702236961",
  appId: "1:213702236961:web:25239bdd3f1c9942e27c60",
  measurementId: "G-CTBQ978RC8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const db = getDatabase(app);
export { db };
