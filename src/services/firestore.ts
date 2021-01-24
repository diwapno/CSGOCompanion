import firebase from "firebase"
import { Mission } from "../models/Mission";

const firebaseConfig = {
    apiKey: "AIzaSyCSU72kVVfw1fMNShOO2F9TBC8F_iPJHxQ",
    authDomain: "csgo-companion-b27fd.firebaseapp.com",
    projectId: "csgo-companion-b27fd",
    storageBucket: "csgo-companion-b27fd.appspot.com",
    messagingSenderId: "785345144946",
    appId: "1:785345144946:web:71546476c953f555233aeb",
    measurementId: "G-N9LTVFRRVT"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export const getMissions = async () => {
    const querySnapshot = await db.collection("missions").get();
    return querySnapshot.docs.map((doc) => doc.data()) as Mission[];
}


// setMissions(querySnapshot.docs.map((doc) => doc.data()) as Mission[])