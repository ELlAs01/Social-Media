// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0R9jvKt_FzletOKG6WWm8dnVE7XHJ0MQ",
  authDomain: "react-project-1075d.firebaseapp.com",
  projectId: "react-project-1075d",
  storageBucket: "react-project-1075d.appspot.com",
  messagingSenderId: "197174055226",
  appId: "1:197174055226:web:94439d99a88c9345afc003"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);