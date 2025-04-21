import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7EROr-JGD9Pl9fczJAXOt8uHpWVSh_T8",
  authDomain: "tahoo-native.firebaseapp.com",
  databaseURL: "https://tahoo-native-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "tahoo-native",
  storageBucket: "tahoo-native.firebasestorage.app",
  messagingSenderId: "562241995737",
  appId: "1:562241995737:web:e3ec363bc97a6910764fc8",
  measurementId: "G-X9SR3EHQ3Z"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export { app, database };
export default app;
