// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai-room-redesign-b60f5.firebaseapp.com",
  projectId: "ai-room-redesign-b60f5",
  storageBucket: "ai-room-redesign-b60f5.firebasestorage.app",
  messagingSenderId: "891032528200",
  appId: "1:891032528200:web:681dddab4e3774ff5eff7d",
  measurementId: "G-V1D9G3EP08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const storage = getStorage(app)