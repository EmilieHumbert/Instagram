import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBk592y990YXTXpVA1b5MTc__-aYEf5nyU",
  authDomain: "instagram-bfc65.firebaseapp.com",
  projectId: "instagram-bfc65",
  storageBucket: "instagram-bfc65.appspot.com",
  messagingSenderId: "881679979921",
  appId: "1:881679979921:web:0a88ba5cd56462140f7630",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
