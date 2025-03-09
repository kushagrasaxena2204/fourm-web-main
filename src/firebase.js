// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKKXx11S4pFUuz8EGkbC5XL-pqWoCyXGg",
  authDomain: "auth-develop-1730b.firebaseapp.com",
  projectId: "auth-develop-1730b",
  storageBucket: "auth-develop-1730b.appspot.com",
  messagingSenderId: "783729238977",
  appId: "1:783729238977:web:b2529b2ba4581b01330540"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth