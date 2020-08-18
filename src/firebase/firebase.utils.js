import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAxtEw-rKCm9L_6qtK69T30viioPy30Sng',
  authDomain: 'crwn-db-71eb1.firebaseapp.com',
  databaseURL: 'https://crwn-db-71eb1.firebaseio.com',
  projectId: 'crwn-db-71eb1',
  storageBucket: 'crwn-db-71eb1.appspot.com',
  messagingSenderId: '739795337348',
  appId: '1:739795337348:web:50a276b09f1db197d882d1',
  measurementId: 'G-GCP35MKHWE',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
