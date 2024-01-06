import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCXpT2_7jojp2Yh4DS6y3sDX0tijcghrT8",
  authDomain: "netflix-40fe2.firebaseapp.com",
  projectId: "netflix-40fe2",
  storageBucket: "netflix-40fe2.appspot.com",
  messagingSenderId: "992214683915",
  appId: "1:992214683915:web:efcbe81dd8dfea6002d20e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

console.log(db)

export { auth };
export default db;

// 1//03dbFv75K71HICgYIARAAGAMSNwF-L9Ir63WqjZ6FaeVs4wf7-gKH-LpxD7j6oqImZxtBM90I3OTHlQtpX_zy3qfeZTMzLJCaYyM