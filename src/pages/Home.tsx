import { IonContent, IonHeader, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { attachProps } from '@ionic/react/dist/types/components/utils';
import React from 'react';
import MissionItem from '../components/MissionItem';
import './Home.css';

interface Mission {

  title: string;
  description?: string;
  stars?: number;
}

const Home: React.FC = () => {
  const missions: Mission[] = [
    {
      title: "Mission 1",
      description: "whatever",
      stars: 1
    },
    {
      title: "Mission 2",
      description: "whatever",
      stars: 3
    },
    {
      title: "Mission 3",
      description: "whatever",
      stars: 1
    },
    {
      title: "Mission 4",
      description: "whatever",
      stars: 1
    },
    {
      title: "Mission 5",
      description: "whatever",
      stars: 3
    },
    {
      title: "Mission 6",
      description: "whatever",
      stars: 3
    },];


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>CSGO Companion</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">CSGO Companion</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          {missions.map((mission) => <MissionItem title={mission.title} description={mission.description} stars={mission.stars} />)}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
