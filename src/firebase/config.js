// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDd02I_Z-a7XEKZsyACNHj3Th4_NqfDcjw",
	authDomain: "tuesdays-b42c0.firebaseapp.com",
	projectId: "tuesdays-b42c0",
	storageBucket: "tuesdays-b42c0.appspot.com",
	messagingSenderId: "517593692436",
	appId: "1:517593692436:web:1b9b337ceeeba5587daa01",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app)

