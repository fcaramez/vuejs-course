import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAMFTmvGlalKAUEtbk_WoOF1GlDQic4mFE",
  authDomain: "vue-course-efdc1.firebaseapp.com",
  projectId: "vue-course-efdc1",
  storageBucket: "vue-course-efdc1.appspot.com",
  messagingSenderId: "288986577846",
  appId: "1:288986577846:web:ceb24c6aac517b32f05f17",
  measurementId: "G-JM0LBS0HJT",
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timestamp };
