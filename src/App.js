import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Container from './components/Container';
import AboutUs from './components/pages/company/AboutUs';
import Investor from './components/pages/company/Investor';
import OurTeam from './components/pages/company/OurTeam';
import Portfolio from './components/pages/company/Portfolio';
import NotFound from './components/pages/PageNotFound';
import ArtificialIntelligence from './components/pages/services/ArtificialIntelligence';
import AWSnAzure from './components/pages/services/AWSnAzure';
import Blockchain from './components/pages/services/Blockchain';
import ChatBot from './components/pages/services/ChatBot';
import ITConsulting from './components/pages/services/ITConsulting';
import MLnNLP from './components/pages/services/MLnNLP';
import MobileApp from './components/pages/services/MobileApp';
import UxUi from './components/pages/services/UxUi';
import WebDevelopment from './components/pages/services/WebDevelopment';
import Layout from './components/plugins/Layout';

import './App.css';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home" exact>
          <Container />
        </Route>
        <Route path="/aboutus" exact>
          <AboutUs />
        </Route>
        <Route path="/ourteam" exact>
          <OurTeam />
        </Route>
        <Route path="/investor" exact>
          <Investor />
        </Route>
        <Route path="/portfolio" exact>
          <Portfolio />
        </Route>
        <Route path="/ai" exact>
          <ArtificialIntelligence />
        </Route>
        <Route path="/mLnNLP" exact>
          <MLnNLP />
        </Route>
        <Route path="/blockchain" exact>
          <Blockchain />
        </Route>
        <Route path="/chatBot" exact>
          <ChatBot />
        </Route>
        <Route path="/aWSnAzure" exact>
          <AWSnAzure />
        </Route>
        <Route path="/iTConsulting" exact>
          <ITConsulting />
        </Route>
        <Route path="/mobileApp" exact>
          <MobileApp />
        </Route>
        <Route path="/webApp" exact>
          <WebDevelopment />
        </Route>
        <Route path="/uiux" exact>
          <UxUi />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}
export default App;
