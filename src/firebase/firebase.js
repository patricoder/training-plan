
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';




const firebaseConfig = {
    apiKey: "AIzaSyCE5f36iGdk-V5X9RYjspE_vriRTUzf9Ac",
    authDomain: "jakiplantreningowynadzisiaj.firebaseapp.com",
    databaseURL: "https://jakiplantreningowynadzisiaj-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "jakiplantreningowynadzisiaj",
    storageBucket: "jakiplantreningowynadzisiaj.appspot.com",
    messagingSenderId: "166602837836",
    appId: "1:166602837836:web:96194c2f418fcb749c09e9"
  };
  

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export { app, db }