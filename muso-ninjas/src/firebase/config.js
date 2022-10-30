import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyANBu4P82QsO1BO-xOew9FRju9ev4B5lfo",
  authDomain: "play-share-bc304.firebaseapp.com",
  projectId: "play-share-bc304",
  storageBucket: "play-share-bc304.appspot.com",
  messagingSenderId: "985832215677",
  appId: "1:985832215677:web:66d562aa27bae78b024d14",
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export default { auth, projectFirestore, timestamp };
