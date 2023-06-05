// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQYyw2nyuAOxrBvzcrk4rr98go3eUCx5o",
  authDomain: "js-flashify.firebaseapp.com",
  projectId: "js-flashify",
  storageBucket: "js-flashify.appspot.com",
  messagingSenderId: "902949367546",
  appId: "1:902949367546:web:3e296930147eb49f3ca343"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize firestore service
const db = getFirestore(app);
export {db}