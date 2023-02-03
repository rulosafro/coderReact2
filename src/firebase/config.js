// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjw6BzJNrDbIJ6vl4ZdjZaq7-b3B9XUu4",
  authDomain: "coderreact-7b81f.firebaseapp.com",
  projectId: "coderreact-7b81f",
  storageBucket: "coderreact-7b81f.appspot.com",
  messagingSenderId: "287005599335",
  appId: "1:287005599335:web:8327a075b601a658dbd6c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()

// 