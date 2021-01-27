import firebase from "firebase"
import { Mission } from "../models/Mission";
import { Week } from "../models/Week";

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

export const getWeekMissions = async (week: number) => {
    const querySnapshot = await db.collection("missions").where("week", "==", week).get();
    return querySnapshot.docs.map((doc) => doc.data()) as Mission[];
}

export const getWeeks = async () => {
    const querySnapshot = await db.collection("weeks").get();
    return querySnapshot.docs.map((doc) => doc.data()) as Week[];
}

export const getWeekTitle = async (week: number) => {
    const querySnapshot = await db.collection("weeks").where("week", "==", week).get();
    const possibleWeeks = querySnapshot.docs.map((doc) => doc.data()) as Week[];
    return possibleWeeks.pop();
}
// setMissions(querySnapshot.docs.map((doc) => doc.data()) as Mission[])