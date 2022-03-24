// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAllLhrvCUQkY8psPTYpYqHwHu2qv2rHxY",
  authDomain: "pixy-web-app.firebaseapp.com",
  projectId: "pixy-web-app",
  storageBucket: "pixy-web-app.appspot.com",
  messagingSenderId: "761950794640",
  appId: "1:761950794640:web:17c21a5831b449010c7915"
};

const app = initializeApp(firebaseConfig);

export default function getFirestoreApp(){
    return app
}