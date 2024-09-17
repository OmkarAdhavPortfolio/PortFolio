// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrzorv7ZeEFoogzUqr077yFaC8ieG1KhM",
  authDomain: "samruddhilogin.firebaseapp.com",
  projectId: "samruddhilogin",
  storageBucket: "samruddhilogin.appspot.com",
  messagingSenderId: "311832577719",
  appId: "1:311832577719:web:bbaff867437feb16dfef32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const db=getFirestore(app);
export default app;