import { IonContent, IonHeader, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import MissionInfoItem from '../components/MissionInfoItem';
import './LatestPage.css';
import { Mission } from '../models/Mission';
import { getMissions } from '../services/firestore';
import { getWeekMissions } from '../services/firestore';


const LatestPage: React.FC = () => {
  const [missions, setMissions] = useState<Mission[]>([]);

  useEffect(() => {

    loadData();
  }, [])

  const loadData = async () => {

    //set loading true error false
    try {
      const response = await getWeekMissions(1);
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
          <IonTitle>CSGO Pet</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">CSGO Pet</IonTitle>
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

export default LatestPage;
