// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDSU13we27w2mRDCFJS-n3aTyhufgM7NFs",
    authDomain: "example-98c2a.firebaseapp.com",
    projectId: "example-98c2a",
    storageBucket: "example-98c2a.appspot.com",
    messagingSenderId: "1082441246899",
    appId: "1:1082441246899:web:b2344d446ab6e0b9b7e8c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const pokemonCollection = collection(db, "pokemon");


