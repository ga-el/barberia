import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, Timestamp } from "firebase/firestore";

// Obtener configuración desde variables de entorno
const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_API_KEY || "AIzaSyDW7XqxbEv_hCgqGimg8bF93nvbxOjSamg",
  authDomain: import.meta.env.FIREBASE_AUTH_DOMAIN || "barberia-citas-b0750.firebaseapp.com",
  projectId: import.meta.env.FIREBASE_PROJECT_ID || "barberia-citas-b0750",
  storageBucket: import.meta.env.FIREBASE_STORAGE_BUCKET || "barberia-citas-b0750.firebasestorage.app",
  messagingSenderId: import.meta.env.FIREBASE_MESSAGING_SENDER_ID || "584877576845",
  appId: import.meta.env.FIREBASE_APP_ID || "1:584877576845:web:b750e7ef331b3c0a41c8c4",
  measurementId: import.meta.env.FIREBASE_MEASUREMENT_ID || "G-1BDBYHMT1S",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, getDocs, Timestamp };
