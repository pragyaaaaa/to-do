import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBHuNcOFjwIpSF8IZuOh3RcEbsoyxG3Hk8",
    authDomain: "to-do-react-88789.firebaseapp.com",
    databaseURL: "https://to-do-react-88789.firebaseio.com",
    projectId: "to-do-react-88789",
    storageBucket: "to-do-react-88789.appspot.com",
    messagingSenderId: "808295244064",
    appId: "1:808295244064:web:084a956f87fb7d8f523745",
    measurementId: "G-3MGP8E5N88"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;