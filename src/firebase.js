// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2_lOkCUDPXDlVCal7f1JVaklllIFK2vE",
  authDomain: "portfolio-5fb54.firebaseapp.com",
  projectId: "portfolio-5fb54",
  storageBucket: "portfolio-5fb54.firebasestorage.app",
  messagingSenderId: "579364888264",
  appId: "1:579364888264:web:b344ccf7643916143a8ffd",
  measurementId: "G-WY5YGTE399"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);