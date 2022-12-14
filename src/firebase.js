// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: process.env.REACT_APP_APIKEY,
	authDomain: process.env.REACT_APP_AUTHDOMAIN,
	projectId: process.env.REACT_APP_PROJECTID,
	storageBucket: process.env.REACT_APP_STORAGEBUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAGESENDERID,
	appId: process.env.REACT_APP_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();
const provider = new GoogleAuthProvider();
export { auth, db, provider };
