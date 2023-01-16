
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCKkQ_qIoldP2SHEYiGZVj8phLs3ZE4vO4",
  authDomain: "react-to-do-1e19b.firebaseapp.com",
  projectId: "react-to-do-1e19b",
  storageBucket: "react-to-do-1e19b.appspot.com",
  messagingSenderId: "297995582265",
  appId: "1:297995582265:web:98029793e8b96dc29e46e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
