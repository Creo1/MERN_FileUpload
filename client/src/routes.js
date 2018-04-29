import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import NotFoundPage from './components/pages/not-found-page';
import Dashboard from './components/pages/dashboard';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Dashboard} />
    <Route path="dashboard" component={Dashboard} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
