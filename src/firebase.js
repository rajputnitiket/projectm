
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

import 'firebase/database';



const firebaseConfig = {
    apiKey: "AIzaSyA2dHpJXqfTDJSgE48Q_Xm98GZsDgnOs84",
    authDomain: "projectm-3f33b.firebaseapp.com",
    projectId: "projectm-3f33b",
    storageBucket: "projectm-3f33b.appspot.com",
    messagingSenderId: "1055116805975",
    appId: "1:1055116805975:web:6fbce320cfe37470ba2012",

};


export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const dbref = ref(database, 'server/saving-data/user_input');
export const statesRef = ref(database, 'states');


export const districtsRef = ref(database, 'districts');


