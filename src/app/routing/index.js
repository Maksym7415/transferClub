import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import useStyles from '../theme/styleTheme';

import App from '../App';
import Admin from './privateRouting/admin';
import AdminPage from '../pages/Admin';
import ClientPage from '../pages/client';
import Orders from '../pages/client/orders';

function Router(props) {
  return (
        <Fragment>
            <Switch>
            {/* <Route component = {App} fallBack = {'/56756'} path = '/'/> */}
            <Route component = {AdminPage} exact path = '/'/>
            <Route component = {ClientPage} exact path = '/client'/>
            <Route component = {Orders} exact path = '/client/orders'/>
            </Switch>
        </Fragment>
  );
}


export default Router;
