/* eslint-disable import/prefer-default-export */
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDpz1dH3ZShghk16xcufd8N-CWQDJNm9is',
  authDomain: 'ecommerce-platform-78659.firebaseapp.com',
  projectId: 'ecommerce-platform-78659',
  storageBucket: 'ecommerce-platform-78659.appspot.com',
  messagingSenderId: '211338027507',
  appId: '1:211338027507:web:5566f3f74e90b9f7053286',
  measurementId: 'G-YGQM7MVM88'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
