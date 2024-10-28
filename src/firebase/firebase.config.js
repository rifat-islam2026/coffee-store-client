// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA_IKHCVlFu7d8zGuDc0BEoKoyOi1-MlGk",
    authDomain: "coffee-store-auth-10206.firebaseapp.com",
    projectId: "coffee-store-auth-10206",
    storageBucket: "coffee-store-auth-10206.appspot.com",
    messagingSenderId: "69935525644",
    appId: "1:69935525644:web:e7ab67efae7efefa68e329"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;