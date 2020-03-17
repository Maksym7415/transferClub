import { combineReducers } from 'redux';

import promiseReducer from './promiseReducer';
import syncReducer from './syncReducer';

export default combineReducers({
  promiseReducer,
  syncReducer,
});
