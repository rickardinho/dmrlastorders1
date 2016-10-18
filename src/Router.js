import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import WelcomeForm from './components/WelcomeForm';
import PubsNearbyList from './components/PubsNearbyList';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="landing">
        <Scene key="welcome" component={WelcomeForm} title="Welcome" />
      </Scene>

      <Scene key="main">
        <Scene
          key="pubsNearbyList"
          component={PubsNearbyList}
          title="Pubs Nearby"
          initial
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
