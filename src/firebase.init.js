// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGfIfdU3EqOUIVQXNihnKb_8KJtm0EOxA",
  authDomain: "ema-john-simple-c9848.firebaseapp.com",
  projectId: "ema-john-simple-c9848",
  storageBucket: "ema-john-simple-c9848.appspot.com",
  messagingSenderId: "849132466276",
  appId: "1:849132466276:web:9126aff8243b5ff798af71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;