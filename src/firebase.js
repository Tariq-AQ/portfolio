// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOYiwehmYlo8W1J6sNnyxjRLi---pZUyg",
  authDomain: "myportfolio-e7f78.firebaseapp.com",
  projectId: "myportfolio-e7f78",
  storageBucket: "myportfolio-e7f78.appspot.com",
  messagingSenderId: "470540154910",
  appId: "1:470540154910:web:67e4c6c9203cfde681160f",
  measurementId: "G-Q5ZFZNN4CT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);