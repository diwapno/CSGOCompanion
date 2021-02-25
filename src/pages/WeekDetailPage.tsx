import React, { useContext, useEffect } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonBackButton, IonButtons, IonList, IonListHeader } from '@ionic/react'
import { RouteComponentProps } from 'react-router';
import MissionInfoItem from '../components/MissionInfoItem';
import { MissionsContext } from '../models/MissionsContext';

interface WeekDetailPageProps extends RouteComponentProps<{
    id: string;
}> { }

const WeekDetailPage: React.FC<WeekDetailPageProps> = ({ match }) => {

    const context = useContext(MissionsContext);

    useEffect(() => {

        context.fetchContent(false);
    }, [context])

    const week = context.appContent.weeks[Number(match.params.id) - 1];

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/allmissions" text="" />
                    </IonButtons>
                    <IonTitle>Week {match.params.id}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Week {match.params.id}</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonList className="center">
                    <IonListHeader>{week && week.name}</IonListHeader>
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