import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAs4QyAuVhV1JkZbPbqSPAFrQrpqD5iZOE",
    authDomain: "crwn-db-8ee63.firebaseapp.com",
    projectId: "crwn-db-8ee63",
    storageBucket: "crwn-db-8ee63.appspot.com",
    messagingSenderId: "639844270194",
    appId: "1:639844270194:web:4b0075eb32e6830b4a02eb"
  }

  firebase.initializeApp(config);
  
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

