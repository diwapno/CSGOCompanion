import { IonContent, IonHeader, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import MissionItem from '../components/MissionItem';
import './Home.css';

interface Mission {

  title: string;
  description?: string;
  stars?: number;
  selectedStars?: number;
}

const Home: React.FC = () => {
  const missions: Mission[] = [
    {
      title: "Mission 1",
      description: "whatever",
      stars: 1,
      selectedStars: 1
    },
    {
      title: "Mission 2",
      description: "whatever",
      stars: 3,
      selectedStars: 1
    },
    {
      title: "Mission 3",
      description: "whatever",
      stars: 1,
      selectedStars: 0
    },
    {
      title: "Mission 4",
      description: "whatever",
      stars: 3,
      selectedStars: 2
    },
    {
      title: "Mission 5",
      description: "whatever",
      stars: 3,
      selectedStars: 0
    },
    {
      title: "Mission 6",
      description: "whatever",
      stars: 3,
      selectedStars: 0
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
          {missions.map((mission) => <MissionItem title={mission.title} description={mission.description} missionStars={mission.stars} selectedStars={mission.selectedStars} />)}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
