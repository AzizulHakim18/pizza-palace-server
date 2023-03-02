// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyChRWdYt_bpV43Q4-kwvc5YyQwK778NccA",
    authDomain: "simple-firebase-56a13.firebaseapp.com",
    projectId: "simple-firebase-56a13",
    storageBucket: "simple-firebase-56a13.appspot.com",
    messagingSenderId: "658961913956",
    appId: "1:658961913956:web:2e9f2475e561f75de36771"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app