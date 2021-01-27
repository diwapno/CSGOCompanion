import React, { useEffect, useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonBackButton, IonButtons, IonList } from '@ionic/react'
import { RouteComponentProps } from 'react-router';
import MissionInfoItem from '../components/MissionInfoItem';
import { Mission } from '../models/Mission';
import { getWeekMissions } from '../services/firestore';
import { getWeekTitle } from '../services/firestore';

interface WeekDetailPageProps extends RouteComponentProps<{
    id: string;
}> { }

const WeekDetailPage: React.FC<WeekDetailPageProps> = ({ match }) => {
    const [missions, setMissions] = useState<Mission[]>([]);
    const [weekTitle, setWeekTitle] = useState<String>();

    useEffect(() => {

        loadData();
    })

    const loadData = async () => {
        //set loading true error false
        try {
            const response = await getWeekMissions(Number(match.params.id));
            const weekResponse = await getWeekTitle(Number(match.params.id));
            setMissions(response);
            setWeekTitle(weekResponse?.title);
        } catch (error) {
            //Set Error state
        }
        //set loading files
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/:tab(allmissions)" text="" />
                    </IonButtons>
                    <IonTitle>{weekTitle}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Week {match.params.id} - {weekTitle}</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonList className="center">
                    {missions.map((mission) => <MissionInfoItem key={mission.title}
                        title={mission.title}
                        description={mission.description}
                        stars={mission.stars}
                        step1={mission.step1}
                        step2={mission.step2}
                        step3={mission.step3}
                        week={mission.week}
                        selectedStars={mission.selectedStars ?? 0} />)}
                </IonList>
            </IonContent>
        </IonPage >
    );
};

export default WeekDetailPage;