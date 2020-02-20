import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Vehicle from './Vehicle';
import Home from './Home';
// import FindReview from './FindReview';
import Review from './Review';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/vehicle' component={Vehicle} />
      <Route path='/review' component={Review} />
    </Switch>
  </main>
);

export default Main;