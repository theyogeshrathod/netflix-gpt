// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHKJsOh6aw5vBjKH9MNXUJGQAhwUnBodo",
  authDomain: "netflix-gpt-yo.firebaseapp.com",
  projectId: "netflix-gpt-yo",
  storageBucket: "netflix-gpt-yo.appspot.com",
  messagingSenderId: "317983218839",
  appId: "1:317983218839:web:4aefb38d93430b38471dd2",
  measurementId: "G-CVWN6LYEJ5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
