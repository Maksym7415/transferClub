import { combineReducers } from 'redux';

import promiseStore from './promiseStore';
import syncReducer from './syncReducer';

export default combineReducers({
  promiseStore,
  syncReducer,
});
