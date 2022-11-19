import firebase from 'firebase'
// require("@firebase/firestore")
const firebaseConfig = {
  apiKey: 'AIzaSyDJdM9tV2ev2YeqED1-gfnSrVHSrgw4zCU',
  authDomain: 'math-wizard-app.firebaseapp.com',
  projectId: 'math-wizard-app',
  storageBucket: 'math-wizard-app.appspot.com',
  messagingSenderId: '970067583907',
  appId: '1:970067583907:web:ab640ff333e7dbb6dff016',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

