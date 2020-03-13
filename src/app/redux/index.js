import { createStore, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';
import reducers from './reducers';
import actionToken from './actions/actionToken';
import actionLanguage from './actions/actionLanguage';

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);
// store.dispatch(actionLanguage('ru', 'lang'));
// store.subscribe(() => console.log(store.getState()));
if (localStorage.authToken) store.dispatch(actionToken(localStorage.authToken, 'token'));


export default store;
