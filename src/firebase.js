import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBn5iflJYAq-gexN6gHKXaLCPnVABSXUHQ",
    authDomain: "ig-reels-clone-e804f.firebaseapp.com",
    projectId: "ig-reels-clone-e804f",
    storageBucket: "ig-reels-clone-e804f.appspot.com",
    messagingSenderId: "278190904049",
    appId: "1:278190904049:web:050c5e51c5b62b200b4f50",
    measurementId: "G-8G5KPMCWHK"
  };

  const firebaseApp = firebase.initializeApp
  (firebaseConfig);
  const db = firebaseApp.firestore();
  export default db;
