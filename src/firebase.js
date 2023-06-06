import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyB6lEwrSJM8rgSv6s40xcrpZOCYFXUppjE",
    authDomain: "facebook-clone-ff1c6.firebaseapp.com",
    projectId: "facebook-clone-ff1c6",
    storageBucket: "facebook-clone-ff1c6.appspot.com",
    messagingSenderId: "489523005447",
    appId: "1:489523005447:web:938a134cadd7ec777382a2",
    measurementId: "G-LSGHDET4RG"
  };

const app = initializeApp(firebaseConfig);
const db = getDatabase();

const provider = new GoogleAuthProvider();

export {provider, app };
export default db;