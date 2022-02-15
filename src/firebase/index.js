import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHih3SF198zZ-Q3Zk8DrJqfmZLcfHVX9I",
  authDomain: "api-curso-reactjs-2021.firebaseapp.com",
  projectId: "api-curso-reactjs-2021",
  storageBucket: "api-curso-reactjs-2021.appspot.com",
  messagingSenderId: "212146218041",
  appId: "1:212146218041:web:848cc662881852084d19e8"
};

const app = firebase.initializeApp(firebaseConfig);

export const getFirebase = ()=> app;

export const getFirestore = ()=> firebase.firestore(app);