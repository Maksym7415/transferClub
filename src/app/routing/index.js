import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import App from '../App';
import Admin from './privateRouting/admin';

function Router(props) {
  return (
         <Fragment>
	         <Switch>
              <Route component = {App} fallBack = {'/56756'} path = '/'/>
	         </Switch>
         </Fragment>
  );
}


export default Router;
