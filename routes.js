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
import Profile from'./handlers/Profile';
import Login from'./handlers/Login';
import Register from'./handlers/Register';
import StoriesOfHope from'./handlers/StoriesOfHope';
import FAQ from'./handlers/FAQ';
import WhyGiftCards from'./handlers/WhyGiftCards';
import About from'./handlers/About';

var routes = (
  <Route path="/" handler={App} >
    <DefaultRoute name="home" handler={Home} />
    <Route name="profile" handler={Profile} />
  	<Route name="login" handler={Login} />
  	<Route name="register" handler={Register} />
    <Route name="StoriesOfHope" path="stories" handler={StoriesOfHope} />
    <Route name="faq" handler={FAQ} />
    <Route name="WhyGiftCards" path="whygiftcards" handler={WhyGiftCards} />
    <Route name="About" path="about" handler={About} />
  	<NotFoundRoute handler={NotFound} />
  </Route>

);

export default routes;
