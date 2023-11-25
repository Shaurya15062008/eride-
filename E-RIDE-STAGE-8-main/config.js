import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDymBTVzsNZlVPIkkhB4mWmbSqjVXqYnQM",
  authDomain: "e-ride-a19d3.firebaseapp.com",
  projectId: "e-ride-a19d3",
  storageBucket: "e-ride-a19d3.appspot.com",
  messagingSenderId: "984551696516",
  appId: "1:984551696516:web:7bbafae96a69b80e913ad1"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
