// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyATZ6WBl4JSHrmuu9QPSxmfcoiaH_L6XEU",
  authDomain: "meetxadmin.firebaseapp.com",
  projectId: "meetxadmin",
  storageBucket: "meetxadmin.appspot.com",
  messagingSenderId: "252575781606",
  appId: "1:252575781606:web:098af18053d0206d3ee127"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export {db, storage};