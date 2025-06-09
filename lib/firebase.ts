// File: lib/firebase.ts

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCrP_zOWXIAhGOfjJyQtue_17k4Q8-km_0",
  authDomain: "fitlife-booking.firebaseapp.com",
  projectId: "fitlife-booking",
  storageBucket: "fitlife-booking.firebasestorage.app",
  messagingSenderId: "1054897041731",
  appId: "1:1054897041731:web:863bcda2789e0bb8b6fff6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };