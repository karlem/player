import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/app';
import HomePage from './containers/home-page';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
  </Route>
);
