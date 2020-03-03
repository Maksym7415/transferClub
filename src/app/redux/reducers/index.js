import { combineReducers } from 'redux';

import ordersStore from './ordersStore';
import syncReducer from './syncReducer';

export default combineReducers({
  ordersStore,
  syncReducer,
});
