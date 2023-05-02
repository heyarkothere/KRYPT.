// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrTG1mgzmy_SJUKEGuZDkVVFax5oMk8nI",
  authDomain: "krypt-c8dc3.firebaseapp.com",
  projectId: "krypt-c8dc3",
  storageBucket: "krypt-c8dc3.appspot.com",
  messagingSenderId: "277784334095",
  appId: "1:277784334095:web:98304a6c28797aadbd387a",
  measurementId: "G-DVKZBNK0GM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
