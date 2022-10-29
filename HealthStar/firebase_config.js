import * as firebase from "@firebase/app";
import * as _auth from "@firebase/auth";
import * as _firestore from "@firebase/firestore";
import localdb from "./backend/localdb";

const firebaseConfig = {
  apiKey: "AIzaSyCKuHBEQopUsR6YNAqzbwlB8XQ3ddW5zP8",
  authDomain: "healthstar-e439e.firebaseapp.com",
  projectId: "healthstar-e439e",
  storageBucket: "healthstar-e439e.appspot.com",
  messagingSenderId: "27072008479",
  appId: "1:27072008479:web:3b5f6e0fdbf2376b1e602a",
  measurementId: "G-F5C8QG3FGQ",
};

firebase.initializeApp(firebaseConfig);
const auth = _auth.getAuth();
const db = _firestore.getFirestore();

localdb.auth = auth;
localdb.db = db;

_auth.onAuthStateChanged(auth, (user) => {
  if (user) {
    localdb.user = user;
    console.log(user);
  } else {
    localdb.user = null;
  }
});

export default {
    firebase: firebase,
    _auth: auth,
    _db: db,
    firestore: ()=> {return _firestore},
    auth: ()=> {return _auth},
};
