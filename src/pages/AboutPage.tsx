import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { cash, codeWorking, peopleCircle, pizza } from 'ionicons/icons';
import './LatestPage.css';
import React from 'react';


const AboutPage: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>About</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">About</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonCard mode="ios" className="center">
                    <IonCardHeader>
                        <IonCardSubtitle><div>
                            SMALL PROJECT
                            <IonIcon icon={codeWorking} slot="start" style={{ paddingLeft: 5 }} />
                        </div></IonCardSubtitle>
                        <IonCardTitle>CSGO Pet</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        CSGO Pet is meant to help you following CSGO operations, starting with the most recent one: Broken Fang.
                        <br />
                        This is a "pet" project that might evolve over time and might support more information than just operations
                    </IonCardContent>
                </IonCard>
                <IonCard mode="ios" className="center">
                    <IonCardHeader>
                        <IonCardSubtitle>
                            <div>WHAT LED ME HERE
                                        <IonIcon icon={pizza} slot="start" style={{ paddingLeft: 5 }} />
                            </div>
                        </IonCardSubtitle>
                        <IonCardTitle>Motivation</IonCardTitle>
                    </IonCardHeader>

                    <IonCardContent>
                        During this operation, I wanted to be able to quickly check what would be the missions for the week.
                        <br />
                        After some tries to find them, I found out that there was no "beautiful" display of them. So I decided to create my own and learn some
                        new technologies along the way.
                    </IonCardContent>
                </IonCard>
                <IonCard mode="ios" className="center">
                    <IonCardHeader>
                        <IonCardSubtitle>
                            <div>HELPFUL HANDS
                                <IonIcon icon={peopleCircle} slot="start" style={{ paddingLeft: 5 }} />
                            </div>
                        </IonCardSubtitle>
                        <IonCardTitle>Contributor</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        Thanks for the help! Without you, this project wouldn't have gotten this far so "early".
                        <br />
                        Lucas Cardinali, thanks again and again!
                    </IonCardContent>
                </IonCard>
                <IonCard mode="ios" className="center">
                    <IonCardHeader>
                        <IonCardSubtitle>
                            <div>HOW CAN YOU HELP
                                        <IonIcon icon={cash} slot="start" style={{ paddingLeft: 5 }} />
                            </div>
                        </IonCardSubtitle>
                        <IonCardTitle>If You Wish To Donate</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent className="ion-text-center">
                        Please follow the link to my PayPal
                        <br />
                        <IonButton fill="outline" href="https://paypal.me/rubenmagina">DONATE</IonButton>
                    </IonCardContent>
                </IonCard>
                <br />
            </IonContent>
        </IonPage >
    );
};

export default AboutPage;
