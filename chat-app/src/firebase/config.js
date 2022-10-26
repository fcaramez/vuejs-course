import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAMFTmvGlalKAUEtbk_WoOF1GlDQic4mFE",
  authDomain: "vue-course-efdc1.firebaseapp.com",
  projectId: "vue-course-efdc1",
  storageBucket: "vue-course-efdc1.appspot.com",
  messagingSenderId: "288986577846",
  appId: "1:288986577846:web:e595201316e8529ef05f17",
  measurementId: "G-7PJJTJEPQX",
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timestamp };
