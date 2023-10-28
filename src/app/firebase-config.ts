import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBTrLIX5ssz_ly_RAzpP7mcrj3j4mz9QbI",
  authDomain: "ybet-85530.firebaseapp.com",
  databaseURL: "https://ybet-85530-default-rtdb.firebaseio.com",
  projectId: "ybet-85530",
  storageBucket: "ybet-85530.appspot.com",
  messagingSenderId: "214318912231",
  appId: "1:214318912231:web:cbc0ea343068c458db0842",
  measurementId: "G-VEC3FVHFJ1"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);