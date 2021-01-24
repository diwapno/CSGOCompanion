import { IonCol, IonGrid, IonIcon, IonItem, IonLabel, IonRange, IonRow } from '@ionic/react';
import { star } from 'ionicons/icons'
import React from 'react';
import './MissionTrackerItem.css';

interface MissionItemProps {

    title?: string;
    description?: string;
    missionStars?: number;
    selectedStars?: number;
}
const MissionTrackerItem: React.FC<MissionItemProps> = (props) => {
    return (
        <div>
            <IonItem lines="none">
                <IonLabel>
                    <h2>{props.title}</h2>
                    <p>{props.description}</p>
                </IonLabel>
            </IonItem >
            <IonItem lines="none">
                <IonGrid style={{ paddingLeft: 32 }}>
                    <IonRow>
                        <IonCol>
                            <div className="ion-text-end">
                                {props.missionStars && props.missionStars === 3 &&
                                    <IonIcon className="star" icon={star}></IonIcon>
                                }
                            </div>
                        </IonCol>
                        <IonCol>
                            <div className="ion-text-end">
                                {props.missionStars && props.missionStars === 3 &&
                                    <IonIcon className="star" icon={star}></IonIcon>
                                }
                            </div>
                        </IonCol>
                        <IonCol>
                            <div className="ion-text-end">
                                <IonIcon className="star" icon={star}></IonIcon>
                                {props.missionStars && props.missionStars === 1 &&
                                    <IonIcon className="star" icon={star}></IonIcon>
                                }
                            </div>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonItem>
            <IonItem>
                <IonRange value={props.selectedStars} min={0} max={props.missionStars} step={1} snaps={true} ticks={false} mode='md' />
            </IonItem >
        </div >

    );
};

export default MissionTrackerItem;
