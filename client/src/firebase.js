// Import the functions you need from the SDKs you need
import firebase from "firebase"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiCbdR8qXbduAKEcS59DwABVvgN0wl8FM",
  authDomain: "maersk-interview.firebaseapp.com",
  projectId: "maersk-interview",
  storageBucket: "maersk-interview.appspot.com",
  messagingSenderId: "584696989987",
  appId: "1:584696989987:web:4f172b9b636fab59662496",
}


const firebaseApp = firebase.initializeApp(firebaseConfig);

const storage = firebaseApp.storage();

export default storage;
