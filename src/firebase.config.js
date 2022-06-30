// Import the functions you need from the SDKs you need
//eslint-disable-next-line
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
//eslint-disable-next-line
const firebaseConfig = {
  apiKey: "AIzaSyAawUYd8GeeRljMD2wQzGTxgmVimFZgih8",
  authDomain: "house-marketplace-app-46868.firebaseapp.com",
  projectId: "house-marketplace-app-46868",
  storageBucket: "house-marketplace-app-46868.appspot.com",
  messagingSenderId: "87029363246",
  appId: "1:87029363246:web:556eba2244d7ed21f825bf",
};

// Initialize Firebase
//eslint-disable-next-line
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
