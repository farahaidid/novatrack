import firebase from 'firebase';
// import firestore from 'firebase/firestore';
import "firebase/auth"
const config = {
  apiKey: "AIzaSyA8tT40XFg-4pA__lNiV_eGJQQcr1rNPEs",
  authDomain: "test-b21ad.firebaseapp.com",
  databaseURL: "https://test-b21ad.firebaseio.com",
  projectId: "test-b21ad",
  storageBucket: "test-b21ad.appspot.com",
  messagingSenderId: "150436590831",
  appId: "1:150436590831:web:e7c4ba22042d337ffcd71a"
};

const firebaseApp = firebase.initializeApp(config)
const db = firebaseApp.firestore()

export {
  db,
  firebase
}