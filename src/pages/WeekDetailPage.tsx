import React, { useContext, useEffect } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonBackButton, IonButtons, IonList } from '@ionic/react'
import { RouteComponentProps } from 'react-router';
import MissionInfoItem from '../components/MissionInfoItem';
import { MissionsContext } from '../models/MissionsContext';

interface WeekDetailPageProps extends RouteComponentProps<{
    id: string;
}> { }

const WeekDetailPage: React.FC<WeekDetailPageProps> = ({ match }) => {

    const context = useContext(MissionsContext);

    useEffect(() => {

        context.fetchWeeks(false);
    }, [context])

    const week = context.weeks[Number(match.params.id) - 1];

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/:tab(allmissions)" text="" />
                    </IonButtons>
                    <IonTitle>{ }</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Week {match.params.id} - {week && week.name}</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonList className="center">
                    {week && week.missions.map((mission) => <MissionInfoItem key={mission.title}
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