import { IonContent, IonHeader, IonList, IonListHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useContext, useEffect } from 'react';
import MissionInfoItem from '../components/MissionInfoItem';
import './LatestPage.css';
import { MissionsContext } from '../models/MissionsContext';




const LatestPage: React.FC = () => {
  const context = useContext(MissionsContext);

  useEffect(() => {

    context.fetchWeeks(false);
  }, [context])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Latest</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Latest</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList className="center">
          <IonListHeader>This Week Missions</IonListHeader>
          {context.weeks.length > 0 && context.weeks[context.weeks.length - 1].missions.map((mission) => <MissionInfoItem key={mission.title}
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
