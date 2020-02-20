import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { NewReview } from './NewReview';
import Vehicle from './Vehicle';
import Home from './Home';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/vehicle' component={Vehicle} />
      <Route path='/review' component={NewReview} />
    </Switch>
  </main>
);

export default Main;