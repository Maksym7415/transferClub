import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import App from '../App';
import Admin from './privateRouting/admin';
import AdminPage from '../pages/Admin';

function Router(props) {
  return (
        <Fragment>
            <Switch>
            {/* <Route component = {App} fallBack = {'/56756'} path = '/'/> */}
            <Route component = {AdminPage} path = '/'/>
            </Switch>
        </Fragment>
  );
}


export default Router;
