import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Container from './components/Container';
import AboutUs from './components/pages/company/AboutUs';
import ContactUs from './components/pages/company/ContactUs';
import Investor from './components/pages/company/Investor';
import OurTeam from './components/pages/company/OurTeam';
import Portfolio from './components/pages/company/Portfolio';
import NotFound from './components/pages/PageNotFound';
import Pricing from './components/pages/policies/Pricing';
import Privacy from './components/pages/policies/Privacy';
import Refund from './components/pages/policies/Refund';
import TnC from './components/pages/policies/TnC';
import ECamp from './components/pages/products/ECamp';
import Finjo from './components/pages/products/Finjo';
import Inventory from './components/pages/products/Inventory';
import MrBusiness from './components/pages/products/MrBusiness';
import ArtificialIntelligence from './components/pages/services/ArtificialIntelligence';
import AWSnAzure from './components/pages/services/AWSnAzure';
import Blockchain from './components/pages/services/Blockchain';
import ChatBot from './components/pages/services/ChatBot';
import ITConsulting from './components/pages/services/ITConsulting';
import MLnNLP from './components/pages/services/MLnNLP';
import MobileApp from './components/pages/services/MobileApp';
import ReactDev from './components/pages/services/React';
import Services from './components/pages/services/Services';
import UxUi from './components/pages/services/UxUi';
import VirtualAssistant from './components/pages/services/VirtualAssistant';
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
        <Route path="/contactus" exact>
          <ContactUs />
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
        <Route path="/services" exact>
          <Services />
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
        <Route path="/react" exact>
          <ReactDev />
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
        <Route path="/virtualAssist" exact>
          <VirtualAssistant />
        </Route>
        <Route path="/tc" exact>
          <TnC />
        </Route>
        <Route path="/refund" exact>
          <Refund />
        </Route>
        <Route path="/privacy" exact>
          <Privacy />
        </Route>
        <Route path="/pricing" exact>
          <Pricing />
        </Route>

        <Route path="/inventory" exact>
          <Inventory />
        </Route>

        <Route path="/mrBusiness" exact>
          <MrBusiness />
        </Route>

        <Route path="/finjo" exact>
          <Finjo />
        </Route>

        <Route path="/eCamp" exact>
          <ECamp />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}
export default App;
