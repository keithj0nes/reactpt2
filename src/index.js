import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Link, Switch } from "react-router-dom";
import './index.css';
import App from './App';
import Featured from './pages/Featured';
import Settings from './pages/Settings';
import Archives from './pages/Archives';

import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));


// ReactDOM.render(
//   <BrowserRouter>
//     <div>
//       <Route exact path="/" component={App} >
//       <Route path="/" component={Featured} />
//       <Route path="/archives" component={Archives} />
//       <Route path="/settings" component={Settings} />
//       </Route>
//     </div>
//   </BrowserRouter>
//
//   , document.getElementById('root'));


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>

  , document.getElementById('root'));

registerServiceWorker();
