import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Pages from './Pages';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Pages.Home} />
    <Route path="/signup" component={Pages.Signup} />
    <Route path="/login" component={Pages.Login} />
    <Route path="/profile" component={Pages.User} />
  </Switch>
);

export default Routes;
