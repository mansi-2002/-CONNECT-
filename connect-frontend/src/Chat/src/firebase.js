import firebase from "firebase";

const firebaseApp = firebase.initializeApp (
    {
        

    apiKey: "AIzaSyAeoudr94SFBVtpnvbdrAMqHjhu4CAExRo",
    authDomain: "connect-chat-app-56206.firebaseapp.com",
    projectId: "connect-chat-app-56206",
    storageBucket: "connect-chat-app-56206.appspot.com",
    messagingSenderId: "921474089002",
    appId: "1:921474089002:web:a674f5504db119a5c10353",
    measurementId: "G-3HDN23K01E"
  

    }
);

const db = firebaseApp.firestore()

export default db;