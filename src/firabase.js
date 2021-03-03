import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDlEWF3400N76t3PnlzRNFa4whflo0-g8o",
  authDomain: "slack-clone-ms-6a2eb.firebaseapp.com",
  projectId: "slack-clone-ms-6a2eb",
  storageBucket: "slack-clone-ms-6a2eb.appspot.com",
  messagingSenderId: "803335895290",
  appId: "1:803335895290:web:c2cc9a63822ed45844b143",
  measurementId: "G-1NQYLZV2MQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
