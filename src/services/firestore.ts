import firebase from "firebase";
import { Week } from "../models/Week";
import { AppContent } from "../models/AppContent";
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

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

export const getMissionsFromFirestore = async () => {
    // const querySnapshot = await db.collection("newMissions").get();
    // return querySnapshot.docs.map((doc) => doc.data()) as Week[];
    const querySnapshot = await db.collection("allForOne").doc("allForOne").get();

    return querySnapshot.get("weeks") as Week[] //map((data) => data.data()) as Week[];
}

export const getContentFromFirestore = async () => {
    // const querySnapshot = await db.collection("newMissions").get();
    // return querySnapshot.docs.map((doc) => doc.data()) as Week[];
    const querySnapshot = await db.collection("allForOne").doc("allForOne").get();

    return querySnapshot.data() as AppContent //map((data) => data.data()) as Week[];
}

export const getContentFromCache = async () => {
    const ret = await Storage.get({ key: 'content' });
    if (ret.value) {
        return JSON.parse(ret.value) as AppContent;
    }
    return null;
}

export const getMissionsFromCache = async () => {

    const ret = await Storage.get({ key: 'missions' });
    if (ret.value) {
        return JSON.parse(ret.value) as Week[];
    }
    return null;
}

export const setCachedMissions = async (weeks: Week[]) => {

    await Storage.set({
        key: 'missions',
        value: JSON.stringify(weeks),
    });
}

export const setCachedContent = async (appContent: AppContent) => {

    await Storage.set({
        key: 'content',
        value: JSON.stringify(appContent),
    });
}

// setMissions(querySnapshot.docs.map((doc) => doc.data()) as Mission[])