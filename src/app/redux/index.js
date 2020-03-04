import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import reducers from './reducers';
import actionToken from './actions/actionToken';

const store = createStore(
  reducers,
  applyMiddleware(thunk),
);
// store.subscribe(() => console.log(store.getState()));
if (localStorage.authToken) store.dispatch(actionToken(localStorage.authToken, 'token'));


export default store;
