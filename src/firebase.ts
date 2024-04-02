// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDx93I_AXxpcFqDIr2uxXKUvP_GCJ-YaFo",
    authDomain: "react-firestore-d00f5.firebaseapp.com",
    projectId: "react-firestore-d00f5",
    storageBucket: "react-firestore-d00f5.appspot.com",
    messagingSenderId: "503200967495",
    appId: "1:503200967495:web:e93a698a1500328c3cfa62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth()
