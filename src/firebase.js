import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAexOnoG4aH7xOLK9hweM2G20WQvXafhzk",
  authDomain: "slack-clone-7f580.firebaseapp.com",
  projectId: "slack-clone-7f580",
  storageBucket: "slack-clone-7f580.appspot.com",
  messagingSenderId: "87440038998",
  appId: "1:87440038998:web:5edd8682ba0bc902016ff7"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { db, auth, provider }