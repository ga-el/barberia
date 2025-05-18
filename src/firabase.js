import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDW7XqxbEv_hCgqGimg8bF93nvbxOjSamg",
  authDomain: "barberia-citas-b0750.firebaseapp.com",
  projectId: "barberia-citas-b0750",
  storageBucket: "barberia-citas-b0750.firebasestorage.app",
  messagingSenderId: "584877576845",
  appId: "1:584877576845:web:b750e7ef331b3c0a41c8c4",
  measurementId: "G-1BDBYHMT1S",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, getDocs };
