import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyADDshZe3n2lX4CEdvJk6bahaTds5UAplY",
  authDomain: "crwn-db-57341.firebaseapp.com",
  databaseURL: "https://crwn-db-57341.firebaseio.com",
  projectId: "crwn-db-57341",
  storageBucket: "crwn-db-57341.appspot.com",
  messagingSenderId: "77239174760",
  appId: "1:77239174760:web:af9e8af8e092404a689ddd",
  measurementId: "G-BF96F2XK37"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
