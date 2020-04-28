import firebase from 'firebase';
// import firestore from 'firebase/firestore';
import "firebase/auth"
const config = {
  apiKey: "AIzaSyAKOSyPSvAXfF1ZhsDaRIhAXCnH5DfNujk",
  authDomain: "nova-track-b20e2.firebaseapp.com",
  databaseURL: "https://nova-track-b20e2.firebaseio.com",
  projectId: "nova-track-b20e2",
  storageBucket: "nova-track-b20e2.appspot.com",
  messagingSenderId: "462658409224",
  appId: "1:462658409224:web:9030311867f036635c92bd",
  measurementId: "G-T9NJZPKPXJ"
};

const firebaseApp = firebase.initializeApp(config)
const db = firebaseApp.firestore()

export {
  db,
  firebase
}