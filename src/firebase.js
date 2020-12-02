import firebase from 'firebase/app';
import 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const app = firebase.initializeApp ({
  apiKey: "AIzaSyBPpanwUjQlV-3qXk-gAxKhhx6FKYM39_8",
  authDomain: "lottery-7c083.firebaseapp.com",
  databaseURL: "https://lottery-7c083.firebaseio.com",
  projectId: "lottery-7c083",
  storageBucket: "lottery-7c083.appspot.com",
  messagingSenderId: "56356834934",
  appId: "1:56356834934:web:7c94ce6713830642f6d957",
  measurementId: "G-YKM5N1DTRR"
});

export const auth = app.auth();
export default app;