import { createStore } from 'redux';

import reducer from '../reducer/index';

const store = createStore(reducer.counter);

export default store;
