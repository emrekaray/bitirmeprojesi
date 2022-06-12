import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCucJXVglAG03VVbBww-BlpFhgEJxhFNtM",
    authDomain: "bitirme-projesi-c1a83.firebaseapp.com",
    projectId: "bitirme-projesi-c1a83",
    storageBucket: "bitirme-projesi-c1a83.appspot.com",
    messagingSenderId: "1066253720456",
    appId: "1:1066253720456:web:ba7ab7cca5cfbdc3ad783d",
    measurementId: "G-N262L3SWKX"
};

firebase.initializeApp(firebaseConfig);


const db = firebase.firestore();
const tarih = firebase.firestore.FieldValue.serverTimestamp;

export { db, tarih }