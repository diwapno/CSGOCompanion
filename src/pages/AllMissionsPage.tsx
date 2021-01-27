import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonNav, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import MissionInfoItem from '../components/MissionInfoItem';
import './AllMissionsPage.css';
import { Mission } from '../models/Mission';
import { getMissions } from '../services/firestore';
import { getWeekMissions } from '../services/firestore';


const AllMissionsPage: React.FC = () => {
    const [missions, setMissions] = useState<Mission[]>([]);

    useEffect(() => {

        loadData();
    }, [])

    const loadData = async () => {

        //set loading true error false
        try {
            const response = await getMissions();
            setMissions(response);
        } catch (error) {
            //Set Error state
        }
        //set loading files
    }

    function getWeeks() {

        var weeksNumber: number[] = [0];

        missions.forEach(mission => {
            if (!(weeksNumber.indexOf(mission.week) > -1)) {
                weeksNumber.push(mission.week);
            }
        });

        return weeksNumber;
    }

    const weeks = getWeeks();

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>All Missions</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">All Missions</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonList className="center">

                    {weeks.map((weeksNumber) => weeksNumber > 0 &&
                        <IonItem type="button" routerLink={`/allmissions/${weeksNumber.toString()}`} >
                            <IonLabel>
                                <h1>Week {weeksNumber}</h1>
                            </IonLabel>
                        </IonItem>
                    )}
                </IonList>
            </IonContent>
        </IonPage >
    );
};

export default AllMissionsPage;