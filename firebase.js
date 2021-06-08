import firebase from 'firebase';
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDCKlP3JDi3RLUIwF6xgArZw6Y-9qCCRaQ",
    authDomain: "facebook-clone-4da79.firebaseapp.com",
    projectId: "facebook-clone-4da79",
    storageBucket: "facebook-clone-4da79.appspot.com",
    messagingSenderId: "186287382899",
    appId: "1:186287382899:web:cb77ef4c79f9c5da8e2506"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const stogare = firebase.storage();

export { db, stogare };