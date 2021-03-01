import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCvlA3b8KJzjoKcEzsTZOflezy-fzUIlGI",
    authDomain: "chat-app-1c81d.firebaseapp.com",
    projectId: "chat-app-1c81d",
    storageBucket: "chat-app-1c81d.appspot.com",
    messagingSenderId: "679950743996",
    appId: "1:679950743996:web:8ff94591eca62b8f1f53b9"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebaseApp.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };