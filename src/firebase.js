import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCAEP8o-v-uHW1k7U0TqzBWEWJmj-MVFdA",
  authDomain: "tinder-clone-7ce1f.firebaseapp.com",
  databaseURL: "https://tinder-clone-7ce1f.firebaseio.com",
  projectId: "tinder-clone-7ce1f",
  storageBucket: "tinder-clone-7ce1f.appspot.com",
  messagingSenderId: "125280576756",
  appId: "1:125280576756:web:c898d356fc534712e5aaa1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
