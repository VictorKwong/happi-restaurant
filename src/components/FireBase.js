/* regular js fire */
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdzRlALkcA-Ak6bsFJbu58YBsPu-oZ3cY",
  authDomain: "happirestaurant-a519c.firebaseapp.com",
  databaseURL: "https://happirestaurant-a519c-default-rtdb.firebaseio.com",
  projectId: "happirestaurant-a519c",
  storageBucket: "happirestaurant-a519c.appspot.com",
  messagingSenderId: "739553963158",
  appId: "1:739553963158:web:92435bc55d05e8315d26b7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;