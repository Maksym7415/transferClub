import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import useStyles from '../pages/client/styles';

import App from '../App';
import Admin from './privateRouting/admin';
import AdminPage from '../pages/Admin';
import ClientPage from '../pages/client';

function Router(props) {
  return (
        <Fragment>
          <ThemeProvider>
            <Switch>
            {/* <Route component = {App} fallBack = {'/56756'} path = '/'/> */}
            <Route component = {AdminPage} path = '/'/>
            <Route component = {ClientPage} path = '/client'/>
            </Switch>
            </ThemeProvider>
        </Fragment>
  );
}


export default Router;
