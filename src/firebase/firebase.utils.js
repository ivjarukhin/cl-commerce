import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
    apiKey: "AIzaSyAc4xR1qHsOQ75cFTEhmBZszKJ9jVD52t0",
    authDomain: "compr-db.firebaseapp.com",
    projectId: "compr-db",
    storageBucket: "compr-db.appspot.com",
    messagingSenderId: "986962372765",
    appId: "1:986962372765:web:4d1614501e33d1b82d8c74",
    measurementId: "G-XWL6J75R4P"
}

firebase.initializeApp(config);

export const auth=firebase.auth();
export const firestore=firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account"});

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;