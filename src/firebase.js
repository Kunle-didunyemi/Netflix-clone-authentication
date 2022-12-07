
import {getApp, getApps, initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import { getAuth } from "firebase/auth";
// import { getStorage } from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyDZatmKZ19ILeffD0QDrz_ySiCrtKNRK_0",
    authDomain: "netflix-build-153dd.firebaseapp.com",
    projectId: "netflix-build-153dd",
    storageBucket: "netflix-build-153dd.appspot.com",
    messagingSenderId: "25297132801",
    appId: "1:25297132801:web:5081f67b812e73583c8f00"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);

  export {auth};
  export default db;