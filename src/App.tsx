import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import LatestPage from './pages/LatestPage';
import { MissionsContextProvider } from './models/MissionsContext';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { informationCircle, calendar, time } from 'ionicons/icons';
import AllMissionsPage from './pages/AllMissionsPage';
import WeekDetailPage from './pages/WeekDetailPage';
import AboutPage from './pages/AboutPage';

const App: React.FC = () => {

  return (
    <IonApp>
      <MissionsContextProvider>
        <IonReactRouter>
          <IonTabs>
            <IonRouterOutlet>
              <Route path="/:tab(latest)" component={LatestPage} exact={true} />
              <Route path="/:tab(allmissions)" component={AllMissionsPage} exact={true} />
              <Route path="/:tab(allmissions)/:id" component={WeekDetailPage} />
              <Route path="/:tab(about)" component={AboutPage} />
              <Route exact path="/" render={() => <Redirect to="/latest" />} />
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
              <IonTabButton tab="latest" href="/latest" key="latest">
                <IonIcon icon={time} />
                <IonLabel>Latest</IonLabel>
              </IonTabButton>

              <IonTabButton tab="allmissions" href="/allmissions" key="allmissions">
                <IonIcon icon={calendar} />
                <IonLabel>All Missions</IonLabel>
              </IonTabButton>

              <IonTabButton tab="about" href="/about" key="about">
                <IonIcon icon={informationCircle} />
                <IonLabel>About</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonReactRouter>
      </MissionsContextProvider>
    </IonApp>
  )
};

export default App;
