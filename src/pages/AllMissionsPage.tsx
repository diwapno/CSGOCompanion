import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import './AllMissionsPage.css';
import { Week } from '../models/Week';
import { getWeeks } from '../services/firestore';


const AllMissionsPage: React.FC = () => {
    const [weeks, setWeeks] = useState<Week[]>([]);

    useEffect(() => {

        loadData();
    }, [])

    const loadData = async () => {

        //set loading true error false
        try {
            const response = await getWeeks();
            setWeeks(response);
        } catch (error) {
            //Set Error state
        }
        //set loading files
    }

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

                    {weeks.map((week) => week.week > 0 &&
                        <IonItem type="button" routerLink={`/allmissions/${week.week.toString()}`} detail={true}>
                            <IonLabel>
                                <h2>Week {week.week} - {week.title}</h2>
                            </IonLabel>
                        </IonItem>
                    )}
                </IonList>
            </IonContent>
        </IonPage >
    );
};

export default AllMissionsPage;