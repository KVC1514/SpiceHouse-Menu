import React from "react";
import ReactDOM from "react-dom/client";
import App from "./utils/App.jsx";
import "semantic-ui-css/semantic.min.css";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth"; 
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyC6eN3M1cvnX13NV2RjIacrDUBNhv6J92Y",
  authDomain: "spice-house-5bed4.firebaseapp.com",
  projectId: "spice-house-5bed4",
  storageBucket: "spice-house-5bed4.appspot.com",
  messagingSenderId: "892646443221",
  appId: "1:892646443221:web:ec4bca2c6f1dd5a94c7a5c",
  measurementId: "G-JR9E4KRCPV",
};

firebase.initializeApp(firebaseConfig);
export const db = getFirestore(App);
export const auth = firebase.auth();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


