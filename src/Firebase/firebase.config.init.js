// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = { 
  // apiKey: import.meta.env.local.VITE_FIREBASE_apiKey,
  // authDomain: import.meta.env.VITE_FIREBASE_authDomain,
  // projectId: import.meta.env.VITE_FIREBASE_projectId,
  // storageBucket: import.meta.env.VITE_FIREBASE_storageBucket,
  // messagingSenderId: import.meta.env.VITE_FIREBASE_messagingSenderId,
  // appId: import.meta.env.VITE_FIREBASE_appId
  apiKey: "AIzaSyA21KIkya81YPU40pit42VIPJXUc1GlQAY",
  authDomain: "bistro-boss-auth-ca47b.firebaseapp.com",
  projectId: "bistro-boss-auth-ca47b",
  storageBucket: "bistro-boss-auth-ca47b.firebasestorage.app",
  messagingSenderId: "581990110987",
  appId: "1:581990110987:web:83539608b38cac6fd8b40e"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;