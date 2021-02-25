import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useContext, useEffect } from 'react';
import './AllMissionsPage.css';
import { MissionsContext } from '../models/MissionsContext';


const AllMissionsPage: React.FC = () => {
    const context = useContext(MissionsContext);

    useEffect(() => {

        context.fetchContent(false);
    }, [context])

    // const loadData = async () => {

    //     const weeks = await getMissionsFromFirestore();
    //     context.setWeeks(weeks);
    // };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>All Missions</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">All Missions</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonList className="center">

                    {context.appContent.weeks.map((week) =>
                        <IonItem type="button" routerLink={`/allmissions/${week.number.toString()}`} detail={true} key={week.name}>
                            <IonLabel>
                                <h2>Week {week.number} - {week.name}</h2>
                            </IonLabel>
                        </IonItem>
                    )}
                </IonList>
            </IonContent>
        </IonPage >
    );
};

export default AllMissionsPage;