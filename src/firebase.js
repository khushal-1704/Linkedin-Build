import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAtj0tMPd8jQYUyO9ZsALpBOrqoYlgbjqg",
    authDomain: "linkedin-bui.firebaseapp.com",
    projectId: "linkedin-bui",
    storageBucket: "linkedin-bui.appspot.com",
    messagingSenderId: "281489863497",
    appId: "1:281489863497:web:766ec125665fd01cde2098",
    measurementId: "G-5JKEK9NC9T"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth()

export { db, auth };
