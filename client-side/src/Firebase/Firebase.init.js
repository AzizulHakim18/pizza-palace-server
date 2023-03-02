// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAdPXrTm6JR7AOWdUmYjfyMnw_XIZbDfdo",
    authDomain: "pizza-palace-3e501.firebaseapp.com",
    projectId: "pizza-palace-3e501",
    storageBucket: "pizza-palace-3e501.appspot.com",
    messagingSenderId: "737915838502",
    appId: "1:737915838502:web:1a6f3c6b2121a904f986e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app