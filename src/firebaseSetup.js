import firebase from 'firebase/app'; 
import 'firebase/firestore'; 

const firebaseConfig = firebase.initializeApp({
	apiKey: "AIzaSyAZQam9oRtNn9v1EsLqlhPXECBrHAoxGos",
    authDomain: "todolist-62227.firebaseapp.com",
    databaseURL: "https://todolist-62227.firebaseio.com",
    projectId: "todolist-62227",
    storageBucket: "todolist-62227.appspot.com",
    messagingSenderId: "165716162321",
    appId: "1:165716162321:web:ed8228c59616ab2c267eb0",
    measurementId: "G-6FY9JJ4WKS"
}); 

export {firebaseConfig as firebaseSetup}; 