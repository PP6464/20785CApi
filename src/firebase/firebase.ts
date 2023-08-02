import firebase from 'firebase-admin';

firebase.initializeApp({
  credential: firebase.credential.cert({
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY,
    projectId: process.env.FIREBASE_PROJECT_ID,
  }),
});

export const firestore = firebase.firestore();
export const auth = firebase.auth();
