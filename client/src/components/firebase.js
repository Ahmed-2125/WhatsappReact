import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDV06UIa1NSgL40avsAPMsNH6FQQVbbZV4",
  authDomain: "wa-ui-1e8c9.firebaseapp.com",
  projectId: "wa-ui-1e8c9",
  storageBucket: "wa-ui-1e8c9.appspot.com",
  messagingSenderId: "272991458080",
  appId: "1:272991458080:web:c2728d308a8b0c6c343d45",
  measurementId: "G-23WTSPV9GZ"
};

const firebaseApp=firebase.initializeApp
(firebaseConfig);
const datastorage=firebaseApp.firestore();



export default datastorage;