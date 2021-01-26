import { IonCol, IonGrid, IonIcon, IonItem, IonLabel, IonRow } from '@ionic/react';
import { star } from 'ionicons/icons'
import React from 'react';
import { Mission } from '../models/Mission';
import './MissionTrackerItem.css';

const MissionInfoItem: React.FC<Mission> = (props) => {

    function textPadding(number: number) {

        if (number > 9) {
            return 3;
        } else {
            return 6;
        }
    }

    return (
        <div>
            <IonItem lines="none">
                <IonLabel>
                    <h2>{props.title}</h2>
                    <p>{props.description}</p>
                </IonLabel>
            </IonItem >
            <IonItem>
                <IonGrid style={{ paddingLeft: 32 }}>
                    <IonRow>
                        <IonCol>
                            <div className="ion-text-end">
                                {props.stars && props.stars === 3 &&
                                    <div>
                                        <IonIcon className="star" icon={star}></IonIcon>
                                        <IonLabel style={{ paddingRight: textPadding(props.step1) }}><p>{props.step1}</p></IonLabel>
                                    </div>
                                }
                            </div>
                        </IonCol>
                        <IonCol>
                            <div className="ion-text-end">
                                {props.stars && props.step2 && props.stars === 3 &&
                                    <div>
                                        <IonIcon className="star" icon={star}></IonIcon>
                                        <IonLabel style={{ paddingRight: textPadding(props.step2) }}><p>{props.step2}</p></IonLabel>
                                    </div>
                                }
                            </div>
                        </IonCol>
                        <IonCol>
                            <div className="ion-text-end">
                                <IonIcon className="star" icon={star}></IonIcon>
                                {props.stars && props.stars === 1
                                    ?
                                    <><IonIcon className="star" icon={star}></IonIcon>
                                        <IonLabel style={{ paddingRight: (textPadding(props.step1) + 10) }}><p>{props.step1}</p></IonLabel></>
                                    : props.step3 && <IonLabel style={{ paddingRight: (textPadding(props.step3)) }}><p>{props.step3}</p></IonLabel>
                                }

                            </div>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonItem>
        </div >

    );
};

export default MissionInfoItem;