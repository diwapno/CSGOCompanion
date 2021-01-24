import { IonContent, IonHeader, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import MissionTrackerItem from '../components/MissionTrackerItem';
import './Home.css';
import { Mission } from '../models/Mission';
import { getMissions } from '../services/firestore';

const Home: React.FC = () => {
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
          {missions.map((mission) => <MissionTrackerItem key={mission.title} title={mission.title} description={mission.description} missionStars={mission.stars} selectedStars={mission.selectedStars ?? 0} />)}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
