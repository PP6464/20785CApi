import { ConfigModule } from '@nestjs/config';
import firebase from 'firebase-admin';

ConfigModule.forRoot();

console.log(process.env.FIREBASE_PRIVATE_KEY);

firebase.initializeApp({
  credential: firebase.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY,
  }),
});

export const firestore = firebase.firestore();
export const auth = firebase.auth();
