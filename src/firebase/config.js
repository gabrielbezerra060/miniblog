// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCpdHe24zya_2SPa3nKheP51prFf1i_x8w",
  authDomain: "miniblog-b3154.firebaseapp.com",
  projectId: "miniblog-b3154",
  storageBucket: "miniblog-b3154.firebasestorage.app",
  messagingSenderId: "991407168235",
  appId: "1:991407168235:web:034b157310303592a5bcae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
