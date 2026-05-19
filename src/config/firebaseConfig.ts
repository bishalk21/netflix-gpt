// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxUWpoKDAl_3jD3ujGZK-4v_iWasrj_pk",
  authDomain: "netflixgpt-a5323.firebaseapp.com",
  projectId: "netflixgpt-a5323",
  storageBucket: "netflixgpt-a5323.firebasestorage.app",
  messagingSenderId: "1019713972773",
  appId: "1:1019713972773:web:f15a2a7af9a02b5d48adcc",
  measurementId: "G-78SVYFSPJY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
