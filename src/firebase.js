import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyA_bjWb7x9MERDVny8vnBDUg9NQljAFa84",
  authDomain: "ecom-website-1e514.firebaseapp.com",
  projectId: "ecom-website-1e514",
  storageBucket: "ecom-website-1e514.appspot.com",
  messagingSenderId: "1073635285244",
  appId: "1:1073635285244:web:a1bc563b5378a0764b1f79",
  measurementId: "G-4CF8HDZN74"
};

const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);

export default app;