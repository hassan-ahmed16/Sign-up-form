import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-analytics.js";
import { deleteDoc, doc, setDoc, getFirestore, addDoc, collection, getDocs } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-auth.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA98rgYQJfWI5BdQHK89H-_Rx6FvjpG_1M",
    authDomain: "practice-app-50abf.firebaseapp.com",
    projectId: "practice-app-50abf",
    storageBucket: "practice-app-50abf.firebasestorage.app",
    messagingSenderId: "368996284632",
    appId: "1:368996284632:web:6f03a067ada067cab0ffad",
    measurementId: "G-9J9ZNCQ27S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const auth = getAuth(app)

export { auth, createUserWithEmailAndPassword, doc, db, addDoc, collection, getDocs, deleteDoc, setDoc }
