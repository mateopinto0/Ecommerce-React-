// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD72ANe8s74BbZryc-IA99ACrraIsYVg98",
  authDomain: "playzone-2104f.firebaseapp.com",
  projectId: "playzone-2104f",
  storageBucket: "playzone-2104f.firebasestorage.app",
  messagingSenderId: "834071308590",
  appId: "1:834071308590:web:51777949b195225faeb2bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db= getFirestore(app);

export {db};