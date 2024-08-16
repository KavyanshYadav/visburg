// Import the functions you need from the SDKs you need
import firebase, { initializeApp } from 'firebase/app';

import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth/web-extension';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyB_89Bw-Wtg8KkQGBsVJtheS-A3JvqHLDw",
  authDomain: "visdebug-bd9b8.firebaseapp.com",
  projectId: "visdebug-bd9b8",
  storageBucket: "visdebug-bd9b8.appspot.com",
  messagingSenderId: "737023356557",
  appId: "1:737023356557:web:6b28eb2851990b44577cc4",
  measurementId: "G-W4NSQCZYZ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
export  {
    auth,
    googleProvider
}