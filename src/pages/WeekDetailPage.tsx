import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonBackButton, IonButtons } from '@ionic/react'
import { RouteComponentProps } from 'react-router';

interface WeekDetailPageProps extends RouteComponentProps<{
    id: string;
}> { }

const WeekDetailPage: React.FC<WeekDetailPageProps> = ({ match }) => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton />
                    </IonButtons>
                    <IonTitle>Week</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <br />
        Week {match.params.id}
            </IonContent>
        </IonPage>
    );
};

export default WeekDetailPage;