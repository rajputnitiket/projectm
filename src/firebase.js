
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyA2dHpJXqfTDJSgE48Q_Xm98GZsDgnOs84",
    authDomain: "projectm-3f33b.firebaseapp.com",
    projectId: "projectm-3f33b",
    storageBucket: "projectm-3f33b.appspot.com",
    messagingSenderId: "1055116805975",
    appId: "1:1055116805975:web:6fbce320cfe37470ba2012",
    databaseURL: "https://console.firebase.google.com/project/projectm-3f33b/database/projectm-3f33b-default-rtdb/data/~2F"
};


export const app = initializeApp(firebaseConfig);