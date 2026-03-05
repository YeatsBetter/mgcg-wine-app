import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    projectId: "vino-atlas",
    appId: "1:108213206687:web:f59f7407e5c04a9ea46caa",
    storageBucket: "vino-atlas.firebasestorage.app",
    apiKey: "AIzaSyDUjGKzOdBtFUgnwFOoX7i8Y8aqC2D9t7w",
    authDomain: "vino-atlas.firebaseapp.com",
    messagingSenderId: "108213206687",
    measurementId: "G-8HP0PN31G8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Initialize Firestore
export const db = getFirestore(app);
