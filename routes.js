/** @flow */
import React from 'react';
import Router from 'react-router';

const {
  DefaultRoute,
  Route,
  NotFoundRoute,
} = Router;

import NotFound from './handlers/NotFound';
import App from './handlers/Base';
import Home from'./handlers/Home';
import About from'./handlers/About';
import Login from'./handlers/Login';
import Register from'./handlers/Register';
import Stories from'./handlers/Stories';
import FAQ from'./handlers/FAQ';

var routes = (
  <Route path="/" handler={App} >
    <DefaultRoute name="home" handler={Home} />
    <Route name="about" path="about" handler={About} />
  	<Route name="login" path="login" handler={Login} />
  	<Route name="register" path="register" handler={Register} />
    <Route name="stories" path="stories" handler={Stories} />
    <Route name="faq" path="faq" handler={FAQ} />
  	<NotFoundRoute handler={NotFound} />
    <Route name="assets" path="/assets"/>
  </Route>
  
);

export default routes;
