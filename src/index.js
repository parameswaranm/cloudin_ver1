import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import App from './App';
import Store from './store/Context';

ReactDOM.render(
  <Store>
    <HashRouter>
      <App />
    </HashRouter>
  </Store>,
  document.getElementById('root')
);
