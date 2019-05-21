import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Historico from './Historico'
import { BrowserRouter, Route, HashRouter, Switch  } from 'react-router-dom';

ReactDOM.render((
  
    <BrowserRouter history={HashRouter}>
              <Route exact={true} path="/" component={App}/>
              <Route path="/historico" component={Historico}/>
    </BrowserRouter>
    
    ), document.getElementById('root'));
serviceWorker.unregister();

