// lib/firebase.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCrP_zOWXIAhGOfjJyQtue_17k4Q8-km_0",
  authDomain: "fitlife-booking.firebaseapp.com",
  projectId: "fitlife-booking",
  storageBucket: "fitlife-booking.firebasestorage.app",
  messagingSenderId: "1054897041731",
  appId: "1:1054897041731:web:863bcda2789e0bb8b6fff6"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };
