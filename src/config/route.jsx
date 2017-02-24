// 'use strict';

import React from 'react';
import ReactDom from 'react-dom';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import store from './store';

import app from '../components/app';
import index from '../components/index';
import Explore from '../components/explore';
import Info from '../components/info';
import Topic from '../components/topic';
import Signin from '../components/signin';
import Search from '../components/search/search';
import Newdeck from '../components/newdeck/newdeck';

// import Signin from './signin';

// 最终渲染
ReactDom.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={app}>
        <IndexRoute component={index} />
        <Route path="topic" component={Topic} />
        <Route path="explore" component={Explore} />
        <Route path="info" component={Info} />
        <Route path="signin" component={Signin} />
        <Route path="search" component={Search} />
        <Route path="newdeck" component={Newdeck} />
      </Route>
    </Router>
  </Provider>
, document.getElementById('app'));
