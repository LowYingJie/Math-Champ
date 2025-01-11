// firebase.js
import firebase from "firebase/app";
import "firebase/database"; // Import only the Firebase Database service
import firebaseConfig from "./firebaseConfig"; // Import your Firebase configuration

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Export Firebase services for reuse
const database = firebaseApp.database();

export { database };
