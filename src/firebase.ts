import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCTOSQpdxX9xd1eqo3r9gToOcIUpGgcios",
  authDomain: "swatter-666.firebaseapp.com",
  projectId: "swatter-666",
  storageBucket: "swatter-666.appspot.com",
  messagingSenderId: "135979422755",
  appId: "1:135979422755:web:262bfdcc2cef41873e0d96",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
