import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

import Featured from '../pages/Featured';
import Settings from '../pages/Settings';
import Archives from '../pages/Archives';


export default class Main extends Component {
  render() {
    return (
      <div className="App-main">

          <Switch>
            <Route exact path="/" component={Featured} />
            <Route path="/archives" component={Archives} />
            <Route path="/settings" component={Settings} />

          </Switch>
      </div>
    );
  }
}
