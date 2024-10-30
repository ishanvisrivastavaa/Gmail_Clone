import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth/web-extension";

const firebaseConfig = {
  apiKey: "AIzaSyBaN08XXYQVs8cnsRlvYw2q_ZVPFXWmeBU",
  authDomain: "clone-84e50.firebaseapp.com",
  projectId: "clone-84e50",
  storageBucket: "clone-84e50.appspot.com",
  messagingSenderId: "437608877031",
  appId: "1:437608877031:web:ef947c8498097fd280cb42",
  measurementId: "G-MZYWTHNYY2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
