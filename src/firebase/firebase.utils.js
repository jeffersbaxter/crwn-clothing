import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyC617S03yrbbXOU2Fmic4yho4L7TYR3CdM",
    authDomain: "crwn-db-91a3e.firebaseapp.com",
    projectId: "crwn-db-91a3e",
    storageBucket: "crwn-db-91a3e.appspot.com",
    messagingSenderId: "210914827688",
    appId: "1:210914827688:web:83a2ce27f8141bcab3519d",
    measurementId: "G-0CCVQH6YS0"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth)  return;

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
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
