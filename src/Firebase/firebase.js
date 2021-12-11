import  firebase  from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {

  apiKey: "AIzaSyDiOe4zoViPzQ3iwZYnf8sQqUoCnGvvHCQ",

  authDomain: "tiendadeskincare.firebaseapp.com",

  projectId: "tiendadeskincare",

  storageBucket: "tiendadeskincare.appspot.com",

  messagingSenderId: "100062792484",

  appId: "1:100062792484:web:92e237beeebe9d677001b1",

  measurementId: "${config.measurementId}"

};


const app = firebase.initializeApp(firebaseConfig);

export default function getFirestore(){
    return firebase.firestore(app)
}