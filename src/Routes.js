import React from 'react';
import {Switch, Route} from ‘react-router-dom’;
import Pages from './Pages';

const Routes = ({}) => (
  <Switch>
    <Route path="/" component={Pages.Home} />
    <Route path="/signup" component={Pages.Signup} />
    <Route path="/login" component={Pages.Login} />
  </Switch>
);

export default Routes;
