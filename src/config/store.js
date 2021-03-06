import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import * as reducers from '../reducer/index';

const store = createStore(
  combineReducers(reducers),
  applyMiddleware(thunk)
);

export default store;
