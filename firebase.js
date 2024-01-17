import { initializeApp } from "firebase/app"
import { getStorage, ref } from "firebase/storage" 
import { getFirestore } from "firebase/firestore"
import { getAuth, RecaptchaVerifier } from "firebase/auth";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyBmCaQUH9nl8-xpGtGTobarhF_Bne3pNsk",
  authDomain: "studentreportapp.firebaseapp.com",
  projectId: "studentreportapp",
  storageBucket: "studentreportapp.appspot.com",
  messagingSenderId: "587263070780",
  appId: "1:587263070780:web:fffa30b5e3964576ba2939",
  measurementId: "G-42DXXW9X80"
};

const app = initializeApp(firebaseConfig)
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
const storage = getStorage(app);
const db = getFirestore(app);
export {storage, db, auth};