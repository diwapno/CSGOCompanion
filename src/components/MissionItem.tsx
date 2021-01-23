import { IonButton, IonCol, IonContent, IonGrid, IonIcon, IonInput, IonItem, IonLabel, IonProgressBar, IonRange, IonRow } from '@ionic/react';
import { star } from 'ionicons/icons'
import React from 'react';
import './MissionItem.css';

interface MissionItemProps {

    title?: string;
    description?: string;
    stars?: number;
}
const MissionItem: React.FC<MissionItemProps> = (props) => {
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
                                {props.stars && props.stars === 3 &&
                                    <IonIcon className="star" icon={star}></IonIcon>
                                }
                            </div>
                        </IonCol>
                        <IonCol>
                            <div className="ion-text-end">
                                {props.stars && props.stars === 3 &&
                                    <IonIcon className="star" icon={star}></IonIcon>
                                }
                            </div>
                        </IonCol>
                        <IonCol>
                            <div className="ion-text-end">
                                <IonIcon className="star" icon={star}></IonIcon>
                                {props.stars && props.stars === 1 &&
                                    <IonIcon className="star" icon={star}></IonIcon>
                                }
                            </div>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonItem>
            <IonItem>
                <IonRange min={0} max={props.stars} step={1} snaps={true} ticks={false} mode="md" />
            </IonItem >
        </div>

    );
};

export default MissionItem;
