// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMsKPIio1JkaX8V2gyRkJ0qtMFmCT_zkk",
  authDomain: "venta-5131d.firebaseapp.com",
  projectId: "venta-5131d",
  storageBucket: "venta-5131d.appspot.com",
  messagingSenderId: "267766730822",
  appId: "1:267766730822:web:409c4de5f701a52e36ba47",
  measurementId: "G-VEBVZVGL0H"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);