import { initializeApp } from "firebase/app";
import { getFirestore }  from "@firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDX4O8LPrVw_O0-Uv6xO5Z-FgvQ38sr1j4",
    authDomain: "fir-app-9a2d2.firebaseapp.com",
    projectId: "fir-app-9a2d2",
    storageBucket: "fir-app-9a2d2.appspot.com",
    messagingSenderId: "184263158652",
    appId: "1:184263158652:web:fdd56d503f6aeb3af352f9",
    measurementId: "G-H3N0895YKT"
  };

  const app =initializeApp(firebaseConfig);

 export const db= getFirestore(app);