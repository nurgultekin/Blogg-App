// src/firebase/firebase.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRwD-OmWUQ7jsgX1AZ9vxi0NVfkFAu3gs",
  authDomain: "nur-s-blogg.firebaseapp.com",
  projectId: "nur-s-blogg",
  storageBucket: "nur-s-blogg.appspot.com",
  messagingSenderId: "567736859523",
  appId: "1:567736859523:web:f275f49dfab3740aa454b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { app, auth, firestore };
