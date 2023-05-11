import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDQYyw2nyuAOxrBvzcrk4rr98go3eUCx5o",
  authDomain: "js-flashify.firebaseapp.com",
  projectId: "js-flashify",
  storageBucket: "js-flashify.appspot.com",
  messagingSenderId: "902949367546",
  appId: "1:902949367546:web:3e296930147eb49f3ca343"
};

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()

export { projectFirestore }